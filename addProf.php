<?php

//including connection file
include('imp_files/con_file.php');

include('classes/student_class.php');


$prof_exist=false;$userIsProfessor=false;$showMessage="";

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

  }else{/*echo $showMessage="You do not have any rights to add any professor.";*/}
}


//if submit button pressed to add a professor
if (isset($_POST['_action_save'])) {
	# code...
	$firstName=$_POST['fname'];
	$middleName=null;
	if ($_POST['mname']!="") {
		# code...
		$middleName=$_POST['mname'];
	}
	$lastName=$_POST['lname'];
	$country=$_POST['country'];
	$university=$_POST['uniV'];
	$department=$_POST['dept'];
  $start_year=$_POST['startDate'];
  $end_year="";
  if ($_POST['endDate']!=null) {
    # code...
    $end_year=$_POST['endDate'];
  }
	$directory=null;
	if ($_POST['url']!=null) {
		# code...
		$directory=$_POST['url'];
	}
  $contact=$_POST['contact'];
  $email=$_SESSION['user_email'];
  $av_status="pending";

	//if professor is unique then allow(insert) else not allow.
  $chckqru="SELECT * FROM professor";
    $myqry=mysql_query($chckqru);
    while ($val_of=mysql_fetch_array($myqry)) {
      if ($firstName==$val_of['first_name'] && $lastName==$val_of['last_name'] && $university==$val_of['school_name']) {
        $prof_exist=true;
      }else{}
    }
    if ($prof_exist!=true) {
      # code...
      if ($_SESSION["lecturerPlaces"]!="") {
      $stu = new Student();
      $stu->addProf($firstName,$middleName,$lastName,$university,$department,$directory,$country,$email,$start_year,$end_year,$contact,$av_status);
    }else{
      echo "<script>if (window.confirm('You do not have any rights to add any professor')){document.location = 'index.php'}else{document.location = 'index.php'}</script>";
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

<!-- Mirrored from www.ratemyprofessors.com/teacher/create by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:32:11 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="add_teacher">

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
          <div class="page-title">Add New Professor</div>
          <p>Important: Please use the search bar above to make sure that the professor does not already exist at this university.</p>
          <section class="add-teacher-form">
            <form action="#" method="post" name="addTeacher" class="addTeacher" id="addTeacher" >
              <div class="form_wrap">
                <div class="form-element">
                  <label class="label">first name</label>
                  <div class="input">
                    <input type="text" readonly="readonly" name="fname" value="<?php if($_SESSION["user_first_name"]!=""){echo "$_SESSION[user_first_name]";}?>"  required class="js-required">
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                <div class="form-element">
                  <label class="label"> middle name <span class="optional-text-l">(Optional)</span> </label>
                  <div class="input">
                    <input type="text" name="mname" value="">
                  </div>
                </div>
                <div class="form-element">
                  <label class="label">last name</label>
                  <div class="input">
                    <input type="text" readonly="readonly" name="lname" value="<?php if($_SESSION["user_last_name"]!=""){echo "$_SESSION[user_last_name]";}?>" required class="js-required">
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                 <div class="form-element">
                  <label class="label">Country</label>
                  <div class="input">
                    <select  class="js-required myselect" onchange="loadDoc('assets/myAjax/fetch_data.php?country='+this.value, getUni)" name="country" style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;" required data-placeholder-option="false">
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
                  <label class="label">Name of university</label>
                  <div class="input">
                    <select  class="js-required myselect" id="uniSelect" name="uniV"  style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;" required data-placeholder-option="false">
                      <option value="" >Select University</option>
                    </select>
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                <div class="form-element">
                  <label class="label">department</label>
                  <div class="input">
                    <select  class="js-required myselect" name="dept" id="deptselect" style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;" required data-placeholder-option="false">
                      <option value="">Select department</option>
                      <!-- geting department names from database -->
                        <?php
                          $countryQry="SELECT * FROM department";
                          $exeQry=mysql_query($countryQry);
                          while ($res=mysql_fetch_array($exeQry)) { ?>
                            <option value="<?php echo $res['department_name']; ?>"><?php echo $res['department_name']; ?></option>
                        <?php } ?>
                    </select>
                    <div class="error-message">This field is required.</div>
                  </div>
                </div>
                <div class="form-element faculty-url-form">
                  <label class="label">Year of start teaching here</label>
                  <div class="input">
                    <select  class="js-required myselect" name="startDate" id="start_date" style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;" required data-placeholder-option="false">
                      <option value="">Select Year</option>
                      <option value="1990" >1990</option>
                      <option value="1991" >1991</option>
                      <option value="1992" >1992</option>
                      <option value="1993" >1993</option>
                      <option value="1994" >1994</option>
                      <option value="1995" >1995</option>
                      <option value="1996" >1996</option>
                      <option value="1997" >1997</option>
                      <option value="1998" >1998</option>
                      <option value="1999" >1999</option>
                      <option value="2000" >2000</option>
                      <option value="2001" >2001</option>
                      <option value="2002" >2002</option>
                      <option value="2003" >2003</option>
                      <option value="2004" >2004</option>
                      <option value="2005" >2005</option>
                      <option value="2006" >2006</option>
                      <option value="2007" >2007</option>
                      <option value="2008" >2008</option>
                      <option value="2009" >2009</option>
                      <option value="2010" >2010</option>
                      <option value="2011" >2011</option>
                      <option value="2012" >2012</option>
                      <option value="2013" >2013</option>
                      <option value="2014" >2014</option>
                      <option value="2015" >2015</option>
                      <option value="2016" >2016</option>
                    </select>
                  </div>
                </div>
                <div class="form-element faculty-url-form">
                  <label class="label">Year of end teaching here<span class="optional-text-l">(Optional) If you are currently teaching here</span></label>
                  <div class="input">
                     <select  class="myselect" name="endDate" id="end_date" style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;" data-placeholder-option="false">
                      <option value="">Select Year</option>
                      <option value="2016" >2016</option>
                      <option value="2015" >2015</option>
                      <option value="2014" >2014</option>
                      <option value="2013" >2013</option>
                      <option value="2012" >2012</option>
                      <option value="2011" >2011</option>
                      <option value="2010" >2010</option>
                      <option value="2009" >2009</option>
                      <option value="2008" >2008</option>
                      <option value="2007" >2007</option>
                      <option value="2006" >2006</option>
                      <option value="2005" >2005</option>
                      <option value="2004" >2004</option>
                      <option value="2003" >2003</option>
                      <option value="2002" >2002</option>
                      <option value="2001" >2001</option>
                      <option value="2000" >2000</option>
                      <option value="1999" >1999</option>
                      <option value="1998" >1998</option>
                      <option value="1997" >1997</option>
                      <option value="1996" >1996</option>
                      <option value="1995" >1995</option>
                      <option value="1994" >1994</option>
                      <option value="1993" >1993</option>
                      <option value="1992" >1992</option>
                      <option value="1991" >1991</option>
                      <option value="1990" >1990</option>
                    </select>
                  </div>
                </div>
                <div class="form-element faculty-url-form">
                  <label class="label">contact # </label>
                  <div class="input">
                    <input type="text" name="contact" id="contactNo" value="" required class="js-required" >
                  </div>
                </div>
                <div class="form-element faculty-url-form">
                  <label class="label">directory listing of professor <span class="optional-text-l">(Optional)</span></label>
                  <div class="input">
                    <input type="text" name="url" id="faculty_url" placeholder="http://" value="" >
                  </div>
                </div>
                <div class="form-element">
                  <label class="label"> </label>
                  <div class="input">
                    <div class="submit-form">
                      <div class="another_email"><?php if($prof_exist==true){ echo 'Professor is already exist'; } ?></div>
                      <input type="submit" name="_action_save" value="Submit" id="" /><!-- id="submitTeacher" -->
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
function getUni(xhttp) {
  document.getElementById("uniSelect").innerHTML = xhttp.responseText;
}

function getdept(xhttp) {
  document.getElementById("deptselect").innerHTML = xhttp.responseText;
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
        uri : "/teacher/create",
        page: "add_teacher",
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

</html>
<?php



?>