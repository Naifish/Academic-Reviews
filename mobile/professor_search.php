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

/* searching professor */

//if search professor by name or for rate
if(isset($_POST['prof-name-btn'])){
  $uni_name=$_POST['uniName'];
  $porf_name=$_POST['profName'];
  $porf_nameln=$_POST['profNameln'];
  if ($porf_nameln!="") {
    # code...
    header("location:../showProfs.php?uniName=".$uni_name."&profName=".$porf_name."&profNameln=".$porf_nameln);
  }
  else{
    header("location:../showProfs.php?uniName=".$uni_name."&profName=".$porf_name);
  }
}

//if search professor by university
if(isset($_POST['prof-location-btn'])){
  $uni_name=$_POST['uniName2'];
  $country_name=$_POST['country'];
  header("location:../showProfs.php?uniName=".$uni_name."&countryName=".$country_name);
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

<!-- Mirrored from www.ratemyprofessors.com/mobile/professor_search by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:21:06 GMT -->
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
      <div class="prof-block-form">
        <div class="center-block-form">
          <div class="h1">Find a Professor</div>
          <div class="search-by" data-search="profMenu"> <span class="label">SEARCH BY</span> <a href="javascript:void(0)" data-type="professor-names" class="active" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byname', linkType:'o' } );">Name</a> <a href="javascript:void(0)" data-type="professor-locations" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byschool', linkType:'o' } );">University</a> </div>
          <form action="#" method="post" name="prof-name" class="professor-names" id="prof-name" >
            <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
            <input type="hidden" name="queryBy" value="teacherName" id="queryBy" />
            <div class="search-info">
              <div class="optional-flag"> <span class="line-form-txt">I'm looking for a professor at</span>
                <div class="drop-down-fix">
                  <input type="text" id="uniName" data-type="school" name="uniName" onkeyup="showUni(this.value)" class="fo" placeholder="university's name" autocorrect="off" autocomplete="off" required/>
                  <input type="hidden" class="schoolID" name="schoolID" id="nameprofid" />
                  <div id="profauContainer2" class="autocomplete-container mw">
                    <ul>
                    </ul>
                  </div>

<script type="text/javascript">

function homeUniSearch(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("uniName").value = va;
   $("#profauContainer2").hide();
}

</script>

                  <!-- <span class="optional-content">Optional</span>--> 
                </div>
                <span class="line-form-txt">named</span>
                <div class="drop-down-fix">
                  <input type="text" name="profName" id="mprname" onkeyup="findProfByName(this.value)" class="fo2" data-type="name" placeholder="professor's name" autocorrect="off" autocomplete="off" required/>
                  <input type="hidden" name="profNameln" id="mprnameln">
                  <div id="profNameAc" class="autocomplete-container mw">
                    <ul>
                    </ul>
                  </div>

<script type="text/javascript">

function homeFronSearch(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   var vb =element.getElementsByTagName("span")[2].textContent;
   document.getElementById("mprname").value = va;
   document.getElementById("mprnameln").value = vb;
   $("#profNameAc").hide();
}

</script>

                  <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
              </div>
              <div class="cta">
                <input type="submit" name="prof-name-btn" value="Search" />
                <!-- <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byname_cancel', linkType:'o' } );">cancel</a> --> </div>
            </div>
          </form>
          <form action="#" method="post" name="prof-location" class="professor-locations" id="prof-location" >
            <input type="hidden" name="queryoption" value="TEACHER" id="queryoption" />
            <input type="hidden" name="queryBy" value="schoolDetails" id="queryBy" />
            <input type="hidden" class="schoolID" name="schoolID" />
            <div class="search-info"> <span class="inline-form-txt">I'm looking for professors in the</span>
              <select name="country" style="margin-top:15px !important;" id="searchProfessorDepartment" class="selct" data-type="department" data-placeholder-option="false" data-size="10" required onchange="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byschool_deptdropdown', linkType:'o' } );">
                <option value="">select</option>

                <!-- geting country name from database -->
                <?php
                  $countryQry="SELECT * FROM country";
                  $exeQry=mysql_query($countryQry);
                    while ($res=mysql_fetch_array($exeQry)) { ?>
                <option value="<?php echo $res['country_name']; ?>"><?php echo $res['country_name']; ?></option>
                <?php } ?>
              </select>
              <span class="inline-form-txt"> country</span>
              <h2 style="margin-top:15px !important; margin-bottom:10px !important; " >At</h2>
              <div class="drop-down-fix">
                <input type="text" style="margin-top:0px !important;" id="hmcntuni" data-type="school" name="uniName2" class="fo5" onkeyup="uniIncountry(this.value)" placeholder="university's name" autocorrect="off" autocomplete="off" required/>
                <div id="prfFPrate" class="autocomplete-container searchProfessorSchoolAC mw">
                  <ul>
                  </ul>
                </div>

<script type="text/javascript">

function homeCntUniSearch(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("hmcntuni").value = va;
   $("#prfFPrate").hide();
}

</script>

                <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
              <div class="cta">
                <input type="submit" name="prof-location-btn" value="Search" />
                <!-- <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byschool_cancel', linkType:'o' } );">cancel</a> --> </div>
            </div>
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
        uri : "/mobile/professor_search",
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