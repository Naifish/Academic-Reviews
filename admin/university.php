<?php

//including connection file
include('../imp_files/con_file.php');

session_start();
if (!isset($_SESSION['user_name'])) {
	# code...
	header('location:index.php');
}

$univNM="";$cityNM="";$uniNickName="";$country_id="";$state_name="";$website="";$country_name="";$avStatus="";
$uniUpdate=false;$uniAdd=false;$uniapproved=false;$uniRejected=false;

/*if user click on edit university icon on approve uni tab*/
if (isset($_GET['edit']) && $_GET['edit']==true) {
	# code...
	$univNM=$_GET['uni'];
	$cityNM=$_GET['city'];

	$getinfo="SELECT * FROM school WHERE school_name='$univNM' AND city_name='$cityNM'";
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

/*if user click on view university icon on pending uni tab*/
if (isset($_GET['view']) && $_GET['view']==true) {
	# code...
	$univNM=$_GET['uni'];
	$cityNM=$_GET['city'];

	$getinfo="SELECT * FROM school WHERE school_name='$univNM' AND city_name='$cityNM'";
	$result=mysql_query($getinfo);
	while ($valOf=mysql_fetch_array($result)) {
		# code...
		$uniNickName=$valOf['school_nick_name'];
		$country_id=$valOf['country_id'];
		$state_name=$valOf['state_name'];
		$website=$valOf['website'];
	}


	/*getting country name*/
	$getName="SELECT s.country_id,c.country_id,c.country_name FROM school s,country c WHERE c.country_id=s.country_id AND c.country_id='$country_id'";
	$NameResult=mysql_query($getName);
	while ($valOf=mysql_fetch_array($NameResult)) {
		# code...
		$country_name=$valOf['country_name'];
	}
	/*end of getting country name*/


}

/*if user click on approve university icon on pending uni tab*/
if (isset($_GET['approve']) && $_GET['approve']==true) {

	$univNM=$_GET['uni'];
	$cityNM=$_GET['city'];

	$approveUni="UPDATE school SET available_status='approved' WHERE school_name='$_GET[uni]' AND city_name='$_GET[city]'";
	$result=mysql_query($approveUni);
	if ($result===true) {
		# code...
		$uniapproved=true;
	}
}

/*if user click on approve university button on view uni tab*/
if (isset($_POST['approve-uni-btn'])) {
	# code...
	$approveUni="UPDATE school SET available_status='approved' WHERE school_name='$_POST[uniNamee]' AND city_name='$_POST[cityNamee]'";
	$result=mysql_query($approveUni);
	if ($result===true) {
		# code...
		$uniapproved=true;
		header('location:university.php?uniApproved=true');
	}
}

/*if user click on reject university icon on pending tab*/
if (isset($_GET['reject']) && $_GET['reject']==true) {
	# code...
	$univNM=$_GET['uni'];
	$cityNM=$_GET['city'];

	$rejectUni="DELETE FROM school WHERE school_name='$_GET[uni]' AND city_name='$_GET[city]'";
	$result=mysql_query($rejectUni);
	if ($result==true) {
		# code...
		$uniRejected=true;
	}
}

/*if user click on reject university button on view tab*/
if (isset($_POST['reject-uni-btn'])) {
	# code...
	$rejectUni="DELETE FROM school WHERE school_name='$_POST[uniNamee]' AND city_name='$_POST[cityNamee]'";
	$result=mysql_query($rejectUni);
	if ($result==true) {
		# code...
		$uniRejected=true;
		header('location:university.php?uniRejected=true');
	}
}

/*if click on add university button*/
if (isset($_POST['add-uni-btn'])) {
	# code...

	$country_id="";

	
	/*getting country id*/
	$getID="SELECT * FROM country WHERE country_name='$_POST[country]'";
	$IDResult=mysql_query($getID);
	while ($valOf=mysql_fetch_array($IDResult)) {
		# code...
		$country_id=$valOf['country_id'];
	}
	/*end of getting country id*/
	$univNM=$_POST['uniName'];
	$uniNickName=$_POST['uniNickName'];
	$state_name=$_POST['state'];
	$cityNM=$_POST['city'];
	$website=$_POST['website'];

	$addUni="INSERT INTO school(school_name,school_nick_name,country_id,state_name,city_name,website,available_status) VALUES ('$univNM','$uniNickName','$country_id','$state_name','$cityNM','$website','approved')";
	$result=mysql_query($addUni);
	if ($result) {
		# code...
		$uniAdd=true;
	}
}

/*if uni click on update uni button*/
if (isset($_POST['edit-uni-btn'])) {

	$updateUni="UPDATE school SET school_name='$_POST[uniName2]',school_nick_name='$_POST[uniNickName2]',country_id='$country_id',state_name='$_POST[stateNM2]',city_name='$_POST[cityNM2]',website='$_POST[website2]',available_status='$_POST[status]' WHERE school_name='$_POST[HDuniNM]' AND city_name='$_POST[HDcityNM]'";
	$result=mysql_query($updateUni);
	if ($result===true) {
		# code...
		$uniUpdate=true;
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
		
		<?php if($uniUpdate=="true"){ echo "<h4 class='alert_success'>University Updated Successfully!</h4>"; } ?>
		<?php if($uniAdd=="true"){ echo "<h4 class='alert_success'>University Added Successfully!</h4>"; } ?>
		<?php if($uniapproved=="true" || isset($_GET['uniApproved'])){ echo "<h4 class='alert_success'>University Approved Successfully!</h4>"; } ?>
		<?php if($uniRejected=="true" || isset($_GET['uniRejected'])){ echo "<h4 class='alert_success'>University Rejected Successfully!</h4>"; } ?>

		<article class="module width_3_quarter">
			<header><h3 class="tabs_involved">Search Approved universities</h3>
			<ul class="tabs">
				<form action="#" method="POST">
					<input type="text" placeholder="University name" name="uniName" class="mytb"><span style="margin:0px 20px;">OR</span>
					<select name="country" id="country" onchange="loadDoc('../assets/myAjax/fetch_data.php?cntry='+this.value, getStates)" class="myselect">
						<option value="">Select Country</option>
						<?php
						$country="SELECT * FROM country";
						$country_res=mysql_query($country);
						while ($valOF=mysql_fetch_array($country_res)) {
							echo "<option value='$valOF[country_name]'>".$valOF['country_name']."</option>";
						  } ?>
					</select>
					<select name="state" id="stateSelect" onchange="loadDoc('../assets/myAjax/fetch_data.php?state='+this.value, getCities)" class="myselect">
						<option value="">Select State/Province</option>
					</select>
					<select name="city" class="myselect" id="citySelect">
						<option value="">Select City</option>
					</select>
					<input type="submit" value="Search universities" name="seach-uni">
				</form>
			</ul>
			</header>

			<div class="tab_container">
				<div id="" class="tab_content">
				<table class="tablesorter" cellspacing="0"> 
				<thead> 
					<tr> 
	    				<th>Uni Name</th> 
	    				<th>Uni Nick Nmae</th> 
	    				<th>Country Name</th> 
	    				<th>State Name</th> 
	    				<th>City Name</th> 
	    				<th>Website</th> 
	    				<th>Action</th> 
					</tr> 
				</thead> 
				<tbody>
				<?php
				
				$uniQuery="";
				if (!isset($_POST['seach-uni'])) {

					$uniQuery="SELECT * FROM school WHERE available_status='approved'";
				}
				else{
					if ($_POST['uniName']=="" && $_POST['country']=="" && $_POST['state']=="" && $_POST['city']=="") {
						# code...
						$uniQuery="SELECT * FROM school WHERE available_status='approved'";
					}
					/*if search by name*/
					if ($_POST['uniName']!="" && $_POST['country']=="" && $_POST['state']=="" && $_POST['city']=="") {
						# code...
						$uniQuery="SELECT * FROM school WHERE (school_name LIKE '%$_POST[uniName]%' OR school_nick_name LIKE '%$_POST[uniName]%') AND available_status='approved'";
					}
					/*if search by country*/
					if ($_POST['uniName']=="" && $_POST['country']!="" && $_POST['state']=="" && $_POST['city']=="") {
						# code...
						$uniQuery="SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,s.website,s.available_status,c.country_id,c.country_name FROM country c,school s WHERE s.country_id=c.country_id AND s.available_status='approved' AND c.country_name='$_POST[country]'";
					}
					/*if search by state*/
					if ($_POST['uniName']=="" && $_POST['country']!="" && $_POST['state']!=="" && $_POST['city']=="") {
						$uniQuery="SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,s.website,s.available_status,c.country_id,c.country_name FROM country c,school s WHERE s.country_id=c.country_id AND s.available_status='approved' AND c.country_name='$_POST[country]' AND s.state_name='$_POST[state]'";
					}
					/*if search by city name*/
					if ($_POST['uniName']=="" && $_POST['country']!="" && $_POST['state']!=="" && $_POST['city']!="") {
						$uniQuery="SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,s.website,s.available_status,c.country_id,c.country_name FROM country c,school s WHERE s.country_id=c.country_id AND s.available_status='approved' AND c.country_name='$_POST[country]' AND s.state_name='$_POST[state]' AND s.city_name='$_POST[city]'";
					}
				}

				$country_name="";
				$result=mysql_query($uniQuery);
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
	    				<td><a href="?edit=true&uni=<?php echo $valOf['school_name']."&city=".$valOf['city_name']; ?>"><img src="images/change_uni.png" title="Edit"></a></td> 
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
				<table class="tablesorter" cellspacing="0"> 
				<thead> 
					<tr> 
	    				<th>Uni Name</th> 
	    				<th>Uni Nick Nmae</th> 
	    				<th>Country Name</th> 
	    				<th>State Name</th> 
	    				<th>City Name</th> 
	    				<th>Website</th> 
	    				<th>Action</th> 
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
	    				<td><a href="?view=true&uni=<?php echo $valOf['school_name']."&city=".$valOf['city_name']; ?>"><img src="images/view.png" title="View"></a> <a href="?approve=true&uni=<?php echo $valOf['school_name']."&city=".$valOf['city_name']; ?>"><img src="images/icn_alert_success.png" title="Approve"></a> <a href="?reject=true&uni=<?php echo $valOf['school_name']."&city=".$valOf['city_name']; ?>"><img src="images/icn_alert_error.png" title="Reject"></a></td>
					</tr>  
				<?php } ?> 
				</tbody> 
				</table>

				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of content manager article -->

		<article class="module width_3_quarter <?php if(isset($_GET['add_uni']) && $uniAdd==false){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden;">
			<header><h3 class="tabs_involved">Add University</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<table style="border-spacing: 10px;">
						<tr>
							<td>Name Of University</td>
							<td><input type="text" required name="uniName"></td>
						</tr>
						<tr>
							<td>University Nick name</td>
							<td><input type="text" required name="uniNickName"></td>
						</tr>
						<tr>
							<td>Country</td>
							<td>
								<Select name="country" required onchange="loadDoc('../assets/myAjax/fetch_data.php?cntry='+this.value, getStates2)" style="width:100%;">
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
							<td>State/Province</td>
							<td>
								<Select name="state" required id="stateSelect2" onchange="loadDoc('../assets/myAjax/fetch_data.php?state='+this.value, getCities2)" style="width:100%;">
									<option value="">Select State/Province</option>
								</Select>
							</td>
						</tr>
						<tr>
							<td>City</td>
							<td>
								<Select name="city" required id="citySelect2" style="width:100%;">
									<option value="">Select City</option>
								</Select>
							</td>
						</tr>
						<tr>
							<td>Website</td>
							<td><input type="text" placeholder="https://" name="website" required></td>
						</tr>
						<tr>
							<td colspan="2"><input type="submit" value="Submit" name="add-uni-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of content manager article -->
		<article class="module width_3_quarter <?php if(isset($_GET['edit']) && $_GET['edit']==true && $uniUpdate==false){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden;">
			<header><h3 class="tabs_involved">Edit University</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<input type="hidden" name="HDuniNM" value="<?php if(isset($_GET['edit'])){ echo $univNM; } ?>">
					<input type="hidden" name="HDcityNM" value="<?php if(isset($_GET['edit'])){ echo $cityNM; } ?>">
					<table style="border-spacing: 10px;">
						<tr>
							<td>Name Of University</td>
							<td><input type="text" required name="uniName2" value="<?php if(isset($_GET['edit'])){ echo $univNM; } ?>"></td>
						</tr>
						<tr>
							<td>University Nick name</td>
							<td><input type="text" required name="uniNickName2" value="<?php if(isset($_GET['edit'])){ echo $uniNickName; } ?>"></td>
						</tr>
						<tr>
							<td>Country ID</td>
							<td>
								<input type="text" required name="countryNM2" value="<?php if(isset($_GET['edit'])){ echo $country_id; } ?>">
							</td>
						</tr>
						<tr>
							<td>State/Province</td>
							<td>
								<input type="text" required name="stateNM2" value="<?php if(isset($_GET['edit'])){ echo $state_name; } ?>">
							</td>
						</tr>
						<tr>
							<td>City</td>
							<td>
								<input type="text" required name="cityNM2" value="<?php if(isset($_GET['edit'])){ echo $cityNM; } ?>">
							</td>
						</tr>
						<tr>
							<td>Website</td>
							<td><input type="text" placeholder="https://" name="website2" required value="<?php if(isset($_GET['edit'])){ echo $website; } ?>"></td>
						</tr>
						<tr>
							<td>Status</td>
							<td><input type="text" placeholder="" name="status" required value="<?php if(isset($_GET['edit'])){ echo $avStatus; } ?>"></td>
						</tr>
						<tr>
							<td colspan="2"><input type="submit" value="Apply changes" name="edit-uni-btn" style="width:100%; height: 30px;"></td>
						</tr>
					</table>
				</form>
				</div><!-- end of #tab2 -->
				
			</div><!-- end of .tab_container -->
		
		</article><!-- end of content manager article -->

		<article class="module width_3_quarter <?php if(isset($_GET['view']) && $_GET['view']==true){ echo 'showw'; }else{ echo 'hidee'; } ?>" style="width:30%; overflow: hidden; margin-left: 2% !important">
			<header><h3 class="tabs_involved">View University</h3>
			</header>

			<div class="tab_container">		
				<div id="" class="tab_connt">
				<form action="#" method="POST">
					<table style="border-spacing: 10px;">
					<input type="hidden" name="uniNamee" value="<?php if(isset($_GET['view'])){ echo $univNM; } ?>">
					<input type="hidden" name="cityNamee" value="<?php if(isset($_GET['view'])){ echo $cityNM; } ?>">
						<tr>
							<td>Name Of University:</td>
							<td><?php if(isset($_GET['view'])){ echo $univNM; } ?></td>
						</tr>
						<tr>
							<td>University Nick name</td>
							<td><?php if(isset($_GET['view'])){ echo $uniNickName; } ?></td>
						</tr>
						<tr>
							<td>Country</td>
							<td><?php if(isset($_GET['view'])){ echo $country_name; } ?></td>
						</tr>
						<tr>
							<td>State/Province</td>
							<td><?php if(isset($_GET['view'])){ echo $state_name; } ?></td>
						</tr>
						<tr>
							<td>City</td>
							<td><?php if(isset($_GET['view'])){ echo $cityNM; } ?></td>
						</tr>
						<tr>
							<td>Website</td>
							<td><a href="<?php if(isset($_GET['view'])){ echo $website; } ?>" target="_blank"><?php if(isset($_GET['view'])){ echo $website; } ?></a></td>
						</tr>
						<tr>
							<td ><input type="submit" value="Approve" name="approve-uni-btn" style="width:100%; height: 30px;"></td>
							<td ><input type="submit" value="Reject" name="reject-uni-btn" style="width:100%; height: 30px;"></td>
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

function getStates(xhttp) {
  document.getElementById("stateSelect").innerHTML = xhttp.responseText;
}

function getCities(xhttp) {
  document.getElementById("citySelect").innerHTML = xhttp.responseText;
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