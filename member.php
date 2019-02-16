
<?php


session_start();

if(isset($_GET['req'])){
    //if user has requested for any perticular page.
     $_SESSION['redirect_URL']=str_replace("member.php?req=/AR/", "", $_SERVER['REQUEST_URI']);
}


require_once __DIR__ . '../assets/src/Facebook/autoload.php';

$fb = new Facebook\Facebook([
  'app_id' => '503274339853633',
  'app_secret' => 'b0e4fc6e3ccfada390ba638288ae3262',
  'default_graph_version' => 'v2.5',
  ]);

$helper = $fb->getRedirectLoginHelper();

$permissions = ['email,user_education_history,user_work_history']; // optional

$loginUrl=null;
  
try {
  if (isset($_SESSION['facebook_access_token'])) {
    $accessToken = $_SESSION['facebook_access_token'];
  } else {
      $accessToken = $helper->getAccessToken();
  }
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  // When Graph returns an error
  echo 'Graph returned an error: ' . $e->getMessage();

    exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  // When validation fails or other local issues
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
    exit;
 }

//to logout from facebook
 if(isset($_GET['stu_status']) && $_GET['stu_status'] === 'logout'){

$url = 'https://www.facebook.com/logout.php?next=' . 'http://localhost:8080/AR/member.php' .
  '&access_token='.$accessToken;
session_destroy();
header('Location: '.$url);

}

