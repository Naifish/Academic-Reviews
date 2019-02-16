<?php

//including connection file
include('../../imp_files/con_file.php');

$uniNM=null;

/*if sseaching only university all over the aisa mainpage */
if(isset($_REQUEST["uniName"]) && !isset($_REQUEST["countryName"])){
	$uniNM = $_REQUEST["uniName"];
  $count=0;
	$find=mysql_query("select * from school where available_status='approved' AND (school_name LIKE '%$uniNM%' OR school_nick_name LIKE '%$uniNM%')");
	echo "<ul style='display: block;'>";
     while($valOf=mysql_fetch_array($find)){
      $count++;
       echo"<li onclick='homeUniSearchLeftNav2(this.id)' id='LeftNavUnili2".$count."'>"."<span class='nn'>".$valOf['school_name']."</span>"."<span class='main'>".$valOf['school_name']."(".$valOf['school_nick_name'].")"."</span>"."<span class='sub'>".$valOf['city_name'].",".$valOf['state_name']."</span>". "</li>";
     }
     exit;
     echo "</ul>";
   }


/*if searching prof according to uni  for rating*/
   if (isset($_REQUEST["profName"]) && isset($_REQUEST["uniNam"]) ) {
     # code...
     $profNM = $_REQUEST["profName"];
     $uniNM = $_REQUEST["uniNam"];
     $count=0;
     $find=mysql_query("select * from professor where school_name = '$uniNM' AND first_name LIKE '$profNM%' AND available_status='approved'");
     echo "<ul style='display: block;'>";
       while($valOf=mysql_fetch_array($find)){
         $count++;
         echo"<li onclick='homeFronSearchM2(this.id)' id='mainProfliM2".$count."'>"."<span class='main'>".$valOf['first_name']."</span>"."<span class='sub'>".$valOf['first_name'].",".$valOf['last_name']." At ".$valOf['school_name']."</span>". "</li>";
       }
       exit;
     echo "</ul>";
   }


/*if search uni according to country for rate in main page*/
   if(isset($_REQUEST["uniName"]) && isset($_REQUEST["countryName"])){
  $uniNM = $_REQUEST["uniName"];
  $countryNM = $_REQUEST["countryName"];
  $count=0;
  $find=mysql_query("SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,c.country_id,c.country_name
  FROM country c,school s
  WHERE s.country_id=c.country_id AND (s.school_name LIKE '%$uniNM%' OR s.school_nick_name LIKE '%$uniNM%') AND country_name='$countryNM' AND available_status='approved'");
  echo "<ul style='display: block;'>";
     while($valOf=mysql_fetch_array($find)){
      $count++;
       echo"<li onclick='homeCntUniSearchLeftNav2(this.id)' id='mainCntUniliLeftNav2".$count."'>"."<span class='nn'>".$valOf['school_name']."</span>"."<span class='main'>".$valOf['school_name']."(".$valOf['school_nick_name'].")"."</span>"."<span class='sub'>".$valOf['city_name'].",".$valOf['state_name']."</span>". "</li>";
     }
     exit;
     echo "</ul>";
   }


?>