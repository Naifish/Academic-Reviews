<?php

//including connection file
include('../imp_files/con_file.php');

$invalidUser=true;
session_start();

if (isset($_POST['login-btn'])) {
	# code...
	$_POST['user-name'];
	$_POST['password'];

	$checkQry="SELECT * FROM admin_table";
	$exeQry=mysql_query($checkQry);
	while ($valOf=mysql_fetch_array($exeQry)) {
		# code...
		if ($valOf['user_name']==$_POST['user-name'] && $valOf['password']==$_POST['password']) {
			# code...
			$invalidUser=false;
			$_SESSION['user_name']=$_POST['user-name'];
			header('location:dashb.php');
		}
	}
}
if (isset($_POST['logout-btn']) || isset($_GET['logOut'])) {
	# code...
	session_unset();
	session_destroy();
}

?>

<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8"/>
	<title>Dashboard I Admin Panel</title>
	
	<link rel="stylesheet" href="css/layout.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="css/loginForm-style.css" type="text/css" media="screen" />
	<!--[if lt IE 9]>
	<link rel="stylesheet" href="css/ie.css" type="text/css" media="screen" />
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script src="js/jquery-1.5.2.min.js" type="text/javascript"></script>
	<script src="js/hideshow.js" type="text/javascript"></script>
	<script src="js/jquery.tablesorter.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/jquery.equalHeight.js"></script>
	<script type="text/javascript">
	$(document).ready(function() 
    	{ 
      	  $(".tablesorter").tablesorter(); 
   	 } 
	);
	$(document).ready(function() {

	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});

});
    </script>
    <script type="text/javascript">
    $(function(){
        $('.column').equalHeight();
    });
</script>

</head>


<body>

	<?php include('imp_files/header.php') ?>
	<?php /*include('imp_files/sidebar.php')*/ ?>
	
	<div id="wrapper" class='<?php if(isset($_SESSION['user_name'])){ echo "hidee"; }else{echo "showw";} ?>'>
		<div id="wrappertop"></div>

		<div id="wrappermiddle">

			<h2>Login</h2>

			<div id="username_input">

				<div id="username_inputleft"></div>

				<div id="username_inputmiddle">
				<form action"#" method="POST">
					<input type="text" name="user-name" id="url"  placeholder="User Name" required autocomplete="off">
					<img id="url_user" src="./images/mailicon.png" alt="">
				
				</div>

				<div id="username_inputright"></div>

			</div>

			<div id="password_input">

				<div id="password_inputleft"></div>

				<div id="password_inputmiddle">
					<input type="password" name="password" id="url" placeholder="Password" required>
					<img id="url_password" src="./images/passicon.png" alt="">
				
				</div>

				<div id="password_inputright"></div>

			</div>

			<div id="submit">
				
				<!-- <input type="image" src="./images/submit_hover.png" id="submit1" value="Sign In">
				<input type="image" src="./images/submit.png" id="submit2" value="Sign In"> -->
				<input type="submit" name="login-btn" style="background-image: url(./images/submit.png); width:300px; height:40px; border:none;" value="">
				</form>
			</div>


			<div id="links_left">

			<span><?php if(isset($_POST['login-btn']) && $invalidUser==true){echo "Username or Password is incorrect";} ?></span>

			</div>

			<!-- <div id="links_right"><a href="#">Not a Member Yet?</a></div> -->

		</div>

		<div id="wrapperbottom"></div>
		
		<div id="powered">
		<!-- <p>Powered by <a href="http://www.premiumfreebies.eu">Premiumfreebies Control Panel</a></p> -->
		</div>
	</div>
	<form action="#" method="POST" class='<?php if(!isset($_SESSION['user_name'])){ echo "hidee"; }else{echo "showw";} ?>'>
		<input type="submit" value="LogOut" name="logout-btn" class="logout-btn">
	</form>


</body>

</html>