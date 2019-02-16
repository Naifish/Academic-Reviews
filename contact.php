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

<!-- Mirrored from www.ratemyprofessors.com/utility/contact by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:31:34 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="utility_contact">

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
      <div class="utility-wrap">
       <!--  <div id="utility-ad" class="right-panel-mtvnad utility"></div> -->
        <div class = "left-wrap">
          <div class="page-title">Contact Us</div>
          <dl class="accordion">
            <dt><a href="#inquiries" id="inquiries" class="trigger-inquiries"><span>+</span> WHO DO I CONTACT TO ADVERTISE ON YOUR SITE?</a></dt>
            <dd>
              <p>To get more information about advertising on AcademicReviews.com you can contact us with your request in the form below.</p>
            </dd>
            <dt><a href="#address" id="address" class="trigger-address"><span>+</span> WHAT IS YOUR MAILING ADDRESS?</a></dt>
            <dd>
              <p> AcademicReviews.com <br />
                ABC Road <br />
                Karachi, Sindh Pakistan <br />
                Phone: 111-111-0000 </p>
            </dd>
            <dt><a href="#support" id="support" class="trigger-support"><span>+</span> WHO SHOULD I CONTACT FOR CUSTOMER SUPPORT?</a></dt>
            <dd>
              <p>If you are experiencing issues or technical difficulties, you can visit our <a href="help.php">Help</a> page for more assistance.</p>
              <p>Note: You can report ratings or notes directly from the professor or university page by clicking the "report this rating" link at the bottom of the comment or note in question if you think its wrong.</p>
              <p>If your issue still persists after reviewing our <a href="help.php">Help</a> page, please fill out and submit the form below with a detailed description of your issue, including applicable page URLs, error messages, and browser/OS versions. Our Customer Service team will provide assistance in the order your issue is received.</p>
            </dd>
          </dl>
          <section class="contact-form">
            <div id="explanation">
              <p>Fields marked with an <span class="important">*</span> asterisk are required.</p>
            </div>
            <form action="#" method="post" class="contactUs" name="contact-Us" id="contact-Us" >
              <div class="form_wrap">
                <div class="form-element form-elem">
                  <h3 class="select-category">Select Category<span class="important">*</span></h3>
                  <div class="search-info">
                    <select id="contactUs" name="supportcategories" class="contact_category required">
                      <option>Please select</option>
                      <option >Report unacceptable ratings</option>
                      <option >Student account</option>
                      <option >Professor account</option>
                      <option >Technical Issues</option>
                      <option >How do I add a professor?</option>
                      <option >Professor added not showing</option>
                      <option >How do I add a university?</option>
                      <option >University added not showing</option>
                      <option >Correct university info</option>
                      <option >Mobile support</option>
                      <option >Other</option>
                    </select>
                    <span class="error-message">This field is required.</span> </div>
                </div>
                <div class="form-element">
                  <label class="label">first name</label>
                  <div class="input">
                    <input type="text" name="first_name" id="contact_fname" value="">
                  </div>
                </div>
                <div class="form-element">
                  <label class="label">last name</label>
                  <div class="input">
                    <input type="text" name="last_name" id="contact_lname" value="">
                  </div>
                </div>
                <div class="form-element">
                  <label class="label">university</label>
                  <div class="input">
                    <input type="text" name="school" id="contact_shcool" value="">
                  </div>
                </div>
                <div class="form-element form-elem">
                  <label class="label">email<span class="important">*</span></label>
                  <div class="input">
                    <input type="email" name="email" id="contact_email" class="required" value="">
                    <span class="error-message">Invalid email</span> </div>
                </div>
                <div class="form-element">
                  <label class="label">url in question</label>
                  <div class="input">
                    <input type="text" name="url" id="contact_url" value="">
                  </div>
                </div>
                <div class="form-element form-elem" id="comment-textarea">
                  <div class="comment-label">
                    <h3>comments<span class="important">*</span></h3>
                    <p>To help us expedite your request, please be as descriptive as possible.  Please include the professor's first and last name as well as the entire name of the referenced university.</p>
                  </div>
                  <div class = "input">
                    <textarea name="comments" maxlength="1000" id="contact_message" class="required"></textarea>
                    <div class="character-count"><span>1000</span> characters left</div>
                    <span class="error-message">This field is required.</span> </div>
                </div>
                <div class="form-element form-elem submit">
                  <!-- <div class="captcha-wrap">
                    <div class="captcha hidee">
                      <div class="fieldcontain" required> 
                        <script type="text/javascript">
var RecaptchaOptions = {theme:'white'};
</script> 
                        <script type="text/javascript" src="http://www.google.com/recaptcha/api/challenge?k=6LfCk-QSAAAAAOO9AoDjtJbN-4fsej6us36TW5Gm&amp;error=null"></script>
                        <noscript>
                        <iframe src="http://www.google.com/recaptcha/api/noscript?k=6LfCk-QSAAAAAOO9AoDjtJbN-4fsej6us36TW5Gm&amp;error=null" height="300" width="500" frameborder="0"></iframe>
                        <br>
                        <textarea name="recaptcha_challenge_field" rows="3" cols="40"></textarea>
                        <input type="hidden" name="recaptcha_response_field" value="manual_challenge">
                        </noscript>
                      </div>
                    </div>
                    <span class="error-message">Captcha is required.</span> </div> -->
                  <input type="submit" name="contactUs" id="contactForm" value="Submit" />
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
        uri : "/utility/contact",
        page: "utility_contact",
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
<script language='JavaScript' type='text/javascript'>
   	  // This needs to be enabled in RMP's environment
      mtvn.btg.config.ReportSettings.Omniture={ enable:true, account:'viaviarmp', trackExternalLinks:true };
    </script> 
<!-- Coda Implementation --> 

<script src="assets/application-4c66987976b8fccf376e7aac9add4986.js" type="text/javascript" ></script> 
<script src="assets/libs/utils-8a88ae62ab3a733b877e63de32541da6.js" type="text/javascript" ></script> 
<!-- PAGEOK -->
</body>

<!-- Mirrored from www.ratemyprofessors.com/utility/contact by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:31:34 GMT -->
</html>