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



/* searching professor */

//if search professor by name or for rate
if(isset($_POST['prof-name-btn'])){
	$uni_name=$_POST['uniName'];
	$porf_name=$_POST['profName'];
  $porf_nameln=$_POST['profNameln'];
  if ($porf_nameln!="") {
  	# code...
  	header("location:showProfs.php?uniName=".$uni_name."&profName=".$porf_name."&profNameln=".$porf_nameln);
  }
  else{
  	header("location:showProfs.php?uniName=".$uni_name."&profName=".$porf_name);
  }
}


//if search professor by university
if(isset($_POST['prof-location-btn'])){
	$uni_name=$_POST['uniName2'];
	$country_name=$_POST['country'];
	header("location:showProfs.php?uniName=".$uni_name."&countryName=".$country_name);
}

/* searching university */

//if search university by name
if(isset($_POST['schoolNames-btn'])){
	$uni_name=$_POST['uniName'];
	header("location:showUnis.php?uniName=".$uni_name);
}

//if search university by location
if(isset($_POST['schoolLocationz'])){
	$state_name=$_POST['state'];
	header("location:showUnis.php?stateName=".$state_name);
}

//if search university for rating
if(isset($_POST['rate-uni-btn'])){
	$uni_name2=$_POST['uniName2'];
	$country_name=$_POST['country'];
	header("location:showUnis.php?uniName2=".$uni_name2."&countryName=".$country_name);
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

<!-- Mirrored from www.ratemyprofessors.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:20:11 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="home_index">

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
  
  <!-- Starts left Nav --> 
  
  <!-- Ends Left Nav --> 
  
  <!-- Starts Body Content -->
  
  <div id="body" class="slide">
    <div id="mainContent" class="height-col">
      <div id="homeGrid" class="">
        <div id="fullBlock" class="bg"> 
          <!-- Begins Vertically Aligned Elements -->
          <div class="center-wrap">
            <div class="v-align">
              <h1>Find <span class="green">what</span> you're looking for.</h1>
              
              <!-- Small 3 column grid -->
              <div class="options"> 
                
                <!-- Starts Option --> 
                <a href="mobile/professor_search.php" class="option" id="findProfessorOption"
          data-search="prof-block"
          data-text="the professor" 
          data-mobile="mobile/professor_search.php"
          onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf', linkType:'o' } );"> <span class="v-align info"> <span class="subTitle">Find a </span> <span class="subMaintitle">professor</span> </span> </a> 
                <!-- Ends Option --> 
                
                <!-- Starts Option --> 
                <a href="mobile/school_search.php" class="option" id="findSchoolOption" 
          data-search="school-block"
          data-text="the university"
          data-mobile="mobile/school_search.php"
          onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindSchool', linkType:'o' } );"> <span class="v-align info"> <span class="subTitle">Find a</span> <span class="subMaintitle">university</span> </span> </a> 
                <!-- Ends Option --> 
                
                <!-- Starts Option --> 
                <a href="mobile/rate_search.php" class="option"  id="rateProfessorOption"
          data-search="rate-block"
          data-text="and Rate the professor" 
          data-mobile="mobile/rate_search.php"
          onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:Rateof', linkType:'o' } );"> <span class="v-align info"> <span class="subTitle">Rate a</span> <span class="subMaintitle">professor</span> </span> </a> 
                <!-- Ends Option --> 

                <!-- Starts Option --> 
                <a href="mobile/rate_search.php" class="option"  id="rateSchoolOption"
          data-search="school-rate-block"
          data-text="and Rate the university" 
          data-mobile="mobile/rate_search.php"> <span class="v-align info"> <span class="subTitle">Rate a</span> <span class="subMaintitle">university</span> </span> </a> 
                <!-- Ends Option -->
                
              </div>
              <!-- Ends Small 3 Column Grid --> 
            </div>
          </div>
          <!-- Ends Vertically Aligned Elements --> 
          
        </div>
        <div id="searchBlock" class="bg"> 
          
          <!-- Different Search Forms Here -->
          <div class="prof-block-form">
            <div class="center-block-form">
              <div class="h1">Find a Professor</div>
              <div class="search-by" data-search="profMenu"> <span class="label">SEARCH BY</span> <a href="#" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf_byname', linkType:'o' } );" href="#" data-type="professor-names" class="active">Name</a> <a href="#" data-type="professor-locations" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf_byschool', linkType:'o' } );">University</a> </div>
              <form action="#" method="post" class="professor-names" id="prof-name">
                <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
                <input type="hidden" name="queryBy" value="teacherName" id="queryBy" />
                <div class="search-info">
                  <div class="optional-flag"> <span class="line-form-txt">I'm looking for a professor at</span>
                    <div class="drop-down-fix">
                      <input type="text" data-type="school" name="uniName" onkeyup="showUni(this.value)" id="uniName" class="fo" placeholder="university's name" autocorrect="off" autocomplete="off" required/>
                      <input type="hidden" class="schoolID" name="schoolID" />
                      <div id="profauContainer2" class="autocomplete-container">
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
                    </div>
                    <span class="line-form-txt">named</span>
                    <div class="drop-down-fix">
                      <input type="text" name="profName" class="fo2"  data-type="name" id="mprname" placeholder="professor's name" onkeyup="findProfByName(this.value)" autocorrect="off" autocomplete="off" required/> <!-- showProfs(this.value) -->
                      <input type="hidden" id="mprnameln" name="profNameln">
                      <div id="profNameAc" class="autocomplete-container">
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
                    <br />
                    <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf_byschool_cancel', linkType:'o' } );">cancel</a> </div>
                </div>
              </form>
              <form action="#" method="post" name="prof-location" class="professor-locations" id="prof-location" >
                <input type="hidden" name="queryoption" value="TEACHER" id="queryoption" />
                <input type="hidden" name="queryBy" value="schoolDetails" id="queryBy" />
                <input type="hidden" class="schoolID" name="schoolID" />
                <div class="search-info">
                  <div class = "left-align-wrap">
                    <div class = ""> <span class="inline-form-txt">I'm looking for professors in the</span>                      <!--<select name="dept" id="searchProfessorDepartment" data-type="department" data-placeholder-option="false" onchange="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf_byschool_deptdropdown', linkType:'o' } );">
                        <option>select</option>
                      </select> -->
                      <select class="myselect" id="countryName" name="country" required >
                      	<option value="">Select</option>

                      	<!-- geting country name from database -->
                      	<?php
                      		$countryQry="SELECT * FROM country";
                      		$exeQry=mysql_query($countryQry);
								while ($res=mysql_fetch_array($exeQry)) { ?>
                        <option value="<?php echo $res['country_name']; ?>"><?php echo $res['country_name']; ?></option>
                        <?php } ?>

                      </select>
                      <span class="inline-form-txt"> country</span> </div>
                       <div class = "">
                      <div class="drop-down-fix">
                      <span class="inline-form-txt">At</span>
                        <input type="text" data-type="school" name="uniName2" id="prf2" placeholder="university's name" class="fo5" onkeyup="findProfByCountryMain(this.value)" autocorrect="off" autocomplete="off" required/>
                        <div id="prfFPrate" class="autocomplete-container mypos5">
                          <ul>
                          </ul>
                        </div>

