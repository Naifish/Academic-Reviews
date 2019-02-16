<?php

//including connection file
include('imp_files/con_file.php');

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
            <div class="header"> Search Results for <span class="title-case"> All Universities </span> </div>
            <div class="not-found-box"> Don't see the university you're looking for? <a href="addUni.php">add a university</a>. </div>
            <!-- Top Pager -->
            <!-- <div class="result-pager hidden-md"> <span class="currentStep">1</span><a href="searchec15.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=20&amp;max=20" class="step">2</a><a href="search1061.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=40&amp;max=20" class="step">3</a><a href="searchb7ba.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=60&amp;max=20" class="step">4</a><a href="searchf71e.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=80&amp;max=20" class="step">5</a><a href="searchfa44.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=100&amp;max=20" class="step">6</a><a href="search3c4a.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=120&amp;max=20" class="step">7</a><a href="search5db8.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=140&amp;max=20" class="step">8</a><a href="searchd0fe.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=160&amp;max=20" class="step">9</a><a href="search341b.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=180&amp;max=20" class="step">10</a><span class="step gap">..</span><a href="searcheca7.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=1521480&amp;max=20" class="step">76075</a><a href="searchec15.html?query=*&amp;queryoption=HEADER&amp;stateselect=&amp;country=&amp;dept=&amp;queryBy=&amp;facetSearch=&amp;schoolName=&amp;offset=20&amp;max=20" class="nextLink">| Next</a> </div> -->
          </div>
          <div class="toppager-right">
            <div id="ad-container" class="nonmobile--ad"></div>
          </div>
          <!-- Ends Top Pager --> 
        </div>
        <!-- Begins Results List -->
        <div class="listings-wrap">
          <div class="listings-header">
            <div class="listing-cat">Category</div>
            <div class="listing-name">Name</div>
          </div>
          <ul class="listings">

          <?php

          //if search university by name
          if(isset($_GET['uniName'])){
          //echo $_GET['uniName'];

                $uni=new School();
                $uni->_set('school_name',$_GET['uniName']);

                $uniNM=$uni->_get('school_name');

                /*$showUni="SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,c.country_id,c.country_name
                FROM country c,school s
                WHERE s.country_id=c.country_id AND (s.school_name='$uniNM' OR s.school_nick_name='$uniNM')";*/

                $showUni="CALL searchUni_byname('$uniNM')";
                $exeQry=mysql_query($showUni);
                while ($res=mysql_fetch_array($exeQry)) {
                  ?>

            <!-- Starts One professor Listing -->
            
            <li class="listing SCHOOL"> <a href=<?php echo"uniRating.php?univName=".str_replace(" ", "%20", $res['school_name'])."&citName=".$res['city_name']."&cntryName=".$res['country_name']."&cntryID=".$res['country_id']; ?>> <span class="listing-cat"> <span class="icon icon-school"></span> UNIVERSITY </span> <span class="listing-name"> <span class="main"><?php echo $res['school_name']; ?></span> <span class="sub"><?php echo $res['city_name'].", ".$res['state_name'].", ".$res['country_name']; ?></span> </span> </a> </li>
            
            <?php } } ?>

            <?php

            //if search university by location
            if(isset($_GET['stateName'])){
              //echo $_GET['stateName'];

                $stateNM=$_GET['stateName'];

               /* $showUni="SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,c.country_id,c.country_name
                FROM country c,school s
                WHERE s.country_id=c.country_id AND s.state_name='$stateNM'";*/

                $showUni="CALL searchUni_bylocation('$stateNM')";
                $exeQry=mysql_query($showUni);
                while ($res=mysql_fetch_array($exeQry)) {
                  ?>

            <!-- Starts One professor Listing -->
            
            <li class="listing SCHOOL"> <a href=<?php echo"uniRating.php?univName=".str_replace(" ", "%20", $res['school_name'])."&citName=".$res['city_name']."&cntryName=".$res['country_name']."&cntryID=".$res['country_id']; ?>> <span class="listing-cat"> <span class="icon icon-school"></span> UNIVERSITY </span> <span class="listing-name"> <span class="main"><?php echo $res['school_name']; ?></span> <span class="sub"><?php echo $res['city_name'].", ".$res['state_name'].", ".$res['country_name']; ?></span> </span> </a> </li>
            
            <?php } } ?>

            <?php

            //if search university for rating
            if(isset($_GET['uniName2']) && isset($_GET['countryName'])){
              //echo $_GET['uniName2']." ".$_GET['countryName'];

              $uni=new School();
              $uni->_set('school_name',$_GET['uniName2']);

              $uniNM=$uni->_get('school_name');
              $countryNM=$_GET['countryName'];

                /*$showUni="SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,c.country_id,c.country_name
                FROM country c,school s
                WHERE s.country_id=c.country_id AND c.country_name='$countryNM' AND (s.school_name='$uniNM' OR s.school_nick_name='$uniNM')";*/

                $showUni="CALL searchUni_forRating('$countryNM','$uniNM')";
                $exeQry=mysql_query($showUni);
                while ($res=mysql_fetch_array($exeQry)) {
                  ?>

            <!-- Starts One professor Listing -->
            
            <li class="listing SCHOOL"> <a href=<?php echo"uniRating.php?univName=".str_replace(" ", "%20", $res['school_name'])."&citName=".$res['city_name']."&cntryName=".$res['country_name']."&cntryID=".$res['country_id']; ?>> <span class="listing-cat"> <span class="icon icon-school"></span> UNIVERSITY </span> <span class="listing-name"> <span class="main"><?php echo $res['school_name']; ?></span> <span class="sub"><?php echo $res['city_name'].", ".$res['state_name'].", ".$res['country_name']; ?></span> </span> </a> </li>
            
            <?php } } ?>

          </ul>
        </div>
      </div>
      <!-- Ends Filter Box --> 
      
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