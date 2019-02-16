<?php

//including connection file
include('imp_files/con_file.php');

include('classes/professor_class.php');
include('classes/school_class.php');

//header me logout k href se stu_status ko set kar rahe hai agr user ne logout ka button press kia ho to user ka status deactivate kar de and member k page par redirect karde.
if(isset($_GET['stu_status'])){

  session_start();
  $_SESSION['user_status']="deactive";
   session_unset();
  session_destroy();
  header('location:member.php');
}

?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<!-- google CDN -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Mirrored from www.ratemyprofessors.com/search.jsp by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:50:34 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="search_results">

<!-- <div class="overlay"></div> --> 
<!--do not modify this script -->

<!-- including mobileNav -->
<?php include('imp_files/mobileNav.php') ?>

<!-- Starts The Page Wrap -->
<div id="container">
  <div class="overlay"></div>
  <!-- Begins Mobile Header -->
 <?php include('imp_files/Realmobileheader.php')  ?>
  <!-- Ends Mobile Header -->
  
  <section class="top-header">
    <div id="ad1x1" data-ad-sizes="1x1" data-ad-keyvalues="" data-ad-reload-interval="-1" style=""></div>
    <div id="ad1x2" data-ad-sizes="1x2" data-ad-keyvalues="" data-ad-reload-interval="-1" style=""></div>
    <div id="ad3x3" data-ad-sizes="3x3" data-ad-keyvalues="" data-ad-reload-interval="-1" style=""></div>
    <div id="ad6x6" data-ad-sizes="6x6" data-ad-keyvalues="" data-ad-reload-interval="-1" style=""></div>
    <article id="mtv_lead_1" class="ad leaderboard_ad">
      <div id="ad728" style="text-align: center;"></div>
    </article>
  </section>
  
  <!-- Starts Header -->

  <!-- including header -->
<?php include('imp_files/header.php') ?>
  
  <!-- Ends Header --> 
  
<!-- including Dekstop leftnav -->
  <?php include('imp_files/Dekstop_leftNav.php') ?>