<script type="text/javascript">

function homeCntUniSearchM2(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("prf2").value = va;
   $("#prfFPrate").hide();
}

</script>

                        <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
                    </div>
                  </div>
                  <div class="cta">
                    <input type="submit" name="prof-location-btn" value="Search"/>
                    <br />
                    <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf_bylocation_cancel', linkType:'o' } );">cancel</a> </div>
                </div>
              </form>
            </div>
          </div>
          <div class="rate-block-form">
            <div class="center-block-form">
              <form action="#" method="post" name="rateSearch" id="rateSearch" >
                <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
                <input type="hidden" name="queryBy" value="teacherName" id="queryBy" />
                <div class="h1">Rate your professor</div>

                   <div class="search-info spacer-10">
                  <div class="optional-flag"> <span class="line-form-txt">I'm looking for a professor at</span>
                    <div class="drop-down-fix">
                      <input type="text" data-type="school" name="uniName" id="uniNamee" onkeyup="UniForProfRate(this.value)" class="fo3" placeholder="university's name" autocorrect="off" autocomplete="off" required/>
                      <input type="hidden" class="schoolID" name="schoolID" />
                      <div id="uniFprofRate" class="autocomplete-container">
                        <ul>
                        </ul>
                      </div>

<script type="text/javascript">

