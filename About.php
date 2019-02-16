<?php

//including connection file
include('imp_files/con_file.php');

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

<!-- Mirrored from www.ratemyprofessors.com/About.jsp by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:31:30 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="utility_about">

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
      <div class="utility-wrap">
        <!-- <div id="utility-ad" class="right-panel-mtvnad utility"></div> -->
        <div class = "left-wrap">
          <div class="page-title">About AcademicReviews.com</div>
          <p> AcademicReviews.com is the largest online destination for professor and university ratings. Users have added more than 55,000 ratings, 4,000 professors and over 2,000 universities to AcademicReviews.com. User-generated content makes AcademicReviews.com the highest trafficked site for quickly researching and rating professors and universities across the Asia. More than 2,000 university students each month are using Academic Reviews – join the fun! </p>
          <p> Now, students can comment on and rate their university as well, by visiting their university's Academic Reviews page. </p>
          <p> AcademicReviews.com is built for university students, by university students. Choosing the best courses and professors is a rite of passage
            for every student, and connecting with peerson the site has become a key way for thousands of students to navigate this process. The
            site does what students have been doing forever - checking in with each other – their friends, their brothers, their sisters, their
            classmates – to figure out who's a great professor and who's one you might want to avoid. </p>
          <span class="subhead">Academic Reviews - Top Lists</span>
          <p> Each year, AcademicReviews.com compiles Top Lists of the Highest Rated Professors and Top Universities in the Asia based on ratings from students. </p>
          <p> See who made the grade by checking out this year's <a href="#">Top Lists</a>. </p>
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
        uri : "/About.jsp",
        page: "utility_about",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "",
        department: "",
        state: "",
        country: "",
        user: {},
        pageLevelData: {
  "pageName": "#",
  "channel": "interact",
  "hier2": "interact/about us",
  "prop8": "visitor"
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

<!-- Mirrored from www.ratemyprofessors.com/About.jsp by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:31:30 GMT -->
</html>
<?php



?>