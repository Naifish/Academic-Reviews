<?php

//including connection file
include('../imp_files/con_file.php');

session_start();
if (!isset($_SESSION['user_name'])) {
	# code...
	header('location:index.php');
}

/*count approved universities*/
$approved_uni="SELECT * FROM school WHERE available_status='approved'";
$result=mysql_query($approved_uni);
$numOfApprovedUni=mysql_num_rows($result);
$numOfApprovedUni;
/*end of count approved universities*/

/*count pending universities*/
$pending_uni="SELECT * FROM school WHERE available_status='pending'";
$result=mysql_query($pending_uni);
$numOfPendingUni=mysql_num_rows($result);
$numOfPendingUni;
/*end of count pending universities*/

/*count approved Professors*/
$approved_prof="SELECT * FROM professor WHERE available_status='approved'";
$result=mysql_query($approved_prof);
$numOfApprovedprof=mysql_num_rows($result);
$numOfApprovedprof;
/*end of count approved Professors*/

/*count pending Professors*/
$pending_prof="SELECT * FROM professor WHERE available_status='pending'";
$result=mysql_query($pending_prof);
$numOfPendingProf=mysql_num_rows($result);
$numOfPendingProf;
/*end of count pending Professors*/

/*count pending Professors rating*/
$pending_prof_ratings="SELECT * FROM prof_rating WHERE available_status='pending'";
$result=mysql_query($pending_prof_ratings);
$numOfPendingProfRatings=mysql_num_rows($result);
$numOfPendingProfRatings;
/*end of count pending Professors rating*/

/*count pending universities rating*/
$pending_uni_ratings="SELECT * FROM school_rating WHERE available_status='pending'";
$result=mysql_query($pending_uni_ratings);
$numOfPendingUniRatings=mysql_num_rows($result);
$numOfPendingUniRatings;
/*end of count pending universities rating*/

/*count pending Professors Corrections*/
$pending_prof_correction="SELECT * FROM prof_correction";
$result=mysql_query($pending_prof_correction);
$numOfPendingProfCorrections=mysql_num_rows($result);
$numOfPendingProfCorrections;
/*end of count pending Professors Corrections*/

/*count pending universities Corrections*/
$pending_Uni_correction="SELECT * FROM school_correction";
$result=mysql_query($pending_Uni_correction);
$numOfPendingUniCorrections=mysql_num_rows($result);
$numOfPendingUniCorrections;
/*end of count pending universities Corrections*/

/*count pending reports on prof's comments*/
$pending_prof_comment_report="SELECT * FROM report_prof_stu_rating";
$result=mysql_query($pending_prof_comment_report);
$numOfPendingProfCommentReport=mysql_num_rows($result);
$numOfPendingProfCommentReport;
/*end of count pending reports on prof's comments*/

/*count pending reports on Uni's comments*/
$pending_uni_comment_report="SELECT * FROM report_uni_stu_rating";
$result=mysql_query($pending_uni_comment_report);
$numOfPendingUniCommentReport=mysql_num_rows($result);
$numOfPendingUniCommentReport;
/*end of count pending reports on Uni's comments*/

?>






<!doctype html>
<html lang="en">

<?php include('imp_files/head_file.php'); ?>