function homeUniSearchMain3(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("uniNamee").value = va;
   $("#uniFprofRate").hide();
}

</script>

                    </div>
                    <span class="line-form-txt">named</span>
                    <div class="drop-down-fix">
                      <input type="text" name="profName"  data-type="name" onkeyup="rateProfByName(this.value)" id="pofOfuni" class="fo4" placeholder="professor's name" autocorrect="off" autocomplete="off" required/> <!-- onkeyup="profForProfRate(this.value)" -->
                      <input type="hidden" id="pofOfunilnn" name="profNameln">
                      <div id="profFprofRate" class="autocomplete-container">
                        <ul>
                        </ul>
                      </div>

<script type="text/javascript">

function homeFronSearchM2(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   var vb =element.getElementsByTagName("span")[2].textContent;
   document.getElementById("pofOfuni").value = va;
    document.getElementById("pofOfunilnn").value = vb;
   $("#profFprofRate").hide();
}

</script>

                      <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
                  </div>
                  <div class="cta">
                    <input type="submit" name="prof-name-btn" value="Search"/>
                    <br />
                    <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf_byschool_cancel', linkType:'o' } );">cancel</a> </div>
                </div>

              <!--   <div class="cta">
                  <input type="submit" name="_action_search" value="search" id="rateSearch-btn" />
                  <br />
                  <a class="reset-search-form">cancel</a> </div> -->
              </form>
            </div>
          </div>
          <div class="school-rate-block-form">
            <div class="center-block-form">
              <form action="#" method="post" name="rateSchoolSearch" id="rateSchoolSearch" >
                <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
                <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
                <div class="h1">Rate your university</div>

                <div class="search-info">
                  <div class = "left-align-wrap">
                    <div class = ""> <span class="inline-form-txt">I'm looking in the</span><br>
                       <!--<select name="dept" id="searchProfessorDepartment" data-type="department" data-placeholder-option="false" onchange="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf_byschool_deptdropdown', linkType:'o' } );">
                        <option>select</option>
                      </select> -->
                      <select class="myselect" name="country" required id="cntrName">
                        <option value="">Select</option>
                       <!-- geting country name from database -->
                        <?php
                          $countryQry="SELECT * FROM country";
                          $exeQry=mysql_query($countryQry);
                while ($res=mysql_fetch_array($exeQry)) { ?>
                        <option value="<?php echo $res['country_name']; ?>"><?php echo $res['country_name']; ?></option>
                        <?php } ?>
                      </select>
                      <span class="inline-form-txt"> country</span>
                    </div>
                    <div class = ""> <span class="inline-form-txt">for</span>
                      <div class="drop-down-fix">
                        <input type="text" data-type="school" name="uniName2" placeholder="university's name" id="hmcntuni" class="fo7" onkeyup="uniForRate(this.value)" autocorrect="off" autocomplete="off" required/>
                        <div id="uniFunirate" class="autocomplete-container searchProfessorSchoolAC mw">
                          <ul>
                          </ul>
                        </div>

<script type="text/javascript">

function homeCntUniSearch(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("hmcntuni").value = va;
   $("#uniFunirate").hide();
}

