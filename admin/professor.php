<?php

//including connection file
include('../imp_files/con_file.php');

session_start();
if (!isset($_SESSION['user_name'])) {
	# code...
	header('location:index.php');
}

$fName="";$MName="";$lName="";$univNM="";$department="";$directory_listing="";$countryNM="";$email="";$start_year="";$end_year="";$contact="";$avStatus="";
$profUpdate=false;$profAdd=false;$profapproved=false;$profRejected=false;

/*if user click on edit prof icon on approve uni tab*/
if (isset($_GET['edit']) && $_GET['edit']==true) {
	# code...
	$univNM=$_GET['uniName'];
	$fName=$_GET['fName'];
	$lName=$_GET['lName'];

	$getinfo="SELECT * FROM professor WHERE first_name='$fName' AND last_name='$lName' AND school_name='$univNM'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...

		$middleNM=$valOf['middle_name'];
		$department=$valOf['department'];
		$directory_listing=$valOf['dircttory_listing'];
		$countryNM=$valOf['country_name'];
		$avStatus=$valOf['available_status'];
		$email=$valOf['email'];
		$start_year=$valOf['start_year'];
		$end_year=$valOf['end_year'];
		$contact=$valOf['contact'];

	}
}

/*if user click on view professor icon on pending uni tab*/
if (isset($_GET['view']) && $_GET['view']==true) {
	# code...
	$univNM=$_GET['uniName'];
	$fName=$_GET['fName'];
	$lName=$_GET['lName'];

	$getinfo="SELECT * FROM professor WHERE first_name='$fName' AND last_name='$lName' AND school_name='$univNM'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...
		$MName=$valOf['middle_name'];
		$department=$valOf['department'];
		$directory_listing=$valOf['dircttory_listing'];
		$countryNM=$valOf['country_name'];
		$email=$valOf['email'];
		$start_year=$valOf['start_year'];
		$end_year=$valOf['end_year'];
		$contact=$valOf['contact'];
		$avStatus=$valOf['available_status'];
	}

}
/*if user click on approve prof icon on pending uni tab*/
if (isset($_GET['approve']) && $_GET['approve']==true) {

	$univNM=$_GET['uniName'];
	$fName=$_GET['fName'];
	$lName=$_GET['lName'];

	$approveProf="UPDATE professor SET available_status='approved' WHERE first_name='$fName' AND last_name='$lName' AND school_name='$univNM'";
	$result=mysql_query($approveProf);
	if ($result===true) {
		# code...
		$profapproved=true;
	}
}

/*if user click on approve professor button on view uni tab*/
if (isset($_POST['approve-prof-btn'])) {
	# code...
	$approveProf="UPDATE professor SET available_status='approved' WHERE first_name='$fName' AND last_name='$lName' AND school_name='$univNM'";
	$result=mysql_query($approveProf);
	if ($result===true) {
		# code...
		$profapproved=true;
		header('location:professor.php?profApproved=true');
	}
}

/*if user click on reject professor icon on pending tab*/
if (isset($_GET['reject']) && $_GET['reject']==true) {
	# code...
	$univNM=$_GET['uniName'];
	$fName=$_GET['fName'];
	$lName=$_GET['lName'];

	$rejectProf="DELETE FROM professor WHERE first_name='$fName' AND last_name='$lName' AND school_name='$univNM'";
	$result=mysql_query($rejectProf);
	if ($result==true) {
		# code...
		$profRejected=true;
	}
}

/*if user click on reject professor button on view tab*/
if (isset($_POST['reject-prof-btn'])) {
	# code...
	$rejectProf="DELETE FROM professor WHERE first_name='$fName' AND last_name='$lName' AND school_name='$univNM'";
	$result=mysql_query($rejectProf);
	if ($result==true) {
		# code...
		$profRejected=true;
		header('location:professor.php?profReject=true');
	}
}

/*if click on add professor button*/
if (isset($_POST['add-prof-btn'])) {
	# code...
	$fName=$_POST['fName'];$MName=$_POST['MName'];$lName=$_POST['LName'];$univNM=$_POST['uniName'];$department=$_POST['department'];$directory_listing=$_POST['directory'];$countryNM=$_POST['countryName'];$email=$_POST['email'];$start_year=$_POST['stYear'];$end_year=$_POST['eYear'];$contact=$_POST['contact'];

	$addProf="INSERT INTO professor(first_name,middle_name,last_name,school_name,department,dircttory_listing,country_name,email,start_year,end_year,contact,available_status) VALUES ('$fName','$MName','$lName','$univNM','$department','$directory_listing','$countryNM','$email','$start_year','$end_year','$contact','approved')";
	$result=mysql_query($addProf);
	if ($result) {
		# code...
		$profAdd=true;
	}
}

