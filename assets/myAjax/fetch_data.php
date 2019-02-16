<?php

//including connection file
include('../../imp_files/con_file.php');

//if user add new professor then show uni according to country
if(isset($_REQUEST["country"])){
	$country_id=null;
	$cntry = $_REQUEST["country"];




	//getting just a country_id
	 $showUni="SELECT s.country_id,s.available_status,c.country_id,c.country_name
                FROM country c,school s
                WHERE s.country_id=c.country_id AND c.country_name='$cntry' AND s.available_status='approved'";
     $exeQry=mysql_query($showUni);
     while ($valOf=mysql_fetch_array($exeQry)) {
     	# code...
     	$country_id=$valOf['country_id'];
     }
     //end of getting just a country_id




	$find=mysql_query("select * from school where country_id='$country_id' AND available_status='approved'");
	?>
	<option value="">Select University</option>
	<?php
     while($valOf=mysql_fetch_array($find))
     {?>
       <option value='<?php echo $valOf['school_name']; ?>'><?php echo $valOf['school_name']; ?></option>
<?php } exit; } ?>

<!-- show department according to university name -->
<?php

if(isset($_REQUEST["uniii"])){
    $uniName = $_REQUEST["uniii"];

    $find=mysql_query("select * from department where school_name='$uniName'");
    ?>
    <option value="">Select department</option>
    <?php
     while($valOf=mysql_fetch_array($find))
     {?>
       <option value='<?php echo $valOf['department_name']; ?>'><?php echo $valOf['department_name']; ?></option>
<?php } exit; } ?>

?>



<?php

//if user add new university then show states according to country
if(isset($_REQUEST["cntry"])){
    $country_id=null;

    $cntry = $_REQUEST["cntry"];




    //getting just a country_id
     $showUni="SELECT s.country_id,c.country_id,c.country_name
                FROM country c,state_province s
                WHERE s.country_id=c.country_id AND c.country_name='$cntry'";
     $exeQry=mysql_query($showUni);
     while ($valOf=mysql_fetch_array($exeQry)) {
        # code...
        $country_id=$valOf['country_id'];
     }
     //end of getting just a country_id




    $find=mysql_query("select * from state_province where country_id='$country_id'");
    ?>
    <option value="">Select State/Province</option>
    <?php
     while($valOf=mysql_fetch_array($find))
     {?>
       <option value='<?php echo $valOf['state_name']; ?>'><?php echo $valOf['state_name']; ?></option>
<?php } exit; } ?>

?>


<?php

//if user add new university then show cities according to state
if(isset($_REQUEST["state"])){

    $state = $_REQUEST["state"];

    $find=mysql_query("select * from city where state_name='$state'");
    ?>
    <option value="">Select City</option>
    <?php
     while($valOf=mysql_fetch_array($find))
     {?>
       <option value='<?php echo $valOf['city_name']; ?>'><?php echo $valOf['city_name']; ?></option>
<?php } exit; } ?>

?>