<!-- Ends Dekstop leftNav -->  
  
  <!-- Starts Body Content -->
  
  <div id="body" class="slide">
    <div id="mainContent" class="height-col"> 
      
      <!-- Starts filter box -->
      <div id="searchResultsBox">
        <div class="toppager">
          <div class="toppager-left">
            <div class="header"> Search Results for <span class="title-case"> All Professors</span> </div>
            <div class="not-found-box"> Don't see the professor you're looking for? <a href="addProf.php">Add a professor</a>. </div>
          </div>
        </div>
        <!-- Begins Results List -->
        <div class="listings-wrap">
          <div class="listings-header">
            <div class="listing-cat">Category</div>
            <div class="listing-name">Name</div>
          </div>
          <ul class="listings">

           <?php

          //if search professor by first_name last_name and university name or for rate
          if(isset($_GET['uniName']) && isset($_GET['profName']) && isset($_GET['profNameln'])){
            //echo $_GET['uniName']." ".$_GET['profName'];

            $prof=new Professor();
            $uni=new School();

            $prof->_set('first_name',$_GET['profName']);
            $prof->_set('last_name',$_GET['profNameln']);
            $uni->_set('school_name',$_GET['uniName']);

            $profNM=$prof->_get('first_name');
            $profLNM=$prof->_get('last_name');
            $uniNM=$uni->_get('school_name');

            /*$showProf="SELECT p.first_name,p.last_name,p.school_name,p.department,s.school_nick_name
             FROM professor p,school s 
             WHERE p.first_name='$profNM' AND p.last_name='$profLNM' AND p.school_name=s.school_name AND (p.school_name='$uniNM' OR s.school_nick_name='$uniNM')";*/
            $showProf="CALL searchProf_byfname_lname('$uniNM','$profNM','$profLNM')";
            $exeQry=mysql_query($showProf);
            while ($res=mysql_fetch_array($exeQry)) {
             ?>

            
            <!-- Starts One professor Listing -->
            
            <li class="listing PROFESSOR"> <a href=<?php  echo"profRating.php?fname=".$res['first_name']."&lname=".$res['last_name']."&univName=".str_replace(" ", "%20", $res['school_name'])."&dept=".str_replace(" ", "%20", $res['department']); ?>> <span class="listing-cat"> <span class="icon icon-professor"></span> PROFESSOR </span> <span class="listing-name"> <span class="main"><?php echo $res['first_name'].", ".$res['last_name']; ?></span> <span class="sub"><?php echo $res['school_name'].", ".$res['department']; ?></span> </span> </a> </li>
           
             <?php } } ?>

          <?php

          //if search professor by name or for rate
          if(isset($_GET['uniName']) && isset($_GET['profName']) && !isset($_GET['profNameln'])){
            //echo $_GET['uniName']." ".$_GET['profName'];

            $prof=new Professor();
            $uni=new School();

            $prof->_set('first_name',$_GET['profName']);
            $uni->_set('school_name',$_GET['uniName']);

            $profNM=$prof->_get('first_name');
            $uniNM=$uni->_get('school_name');

            /*$showProf="SELECT p.first_name,p.last_name,p.school_name,p.department,s.school_nick_name
             FROM professor p,school s 
             WHERE p.first_name='$profNM' AND p.school_name=s.school_name AND (p.school_name='$uniNM' OR s.school_nick_name='$uniNM')";*/
            $showProf="CALL searchProf_byname('$uniNM','$profNM')";
            $exeQry=mysql_query($showProf);
            while ($res=mysql_fetch_array($exeQry)) {
             ?>

            
            <!-- Starts One professor Listing -->
            
            <li class="listing PROFESSOR"> <a href=<?php  echo"profRating.php?fname=".$res['first_name']."&lname=".$res['last_name']."&univName=".str_replace(" ", "%20", $res['school_name'])."&dept=".str_replace(" ", "%20", $res['department']); ?>> <span class="listing-cat"> <span class="icon icon-professor"></span> PROFESSOR </span> <span class="listing-name"> <span class="main"><?php echo $res['first_name'].", ".$res['last_name']; ?></span> <span class="sub"><?php echo $res['school_name'].", ".$res['department']; ?></span> </span> </a> </li>
           
             <?php } } ?>

             <?php

              //if search professor by university
              if(isset($_GET['uniName']) && isset($_GET['countryName'])){
                //echo $_GET['uniName']." ".$_GET['countryName'];

                $uni=new School();
                $uni->_set('school_name',$_GET['uniName']);

                $countryNM=$_GET['countryName'];
                $uniNM=$uni->_get('school_name');

                /*$showProf="SELECT p.first_name,p.last_name,p.school_name,p.department,p.country_name,s.school_nick_name
                FROM professor p,school s 
                WHERE p.country_name='$countryNM' AND p.school_name=s.school_name AND (p.school_name='$uniNM' OR s.school_nick_name='$uniNM')";*/

                $showProf="CALL searchProf_byuniversity('$uniNM','$countryNM')";
                $exeQry=mysql_query($showProf);
                while ($res=mysql_fetch_array($exeQry)) {
                  ?>

            
            <!-- Starts One professor Listing -->
            
            <li class="listing PROFESSOR"> <a href=<?php  echo"profRating.php?fname=".$res['first_name']."&lname=".$res['last_name']."&univName=".str_replace(" ", "%20", $res['school_name'])."&dept=".str_replace(" ", "%20", $res['department']); ?>> <span class="listing-cat"> <span class="icon icon-professor"></span> PROFESSOR </span> <span class="listing-name"> <span class="main"><?php echo $res['first_name'].", ".$res['last_name']; ?></span> <span class="sub"><?php echo $res['school_name'].", ".$res['department']; ?></span> </span> </a> </li>
           
             <?php } } ?>


             <?php

          //if search professor only by name
          if(!isset($_GET['uniName']) && isset($_GET['profName']) && !isset($_GET['profNameln'])){
            //echo $_GET['uniName']." ".$_GET['profName'];

            $prof=new Professor();

            $prof->_set('first_name',$_GET['profName']);

            $profNM=$prof->_get('first_name');

            /*$showProf="SELECT p.first_name,p.last_name,p.school_name,p.department,s.school_nick_name
             FROM professor p,school s 
             WHERE p.first_name='$profNM' AND p.school_name=s.school_name";*/
            $showProf="CALL searchProf_onlybyname('$profNM')";
            $exeQry=mysql_query($showProf);
            while ($res=mysql_fetch_array($exeQry)) {
             ?>

            
            <!-- Starts One professor Listing -->
            
            <li class="listing PROFESSOR"> <a href=<?php  echo"profRating.php?fname=".$res['first_name']."&lname=".$res['last_name']."&univName=".str_replace(" ", "%20", $res['school_name'])."&dept=".str_replace(" ", "%20", $res['department']); ?>> <span class="listing-cat"> <span class="icon icon-professor"></span> PROFESSOR </span> <span class="listing-name"> <span class="main"><?php echo $res['first_name'].", ".$res['last_name']; ?></span> <span class="sub"><?php echo $res['school_name'].", ".$res['department']; ?></span> </span> </a> </li>
           
             <?php } } ?>


          </ul>
        </div>
      </div>
      
    </div>
  </div>
  <!-- Ends Body Content --> 
  
  <!-- start footer -->
    <?php include('imp_files/footer.php') ?>
  <!-- end footer -->


