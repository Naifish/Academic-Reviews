<?php

//including connection file
include('imp_files/con_file.php');

include('classes/student_class.php');

 $correction_exist=false;
 $actionReport=null;

//agr user login nai hai to use login karwao
session_start();
if(!isset($_SESSION['user_status'])){
  $request=$_SERVER['REQUEST_URI'];
  header('location:member.php?req='.$request);
}

//if submit button pressed to sumbit university correction
if (isset($_POST['submit'])) {
  # code...

  $uniName=$_GET['univName'];
  $cityName=$_GET['citName'];
  $stuEmail=$_SESSION['user_email'];
  $problem=$_POST['problem'];
  $correctInfo=$_POST['correctInfo'];

  //check if this student have correct the same Uni for same problem
  $uniInfo="SELECT * FROM school_correction";
  $exeQry=mysql_query($uniInfo);
  while ($value_of=mysql_fetch_array($exeQry)) {
    # code...
    if ($uniName==$value_of['school_name'] && $cityName==$value_of['city'] && $stuEmail==$value_of['stu_email'] && $problem==$value_of['problem']) {
      # code...
      $correction_exist=true;
    }else{}
  }
  if ($correction_exist!=true) {
    # code...
     $stu = new Student();
     $actionReport=$stu->correctUniInfo($uniName,$cityName,$stuEmail,$problem,$correctInfo);
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

<!-- Mirrored from www.ratemyprofessors.com/schoolCorrection.jsp?sid=2645 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 00:46:47 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="submit_correction">

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
        <div class="report-type">Submit a Correction</div>
        <div class="oops-text"> <span>Oops!</span> Is there something wrong with the info we have? </div>
        <div class="reporting-block">
          <div class="name"><?php echo $_GET['univName']; ?></div>
          <div class="info"><?php echo $_GET['citName'].", ".$_GET['stateName']; ?></div>
        </div>
        <form action="#" method="post" class="correction" >
          <div class="form-elem">
            <div class="label">Whats the problem?</div>
            <select id="problem" name="problem" class="required myselect probselect" required style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:365px;">
              <option value="">Please select</option>
              <option value="Duplicate" >Duplicate</option>
              <option value="Name" >Name</option>
              <option value="Nick Name" >Nick Name</option>
              <option value="State" >State</option>
              <option value="City Name" >City Name</option>
              <option value="Website" >Website</option>
            </select>
            <div class="error">This field is required.</div>
          </div>
          <div class="form-elem">
            <div class="label">What's the correct info?</div>
            <input type="text" id="correctInfo" name="correctInfo" value="" required class="required" />
            <div class="error">This field is required.</div>
          </div>
          <div class="correction-action-wrapper">
            <div class="another_email"><?php if($correction_exist==true){ echo 'you have already provide a correct info this university for the same problem'; }else{ echo $actionReport; } ?></div>
            <input type="submit" name="submit" id="" value="Submit" /><!-- id="submitCorrection" -->
            <a href="#" onclick="history.back(-1); return false;" class="cancel">Cancel</a> </div>
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
        uri : "/schoolCorrection.jsp",
        page: "submit_correction",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "2645",
        department: "",
        state: "AZ",
        country: "0",
        user: {},
        pageLevelData: {
  "pageName": "#",
  "channel": "schools",
  "hier2": "school correction/main",
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

<!-- Mirrored from www.ratemyprofessors.com/schoolCorrection.jsp?sid=2645 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 00:46:47 GMT -->
</html>
<?php



?>