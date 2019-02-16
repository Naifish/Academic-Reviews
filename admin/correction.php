<?php

//including connection file
include('../imp_files/con_file.php');

session_start();
if (!isset($_SESSION['user_name'])) {
	# code...
	header('location:index.php');
}

$firstName="";$lastName="";$uniName="";$problem="";$correction="";$stuEmail="";$cityNm="";$uniNickName="";$country_id="";$state_name="";$website="";$avStatus="";$middleNM="";$department="";$directory_listing="";$countryNM="";$start_year="";$end_year="";$contact="";$seml="";
$profUpdate=false;$profAdd=false;$profRatingApproved=false;$profRatingRejected=false;$uniRatingApproved=false;$uniRatingRejected=false;$uniUpdate=false;$unicorSolved=false;$profcorSolved=false;


/*if uni click on update uni button*/
if (isset($_POST['edit-uni-btn'])) {

	//echo $_POST['HDuniNM']." ".$_POST['uniNickName2']." ".$_POST['cntryID']." ".$_POST['stateNM2']." ".$_POST['HDcityNM']." ".$_POST['website2']." ".$_POST['status'];

	$updateUni="UPDATE school SET school_name='$_POST[uniName2]',school_nick_name='$_POST[uniNickName2]',country_id='$_POST[cntryID]',state_name='$_POST[stateNM2]',city_name='$_POST[cityNM2]',website='$_POST[website2]',available_status='$_POST[status]' WHERE school_name='$_POST[HDuniNM]' AND city_name='$_POST[HDcityNM]'";
	$result=mysql_query($updateUni);
	if ($result===true) {
		# code...
		$uniUpdate=true;
		//echo $_POST['prb']." ".$_POST['ste'];
		$deleteUniCorrection="DELETE FROM school_correction WHERE city='$_POST[cityNM2]' AND school_name='$_POST[uniName2]' AND stu_email='$_POST[ste]' AND problem='$_POST[prb]'";
		$result=mysql_query($deleteUniCorrection);
		if ($result==true) {
		# code...
			$unicorSolved=true;
			header('location:correction.php?uniInfocorrected=true');
		}
	}
}

/*if uni click on update prof button*/
if (isset($_POST['edit-prof-btn'])) {
   
	$updateProf="UPDATE professor SET first_name='$_POST[fName]',middle_name='$_POST[MName]',last_name='$_POST[LName]',school_name='$_POST[uniName]',department='$_POST[department]',dircttory_listing='$_POST[directory]',country_name='$_POST[countryName]',email='$_POST[email]',start_year='$_POST[stYear]',end_year='$_POST[eYear]',contact='$_POST[contact]',available_status='$_POST[status]' WHERE first_name='$_POST[FNM]' AND last_name='$_POST[LNM]' AND school_name='$_POST[UNM]'";
	$result=mysql_query($updateProf);
	if ($result===true) {
		# code...
		$profUpdate=true;
		/*echo $_POST['pblm']." ".$_POST['sel']." ".$_POST['fName']." ".$_POST['LName']." ".$_POST['uniName']." ";*/
		$deleteProfCorrection="DELETE FROM prof_correction WHERE first_name='$_POST[fName]' AND last_name='$_POST[LName]' AND school_name='$_POST[uniName]' AND stu_email='$_POST[sel]' AND problem='$_POST[pblm]'";
		$result2=mysql_query($deleteProfCorrection);
		if ($result2==true) {
		# code...
			$profcorSolved=true;
			header('location:correction.php?profInfocorrected=true');
		}
	}
}

