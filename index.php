<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Virtual Mirror Tool - By Welancers</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
        <![endif]-->

        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.0/themes/base/jquery-ui.css" />
		<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
		<script src="http://code.jquery.com/ui/1.10.0/jquery-ui.js"></script>
		<script type="text/javascript" src="js/vendor/jquery.ui.rotatable.js"></script>

		<script src="js/vendor/jquery.carouFredSel-6.2.0.js"></script>

		<script type="text/javascript" src="http://bp.yahooapis.com/2.4.21/browserplus-min.js"></script>
        <script type="text/javascript" src="js/vendor/plupload/plupload.full.js"></script>

        <script type="text/javascript" src="js/vendor/webcam/jquery.webcam.js"></script>

        <link rel="stylesheet" href="js/vendor/reveal/reveal.css">
        <script type="text/javascript" src="js/vendor/reveal/jquery.reveal.js"></script>

        <script src="js/main.js"></script>


        <style type="text/css">
        	.products-list{
        		width: 900px;
        		margin:20px auto;
        		overflow: hidden;
        	}

        	.products-list h1{
        		margin:0px 0px 20px 0px; padding:0px; text-align: center;
        	}

        	.the-product{
        		width:200px;
        		overflow: hidden;
        		margin:10px;
        		border:2px solid #ccc;
        		float: left;

        		border-radius: 5px;
			    -moz-border-radius: 5px;
			    -o-border-radius: 5px;
			    -webkit-border-radius: 5px;
        	}

        	.the-product h2{
        		margin:0px; padding:5px; text-align: center; font-size: 16px; line-height: 20px;
        	}
        	.the-product .product-thumb{
        		width: 180px; overflow: hidden; margin:0px auto; text-align: center; display: block;
        	}
        	.the-product .product-thumb img{
        		width:180px; margin:0px;
        	}

        	.the-product .product-buttons{
        		text-align: center; padding:10px 20px;
        	}

        	.the-product .product-buttons a{
        		text-decoration: none; color:#fff; display: inline-block; background-color:#828282; padding:10px;
        		border-radius: 10px;
			    -moz-border-radius: 10px;
			    -o-border-radius: 10px;
			    -webkit-border-radius: 10px;
        	}
        	.the-product .product-buttons a:hover{
        		background-color:#000;
        	}

        </style>
    </head>
    <body>


    	<div class="products-list">

    		<h1>Virtual Mirror - Demo Store</h1>

    		<div class="the-product">
    			<h2>Demo Frame 1</h2>
    			<a class="product-thumb" href="#">
    				<img src="frames/frame-1.jpg">
    			</a>

    			<div class="product-buttons">
    				<a href="#" onclick="javascript:return try_mirror('frames/transparent-frames/frame-1.png');">Try in Mirror</a>
    			</div>
    		</div>

    		<div class="the-product">
    			<h2>Demo Frame 2</h2>
    			<a class="product-thumb" href="#">
    				<img src="frames/frame-2.jpg">
    			</a>

    			<div class="product-buttons">
    				<a href="#" onclick="javascript:return try_mirror('frames/transparent-frames/frame-2.png');">Try in Mirror</a>
    			</div>
    		</div>

    		<div class="the-product">
    			<h2>Demo Frame 3</h2>
    			<a class="product-thumb" href="#">
    				<img src="frames/frame-3.jpg">
    			</a>

    			<div class="product-buttons">
    				<a href="#" onclick="javascript:return try_mirror('frames/transparent-frames/frame-3.png');">Try in Mirror</a>
    			</div>
    		</div>

    		<div class="the-product">
    			<h2>Demo Frame 4</h2>
    			<a class="product-thumb" href="#">
    				<img src="frames/frame-4.jpg">
    			</a>

    			<div class="product-buttons">
    				<a href="#" onclick="javascript:return try_mirror('frames/transparent-frames/frame-4.png');">Try in Mirror</a>
    			</div>
    		</div>

    		<div class="the-product">
    			<h2>Demo Frame 5</h2>
    			<a class="product-thumb" href="#">
    				<img src="frames/frame-5.jpg">
    			</a>

    			<div class="product-buttons">
    				<a href="#" onclick="javascript:return try_mirror('frames/transparent-frames/frame-5.png');">Try in Mirror</a>
    			</div>
    		</div>

    		<div class="the-product">
    			<h2>Demo Frame 6</h2>
    			<a class="product-thumb" href="#">
    				<img src="frames/frame-6.jpg">
    			</a>

    			<div class="product-buttons">
    				<a href="#" onclick="javascript:return try_mirror('frames/transparent-frames/frame-6.png');">Try in Mirror</a>
    			</div>
    		</div>

    		<div class="the-product">
    			<h2>Demo Frame 7</h2>
    			<a class="product-thumb" href="#">
    				<img src="frames/frame-7.jpg">
    			</a>

    			<div class="product-buttons">
    				<a href="#" onclick="javascript:return try_mirror('frames/transparent-frames/frame-7.png');">Try in Mirror</a>
    			</div>
    		</div>

    		<div class="the-product">
    			<h2>Demo Frame 8</h2>
    			<a class="product-thumb" href="#">
    				<img src="frames/frame-8.jpg">
    			</a>

    			<div class="product-buttons">
    				<a href="#" onclick="javascript:return try_mirror('frames/transparent-frames/frame-8.png');">Try in Mirror</a>
    			</div>
    		</div>

    	</div><!-- /.products-list -->


        <?php include 'virtual_mirror.php'; ?> <!-- main Tool loaded here -->
    </body>
</html>
