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

<!-- Mirrored from www.ratemyprofessors.com/About.jsp by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Oct 2015 23:31:30 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>
  <body class="utility_terms">

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
			<div id="utility-ad" class="right-panel-mtvnad utility"></div>
			<div class="left-wrap">
				<div class="page-title">Terms &amp; Conditions</div>

				<dl class="accordion">
					<dt>
						<a class="trigger-privacy" href=""><span>+</span> PRIVACY
							POLICY</a>
					</dt>
					<dd>
						<p>Last Modified: February 9, 2016</p>
						<p>
							We operates http://academicreviews.azurewebsites.net. This page informs you of our policies regarding the collection, use and disclosure of personal information we recieved from user of the Site.</p>

              <p>We use your Personal Information only for providing and improving the Site. By using the Site, You agree the collection and use of information in accordanc with policy.</p>

              <p class="bold">Information Collection And Use</p>

              <p>
                While using our Site, We may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, But is not limited to your name("Personal Information").
              </p><br>

               <p class="bold">Log Data</p>

               <p>
                 Like many site operator, We collect information that your browser sends whenever you visit our Site("Log Data").
               </p>
               <p>
                 This Log Data may include information such as your compuert internet protocol("IP") address, browser type, browser version, the page of our Site that you visit, the time and date of your visit, the time spent on those pages other statistics.
               </p>
               <p>
               In additional we may use third party services such as Google Analytics collect.
               </p><br>

                <p class="bold">Communications</p>
                <p>
                  We may use your personal information to contact you with newsletters, marketing promotions materials and other infomation.
                </p><br>

                 <p class="bold">Cookies</p>

                <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored n your computer's hard drive</p>
                <p>
                  Like many sites we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cokies is begin send. However, if you do not accept cookies, you may not be able to use some portion of our site.
                </p><br>

                <p class="bold">Change To This Privacy Policy</p>
                <p>This Privacy Policy is effective as of December 31, 2016 and will remain in effect except with respect to any change in its provision in the future, which will be in effect immediately after being posted on this page.</p>
                <p>
                  We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. You continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgement of the modification and your consent to abide and be boundly by the modified Privacy Policy.
                </p>
                <p>
                  If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
                </p>

                <p class="bold">Contact Us</p>
                <p>If you have any questions about this Privacy Policy, please <a href="contact.php">contact us.</a></p>
					</dd>
				</dl>
			</div>
		</div>
    </div>
    <div style="margin-bottom:350px;"></div>
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
        uri : "/TermsOfUse_us.jsp",
        page: "utility_terms",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "",
        department: "",
        state: "",
        country: "",
        user: {},
        pageLevelData: {
  "pageName": "http://www.ratemyprofessors.com/TermsOfUse_us.jsp",
  "channel": "interact",
  "hier2": "interact/terms/terms of use",
  "prop8": "visitor"
},
        reloadInterval: 60000
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