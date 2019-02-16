<?php

//including connection file
include('../imp_files/con_file.php');

//header me logout k href se stu_status ko set kar rahe hai agr user ne logout ka button press kia ho to user ka status deactivate kar de and member k page par redirect karde.
if(isset($_GET['stu_status'])){

  session_start();
  $_SESSION['user_status']="deactive";
   session_unset();
  session_destroy();
  header('location:../member.php');
}

/* searching university */

//if search university by name
if(isset($_POST['schoolNames-btn'])){
  $uni_name=$_POST['uniName'];
  header("location:../showUnis.php?uniName=".$uni_name);
}

//if search university by location
if(isset($_POST['schoolLocationz'])){
  $state_name=$_POST['state'];
  header("location:../showUnis.php?stateName=".$state_name);
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

<!-- Mirrored from www.ratemyprofessors.com/mobile/school_search by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:21:08 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- start mobHead-file -->
<?php include('../imp_files/mobHead_file.php') ?>
<!-- end mobhead_file -->

<body class="mobilePanels">

<!-- <div class="overlay"></div> --> 
<!--do not modify this script -->

<!-- start mobile navigation -->
<?php include('../imp_files/mobNav.php') ?>
<!-- end mobile navigation -->

<!-- Starts The Page Wrap -->
<div id="container">
  <div class="overlay"></div>
  <!-- Begins Mobile Header -->
   <?php include('../imp_files/Realmobileheader.php')  ?>
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
  
  <?php include('../imp_files/mobHeader.php') ?>
  
<!-- Ends Header --> 
  
  <!-- Starts left Nav -->
  
  <aside id="leftNav" class="height-col">
    <div id="leftOverlay"></div>
            <!-- Blog item templates --> 
            <script type="text/template" id="blogitems">
    <li>
      <a href="/{{actionUrl}}{{blogurl}}">
        <figure><img src="{{imageurl}}" width="73" height="73" /></figure>
        <div class="text-wrap">
          <div class="tag">
            <span>{{category}}</span>
          </div>
          <p>{{title}}</p>
        </div>
      </a>
      <div class = "clearfix"></div>
    </li>
  </script> 

  <script type="text/template" id="my-professor-result-template">
  <li id = "my-professor-{{id}}">
    <a href="../ShowRatings3423.html?tid={{id}}&amp;showMyProfs=true">
      <span class="{{ratingclass}}-icon"></span>
      <span class="remove-this-button" data-id="{{id}}">&#215;</span>
      <span class="rating">{{overall_rating}}</span>
      <span class="name">{{plname}}, {{{pfname}}}
        <span class="info">{{rating_count}} RATINGS</span>
      </span>
    </a>
  </li>
</script> 
    
    <!-- start live search javascript(functions) -->
    <?php include('../imp_files/liveSearch_func_mobile.php') ?>
    <!-- end live search javascript(functions) -->

    <!-- Starts Left Nav -->
    <?php include('../imp_files/leftNav.php') ?>
    <!-- Ends left Nav --> 
    
  </aside>
  
  <!-- Ends Left Nav --> 
  
  <!-- Starts Body Content -->
  
  <div id="body" class="slide">
    <div id="mainContent" class="height-col">
      <div class="school-block-form">
        <div class="center-block-form">
          <div class="h1 mobile-header">Find a University</div>
          <div class="h1 header">Find your university</div>
          <div class="search-by" data-search="schoolMenu"> <span class="label">SEARCH BY</span> <a href="javascript:void(0)" data-type="school-names" class="active" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_byname', linkType:'o' } );">Name</a> <a href="javascript:void(0)" data-type="school-locations" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_bylocation', linkType:'o' } );">Location</a> </div>
          <form action="#" method="post" name="schoolNames" class="searchform school-names" id="schoolNames" >
            <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
            <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
            <div class="search-info">
              <div class="drop-down-fix">
                <input type="text" id="asiaAunis" name="uniName" onkeyup="uniForuni(this.value)" class="fo11" placeholder="university's name" autocorrect="off" autocomplete="off" required/>
                <div id="uniFuni" class="autocomplete-container mw">
                  <ul>
                  </ul>
                </div>

<script type="text/javascript">

function homeUniSearchMain2(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("asiaAunis").value = va;
   $("#uniFuni").hide();
}

</script>

                <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
              <div class="cta">
                <input type="submit" value="Search" action="#" name="schoolNames-btn" />
                <br />
                <!-- <a class="reset-search-form">CANCEL</a> -->
              </div>
            </div>
          </form>
          <form action="#" method="post" name="schoollocations" class="searchform school-locations" id="schoollocations" >
            <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
            <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
            <input type="hidden" name="country" value="united states" id="country" />
            <input type="hidden" name="facetSearch" value="true" id="facetSearch" />
            <div class="search-info"> <span class="line-form-txt">
              <h2>I'm looking for a university in </h2>
              </span>
              <div class="select-wraper"  >
                <select  name="state" id="searchProfessorDepartment" class="selct" required>
                  <option value="">select state</option>
                  <!-- geting country name from database -->
                      <?php
                         $statepro="SELECT * FROM state_province";
                         $exeQry=mysql_query($statepro);
                         while ($res=mysql_fetch_array($exeQry)) { ?>
                         <option value="<?php echo $res['state_name']; ?>"><?php echo $res['state_name']; ?></option>
                      <?php } ?>
                </select>
              </div>
              <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
            <div class="cta">
              <input type="submit" name="schoolLocationz" value="Search" />
              <!-- <a class="reset-search-form">CANCEL</a> --> </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Ends Body Content --> 
  
<!-- Starts Footer -->

  <?php include('../imp_files/mobFoot.php') ?>

<!-- Ends Footer -->


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
        uri : "/mobile/school_search",
        page: "mobilePanels",
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
<script type="text/javascript" src="../assets/myjs/index1.js"></script>

<!-- <script type="text/javascript" src="../media.mtvnservices.com/player/api/2.11.7/api.min.js"></script> -->
<script type="text/javascript" src="../assets/myjs/index2.js"></script>


<script src="../assets/application-4c66987976b8fccf376e7aac9add4986.js" type="text/javascript" ></script> 
<script src="../assets/libs/utils-8a88ae62ab3a733b877e63de32541da6.js" type="text/javascript" ></script> 
<!-- PAGEOK -->
</body>

</html>
<?php



?>