<!-- start live search javascript(functions) -->
    <?php include('imp_files/liveSearch_func.php') ?>
<!-- end live search javascript(functions) -->


<!-- Starts the main auto complete template --> 
<script type="text/template" id="autocomplete-profitem">
  <li data-id="{{pk_id}}">
    <span class="wrap">
      <span class="main">{{{teacherfullname_s}}}</span>
      <span class="sub">{{schoolname_s}}</span>
    </span>
  </li>
</script> 
<script type="text/template" id="autocomplete-schoolitem">
  <li data-id="{{pk_id}}">
    <span class="wrap">
      <span class="main">{{schoolname_s}}</span>
      <span class="sub">{{schoolcity_s}}, {{schoolstate_s}}  <span class="typeahead-country">{{schoolcountry_s}}</span></span>
    </span>
  </li>
</script> 
<!-- Ends the main auto complete template --> 

<script type="text/javascript">
      window.RMP = window.RMP || {};
      window.RMP.Settings = {
        pathname : "",
        uri : "/search.jsp",
        page: "search_results",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "",
        department: "",
        state: "",
        country: "",
        user: {},
        pageLevelData: {
  "pageName": "/search/index",
  "channel": "search",
  "eVar2": "*",
  "eVar3": "HEADER",
  "eVar4": "",
  "events": "event36, event38",
  "section": "school and professors"
},
        reloadInterval: 30000
      }
    </script> 

<!-- <script type="text/javascript" src="http://btg.mtvnservices.com/aria/coda.html?site=ratemyprofessors.com"></script> -->
<script type="text/javascript" src="assets/myjs/index1.js"></script>

<!-- <script type="text/javascript" src="../media.mtvnservices.com/player/api/2.11.7/api.min.js"></script> -->
<script type="text/javascript" src="assets/myjs/index2.js"></script>


<script src="assets/application-4c66987976b8fccf376e7aac9add4986.js" type="text/javascript" ></script> 
<script src="assets/libs/utils-8a88ae62ab3a733b877e63de32541da6.js" type="text/javascript" ></script> 
<!-- PAGEOK -->
</body>

</html>
<?php



?>