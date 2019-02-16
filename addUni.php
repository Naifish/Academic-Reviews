<?php

//including connection file
include('imp_files/con_file.php');

include('classes/student_class.php');


$uni_exist=false;$userIsProfessor=false;$showMessage="";

//agr user login nai hai to use login karwao
session_start();
if(!isset($_SESSION['user_status'])){
  $request=$_SERVER['REQUEST_URI'];
  header('location:member.php?req='.$request);
}

if (isset($_SESSION["lecturerPlaces"])) {
  # code...
  //echo "lecturerPlaces set";
  if ($_SESSION["lecturerPlaces"]!="") {
    # code...
    $userIsProfessor=true;
    $lecturerAt=explode("***", $_SESSION["lecturerPlaces"]);

  }else{/*echo $showMessage="You do not have any rights to add any University.";*/}
}

//if submit button pressed to add University
if (isset($_POST['_action_saveSchool'])) {
  # code...
  $uniName=$_POST['school'];
  $nickName=$_POST['school_n'];
  $country=$_POST['country'];
  $countryID=null;
  $stateProv=$_POST['statess'];
  $city=$_POST['city'];
  $Website=null;
  if ($_POST['website']!=null) {
    # code...
    $Website=$_POST['website'];
  }
  $av_status="pending";

  //just to get country ID
  $cntryInfoQry="SELECT * FROM country WHERE country_name='$country'";
  $myqry=mysql_query($cntryInfoQry);
    while ($val_of=mysql_fetch_array($myqry)) {
      $countryID=$val_of['country_id'];
    }
  //end of geting countryID

  //if school is unique then allow(insert) else not allow.
  $chckqru="SELECT * FROM school";
    $myqry=mysql_query($chckqru);
    while ($val_of=mysql_fetch_array($myqry)) {
      if ($uniName==$val_of['school_name'] && $city==$val_of['city_name']) {
        $uni_exist=true;
      }else{}
    }
    if ($uni_exist!=true) {
      # code...
      if ($_SESSION["lecturerPlaces"]!="") {
      $stu = new Student();
      $stu->addUni($uniName,$nickName,$countryID,$stateProv,$city,$Website,$av_status);
    }else{
      //echo $showMessage="You do not have any rights to add any University.";

      echo "<script>if (window.confirm('You do not have any rights to add any University')){document.location = 'index.php'}else{document.location = 'index.php'}</script>";
    }
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

<!-- Mirrored from www.ratemyprofessors.com/tempschool/addSchool by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:32:11 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="add_school">

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
      <div class="add-wrap">
        <!-- <div id="utility-ad" class="right-panel-mtvnad utility"></div> -->
        <div class = "left-wrap">
          <div class="page-title">Add New University</div>
          <p>Important: Please use the search bar above to make sure that the university does not already exist on Academic Reviews.</p>
          <section class="add-school-form">
            <form action="#" method="post" class="addSchool" name="addSchool" id="addSchool" >
              <div class="form_wrap">
                <div class="form-element">
                  <label class="label">name of university</label>
                  <div class="input">
                    <input type="text" name="school" readonly="readonly" value="<?php if($_SESSION["lecturerPlaces"]!="" && count($lecturerAt)==1){echo "$lecturerAt[0]";}?>" required class="js-required sk1 <?php if(count($lecturerAt)>1){echo 'hidee';} else{ echo "blockk"; } ?>" placeholder="<?php if($_SESSION["lecturerPlaces"]==""){echo "You are not a Lecturer!!";}?>" >
                    <Select name="school" class="js-required js-add-school-toggle myselect <?php if(count($lecturerAt)>1){echo 'blockk';} else{ echo "hidee"; } ?> " <?php if(count($lecturerAt)<2){echo 'disabled';} ?> required style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;">
                      <option value="">Select University</option>
                      <?php
                        if (count($lecturerAt)>1) {
                          # code...
                          for ($i=0; $i <count($lecturerAt) ; $i++) { 
                            # code...
                            echo "<option value='$lecturerAt[$i]'>".$lecturerAt[$i]."</option>";
                          }
                        }
                      ?>
                    </Select>
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                <div class="form-element nickname-form">
                  <label class="label">commonly used university nickname</label>
                  <div class="input">
                    <input type="text" name="school_n" value="" required maxlength="10" class="js-required" >
                    <div class="error-message">This field is required.</div>
                    <span>Examples: NYU, UPenn, Penn State</span> </div>
                </div>
                <div class="form-element">
                  <label class="label">country</label>
                  <div class="input">
                    <select name="country" id="country" onchange="loadDoc('assets/myAjax/fetch_data.php?cntry='+this.value, getStates)" class="js-required js-add-school-toggle myselect" required style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;" >
                      <option value="">Select Country</option>
                     <!-- geting countries names from database -->
                        <?php
                          $countryQry="SELECT * FROM country";
                          $exeQry=mysql_query($countryQry);
                          while ($res=mysql_fetch_array($exeQry)) { ?>
                            <option value="<?php echo $res['country_name']; ?>"><?php echo $res['country_name']; ?></option>
                        <?php } ?>
                    </select>
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                <div class="form-element">
                  <label class="label">state/province</label>
                  <div id="states" class="input">
                    <select name="statess" class="js-required js-add-selectsss myselect" id="stateSelect" onchange="loadDoc('assets/myAjax/fetch_data.php?state='+this.value, getCities)" required style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;">
                      <option value="">Select State/Province</option>
                    </select>
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                <div class="form-element">
                  <label class="label">city</label>
                  <div class="input">
                     <select name="city" class="js-required js-add-selectsss myselect" id="citySelect" required style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;">
                      <option value="">Select City</option>
                    </select>
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                <div class="form-element">
                  <label class="label">website</label>
                  <div class="input">
                    <input type="text" name="website" value="" class="js-required" required placeholder="http://" >
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                <div class="form-element">
                  <label class="label"> </label>
                  <div class="input">
                    <div class="submit-form">
                      <div class="another_email"><?php if($uni_exist==true){ echo 'University is already exist'; } ?></div>
                      <input type="submit" name="_action_saveSchool" value="Submit" id="" /><!-- id="submitSchool" -->
                      <br />
                      <a href="../index.html" class="cancel">cancel</a> </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- Ends Body Content --> 
  
<!-- start footer -->
    <?php include('imp_files/footer.php') ?>
<!-- end footer -->

<script type="text/javascript">

function loadDoc(url, cfunc) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      cfunc(xhttp);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function getStates(xhttp) {
  document.getElementById("stateSelect").innerHTML = xhttp.responseText;
}

function getCities(xhttp) {
  document.getElementById("citySelect").innerHTML = xhttp.responseText;
}

</script>



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
        uri : "/tempschool/addSchool",
        page: "add_school",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "",
        department: "",
        state: "",
        country: "",
        user: {},
        pageLevelData: {
  "pageName": "#",
  "channel": "",
  "hier2": "",
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

<!-- Mirrored from www.ratemyprofessors.com/tempschool/addSchool by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:32:11 GMT -->
</html>
<?php



?>