/*if user click on view professor icon on pending uni tab*/
if (isset($_GET['PCview']) && $_GET['PCview']==true) {
	# code...
	$firstName=$_GET['fName'];
	$lastName=$_GET['lName'];
	$uniName=$_GET['uniName'];
	$problem=$_GET['problem'];
	$stuEmail=$_GET['stEmail'];

	$getinfo="SELECT * FROM prof_correction WHERE first_name='$firstName' AND last_name='$lastName' AND school_name='$uniName' AND problem='$problem' AND stu_email='$stuEmail'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...
		$correction=$valOf['correction'];
	}

}
/*if user click on view university icon on pending uni tab*/
if (isset($_GET['UCview']) && $_GET['UCview']==true) {
	# code...
	$uniName=$_GET['uniName'];
	$cityNm=$_GET['city'];
	$problem=$_GET['problem'];
	$stuEmail=$_GET['stuEmail'];

	$getinfo="SELECT * FROM school_correction WHERE school_name='$uniName' AND city='$cityNm' AND problem='$problem' AND stu_email='$stuEmail'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...

		$correction=$valOf['correction'];

	}

}
/*if user ignore prof correction or uni correction*/
if (isset($_POST['ignore-prof-correction-btn']) || isset($_POST['ignore-uni-correction-btn'])) {
	# code...
	header('location:correction.php');
}
/*if user press edit uni button on view uni correction tab*/
if (isset($_POST['edit-uni-correction-btn'])) {
	# code...
	$uniName=$_POST['uni'];
	$cityNm=$_POST['city'];
	$problem=$_POST['prblm'];
	$stuEmail=$_POST['stEml'];

	$getinfo="SELECT * FROM school WHERE school_name='$uniName' AND city_name='$cityNm'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...
	$uniNickName=$valOf['school_nick_name'];
	$country_id=$valOf['country_id'];
	$state_name=$valOf['state_name'];
	$website=$valOf['website'];
	$avStatus=$valOf['available_status'];
	}
}
/*if user press edit prof button on view prof correction tab*/
if (isset($_POST['edit-prof-correction-btn'])) {
	# code...
	/*$uniName=$_POST['UNM'];
	$firstName=$_POST['FNM'];
	$lastName=$_POST['LNM'];*/

	$problem=$_POST['prblmm'];
	$seml=$_POST['steml'];

	$getinfo="SELECT * FROM professor WHERE first_name='$firstName' AND last_name='$lastName' AND school_name='$uniName'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...

		$middleNM=$valOf['middle_name'];
		$department=$valOf['department'];
		$directory_listing=$valOf['dircttory_listing'];
		$countryNM=$valOf['country_name'];
		$avStatus=$valOf['available_status'];
		$stuEmail=$valOf['email'];
		$start_year=$valOf['start_year'];
		$end_year=$valOf['end_year'];
		$contact=$valOf['contact'];
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

	<?php if(isset($_GET['profInfocorrected'])){ echo "<h4 class='alert_success'>Professor Information Corrected Successfully!</h4>"; } ?>
	<?php if(isset($_GET['uniInfocorrected'])){ echo "<h4 class='alert_success'>University Information Corrected Successfully!</h4>"; } ?>

		<!-- pending prof rating -->
		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Pending Professor's Corrections</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th>First Name</th>
	    				<th>Last Name</th>
	    				<th>University</th>
	    				<th>Problem</th> 
	    				<th>Correction</th> 
	    				<th>Stu Email</th> 
	    				<th>Action</th>
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$country_name="";
				$pending_prof_rating="SELECT * FROM prof_correction";
				$result=mysql_query($pending_prof_rating);
				while ($valOf=mysql_fetch_array($result)) {

					?>
					<tr> 
	    				<td style="overflow: hidden;"><?php echo $valOf['first_name']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['last_name']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['school_name']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['problem']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['correction']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['stu_email']; ?></td>
	    				<td><a href="?PCview=true&fName=<?php echo $valOf['first_name'].'&lName='.$valOf['last_name'].'&uniName='.$valOf['school_name'].'&problem='.$valOf['problem'].'&stEmail='.$valOf['stu_email']; ?>"><img src="images/view.png" title="View"></a></td>
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of pending prof rating -->

		<!-- pending uni rating -->
		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Pending University's Corrections</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th>University</th>
	    				<th>City</th>
	    				<th>Problem</th>
	    				<th>Correction</th> 
	    				<th>Stu Email</th> 
	    				<th>Action</th>
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$pending_uni_rating="SELECT * FROM school_correction";
				$result=mysql_query($pending_uni_rating);
				while ($valOf=mysql_fetch_array($result)) {

					?>
					<tr> 
	    				<td style="overflow: hidden;"><?php echo $valOf['school_name']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['city']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['problem']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['correction']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['stu_email']; ?></td>
	    				<td><a href="?UCview=true&uniName=<?php echo $valOf['school_name'].'&city='.$valOf['city'].'&problem='.$valOf['problem'].'&stuEmail='.$valOf['stu_email']; ?>"><img src="images/view.png" title="View"></a></td>
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of uni prof rating -->

		<!-- view prof rating -->
		<article class="module width_3_quarter <?php if(isset($_GET['PCview']) && $_GET['PCview']==true){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden; margin-left: 2% !important; max-height: 600px;">
			<header><h3 class="tabs_involved">View Prof Correction</h3>
			</header>
			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="uNM" value="<?php if(isset($_GET['PCview'])){ echo $uniName; } ?>">
					<input type="hidden" name="fNM" value="<?php if(isset($_GET['PCview'])){ echo $firstName; } ?>">
					<input type="hidden" name="lNM" value="<?php if(isset($_GET['PCview'])){ echo $lastName; } ?>">
					<input type="hidden" name="prblmm" value="<?php if(isset($_GET['PCview'])){ echo $problem; } ?>">
					<input type="hidden" name="steml" value="<?php if(isset($_GET['PCview'])){ echo $stuEmail; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>First Name:</td>
							<td><?php if(isset($_GET['PCview'])){ echo $firstName; } ?></td>
						</tr>
						<tr>
							<td>Last Name:</td>
							<td><?php if(isset($_GET['PCview'])){ echo $lastName; } ?></td>
						</tr>
						<tr>
							<td>University:</td>
							<td><?php if(isset($_GET['PCview'])){ echo $uniName; } ?></td>
						</tr>
						<tr>
							<td>Problem:</td>
							<td><?php if(isset($_GET['PCview'])){ echo $problem; } ?></td>
						</tr>
						<tr>
							<td>Correction:</td>
							<td><?php if(isset($_GET['PCview'])){ echo $correction; } ?></td>
						</tr>
						<tr>
							<td>Stu Email:</td>
							<td><?php if(isset($_GET['PCview'])){ echo $stuEmail; } ?></td>
						</tr>
						<tr>
							<td ><input type="submit" value="Edit Prof" name="edit-prof-correction-btn" style="width:100%; height: 30px;"></td>
							<td ><input type="submit" value="Ignore" name="ignore-prof-correction-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of view prof rating -->

		<!-- view uni rating -->
		<article class="module width_3_quarter <?php if(isset($_GET['UCview']) && $_GET['UCview']==true){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden; margin-left: 2% !important; max-height: 600px;">
			<header><h3 class="tabs_involved">View Uni Correction</h3>
			</header>
			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="uni" value="<?php if(isset($_GET['UCview'])){ echo $uniName; } ?>">
					<input type="hidden" name="city" value="<?php if(isset($_GET['UCview'])){ echo $cityNm; } ?>">
					<input type="hidden" name="stEml" value="<?php if(isset($_GET['UCview'])){ echo $stuEmail; } ?>">
					<input type="hidden" name="prblm" value="<?php if(isset($_GET['UCview'])){ echo $problem; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>University:</td>
							<td><?php if(isset($_GET['UCview'])){ echo $uniName; } ?></td>
						</tr>
						<tr>
							<td>City:</td>
							<td><?php if(isset($_GET['UCview'])){ echo $cityNm; } ?></td>
						</tr>
						<tr>
							<td>Problem:</td>
							<td><?php if(isset($_GET['UCview'])){ echo $problem; } ?></td>
						</tr>
						<tr>
							<td>Correction:</td>
							<td><?php if(isset($_GET['UCview'])){ echo $correction; } ?></td>
						</tr>
						<tr>
							<td>Stu stEmail:</td>
							<td><?php if(isset($_GET['UCview'])){ echo $stuEmail; } ?></td>
						</tr>
						<tr>
							<td ><input type="submit" value="Edit Uni" name="edit-uni-correction-btn" style="width:100%; height: 30px;"></td>
							<td ><input type="submit" value="Ignore" name="ignore-uni-correction-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of view uni rating -->

		<article class="module width_3_quarter <?php if(isset($_POST['edit-uni-correction-btn']) && $uniUpdate==false){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden;">
			<header><h3 class="tabs_involved">Edit University</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="HDuniNM" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $uniName; } ?>">
					<input type="hidden" name="HDcityNM" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $cityNm; } ?>">
					<input type="hidden" name="cntryID" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $country_id; } ?>">
					<input type="hidden" name="prb" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $problem; } ?>">
					<input type="hidden" name="ste" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $stuEmail; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>Name Of University</td>
							<td><input type="text" required name="uniName2" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $uniName; } ?>"></td>
						</tr>
						<tr>
							<td>University Nick name</td>
							<td><input type="text" required name="uniNickName2" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $uniNickName; } ?>"></td>
						</tr>
						<tr>
							<td>Country ID</td>
							<td>
								<input type="text" required name="countryNM2" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $country_id; } ?>">
							</td>
						</tr>
						<tr>
							<td>State/Province</td>
							<td>
								<input type="text" required name="stateNM2" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $state_name; } ?>">
							</td>
						</tr>
						<tr>
							<td>City</td>
							<td>
								<input type="text" required name="cityNM2" value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $cityNm; } ?>">
							</td>
						</tr>
						<tr>
							<td>Website</td>
							<td><input type="text" placeholder="https://" name="website2" required value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $website; } ?>"></td>
						</tr>
						<tr>
							<td>Status</td>
							<td><input type="text" placeholder="" name="status" required value="<?php if(isset($_POST['edit-uni-correction-btn'])){ echo $avStatus; } ?>"></td>
						</tr>
						<tr>
							<td colspan="2"><input type="submit" value="Apply changes" name="edit-uni-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of content manager article -->

		<article class="module width_3_quarter <?php if(isset($_POST['edit-prof-correction-btn']) && $profUpdate==false){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden; max-height: 495px !important;">
			<header><h3 class="tabs_involved">Edit Professor</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="FNM" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $firstName; } ?>">
					<input type="hidden" name="LNM" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $lastName; } ?>">
					<input type="hidden" name="UNM" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $uniName; } ?>">
					<input type="hidden" name="pblm" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $problem; } ?>">
					<input type="hidden" name="sel" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $seml; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>First Name</td>
							<td><input type="text" required name="fName" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $firstName; } ?>"></td>
						</tr>
						<tr>
							<td>Middle Name</td>
							<td><input type="text" name="MName" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $middleNM; } ?>"></td>
						</tr>
						<tr>
							<td>Last Name</td>
							<td>
								<input type="text" required name="LName" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $lastName; } ?>">
							</td>
						</tr>
						<tr>
							<td>University</td>
							<td>
								<input type="text" required name="uniName" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $uniName; } ?>">
							</td>
						</tr>
						<tr>
							<td>Department</td>
							<td>
								<input type="text" required name="department" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $department; } ?>">
							</td>
						</tr>
						<tr>
							<td>Directory Listing</td>
							<td><input type="text"  name="directory" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $directory_listing; } ?>"></td>
						</tr>
						<tr>
							<td>Country Name</td>
							<td><input type="text"  name="countryName" required value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $countryNM; } ?>"></td>
						</tr>
						<tr>
							<td>Email</td>
							<td><input type="text"  name="email" required value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $stuEmail; } ?>"></td>
						</tr>
						<tr>
							<td>Start Year</td>
							<td><input type="text" name="stYear" required value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $start_year; } ?>"></td>
						</tr>
						<tr>
							<td>End Year</td>
							<td><input type="text" name="eYear" value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $end_year; } ?>"></td>
						</tr>
						<tr>
							<td>Contact</td>
							<td><input type="text"  name="contact" required value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $contact; } ?>"></td>
						</tr>
						<tr>
							<td>Status</td>
							<td><input type="text" name="status" required value="<?php if(isset($_POST['edit-prof-correction-btn'])){ echo $avStatus; } ?>"></td>
						</tr>
						<tr>
							<td colspan="2"><input type="submit" value="Apply changes" name="edit-prof-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		</article><!-- end of content manager article -->

		<div class="clear"></div>
		<div class="spacer"></div>
	</section>

</body>

</html>