<body>

	<?php 
		include('imp_files/header.php');
		include('imp_files/sidebar.php');
	 ?>
	
	<section id="main" class="column">
		
		<h4 class="alert_info">Welcome to the Academic Reviews admin panel.</h4>
		
		<article class="module width_full">
			<header><h3>Stats</h3></header>
			<div class="module_content">
				<article class="stats_overview">
					<div class="overview_today">
						<p class="overview_day">Universities</p>
						<p class="overview_count"><?php echo $numOfApprovedUni; ?></p>
						<p class="overview_type">Approved</p>
						<p class="overview_count"><?php echo $numOfPendingUni; ?></p>
						<p class="overview_type">Pending</p>
					</div>
					<div class="overview_previous">
						<p class="overview_day">Professors</p>
						<p class="overview_count"><?php echo $numOfApprovedprof; ?></p>
						<p class="overview_type">Approved</p>
						<p class="overview_count"><?php echo $numOfPendingProf; ?></p>
						<p class="overview_type">Pending</p>
					</div>
					<div class="overview_previous">
						<p class="overview_day">Ratings</p>
						<p class="overview_count"><?php echo $numOfPendingProfRatings; ?></p>
						<p class="overview_type">Pending Prof's Ratings</p>
						<p class="overview_count"><?php echo $numOfPendingUniRatings; ?></p>
						<p class="overview_type">Pending Uni's Ratings</p>
					</div>
					<div class="overview_previous">
						<p class="overview_day">Corrections</p>
						<p class="overview_count"><?php echo $numOfPendingProfCorrections; ?></p>
						<p class="overview_type">Pending Prof's Corrections</p>
						<p class="overview_count"><?php echo $numOfPendingUniCorrections; ?></p>
						<p class="overview_type">Pending Uni's Corrections</p>
					</div>
					<div class="overview_previous">
						<p class="overview_day">Reports</p>
						<p class="overview_count"><?php echo $numOfPendingProfCommentReport; ?></p>
						<p class="overview_type">Pending on prof's Ratings</p>
						<p class="overview_count"><?php echo $numOfPendingUniCommentReport; ?></p>
						<p class="overview_type">Pending on uni's Ratings</p>
					</div>
				</article>
				<div class="clear"></div>
			</div>
		</article><!-- end of stats article -->
		
		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Pendings</h3>
			<ul class="tabs">
	   			<li><a href="#proftab">Professors</a></li>
	    		<li><a href="#unitab">Universities</a></li>
			</ul>
			</header>

			<div class="tab_container">
				<div id="proftab" class="tab_content">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th style="width:7.6%; overflow: hidden;">First Name</th>
	    				<th style="width:8.8%; overflow: hidden;">Middle Name</th>
	    				<th style="width:8.3%; overflow: hidden;">Last Name</th>
	    				<th style="width:9.3%; overflow: hidden;">School Name</th> 
	    				<th style="width:8.3%; overflow: hidden;">Department</th> 
	    				<th style="width:8.3%; overflow: hidden;">Directory</th> 
	    				<th style="width:9.6%; overflow: hidden;">Country Name</th>
	    				<th style="width:8.3%; overflow: hidden;">Email</th>
	    				<th style="width:8.3%; overflow: hidden;">Start Year</th>
	    				<th style="width:8.3%; overflow: hidden;">End Year</th>
	    				<th style="width:8.3%; overflow: hidden;">Contact #</th>
	    				
					</tr> 
				</thead> 
				<tbody>
				<?php
				 $pending_profs="SELECT * FROM professor WHERE available_status='pending'";
				 $result=mysql_query($pending_profs);
				 while ($valOf=mysql_fetch_array($result)) {?>
				 	<tr> 
	    				<td style="width:7.6%; overflow: hidden;"><?php echo $valOf['first_name']; ?></td> 
	    				<td style="width:8.8%; overflow: hidden;"><?php echo $valOf['middle_name']; ?></td> 
	    				<td style="width:8.3%; overflow: hidden;"><?php echo $valOf['last_name']; ?></td>
	    				<td style="width:9.3%; overflow: hidden;"><?php echo $valOf['school_name']; ?></td>
	    				<td style="width:8.3%; overflow: hidden;"><?php echo $valOf['department']; ?></td>
	    				<td style="width:8.3%; overflow: hidden;"><?php echo $valOf['dircttory_listing']; ?></td>
	    				<td style="width:9.6%; overflow: hidden;"><?php echo $valOf['country_name']; ?></td>
	    				<td style="width:8.3%; overflow: hidden;"><?php echo $valOf['email']; ?></td>
	    				<td style="width:8.3%; overflow: hidden;"><?php echo $valOf['start_year']; ?></td>
	    				<td style="width:8.3%; overflow: hidden;"><?php echo $valOf['end_year']; ?></td>
	    				<td style="width:8.3%; overflow: hidden;"><?php echo $valOf['contact']; ?></td> 
	    				
					</tr>
				 <?php }?>  
				</tbody> 
				</table>
				</div><!-- end of #tab1 -->
				
				<div id="unitab" class="tab_content">
				<table class="tablesorter" cellspacing="0"> 
				<thead> 
					<tr> 
	    				<th>Uni Name</th> 
	    				<th>Uni Nick Nmae</th> 
	    				<th>Country Name</th> 
	    				<th>State Name</th> 
	    				<th>City Name</th> 
	    				<th>Website</th> 
	    				 
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$country_name="";
				$pending_unis="SELECT * FROM school WHERE available_status='pending'";
				$result=mysql_query($pending_unis);
				while ($valOf=mysql_fetch_array($result)) {

					/*geting country name*/
					 $find_country="SELECT * FROM country WHERE country_id=".$valOf['country_id'];
					 $ress=mysql_query($find_country);
					 while ($val=mysql_fetch_array($ress)) { $country_name=$val['country_name']; }
					 /*end of getting country name*/

					?>
					<tr> 
	    				<td><?php echo $valOf['school_name']; ?></td> 
	    				<td><?php echo $valOf['school_nick_name']; ?></td> 
	    				<td><?php echo $country_name; ?></td>
	    				<td><?php echo $valOf['state_name']; ?></td> 
	    				<td><?php echo $valOf['city_name']; ?></td> 
	    				<td><a href='<?php echo $valOf['website']; ?>' target="_blank" ><?php echo $valOf['website']; ?></a></td> 
	    				
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of content manager article -->
		<div class="clear"></div>
		<div class="spacer"></div>
	</section>


</body>

</html>