</script>

                        <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
                       </div>
                  </div>
                  <div class="cta">
                    <input type="submit" name="rate-uni-btn" value="Search" />
                    <br />
                    <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindProf_bylocation_cancel', linkType:'o' } );">cancel</a> </div>
                </div>

              </form>
            </div>
          </div>
          <div class="school-block-form">
            <div class="center-block-form">
              <div class="h1 mobile-header">Find a University</div>
              <div class="h1 header">Find your university</div>
              <div class="search-by" data-search="schoolMenu"> <span class="label">SEARCH BY</span> <a href="#"onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindSchool_byname', linkType:'o' } );"  data-type="school-names" class="active" >Name</a> <a href="#" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindSchool_bylocation', linkType:'o' } );" data-type="school-locations">Location</a> </div>
              <form action="#" method="post" name="schoolNames" class="searchform school-names index-search" id="schoolNames" >
                <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
                <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
                <div class="search-info">
                  <div class="drop-down-fix">
                    <input type="text" name="uniName" placeholder="university's name" id="asiaAunis" onkeyup="uniForuni(this.value)" class="fo6" autocorrect="off" autocomplete="off" required/>
                    <div id="uniFuni" class="autocomplete-container">
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

                    <span class="error-message" id="schools-name-error">This field is required.</span> </div>
                  <div class="cta">
                    <input type="submit" name="schoolNames-btn" value="Search" />
                    <br />
                    <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindSchool_byname_cancel', linkType:'o' } );">CANCEL</a>
                  </div>
                </div>
              </form>
              <form action="#" method="post" name="schoollocations" class="searchform school-locations" id="schoollocations" >
                <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
                <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
                <input type="hidden" name="country" value="united states" id="country" />
                <div class="search-info"> <span class="line-form-txt">
                  <h2>I'm looking for a university in </h2>
                  </span>
                  <div class="select-wraper">
                    <select class="myselect" required onChange="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;HOME:FindSchool_bylocation_statedropdown&#39;, linkType:&#39;o&#39; } );" id="schoolState" name="state" required="" data-placeholder-option="false" >
                      <option value="">select state</option>
                     <!-- geting country name from database -->
                      	<?php
                      		$statepro="SELECT * FROM state_province";
                      		$exeQry=mysql_query($statepro);
								while ($res=mysql_fetch_array($exeQry)) { ?>
                        <option value="<?php echo $res['state_name']; ?>"><?php echo $res['state_name']; ?></option>
                        <?php } ?>
                    </select>
                    <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
                </div>
                <div class="cta">
                  <input type="submit" name="schoolLocationz" value="Search" />
                  <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'HOME:FindSchool_bylocation_cancel', linkType:'o' } );">CANCEL</a> </div>
              </form>
            </div>
          </div>
          
          <!-- Ends different Search forms --> 
          
        </div>
        <div id="moreContent"> More from Academic Review
          <figure> <img src="images/favicon-32.png"> </figure>
        </div>
        <div id="ad6x6" data-ad-sizes="6x6" data-ad-keyvalues="" data-ad-reload-interval="-1" style=""></div>
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
        uri : "/",
        page: "home_index",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "",
        department: "",
        state: "",
        country: "",
        user: {},
        pageLevelData: {
  "pageName": "/home/index",
  "channel": "home",
  "v49": "home",
  "heir2": "home/index",
  "section": "home",
  "prop8": "visitor"
},
        reloadInterval: 30000
      }
    </script> 

<!-- <script type="text/javascript" src="http://btg.mtvnservices.com/aria/coda.html?site=ratemyprofessors.com"></script> -->
<script type="text/javascript" src="assets/myjs/index1.js"></script>

<!-- <script type="text/javascript" src="../media.mtvnservices.com/player/api/2.11.7/api.min.js"></script> -->
<script type="text/javascript" src="assets/myjs/index2.js"></script>

<!-- Coda Implementation --> 

<script src="assets/application-4c66987976b8fccf376e7aac9add4986.js" type="text/javascript" ></script>
<script src="assets/libs/utils-8a88ae62ab3a733b877e63de32541da6.js" type="text/javascript" ></script>
<!-- PAGEOK -->
</body>

</html>
<?php



?>