<?php

//including connection file
include('../imp_files/con_file.php');

session_start();
if (!isset($_SESSION['user_name'])) {
	# code...
	header('location:index.php');
}

$ratingID="";$classID="";$helpfullness="";$clarity="";$easiness="";$classForCredit="";$comment="";$attendence="";$yourIntrest="";$textBook="";$textbookUset="";$gradeRecieved="";$ratingDate="";$firstName="";$lastName="";$stuEmail="";$schoolName="";$enrollementYEar="";$graduateYear="";
$reputation="";$location="";$opportunities="";$libraty="";$groundAreas="";$internet="";$food="";$club="";$social="";$hapiness="";$city="";
$profUpdate=false;$profAdd=false;
$profRatingApproved=false;$profRatingRejected=false;$uniRatingApproved=false;$uniRatingRejected=false;


/*if user click on view professor icon on pending uni tab*/
if (isset($_GET['PRview']) && $_GET['PRview']==true) {
	# code...
	$ratingID=$_GET['id'];

	$getinfo="SELECT * FROM prof_rating WHERE rating_id='$ratingID'";
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
/*if user click on view university icon on pending uni tab*/
if (isset($_GET['URview']) && $_GET['URview']==true) {
	# code...
	$ratingID=$_GET['id'];

	$getinfo="SELECT * FROM school_rating WHERE rating_id='$ratingID'";
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
/*if user click on approve prof rating icon on pending prof rating tab*/
if (isset($_GET['PRapprove']) && $_GET['PRapprove']==true) {

	$ratingID=$_GET['id'];

	$approveProfRating="UPDATE prof_rating SET available_status='approved' WHERE rating_id='$ratingID'";
	$result=mysql_query($approveProfRating);
	if ($result===true) {
		# code...
		$profRatingApproved=true;
	}
}

/*if user click on approve prof rating button on view prof tab*/
if (isset($_POST['approve-prof-rating-btn'])) {
	# code...
	$ratingID=$_POST['PRID'];
	$approveProfRating="UPDATE prof_rating SET available_status='approved' WHERE rating_id='$ratingID'";
	$result=mysql_query($approveProfRating);
	if ($result===true) {
		# code...
		$profRatingApproved=true;
		header('location:rating.php?profRatApproved=true');
	}
}

/*if user click on approve uni rating icon on pending uni rating tab*/
if (isset($_GET['URapprove']) && $_GET['URapprove']==true) {

	$ratingID=$_GET['id'];

	$approveUniRating="UPDATE school_rating SET available_status='approved' WHERE rating_id='$ratingID'";
	$result=mysql_query($approveUniRating);
	if ($result===true) {
		# code...
		$uniRatingApproved=true;
	}
}

/*if user click on approve uni rating button on view uni tab*/
if (isset($_POST['approve-uni-rating-btn'])) {
	# code...
	$ratingID=$_POST['URID'];
	$approveProfRating="UPDATE school_rating SET available_status='approved' WHERE rating_id='$ratingID'";
	$result=mysql_query($approveProfRating);
	if ($result===true) {
		# code...
		$uniRatingApproved=true;
		header('location:rating.php?uniRatApproved=true');
	}
}

/*if user click on reject professor rating icon on pending tab*/
if (isset($_GET['PRreject']) && $_GET['PRreject']==true) {
	# code...
	$ratingID=$_GET['id'];
	$rejectProfRating="DELETE FROM prof_rating WHERE rating_id='$ratingID'";
	$result=mysql_query($rejectProfRating);
	if ($result==true) {
		# code...
		$profRatingRejected=true;
	}
}

/*if user click on reject professor rating button on view tab*/
if (isset($_POST['reject-prof-rating-btn'])) {
	# code...
	$ratingID=$_POST['PRID'];
	$rejectProfRating="DELETE FROM prof_rating WHERE rating_id='$ratingID'";
	$result=mysql_query($rejectProfRating);
	if ($result==true) {
		# code...
		$profRatingRejected=true;
		header('location:rating.php?profRatRejected=true');
	}
}

/*if user click on reject uni rating icon on pending tab*/
if (isset($_GET['URreject']) && $_GET['URreject']==true) {
	# code...
	$ratingID=$_GET['id'];
	$rejectUniRating="DELETE FROM school_rating WHERE rating_id='$ratingID'";
	$result=mysql_query($rejectUniRating);
	if ($result==true) {
		# code...
		$uniRatingRejected=true;
	}
}

/*if user click on reject uni rating button on view tab*/
if (isset($_POST['reject-uni-rating-btn'])) {
	# code...
	$ratingID=$_POST['URID'];
	$rejectUniRating="DELETE FROM school_rating WHERE rating_id='$ratingID'";
	$result=mysql_query($rejectUniRating);
	if ($result==true) {
		# code...
		$uniRatingRejected=true;
		header('location:rating.php?uniRatRejected=true');
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

	<?php if($profRatingApproved=="true" || isset($_GET['profRatApproved'])){ echo "<h4 class='alert_success'>Professor Rating Approved Successfully!</h4>"; } ?>
	<?php if($uniRatingApproved=="true" || isset($_GET['uniRatApproved'])){ echo "<h4 class='alert_success'>University Rating Approved Successfully!</h4>"; } ?>
	<?php if($profRatingRejected=="true" || isset($_GET['profRatRejected'])){ echo "<h4 class='alert_success'>Professor Rating Rejected Successfully!</h4>"; } ?>
	<?php if($uniRatingRejected=="true" || isset($_GET['uniRatRejected'])){ echo "<h4 class='alert_success'>University Rating Rejected Successfully!</h4>"; } ?>

		<!-- pending prof rating -->
		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Pending Professor's Ratings</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th>Rating ID</th>
	    				<th>Helpfullness</th>
	    				<th>Clarity</th>
	    				<th>Easiness</th> 
	    				<th>Comment</th> 
	    				<th>Textbook</th> 
	    				<th>Rating Date</th>
	    				<th>Frist Name</th>
	    				<th>Last Name</th>
	    				<th>University</th>
	    				<th>Stu Email</th>
	    				<th>Action</th>
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$country_name="";
				$pending_prof_rating="SELECT * FROM prof_rating WHERE available_status='pending'";
				$result=mysql_query($pending_prof_rating);
				while ($valOf=mysql_fetch_array($result)) {

					?>
					<tr> 
	    				<td style="overflow: hidden;"><?php echo $valOf['rating_id']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['helpfullness']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['clarity']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['easiness']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['comment']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['textbook_used']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['rating_date']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['first_name']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['last_name']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['school_name']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['stu_email']; ?></td> 
	    				<td><a href="?PRview=true&id=<?php echo $valOf['rating_id']; ?>"><img src="images/view.png" title="View"></a> <a href="?PRapprove=true&id=<?php echo $valOf['rating_id']; ?>"><img src="images/icn_alert_success.png" title="Approve"></a> <a href="?PRreject=true&id=<?php echo $valOf['rating_id']; ?>"><img src="images/icn_alert_error.png" title="Reject"></a></td>
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of pending prof rating -->

		<!-- pending uni rating -->
		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Pending University's Ratings</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th>Rating ID</th>
	    				<th>Reputation</th>
	    				<th>Location</th>
	    				<th>Opportunities</th> 
	    				<th>Library</th> 
	    				<th>Internet</th>
	    				<th>Comment</th> 
	    				<th>Rating Date</th>
	    				<th>University</th>
	    				<th>City</th>
	    				<th>Stu Email</th>
	    				<th>Action</th>
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$pending_uni_rating="SELECT * FROM school_rating WHERE available_status='pending'";
				$result=mysql_query($pending_uni_rating);
				while ($valOf=mysql_fetch_array($result)) {

					?>
					<tr> 
	    				<td style="overflow: hidden;"><?php echo $valOf['rating_id']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['reputation']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['location']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['opportunities']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['library']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['internet']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['comment']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['rating_date']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['school_name']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['city']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['stu_email']; ?></td> 
	    				<td><a href="?URview=true&id=<?php echo $valOf['rating_id']; ?>"><img src="images/view.png" title="View"></a> <a href="?URapprove=true&id=<?php echo $valOf['rating_id']; ?>"><img src="images/icn_alert_success.png" title="Approve"></a> <a href="?URreject=true&id=<?php echo $valOf['rating_id']; ?>"><img src="images/icn_alert_error.png" title="Reject"></a></td>
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of uni prof rating -->

		<!-- view prof rating -->
		<article class="module width_3_quarter <?php if(isset($_GET['PRview']) && $_GET['PRview']==true){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden; margin-left: 2% !important; max-height: 600px;">
			<header><h3 class="tabs_involved">View Professor rating</h3>
			</header>
			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="PRID" value="<?php if(isset($_GET['PRview'])){ echo $ratingID; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>Rating ID:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $ratingID; } ?></td>
						</tr>
						<tr>
							<td>Class ID:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $classID; } ?></td>
						</tr>
						<tr>
							<td>Helpfullness:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $helpfullness; } ?></td>
						</tr>
						<tr>
							<td>Clarity:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $clarity; } ?></td>
						</tr>
						<tr>
							<td>Easiness:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $easiness; } ?></td>
						</tr>
						<tr>
							<td>Class for credit:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $classForCredit; } ?></td>
						</tr>
						<tr>
							<td>Comment:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $comment; } ?></td>
						</tr>
						<tr>
							<td>Attendence:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $attendence; } ?></td>
						</tr>
						<tr>
							<td>Your Intrest:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $yourIntrest; } ?></td>
						</tr>
						<tr>
							<td>Textbook:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $textBook; } ?></td>
						</tr>
						<tr>
							<td>Textbook Used:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $textbookUset; } ?></td>
						</tr>
						<tr>
							<td>Grade Recieved:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $gradeRecieved; } ?></td>
						</tr>
						<tr>
							<td>Rating Date:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $ratingDate; } ?></td>
						</tr>
						<tr>
							<td>First Name:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $firstName; } ?></td>
						</tr>
						<tr>
							<td>Last Name:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $lastName; } ?></td>
						</tr>
						<tr>
							<td>Stu Email:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $stuEmail; } ?></td>
						</tr>
						<tr>
							<td>University:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $schoolName; } ?></td>
						</tr>
						<tr>
							<td>Enrollment Year:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $enrollementYEar; } ?></td>
						</tr>
						<tr>
							<td>Graduate Year:</td>
							<td><?php if(isset($_GET['PRview'])){ echo $graduateYear; } ?></td>
						</tr>
						<tr>
							<td ><input type="submit" value="Approve" name="approve-prof-rating-btn" style="width:100%; height: 30px;"></td>
							<td ><input type="submit" value="Reject" name="reject-prof-rating-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of view prof rating -->

		<!-- view uni rating -->
		<article class="module width_3_quarter <?php if(isset($_GET['URview']) && $_GET['URview']==true){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden; margin-left: 2% !important; max-height: 600px;">
			<header><h3 class="tabs_involved">View University rating</h3>
			</header>
			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="URID" value="<?php if(isset($_GET['URview'])){ echo $ratingID; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>Rating ID:</td>
							<td><?php if(isset($_GET['URview'])){ echo $ratingID; } ?></td>
						</tr>
						<tr>
							<td>Reputation:</td>
							<td><?php if(isset($_GET['URview'])){ echo $reputation; } ?></td>
						</tr>
						<tr>
							<td>Location:</td>
							<td><?php if(isset($_GET['URview'])){ echo $location; } ?></td>
						</tr>
						<tr>
							<td>Opportunities:</td>
							<td><?php if(isset($_GET['URview'])){ echo $opportunities; } ?></td>
						</tr>
						<tr>
							<td>Library:</td>
							<td><?php if(isset($_GET['URview'])){ echo $libraty; } ?></td>
						</tr>
						<tr>
							<td>Ground & Common Areas:</td>
							<td><?php if(isset($_GET['URview'])){ echo $groundAreas; } ?></td>
						</tr>
						<tr>
							<td>Internet:</td>
							<td><?php if(isset($_GET['URview'])){ echo $internet; } ?></td>
						</tr>
						<tr>
							<td>Food:</td>
							<td><?php if(isset($_GET['URview'])){ echo $food; } ?></td>
						</tr>
						<tr>
							<td>Club:</td>
							<td><?php if(isset($_GET['URview'])){ echo $club; } ?></td>
						</tr>
						<tr>
							<td>Social:</td>
							<td><?php if(isset($_GET['URview'])){ echo $social; } ?></td>
						</tr>
						<tr>
							<td>Hapiness:</td>
							<td><?php if(isset($_GET['URview'])){ echo $hapiness; } ?></td>
						</tr>
						<tr>
							<td>Graduate Year:</td>
							<td><?php if(isset($_GET['URview'])){ echo $graduateYear; } ?></td>
						</tr>
						<tr>
							<td>Rating Date:</td>
							<td><?php if(isset($_GET['URview'])){ echo $ratingDate; } ?></td>
						</tr>
						<tr>
							<td>Comment:</td>
							<td><?php if(isset($_GET['URview'])){ echo $comment; } ?></td>
						</tr>
						<tr>
							<td>City:</td>
							<td><?php if(isset($_GET['URview'])){ echo $city; } ?></td>
						</tr>
						<tr>
							<td>Stu Email:</td>
							<td><?php if(isset($_GET['URview'])){ echo $stuEmail; } ?></td>
						</tr>
						<tr>
							<td>University:</td>
							<td><?php if(isset($_GET['URview'])){ echo $schoolName; } ?></td>
						</tr>
						<tr>
							<td ><input type="submit" value="Approve" name="approve-uni-rating-btn" style="width:100%; height: 30px;"></td>
							<td ><input type="submit" value="Reject" name="reject-uni-rating-btn" style="width:100%; height: 30px;"></td>
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