/*if uni click on update prof button*/
if (isset($_POST['edit-prof-btn'])) {

	$updateProf="UPDATE professor SET first_name='$_POST[fName]',middle_name='$_POST[MName]',last_name='$_POST[LName]',school_name='$_POST[uniName]',department='$_POST[department]',dircttory_listing='$_POST[directory]',country_name='$_POST[countryName]',email='$_POST[email]',start_year='$_POST[stYear]',end_year='$_POST[eYear]',contact='$_POST[contact]',available_status='$_POST[status]' WHERE first_name='$_POST[HDFNM]' AND last_name='$_POST[HDLNM]' AND school_name='$_POST[HDuniNM]'";
	$result=mysql_query($updateProf);
	if ($result===true) {
		# code...
		$profUpdate=true;
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
		
		<?php if($profUpdate=="true"){ echo "<h4 class='alert_success'>Professor Updated Successfully!</h4>"; } ?>
		<?php if($profAdd=="true"){ echo "<h4 class='alert_success'>Professor Added Successfully!</h4>"; } ?>
		<?php if($profapproved=="true" || isset($_GET['profApproved'])){ echo "<h4 class='alert_success'>Professor Approved Successfully!</h4>"; } ?>
		<?php if($profRejected=="true" || isset($_GET['profReject'])){ echo "<h4 class='alert_success'>Professor Rejected Successfully!</h4>"; } ?>

		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Search Approved Professors</h3>
			<ul class="tabs">
				<form action="#" method="POST">
					<input type="text" placeholder="Professor name" name="profName" class="mytb"><span style="margin:0px 40px;">OR</span>
					<select name="country" id="country" onchange="loadDoc('../assets/myAjax/fetch_data.php?country='+this.value, getUnis)" class="myselect" style="border-left: 1px solid gray">
						<option value="">Select Country</option>
						<?php
						$country="SELECT * FROM country";
						$country_res=mysql_query($country);
						while ($valOF=mysql_fetch_array($country_res)) {
							echo "<option value='$valOF[country_name]'>".$valOF['country_name']."</option>";
						  } ?>
					</select>
					<select name="uni" id="uniSelect" class="myselect">
						<option value="">Select University</option>
					</select>
					<input type="submit" value="Search Professors" name="seach-prof">
				</form>
			</ul>
			</header>

			<div class="tab_container">
				<div id="" class="tab_content">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th>First Name</th>
	    				<th>Middle Name</th>
	    				<th>Last Name</th>
	    				<th>School Name</th> 
	    				<th>Department</th> 
	    				<th>Directory</th> 
	    				<th>Country</th>
	    				<th>Email</th>
	    				<th>Start Year</th>
	    				<th>End Year</th>
	    				<th>Contact #</th>
	    				<th>Action</th>
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$uniQuery="";
				if (!isset($_POST['seach-prof'])) {

					$uniQuery="SELECT * FROM professor WHERE available_status='approved'";
				}
				else{
					if ($_POST['profName']=="" && $_POST['country']=="" && $_POST['uni']=="") {
						# code...
						$uniQuery="SELECT * FROM professor WHERE available_status='approved'";
					}
					/*if search by name*/
					if ($_POST['profName']!="" && $_POST['country']=="" && $_POST['uni']=="") {
						# code...
						$uniQuery="SELECT * FROM professor WHERE (first_name LIKE '%$_POST[profName]%' OR last_name LIKE '%$_POST[profName]%') AND available_status='approved'";
					}
					/*if search by country*/
					if ($_POST['profName']=="" && $_POST['country']!="" && $_POST['uni']=="") {
						# code...
						$uniQuery="SELECT * FROM professor WHERE country_name='$_POST[country]' AND available_status='approved'";
					}
					/*if search by state*/
					if ($_POST['profName']=="" && $_POST['country']!="" && $_POST['uni']!=="") {
						$uniQuery="SELECT * FROM professor WHERE country_name='$_POST[country]' AND school_name='$_POST[uni]' AND available_status='approved'";
					}
				}

				$country_name="";
				$result=mysql_query($uniQuery);
				while ($valOf=mysql_fetch_array($result)) {
					?>
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
	    				<td><a href="?edit=true&fName=<?php echo $valOf['first_name']."&lName=".$valOf['last_name']."&uniName=".$valOf['school_name']; ?>"><img src="images/change_uni.png" title="Edit"></a></td> 
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of approved universities article -->
		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Pendings</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<table class="tablesorter" cellspacing="0" style="table-layout: fixed;"> 
				<thead> 
					<tr> 
	    				<th>First Name</th>
	    				<th>Middle Name</th>
	    				<th>Last Name</th>
	    				<th>School Name</th> 
	    				<th>Department</th> 
	    				<th>Directory</th> 
	    				<th>Country</th>
	    				<th>Email</th>
	    				<th>Start Year</th>
	    				<th>End Year</th>
	    				<th>Contact #</th>
	    				<th>Action</th>
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$country_name="";
				$pending_unis="SELECT * FROM professor WHERE available_status='pending'";
				$result=mysql_query($pending_unis);
				while ($valOf=mysql_fetch_array($result)) {

					/*geting country name*/
					 /*$find_country="SELECT * FROM country WHERE country_id=".$valOf['country_id'];
					 $ress=mysql_query($find_country);
					 while ($val=mysql_fetch_array($ress)) { $country_name=$val['country_name']; }*/
					 /*end of getting country name*/

					?>
					<tr> 
	    				<td style="overflow: hidden;"><?php echo $valOf['first_name']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['middle_name']; ?></td> 
	    				<td style="overflow: hidden;"><?php echo $valOf['last_name']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['school_name']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['department']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['dircttory_listing']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['country_name']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['email']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['start_year']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['end_year']; ?></td>
	    				<td style="overflow: hidden;"><?php echo $valOf['contact']; ?></td> 
	    				<td><a href="?view=true&fName=<?php echo $valOf['first_name']."&lName=".$valOf['last_name']."&uniName=".$valOf['school_name']; ?>"><img src="images/view.png" title="View"></a> <a href="?approve=true&fName=<?php echo $valOf['first_name']."&lName=".$valOf['last_name']."&uniName=".$valOf['school_name']; ?>"><img src="images/icn_alert_success.png" title="Approve"></a> <a href="?reject=true&fName=<?php echo $valOf['first_name']."&lName=".$valOf['last_name']."&uniName=".$valOf['school_name']; ?>"><img src="images/icn_alert_error.png" title="Reject"></a></td>
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of content manager article -->

		<article class="module width_3_quarter <?php if(isset($_GET['add_prof']) && $profAdd==false){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden;">
			<header><h3 class="tabs_involved">Add Professor</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<table style="border-spacing: 10px;">
						<tr>
							<td>First Name</td>
							<td><input type="text" required name="fName" style="width:100%;"></td>
						</tr>
						<tr>
							<td>Middle Name</td>
							<td><input type="text" name="MName" style="width:100%;"></td>
						</tr>
						<tr>
							<td>Last Name</td>
							<td><input type="text" required name="LName" style="width:100%;"></td>
						</tr>
						<tr>
							<td>Email</td>
							<td><input type="text" required name="email" style="width:100%;"></td>
						</tr>
						<tr>
							<td>Country</td>
							<td>
								<Select name="countryName" required onchange="loadDoc('../assets/myAjax/fetch_data.php?country='+this.value, getUnis2)" style="width:100%;">
									<option value="">Select Country</option>
									<?php
									$country="SELECT * FROM country";
									$country_res=mysql_query($country);
									while ($valOF=mysql_fetch_array($country_res)) {
									echo "<option value='$valOF[country_name]'>".$valOF['country_name']."</option>";
						  			} ?>
								</Select>
							</td>
						</tr>
						<tr>
							<td>University Name</td>
							<td>
								<Select name="uniName" required id="uniSelect2" style="width:100%;">
									<option value="">Select University</option>
								</Select>
							</td>
						</tr>
						<tr>
							<td>Department</td>
							<td>
								<Select name="department" required  style="width:100%;">
									<option value="">Select department</option>
                      				<!-- geting department names from database -->
                        			<?php
                          			$countryQry="SELECT * FROM department";
                          			$exeQry=mysql_query($countryQry);
                          			while ($res=mysql_fetch_array($exeQry)) { ?>
                            		<option value="<?php echo $res['department_name']; ?>"><?php echo $res['department_name']; ?></option>
                        			<?php } ?>
								</Select>
							</td>
						</tr>
						<tr>
							<td>Start Year</td>
							<td>
								<Select name="stYear" style="width:100%;" required>
								  <option value="">Select Year</option>
			                      <option value="1990" >1990</option>
			                      <option value="1991" >1991</option>
			                      <option value="1992" >1992</option>
			                      <option value="1993" >1993</option>
			                      <option value="1994" >1994</option>
			                      <option value="1995" >1995</option>
			                      <option value="1996" >1996</option>
			                      <option value="1997" >1997</option>
			                      <option value="1998" >1998</option>
			                      <option value="1999" >1999</option>
			                      <option value="2000" >2000</option>
			                      <option value="2001" >2001</option>
			                      <option value="2002" >2002</option>
			                      <option value="2003" >2003</option>
			                      <option value="2004" >2004</option>
			                      <option value="2005" >2005</option>
			                      <option value="2006" >2006</option>
			                      <option value="2007" >2007</option>
			                      <option value="2008" >2008</option>
			                      <option value="2009" >2009</option>
			                      <option value="2010" >2010</option>
			                      <option value="2011" >2011</option>
			                      <option value="2012" >2012</option>
			                      <option value="2013" >2013</option>
			                      <option value="2014" >2014</option>
			                      <option value="2015" >2015</option>
			                      <option value="2016" >2016</option>
								</Select>
							</td>
						</tr>
						<tr>
							<td>End Year</td>
							<td>
								<Select name="eYear" style="width:100%;">
								  <option value="">Select Year</option>
			                      <option value="2016" >2016</option>
			                      <option value="2015" >2015</option>
			                      <option value="2014" >2014</option>
			                      <option value="2013" >2013</option>
			                      <option value="2012" >2012</option>
			                      <option value="2011" >2011</option>
			                      <option value="2010" >2010</option>
			                      <option value="2009" >2009</option>
			                      <option value="2008" >2008</option>
			                      <option value="2007" >2007</option>
			                      <option value="2006" >2006</option>
			                      <option value="2005" >2005</option>
			                      <option value="2004" >2004</option>
			                      <option value="2003" >2003</option>
			                      <option value="2002" >2002</option>
			                      <option value="2001" >2001</option>
			                      <option value="2000" >2000</option>
			                      <option value="1999" >1999</option>
			                      <option value="1998" >1998</option>
			                      <option value="1997" >1997</option>
			                      <option value="1996" >1996</option>
			                      <option value="1995" >1995</option>
			                      <option value="1994" >1994</option>
			                      <option value="1993" >1993</option>
			                      <option value="1992" >1992</option>
			                      <option value="1991" >1991</option>
			                      <option value="1990" >1990</option>
								</Select>
							</td>
						</tr>
						<tr>
							<td>Contact #</td>
							<td><input type="text" name="contact" required style="width:100%;"></td>
						</tr>
						<tr>
							<td>Directory Listing</td>
							<td><input type="text" name="directory" style="width:100%;"></td>
						</tr>
						<tr>
							<td colspan="2"><input type="submit" value="Submit" name="add-prof-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of content manager article -->
		<article class="module width_3_quarter <?php if(isset($_GET['edit']) && $_GET['edit']==true && $profUpdate==false){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden; max-height: 495px !important;">
			<header><h3 class="tabs_involved">Edit Professor</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="HDFNM" value="<?php if(isset($_GET['edit'])){ echo $fName; } ?>">
					<input type="hidden" name="HDLNM" value="<?php if(isset($_GET['edit'])){ echo $lName; } ?>">
					<input type="hidden" name="HDuniNM" value="<?php if(isset($_GET['edit'])){ echo $univNM; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>First Name</td>
							<td><input type="text" required name="fName" value="<?php if(isset($_GET['edit'])){ echo $fName; } ?>"></td>
						</tr>
						<tr>
							<td>Middle Name</td>
							<td><input type="text" name="MName" value="<?php if(isset($_GET['edit'])){ echo $middleNM; } ?>"></td>
						</tr>
						<tr>
							<td>Last Name</td>
							<td>
								<input type="text" required name="LName" value="<?php if(isset($_GET['edit'])){ echo $lName; } ?>">
							</td>
						</tr>
						<tr>
							<td>University</td>
							<td>
								<input type="text" required name="uniName" value="<?php if(isset($_GET['edit'])){ echo $univNM; } ?>">
							</td>
						</tr>
						<tr>
							<td>Department</td>
							<td>
								<input type="text" required name="department" value="<?php if(isset($_GET['edit'])){ echo $department; } ?>">
							</td>
						</tr>
						<tr>
							<td>Directory Listing</td>
							<td><input type="text"  name="directory" value="<?php if(isset($_GET['edit'])){ echo $directory_listing; } ?>"></td>
						</tr>
						<tr>
							<td>Country Name</td>
							<td><input type="text"  name="countryName" required value="<?php if(isset($_GET['edit'])){ echo $countryNM; } ?>"></td>
						</tr>
						<tr>
							<td>Email</td>
							<td><input type="text"  name="email" required value="<?php if(isset($_GET['edit'])){ echo $email; } ?>"></td>
						</tr>
						<tr>
							<td>Start Year</td>
							<td><input type="text" name="stYear" required value="<?php if(isset($_GET['edit'])){ echo $start_year; } ?>"></td>
						</tr>
						<tr>
							<td>End Year</td>
							<td><input type="text" name="eYear" value="<?php if(isset($_GET['edit'])){ echo $end_year; } ?>"></td>
						</tr>
						<tr>
							<td>Contact</td>
							<td><input type="text"  name="contact" required value="<?php if(isset($_GET['edit'])){ echo $contact; } ?>"></td>
						</tr>
						<tr>
							<td>Status</td>
							<td><input type="text" name="status" required value="<?php if(isset($_GET['edit'])){ echo $avStatus; } ?>"></td>
						</tr>
						<tr>
							<td colspan="2"><input type="submit" value="Apply changes" name="edit-prof-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of content manager article -->

		<article class="module width_3_quarter <?php if(isset($_GET['view']) && $_GET['view']==true){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden; margin-left: 2% !important">
			<header><h3 class="tabs_involved">View Professor</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<table style="border-spacing: 10px;">
					<input type="hidden" name="HDFNM" value="<?php if(isset($_GET['view'])){ echo $fName; } ?>">
					<input type="hidden" name="HDLNM" value="<?php if(isset($_GET['view'])){ echo $lName; } ?>">
					<input type="hidden" name="HDuniNM" value="<?php if(isset($_GET['view'])){ echo $univNM; } ?>">
						<tr>
							<td>First Name:</td>
							<td><?php if(isset($_GET['view'])){ echo $fName; } ?></td>
						</tr>
						<tr>
							<td>Middle Name:</td>
							<td><?php if(isset($_GET['view'])){ echo $MName; } ?></td>
						</tr>
						<tr>
							<td>Last Name:</td>
							<td><?php if(isset($_GET['view'])){ echo $lName; } ?></td>
						</tr>
						<tr>
							<td>University:</td>
							<td><?php if(isset($_GET['view'])){ echo $univNM; } ?></td>
						</tr>
						<tr>
							<td>Department:</td>
							<td><?php if(isset($_GET['view'])){ echo $department; } ?></td>
						</tr>
						<tr>
							<td>Directory Listing:</td>
							<td><?php if(isset($_GET['view'])){ echo $directory_listing; } ?></td>
						</tr>
						<tr>
							<td>Country Name:</td>
							<td><?php if(isset($_GET['view'])){ echo $countryNM; } ?></td>
						</tr>
						<tr>
							<td>Email:</td>
							<td><?php if(isset($_GET['view'])){ echo $email; } ?></td>
						</tr>
						<tr>
							<td>Start Year:</td>
							<td><?php if(isset($_GET['view'])){ echo $start_year; } ?></td>
						</tr>
						<tr>
							<td>End Year:</td>
							<td><?php if(isset($_GET['view'])){ echo $end_year; } ?></td>
						</tr>
						<tr>
							<td>Contact:</td>
							<td><?php if(isset($_GET['view'])){ echo $contact; } ?></td>
						</tr>
						<tr>
							<td ><input type="submit" value="Approve" name="approve-prof-btn" style="width:100%; height: 30px;"></td>
							<td ><input type="submit" value="Reject" name="reject-prof-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of content manager article -->

		<div class="clear"></div>
		<div class="spacer"></div>
	</section>



<script type="text/javascript">

function loadDoc(url, cfunc) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      cfunc(xhttp);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


function getUnis(xhttp) {
  document.getElementById("uniSelect").innerHTML = xhttp.responseText;
}
function getUnis2(xhttp) {
  document.getElementById("uniSelect2").innerHTML = xhttp.responseText;
}

function getStates2(xhttp) {
  document.getElementById("stateSelect2").innerHTML = xhttp.responseText;
}

function getCities2(xhttp) {
  document.getElementById("citySelect2").innerHTML = xhttp.responseText;
}

</script>

</body>

</html>