if (isset($accessToken)) {

  $_SESSION['user_status']="active";
  //$logoutUrl = $helper->getLogoutUrl($session,'http://localhost:8080/AR/member.php');

  if (isset($_SESSION['facebook_access_token'])) {
    $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
  } else {
    // getting short-lived access token
    $_SESSION['facebook_access_token'] = (string) $accessToken;

      // OAuth 2.0 client handler
    $oAuth2Client = $fb->getOAuth2Client();

    // Exchanges a short-lived access token for a long-lived one
    $longLivedAccessToken = $oAuth2Client->getLongLivedAccessToken($_SESSION['facebook_access_token']);

    $_SESSION['facebook_access_token'] = (string) $longLivedAccessToken;

    // setting default access token to be used in script
    $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
  }

  // redirect the user back to the same page if it has "code" GET variable
  if (isset($_GET['code'])) {
  	if (isset($_SESSION['redirect_URL']) && $_SESSION['redirect_URL']!="") {
  		# code...
  		header('location:'.$_SESSION['redirect_URL']);
  	}
  	else{
      header('location:index.php');
  	}
  }

  // getting basic info about user
  try {
    $profile_request = $fb->get('/me?fields=name,first_name,last_name,email,work,education');
    //permission(FB app live) hone k bad sirf ye field extra add karenge work 
    $profile = $profile_request->getGraphNode()->asArray();

    //geting user_email for many purposes
    $_SESSION['user_email']=$profile['email'];
    $_SESSION['user_first_name']=$profile['first_name'];
    $_SESSION['user_last_name']=$profile['last_name'];

  } catch(Facebook\Exceptions\FacebookResponseException $e) {
    // When Graph returns an error
    echo 'Graph returned an error: ' . $e->getMessage();
    session_destroy();
    // redirecting user back to app login page
    header("Location: ./");
    exit;
  } catch(Facebook\Exceptions\FacebookSDKException $e) {
    // When validation fails or other local issues
    echo 'Facebook SDK returned an error: ' . $e->getMessage();
    exit;
  }
  
  // printing $profile array on the screen which holds the basic info about user
  //print_r($profile);

///////////////////////////////////////////////////getting values from the multidimensional associative array///////////////////////////////////////////////////////////////


$isStudent=false;$isProfessor=false;
$employerArr = array();$positionArr = array();$startDateArr = array();$endDateArr = array();$lecturerAt = array();$educationFrom = array();
$schoolArr = array();$typeArr = array();$yearArr = array();
$ProfileKeys=array_keys($profile);
for ($i=0; $i <count($profile) ; $i++) { 
  # code...
  $wrkNumber=0;$eduNumber=0;
  if ($ProfileKeys[$i]=="work") {
    # code...
    $Work_KEYS=array_keys($profile[$ProfileKeys[$i]]);
    foreach ($profile[$ProfileKeys[$i]] as $K => $V) {
      # code...
      //echo count($profile[$ProfileKeys[$i]]);
      //$multi_wrk=array_keys($profile[$ProfileKeys[$i]][$Work_KEYS[$wrkNumber]]);
      $employerArr[$wrkNumber]="undefined";
      $positionArr[$wrkNumber]="undefined";
      $startDateArr[$wrkNumber]="undefined";
      $endDateArr[$wrkNumber]="undefined";
      foreach ($profile[$ProfileKeys[$i]][$Work_KEYS[$wrkNumber]] as $KK => $VV) {
        # code...

        if ($KK=="employer") {
          # code...
          foreach ($profile[$ProfileKeys[$i]][$Work_KEYS[$wrkNumber]][$KK] as $key => $value) {
            # code...
            if($key=="name"){ $employerArr[$wrkNumber]=$value; }
          }
        }
        if ($KK=="position") {
          # code...
          foreach ($profile[$ProfileKeys[$i]][$Work_KEYS[$wrkNumber]][$KK] as $key => $value) {
            # code...
            if($key=="name"){ $positionArr[$wrkNumber]=$value; }
          }
        }
        if ($KK=="start_date") {
          # code...
          $startDateArr[$wrkNumber]=$VV;
        }
        if ($KK=="end_date") {
          # code...
          $endDateArr[$wrkNumber]=$VV;
        }
      }
      //print_r($multi_edu_wrk);
    $wrkNumber++;
    }
  }//end of work array


  if ($ProfileKeys[$i]=="education") {
    # code...
    $isStudent=true;
     $Edu_KEYS=array_keys($profile[$ProfileKeys[$i]]);
    foreach ($profile[$ProfileKeys[$i]] as $K => $V) {
      # code...
      //echo count($profile[$ProfileKeys[$i]]);
      //$multi_edu=array_keys($profile[$ProfileKeys[$i]][$Edu_KEYS[$eduNumber]]);
      $schoolArr[$eduNumber]="undefined";
      $yearArr[$eduNumber]="undefined";
      $typeArr[$eduNumber]="undefined";

      foreach ($profile[$ProfileKeys[$i]][$Edu_KEYS[$eduNumber]] as $KK => $VV) {
        # code...
        if ($KK=="school") {
          # code...
          foreach ($profile[$ProfileKeys[$i]][$Edu_KEYS[$eduNumber]][$KK] as $key => $value) {
            # code...
            if($key=="name"){ $schoolArr[$eduNumber]=$value; }
          }
        }
        if ($KK=="year") {
          # code...
          foreach ($profile[$ProfileKeys[$i]][$Edu_KEYS[$eduNumber]][$KK] as $key => $value) {
            # code...
            if($key=="name"){ $yearArr[$eduNumber]=$value; }
          }
        }
        if ($KK=="type") {
          # code...
          $typeArr[$eduNumber]=$VV;
        }
      }
      //print_r($multi_edu_wrk);
    $eduNumber++;
    }
  }//end of education array
}//end of for loop

//if user is lecturrer then store the place name where he teach
for ($i=0; $i <count($employerArr) ; $i++) {
    if ($positionArr[$i]=="Lecturer") {
        # code...
        $lecturerAt[]=$employerArr[$i];
    }
}

//if education type is college of graduate school then save the institute name from where he/she get education
for ($i=0; $i <count($schoolArr) ; $i++) {
    if ($typeArr[$i]=="College" || $typeArr[$i]=="Graduate School") {
        # code...
        $educationFrom[]=$schoolArr[$i];
    }
}

//break array in to string to save in to session
$lecturerPl=implode("***",$lecturerAt);
$educationPl=implode("***", $educationFrom);

echo $_SESSION["lecturerPlaces"]=$lecturerPl;
echo $_SESSION["educationPlaces"]=$educationPl;




/*if have concern with start_date and end_date then user bellow code acordingli*/
/*
echo "<br>";
print_r($employerArr);echo "<br>";
print_r($positionArr);echo "<br>";
print_r($startDateArr);echo "<br>";
print_r($endDateArr);echo "<br>";

echo "<br>";

print_r($schoolArr);echo "<br>";
print_r($yearArr);echo "<br>";
print_r($typeArr);echo "<br>";

echo "user is student?".$isStudent;

//$_SESSION["favcolor"]


echo "<br>";
print_r($lecturerAt);
echo "<br>";
print_r($educationFrom);
echo "<br>";




$_SESSION["numOfWorks"]=count($employerArr);
$_SESSION["numOfEducation"]=count($schoolArr);

for ($i=0; $i <count($employerArr) ; $i++) { 
    # code...creating session variable dynamically for storing work info
    ${"employee" . $i}="";
    ${"employee" . $i} = $positionArr[$i]."**".$employerArr[$i]."**".$startDateArr[$i]."**".$endDateArr[$i];
    $_SESSION[${"employee" . $i}]=$positionArr[$i]."**".$employerArr[$i]."**".$startDateArr[$i]."**".$endDateArr[$i];
}

for ($i=0; $i <count($schoolArr) ; $i++) { 
    # code...creating session variable dynamically for storing education info
    ${"edu" . $i}="";
    ${"edu" . $i} = $schoolArr[$i]."**".$typeArr[$i]."**".$yearArr[$i];
    $_SESSION[${"edu" . $i}]=$schoolArr[$i]."**".$typeArr[$i]."**".$yearArr[$i];
}

echo "<br>";echo "<br>";
for ($i=0; $i <count($employerArr) ; $i++) {
    echo $_SESSION[${"employee" . $i}]; echo "<br>";
}

echo "<br>";echo "<br>";
for ($i=0; $i <count($schoolArr) ; $i++) {
    echo $_SESSION[${"edu" . $i}];echo "<br>";
}*/

///////////////////////////////////////////////////end of getting values from the multidimensional associative array///////////////////////////////////////////////////////////////


    // Now you can redirect to another page and use the access token from $_SESSION['facebook_access_token']
} else {
    //$_SESSION['user_status']="deactive";
  // replace your website URL same as added in the developers.facebook.com/apps e.g. if you used http instead of https and you used non-www version or www version of your website then you must add the same here
  $loginUrl = $helper->getLoginUrl('http://localhost:8080/AR/member.php', $permissions);
  //echo '<a href="' . $loginUrl . '">Log in with Facebook!</a>';
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

<!-- Mirrored from www.ratemyprofessors.com/member by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:21:09 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="account_page">

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
      <div class="page-wrap">
        <div class="header">Log In to Academic Review</div>
        <div class="explain"> <b>Go ahead, log in, you’re still anonymous.</b> You’re always anonymous here, but logging in will allow you to rate professors and universities. You can thank us later. </div>
<?php

if (!isset($accessToken)) {
  echo '<a class="fblogin-btn" href="' . $loginUrl . '"><img src="images/fblogin.png"></a>';
}else{  echo '<a class="fblogin-btn" href="?stu_status=logout"><img src="images/fblogout.png"></a>'; }

?>
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
        uri : "/member",
        page: "account_page",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "",
        department: "",
        state: "",
        country: "",
        user: {},
        pageLevelData: {
  "pageName": "#",
  "channel": "login",
  "hier2": "login/main",
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

<!-- Mirrored from www.ratemyprofessors.com/member by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:21:11 GMT -->
</html>
<?php



?>