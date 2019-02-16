<?php

//including connection file
include('../../imp_files/con_file.php');

$uniNM=null;

/*if sseaching only university to rate the professor*/
if(isset($_REQUEST["uniName"]) && !isset($_REQUEST["countryName"])){
	$uniNM = $_REQUEST["uniName"];
  $count=0;
	$find=mysql_query("select * from school where available_status='approved' AND (school_name LIKE '%$uniNM%' OR school_nick_name LIKE '%$uniNM%')");
	echo "<ul style='display: block;'>";
     while($valOf=mysql_fetch_array($find)){
      $count++;
       echo"<li onclick='homeUniSearchLeftNav3(this.id)' id='LeftNavUnili3".$count."'>"."<span class='nn'>".$valOf['school_name']."</span>"."<span class='main'>".$valOf['school_name']."(".$valOf['school_nick_name'].")"."</span>"."<span class='sub'>".$valOf['city_name'].",".$valOf['state_name']."</span>". "</li>";
     }
     exit;
     echo "</ul>";
   }


/*if searching prof according to uni not for rating*/
   if (isset($_REQUEST["profName"]) && isset($_REQUEST["uniNam"]) ) {
     # code...
     $profNM = $_REQUEST["profName"];
     $uniNM = $_REQUEST["uniNam"];
     $count=0;
     $find=mysql_query("select * from professor where school_name = '$uniNM' AND first_name LIKE '$profNM%' AND available_status='approved'");
     echo "<ul style='display: block;'>";
       while($valOf=mysql_fetch_array($find)){
         $count++;
         echo"<li onclick='homeFronSearchLeftNav3(this.id)' id='mainProfliLeftNav3".$count."'>"."<span class='main'>".$valOf['first_name']."</span>"."<span class='sub'>".$valOf['first_name'].",</span><span class='sub'>".$valOf['last_name']."</span><span class='sub'> At ".$valOf['school_name']."</span>". "</li>";
       }
       exit;
     echo "</ul>";
   }



?>