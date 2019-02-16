<header id="header">
		<hgroup>
			<h1 class="site_title"><a href="index.html">Website Admin</a></h1>
			<h2 class="section_title">Academic Reviews Admin Panel</h2><div class="btn_view_site"><a href="http://academicreviews.azurewebsites.net/" target="_blank">View Site</a></div>
		</hgroup>
	</header> <!-- end of header bar -->
	
	<section id="secondary_bar">
		<div class="user">
			<?php if(isset($_SESSION['user_name'])){ echo "<p>$_SESSION[user_name]</p>"; } ?>
			<!-- <a class="logout_user" href="#" title="Logout">Logout</a> -->
		</div>
		<div class="breadcrumbs_container">
			<!--  -->
		</div>
	</section><!-- end of secondary bar -->