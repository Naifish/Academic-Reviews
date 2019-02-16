<?php

//including connection file
include('../imp_files/con_file.php');

session_start();
if (!isset($_SESSION['user_name'])) {
	# code...
	header('location:index.php');
}

/*$firstName="";$lastName="";$uniName="";$problem="";$correction="";$stuEmail="";$cityNm="";$uniNickName="";$country_id="";$state_name="";$website="";$avStatus="";$middleNM="";$department="";$directory_listing="";$countryNM="";$start_year="";$end_year="";$contact="";$seml="";*/

$ratingID="";$classID="";$helpfullness="";$clarity="";$easiness="";$classForCredit="";$comment="";$attendence="";$yourIntrest="";$textBook="";$textbookUset="";$gradeRecieved="";$ratingDate="";$firstName="";$lastName="";$stuEmail="";$schoolName="";$enrollementYEar="";$graduateYear="";
$reputation="";$location="";$opportunities="";$libraty="";$groundAreas="";$internet="";$food="";$club="";$social="";$hapiness="";$city="";$RepID="";$RepComment="";$RepEmail="";
$profRatingDeleted=false;$uniRatingDeleted=false;




/*if user click on view professor icon on pending uni tab*/
if (isset($_GET['PRRview']) && $_GET['PRRview']==true) {
	# code...
	$RepID=$_GET['RID'];
	$getreport="SELECT * FROM report_prof_stu_rating WHERE rating_id='$RepID'";
	$result=mysql_query($getreport);
	while ($valOf=mysql_fetch_array($result)) {
		# code...
		$RepComment=$valOf['stu_comment'];
		$RepEmail=$valOf['stu_email'];
	}

	$getinfo="SELECT * FROM prof_rating WHERE rating_id='$RepID'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...
		$classID=$valOf['class_id'];
		$helpfullness=$valOf['helpfullness'];
		$clarity=$valOf['clarity'];
		$easiness=$valOf['easiness'];
		$classForCredit=$valOf['class_for_credit'];
		$comment=$valOf['comment'];
		$attendence=$valOf['attendence'];
		$yourIntrest=$valOf['your_intrest'];
		$textBook=$valOf['textbook'];
		$textbookUset=$valOf['textbook_used'];
		$gradeRecieved=$valOf['grade_reciever'];
		$ratingDate=$valOf['rating_date'];
		$firstName=$valOf['first_name'];
		$lastName=$valOf['last_name'];
		$stuEmail=$valOf['stu_email'];
		$schoolName=$valOf['school_name'];
		$enrollementYEar=$valOf['enrollment_year'];
		$graduateYear=$valOf['graduate_year'];
	}
}

