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

<!-- Mirrored from www.ratemyprofessors.com/help.jsp by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:31:30 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="utility_help">

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
      <div class="utility-wrap" id="help-page">
        <!-- <div id="utility-ad" class="right-panel-mtvnad utility"></div> -->
        <div class = "left-wrap">
          <div class="page-title">Help</div>
          <dl class="accordion">
            <dt><a class="anchor" name="reviewprof"></a><a class="anchor" name="reviewprof"></a><a href="#reviewprof" id="reviewprof" class="trigger-reviewprof"><span>+</span> WHY CAN'T I SEE THE RATINGS FOR THE PROFESSOR OR UNIVERSITY I ADDED</a></dt>
            <dd>
              <p> Your entry will need to be verified and approved by our moderators in the order it’s received. No result found for the professor or university means professor or university have not yet been approved by our moderators. </p>
              <p> NOTE: Submitting a duplicate professor could cause further delay, so hold tight and check back soon! </p>
            </dd>
            <dt><a class="anchor" name="anon"></a><a href="#anon" id="anon" class="trigger-anon"><span>+</span> WILL A PROFESSOR KNOW THAT I HAVE RATED HIM/HER?</a></dt>
            <dd>
              <p> Nope! We don't display any of your personal information anywhere on the site.</p>
            </dd>
            <dt><a class="anchor" name="even"></a><a id="even" href="#even" class="trigger-even"><span>+</span>AREN'T MOST OF THE RATINGS ON THE SITE NEGATIVE FROM STUDENTS WHO ARE TRYING TO GET EVEN WITH THEIR PROFESSORS?</a></dt>
            <dd> 
              
              <!-- NOTE: Replace top list link -->
              <p> No way! Well over half of the ratings on the site are positive. In fact, each year, we compile a list of the top professors based on ratings and comments from students.</p>
            </dd>
            <dt><a class="anchor" name="deletedcomment"></a><a href="#deletedcomment" id="deletedcomment" class="trigger-deletedcomment"><span>+</span>WHY WAS MY COMMENT DELETED?</a></dt>
            <dd>
              <p> Comments that got more reports from other students are removed by our moderators. </p>
            </dd>
            <dt><a class="anchor" name="flag"></a><a href="#flag" id="flag" class="trigger-flag"><span>+</span>CAN I FLAG A COMMENT OR PROFESSOR NOTE THAT I THINK SHOULD BE REMOVED FROM YOUR SITE?</a></dt>
            <dd>
              <p> Yes, you can. Flag comments or professor notes by clicking "report this rating" on the comment or note in question, and our moderators will review. </p>
            </dd>
            <dt><a class="anchor" name="addprof"></a><a href="#addprof" id="addprof" class="trigger-addprof"><span>+</span>HOW DO I ADD MYSELF(PROFESSOR) TO THE SITE?</a></dt>
            <dd>
              <p style="font-size:20px; font-weight:bold;">Only professor can add him/her self ! </p>
              <p> Before you add yourself make sure that  you has not already been added to the site by another person(fake entry) by searching for your name in the search bar at the top of the screen. IF you found yourself then you can <a href="contact.php">contact us</a> </p>
              <p> If you can't add yourself, check that the university where you teaches has been added first. If it hasn't, Login first and you can <a href="addUni.php">add a new university</a>. </p>
              <p> If the university has already been added to our site, you can first login and then <a href="addProf.php">add yourself here</a>. </p>
              <p> NOTE: All newly added professors must be verified by our moderators before they can be rated. Submitting a duplicate professor could cause further delay, so hold tight and check back soon! </p>
            </dd>
            <dt> <a class="anchor" name="addschool"></a><a href="#addschool" id="addschool" class="trigger-addschool"><span>+</span>HOW DO I ADD A NEW UNIVERSITY TO THE SITE?</a></dt>
            <dd>
              <p style="font-size:20px; font-weight:bold;">Only professor can add University where he/she teach ! </p>
              <p> Before you add a university: <a href="index.php">Check to see</a> if university has already been added to the site by searching for university's name in the find the university tab search bar at the home page. </p>
              <p> If the university hasn't been added to our site, Login first and you can <a href="addUni.php">add a new university here</a>. </p>
              <p> NOTE: All newly added universities must be verified by our moderators before they can be rated. Submitting a duplicate university could cause further delay, so hold tight and check back soon! </p>
            </dd>
            <dt><a class="anchor" name="correction"></a><a href="#correction" id="correction" class="trigger-correction"><span>+</span>MY PROFESSOR OR UNIVERSITY'S INFORMATION IS INCORRECT. HOW CAN I CORRECT IT?</a></dt>
            <dd>
              <p> Go to the professor or university page that requires a correction and click "Submit a Correction." </p>
              <p> Fill out the form with the issue and correct information, and click submit. </p>
              <p> NOTE: All corrections must be verified by our moderators before they appear on the site. </p>
            </dd>
            <dt> <a class="anchor" name="techissue"></a><a href="#techissue" id="techissue" class="trigger-techissue"><span>+</span>I’M HAVING A TECHNICAL ISSUE. CAN YOU HELP?</a></dt>
            <dd>
              <p> If you are experiencing technical issues, please try these troubleshooting steps: </p>
              <p>- Refresh your page</p>
              <p>- Clear your browser cache</p>
              <p>- Test in a different browser (e.g. Internet Explorer, Mozilla Firefox, Google Chrome, Safari)</p>
            </dd>
            <p class="after-text"> If you haven't found your issue in the help info above, you can submit your issue to us directly on our <a href="contact.php">Contact Us</a> page. </p>
          </dl>
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
        uri : "/help.jsp",
        page: "utility_help",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "",
        department: "",
        state: "",
        country: "",
        user: {},
        pageLevelData: {},
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

<!-- Mirrored from www.ratemyprofessors.com/help.jsp by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:31:34 GMT -->
</html>
<?php



?>