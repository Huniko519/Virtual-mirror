$(document).ready(function(){
    /*------- Frame Settings -------*/

    // Make Frame Draggable
    $('.draggable').draggable();

    // Make Frame Resizable
    $('.resizable').resizable({
        aspectRatio: true,
        handles: 'ne, se, sw, nw'
    });

    // Make Frame Rotatable
    $('.resizable').parent().rotatable();

    // Show Hide Resize/Rotate options when clicked on the frame image
    $('.frame, .the-face .face').click(function(event) {
        $('.frame .ui-resizable-handle, .frame .ui-rotatable-handle').toggleClass('clearTool');
    });

    /*------- Photo Selection Methods Settings -------*/

    // Toggle Photo selections methods
    $(".input-types-wrapper a").click(function(){
        var this_class = $(this).attr("class");

        $(".input-types-wrapper a").removeClass("active");
        $(this).addClass("active");

        $(".input-common-class").hide();
        if(this_class=="input-sample" || this_class=="input-sample active"){
            $(".sample-images-wrapper").show();
        }
        else
        if(this_class=="input-upload" || this_class=="input-upload active"){
            $(".upload-photo-wrapper").show();  
        }
        else
        if(this_class=="input-webcam" || this_class=="input-webcam active"){
            // Apply Webcam Settings and Load Webcam Control
            $(".frame").hide();
            $(".the-face .face").html('<div id="camera"></div>');

            $("#camera").webcam({
                width: 250,
                height: 250,
                mode: "save",
                swffile: "js/vendor/webcam/jscam.swf",
                onTick: function(remain) {
                    if (0 == remain) {
                        $("#webcam-status").text("Cheese!");
                        $(".flash").fadeIn("fast");
                        $(".flash").fadeOut("fast");
                    } else {
                        $("#webcam-status").text(remain + " seconds remaining...");
                    }
                },
                onCapture: function() {
                    webcam.save('upload.php?action=upload_webcam');
                },
                onSave: function(data) {
                    $(".the-face .face").html('<img src="tmp_files/webcam-upload.jpg" alt="">');
                    $(".frame").show();
                },
                debug: function (type, string) {
                },
                onLoad: function() {}
            });
            $(".webcam-photo-wrapper").show();
        }

        return false;
    });


    /*------- Sample Images Settings -------*/

    //  Apply Image Scroller for Sample images
    $('.sample-images-male').carouFredSel({
        auto: false,
        prev: '.prev-male',
        next: '.next-male',
        scroll : {
            items           : 1,
            duration        : 200,                        
            pauseOnHover    : true
        }      
    });

    $('.sample-images-female').carouFredSel({
        auto: false,
        prev: '.prev-female',
        next: '.next-female',
        scroll : {
            items           : 1,
            duration        : 200,                        
            pauseOnHover    : true
        }      
    });

	// Toggle Male Female
	$('#female-selector').hide();
	$(".gender-selector a").click(function(){
		$(".gender-selector a").removeClass("active");
		$(this).addClass("active");

		var selected_val = $(this).html();
		if(selected_val=='Male'){
			$('#female-selector').hide(); $('#male-selector').show();
		}
		else{
			$('#male-selector').hide(); $('#female-selector').show();
		}

		return false;
	});

    /*------- Face Image Container Settings -------*/

	// Toggle face images in face container
	$(".toggle-face").click(function(){
		var this_face = $(this).html();
		$(".the-face .face").html(this_face);

		return false;
	})

	// Capture Photo
	$(".mirror-wrapper .the-tools .webcam-photo-wrapper .capture-btn").click(function(){
		webcam.capture(3);
		return false;
	});

    /*------- File Uploader Settings -------*/

    // File uploader logic
    if($("#thumbnail_uploadfiles").length>0) {
        $("#thumbnail_uploadfiles").hide();
        $("#thumbnail_cancelfiles").hide();
        $("#thumbnail_removefiles").hide();
        
        var uploader = new plupload.Uploader({
            runtimes : 'gears,html5,flash,silverlight,browserplus',
            browse_button : 'thumbnail_pickfiles',
            container : 'thumbnail_container',
            max_file_size : '5mb',
            multi_selection : false,
            url : 'upload.php?action=upload_thumbnail',
            flash_swf_url : 'js/vendor/plupload/plupload.flash.swf',
            silverlight_xap_url : 'js/vendor/plupload/plupload.silverlight.xap',
            filters : [
                { title : "Image files", extensions : "jpg, png" }
            ]
        });

        uploader.bind('Init', function(up, params) {
            //$('#filelist').html("<div>Current runtime: " + params.runtime + "</div>");
        });
        
        $('#thumbnail_uploadfiles').click(function(e) {
            uploader.start();
            e.preventDefault();
        });
        
        uploader.init();

        uploader.bind('FilesAdded', function(up, files) {
            $.each(files, function(i, file) {
                $('#thumbnail_filelist').html(
                    '<div id="' + file.id + '">' +
                    file.name + ' (' + plupload.formatSize(file.size) + ') <b></b>' +
                '</div>');
            });
            $("#thumbnail_uploadfiles").show();
            $("#thumbnail_cancelfiles").show();
            $("#thumbnail_pickfiles").hide();
            up.refresh(); // Reposition Flash/Silverlight
        });

        uploader.bind('UploadProgress', function(up, file) {
            $('#' + file.id + " b").html(file.percent + "%");
        });

        uploader.bind('Error', function(up, err) {
            $('#filelist').html("<div class=\"upload_error\">Error: " + err.code +
                ", Message: " + err.message +
                (err.file ? "<br/>File: " + err.file.name : "") +
                "</div>"
            );

            up.refresh(); // Reposition Flash/Silverlight
        });

        uploader.bind('FileUploaded', function(up, file, response) {
            s_response=response.response;
            if(s_response.indexOf("Error: ") != -1){
                file.status = plupload.FAILED;
                $('#' + file.id + " b").html(s_response);
                reset_uploader(true);
            }
            else{
                $('#' + file.id + " b").html("100%");
                var file_name=s_response;
                //$(".thumbnail_block").html(file_name);
                
                var img_src = "tmp_files/"+file_name;
                img_src = '<img src="'+ img_src +'" />';
                //$(".thumbnail_block").html(img_src);
                $(".the-face .face").html(img_src);
                $("#thumbnail_uploadfiles").hide();
                $("#thumbnail_cancelfiles").hide();
                $("#thumbnail_removefiles").show();
                
                $(".thumbnail_uploader_block label.error").hide();
                $("#thumbnail").val(file_name);
            }
        });
        
        $("#thumbnail_cancelfiles, #thumbnail_removefiles").click(function(e){
            reset_uploader(false);
            e.preventDefault();
        });
    }

});

/*------- Some Useful Helper Functions -------*/

// Reset Uploader Control
function reset_uploader(show_file_list){
    if(show_file_list==false)
        $('#thumbnail_filelist').html('');
    reset_face();
    $("#thumbnail").val('');
    $("#thumbnail_pickfiles").show();
    $("#thumbnail_removefiles").hide();
    $("#thumbnail_uploadfiles").hide();
    $("#thumbnail_cancelfiles").hide();
}

// Reset Face Container
function reset_face(){
    $(".the-face .face").html('<img src="faces/default-face.jpg" alt="">');
}

// Select and Set Frame image when clicked on "Try in Mirros"
function try_mirror(frame_image){
    $(".the-face .frame .draggable .rotatable .resizable img").attr("src", frame_image);

    $('#mirror-modal').reveal({
        animation: 'fadeAndPop',                   //fade, fadeAndPop, none
        animationspeed: 300,                       //how fast animtions are
        closeonbackgroundclick: true,              //if you click background will modal close?
        dismissmodalclass: 'close-reveal-modal'    //the class of a button or element that will close an open modal
    });
    return false;
}