<?php

//including connection file
include('imp_files/con_file.php');

include('classes/student_class.php');

$rating_id=null;$comment=null;$report_exist=false;$action_result=null;


//agr user login nai hai to use login karwao
session_start();
if(!isset($_SESSION['user_status'])){
  $request=$_SERVER['REQUEST_URI'];
  header('location:member.php?req='.$request);
}

if (isset($_GET['rid'])) {
  # code...
  $rating_id=$_GET['rid'];
  $comment=$_GET['comment'];
}

if (isset($_POST['save'])) {
  # code...
  $report=$_POST['rErrorMsg'];
  $stu_email=$_SESSION['user_email'];

  //check if stu have already report this rating
  $checkreportQry="SELECT * FROM report_uni_stu_rating";
  $exeQry=mysql_query($checkreportQry);
  while ($valOf=mysql_fetch_array($exeQry)) {
    # code...
    if ($valOf['rating_id']==$rating_id && $valOf['stu_email']==$stu_email) {
      # code...
      $report_exist=true;
    }
  }

  if ($report_exist!=true) {
    # code...
    $stu = new Student();
    $action_result=$stu->reportUniRating($rating_id,$stu_email,$report);
  }         
}//end of submit button


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

<!-- Mirrored from www.ratemyprofessors.com/flagTeacherRating.jsp?rid=25050296 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 01:22:43 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="report_professor_rating">

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
      <!-- <div id="error-ad" class="right-panel-mtvnad error"></div> -->
      <div class="report-contain">
        <div class="report-type">Report a Student's Rating</div>
        <div class="reporting-block">
          <div class="label">You're reporting:</div>
          <div class="report-text"><?php echo $comment; ?> </div>
          <div class="problem-text">
            <div class="label">Whats the problem?</div>
            <div class="explain">If you think this comment is inconsistent with Academic Reviews' <a href="TermsOfUse_us.html#guidelines" target="_blank">Site Guidelines</a>, report it and tell us why.</div>
          </div>
        </div>
        <form action="#" method="post" class="report" >
          <label>Tell us what’s wrong with this comment:</label>
          <input type="hidden" name="rComments" value="Ruth was a great math professor! She helps you keep up with due dates, she&#39;s there when you need her, and she&#39;s always willing to help in any way she can. I would take her for every math course if I could. If you want an easy math class, pick Ruth." id="rComments" />
          <div class="form-elem" id="comment-textarea">
            <div class = "input">
              <textarea name="rErrorMsg" id="report_reason" maxlength="350" class="required" ></textarea>
              <span class="counter"> <span class="count">350</span> characters left </span> <span class="error-message">This field is required.</span> </div>
          </div>
          <div class="correction-action-wrapper">
          <div class="another_email"><?php if($report_exist==true){ echo "you have already reported this rating";} else if(isset($action_result)){ echo $action_result; } ?></div>
            <input type="submit" name="save" value="Submit" id="save" />
            <a href="ShowRatings5eee.html?tid=140030" class="cancel" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFRATING:Cancel', linkType:'o' } ); history.back(-1); return false;">CANCEL</a> </div>
        </form>
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
        uri : "/flagTeacherRating.jsp",
        page: "report_professor_rating",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "",
        department: "Mathematics",
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

<!-- Mirrored from www.ratemyprofessors.com/flagTeacherRating.jsp?rid=25050296 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 01:22:43 GMT -->
</html>
<?php



?>