/*if user click on view professor icon on pending uni tab*/
if (isset($_GET['URRview']) && $_GET['URRview']==true) {
	# code...
	$RepID=$_GET['RID'];
	$getreport="SELECT * FROM report_uni_stu_rating WHERE rating_id='$RepID'";
	$result=mysql_query($getreport);
	while ($valOf=mysql_fetch_array($result)) {
		# code...
		$RepComment=$valOf['stu_comment'];
		$RepEmail=$valOf['stu_email'];
	}

	$getinfo="SELECT * FROM school_rating WHERE rating_id='$RepID'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...
		$reputation=$valOf['reputation'];
		$location=$valOf['location'];
		$opportunities=$valOf['opportunities'];
		$libraty=$valOf['library'];
		$groundAreas=$valOf['ground_commonAreas'];
		$internet=$valOf['internet'];
		$food=$valOf['food'];
		$club=$valOf['club'];
		$social=$valOf['social'];
		$hapiness=$valOf['hapiness'];
		$graduateYear=$valOf['graduate_year'];
		$ratingDate=$valOf['rating_date'];
		$comment=$valOf['comment'];
		$city=$valOf['city'];
		$stuEmail=$valOf['stu_email'];
		$schoolName=$valOf['school_name'];
	}
}
/*if user pres ignore btn*/
if (isset($_POST['ignr-uni-cmnt-reprt-btn']) || isset($_POST['ignr-prof-cmnt-reprt-btn'])) {
	# code...
	header('location:report.php');
}
/*if user press delete prof rating btn*/
if (isset($_POST['del-prof-cmnt-reprt-btn'])) {
	# code...
	$RepID=$_POST['Rid'];

	$deleteReport="DELETE FROM report_prof_stu_rating WHERE rating_id='$RepID'";
	$result=mysql_query($deleteReport);

	$deleteRating="DELETE FROM prof_rating WHERE rating_id='$RepID'";
	$result=mysql_query($deleteRating);
	if ($result==true) {
		# code...
		$profRatingDeleted=true;
		header('location:report.php?profRatingDeleted=true');
	}
}
/*if user press delete uni rating btn*/
if (isset($_POST['del-uni-cmnt-reprt-btn'])) {
	# code...
	$RepID=$_POST['Rid'];

	$deleteReport="DELETE FROM report_uni_stu_rating WHERE rating_id='$RepID'";
	$result=mysql_query($deleteReport);

	$deleteRating="DELETE FROM school_rating WHERE rating_id='$RepID'";
	$result=mysql_query($deleteRating);
	if ($result==true) {
		# code...
		$uniRatingDeleted=true;
		header('location:report.php?uniRatingDeleted=true');
	}
}

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

	<?php if(isset($_GET['profRatingDeleted'])){ echo "<h4 class='alert_success'>Professor Rating Deleted Successfully!</h4>"; } ?>
	<?php if(isset($_GET['uniRatingDeleted'])){ echo "<h4 class='alert_success'>University Rating Deleted Successfully!</h4>"; } ?>

		<!-- pending prof rating -->
		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Pending Reports on Prof's Comments</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th>Rating ID</th>
	    				<th>Comment</th>
	    				<th>Stu Email</th>
	    				<th>Action</th>
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$country_name="";
				$pending_prof_rating="SELECT * FROM report_prof_stu_rating";
				$result=mysql_query($pending_prof_rating);
				while ($valOf=mysql_fetch_array($result)) {

					?>
					<tr> 
	    				<td style="overflow: hidden;"><?php echo $valOf['rating_id']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['stu_comment']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['stu_email']; ?></td>
	    				<td><a href="?PRRview=true&RID=<?php echo $valOf['rating_id']; ?>"><img src="images/view.png" title="View"></a></td>
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of pending prof rating -->

		<!-- pending uni rating -->
		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Pending Reports on Uni's Comments</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th>Rating ID</th>
	    				<th>Comment</th>
	    				<th>Stu Email</th>
	    				<th>Action</th>
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$pending_uni_rating="SELECT * FROM report_uni_stu_rating";
				$result=mysql_query($pending_uni_rating);
				while ($valOf=mysql_fetch_array($result)) {

					?>
					<tr> 
	    				<td style="overflow: hidden;"><?php echo $valOf['rating_id']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['stu_comment']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['stu_email']; ?></td>
	    				<td><a href="?URRview=true&RID=<?php echo $valOf['rating_id']; ?>"><img src="images/view.png" title="View"></a></td>
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of uni prof rating -->

		<!-- view prof rating -->
		<article class="module width_3_quarter <?php if(isset($_GET['PRRview']) && $_GET['PRRview']==true){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:35%; overflow: hidden; margin-left: 2% !important; max-height: 650px;">
			<header><h3 class="tabs_involved">View Prof's comment Report</h3>
			</header>
			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="Rid" value="<?php if(isset($_GET['PRRview'])){ echo $RepID; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>Rating ID:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $RepID; } ?></td>
						</tr>
						<tr>
							<td>Reporter Email:</td>
							<td style="font-weight: bold;"><?php if(isset($_GET['PRRview'])){ echo $RepEmail; } ?></td>
						</tr>
						<tr>
							<td>Reporter Comment:</td>
							<td style="font-weight: bold;"><?php if(isset($_GET['PRRview'])){ echo $RepComment; } ?></td>
						</tr>
						<tr>
							<td>Class ID:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $classID; } ?></td>
						</tr>
						<tr>
							<td>Helpfullness:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $helpfullness; } ?></td>
						</tr>
						<tr>
							<td>Clarity:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $clarity; } ?></td>
						</tr>
						<tr>
							<td>Easiness:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $easiness; } ?></td>
						</tr>
						<tr>
							<td>Class for credit:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $classForCredit; } ?></td>
						</tr>
						<tr>
							<td>Comment:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $comment; } ?></td>
						</tr>
						<tr>
							<td>Attendence:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $attendence; } ?></td>
						</tr>
						<tr>
							<td>Your Intrest:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $yourIntrest; } ?></td>
						</tr>
						<tr>
							<td>Textbook:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $textBook; } ?></td>
						</tr>
						<tr>
							<td>Textbook Used:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $textbookUset; } ?></td>
						</tr>
						<tr>
							<td>Grade Recieved:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $gradeRecieved; } ?></td>
						</tr>
						<tr>
							<td>Rating Date:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $ratingDate; } ?></td>
						</tr>
						<tr>
							<td>First Name:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $firstName; } ?></td>
						</tr>
						<tr>
							<td>Last Name:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $lastName; } ?></td>
						</tr>
						<tr>
							<td>Stu Email:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $stuEmail; } ?></td>
						</tr>
						<tr>
							<td>University:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $schoolName; } ?></td>
						</tr>
						<tr>
							<td>Enrollment Year:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $enrollementYEar; } ?></td>
						</tr>
						<tr>
							<td>Graduate Year:</td>
							<td><?php if(isset($_GET['PRRview'])){ echo $graduateYear; } ?></td>
						</tr>
						<tr>
							<td ><input type="submit" value="Delete Rating" name="del-prof-cmnt-reprt-btn" style="width:100%; height: 30px;"></td>
							<td ><input type="submit" value="Ignore" name="ignr-prof-cmnt-reprt-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of view prof rating -->

		<!-- view uni rating -->
		<article class="module width_3_quarter <?php if(isset($_GET['URRview']) && $_GET['URRview']==true){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:35%; overflow: hidden; margin-left: 2% !important; max-height: 650px;">
			<header><h3 class="tabs_involved">View Uni's comment Report</h3>
			</header>
			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="Rid" value="<?php if(isset($_GET['URRview'])){ echo $RepID; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>Rating ID:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $RepID; } ?></td>
						</tr>
						<tr>
							<td>Reporter Email:</td>
							<td style="font-weight: bold;"><?php if(isset($_GET['URRview'])){ echo $RepEmail; } ?></td>
						</tr>
						<tr>
							<td>Reporter Comment:</td>
							<td style="font-weight: bold;"><?php if(isset($_GET['URRview'])){ echo $RepComment; } ?></td>
						</tr>
						<tr>
							<td>Reputation:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $reputation; } ?></td>
						</tr>
						<tr>
							<td>Location:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $location; } ?></td>
						</tr>
						<tr>
							<td>Opportunities:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $opportunities; } ?></td>
						</tr>
						<tr>
							<td>Library:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $libraty; } ?></td>
						</tr>
						<tr>
							<td>Ground & Common Areas:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $groundAreas; } ?></td>
						</tr>
						<tr>
							<td>Internet:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $internet; } ?></td>
						</tr>
						<tr>
							<td>Food:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $food; } ?></td>
						</tr>
						<tr>
							<td>Club:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $club; } ?></td>
						</tr>
						<tr>
							<td>Social:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $social; } ?></td>
						</tr>
						<tr>
							<td>Hapiness:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $hapiness; } ?></td>
						</tr>
						<tr>
							<td>Graduate Year:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $graduateYear; } ?></td>
						</tr>
						<tr>
							<td>Rating Date:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $ratingDate; } ?></td>
						</tr>
						<tr>
							<td>Comment:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $comment; } ?></td>
						</tr>
						<tr>
							<td>City:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $city; } ?></td>
						</tr>
						<tr>
							<td>Stu Email:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $stuEmail; } ?></td>
						</tr>
						<tr>
							<td>University:</td>
							<td><?php if(isset($_GET['URRview'])){ echo $schoolName; } ?></td>
						</tr>
						<tr>
							<td ><input type="submit" value="Delete Rating" name="del-uni-cmnt-reprt-btn" style="width:100%; height: 30px;"></td>
							<td ><input type="submit" value="Ignore" name="ignr-uni-cmnt-reprt-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of view uni rating -->
		
		<div class="clear"></div>
		<div class="spacer"></div>
	</section>

</body>

</html>