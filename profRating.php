<?php

//including connection file
include('imp_files/con_file.php');


$first_name;$last_name;$uni_name;$department;$country_name;$countryID;$cityName;$AVG_helpfullness=null;$AVG_clarity=null;$AVG_easiness=null;$PER_helpfullness=null;$PER_clarity=null;$PER_easiness=null;$overallQuality=null;

//header me logout k href se stu_status ko set kar rahe hai agr user ne logout ka button press kia ho to user ka status deactivate kar de and member k page par redirect karde.
if(isset($_GET['stu_status'])){

  session_start();
  $_SESSION['user_status']="deactive";
   session_unset();
  session_destroy();
  header('location:member.php');
}

//geting professor info
if(isset($_GET['fname']) && isset($_GET['lname']) && isset($_GET['univName']) && isset($_GET['dept'])){

  //echo $_GET['fname']." ".$_GET['lname']." ".$_GET['univName']." ".$_GET['dept'];
  $fname=$_GET['fname'];
  $lname=$_GET['lname'];
  $uni=$_GET['univName'];

  $getinfo="SELECT * FROM professor WHERE first_name='$fname' AND last_name='$lname' AND school_name='$uni' AND available_status='approved'";
  $exeQry=mysql_query($getinfo);
    while ($res=mysql_fetch_array($exeQry)) {
      $first_name=$res['first_name'];
      $last_name=$res['last_name'];
      $uni_name=$res['school_name'];
      $department=$res['department'];
      $country_name=$res['country_name'];
    }

    //just for getting countryID
        $cntryNM="SELECT *
                FROM country
                WHERE country_name='$country_name'";
        $exeQry=mysql_query($cntryNM);
        while ($res=mysql_fetch_array($exeQry)) {
        $countryID=$res['country_id'];
    }

    //for university link
    $getUni="SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,pf.school_name,pf.country_name
                    FROM professor pf,school s
                    WHERE s.school_name=pf.school_name AND s.school_name= '$uni' AND s.country_id='$countryID'";
    $exeQry=mysql_query($getUni);
            while ($res=mysql_fetch_array($exeQry)) {
            $countryID=$res['country_id'];
            $cityName=$res['city_name'];
        }//end of extra work
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

<!-- Mirrored from www.ratemyprofessors.com/ShowRatings.jsp?tid=256160 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 00:29:58 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="show_professor">

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
      <div class="right-panel">
        <div class="top-info-block">
          <div class="result-image"> </div>
          <div class="result-info">
            <div class="result-name"> <span class="pfname"> <?php echo $first_name; ?></span> <span
							class="pfname"> </span> <span
							class="plname"> <?php echo $last_name; ?> </span> </div>
            <div class="result-title"> Professor in <?php echo $department; ?> <br/>
            <!-- uniRating.php?univName=university of karachi&citName=karachi&cntryName=pakistan&cntryID=1 -->
              at <a href=<?php echo "uniRating.php?univName=".str_replace(" ", "%20", $uni_name)."&citName=".$cityName."&cntryName=".$country_name."&cntryID=".$countryID; ?> class="school"><?php echo $uni_name; ?></a>, <?php echo $country_name; ?> </div>
            <!-- <a href="joinprof.php" id="areyouquestion" >are you Ramon Zabriskie?</a> --> </div>
          <div class="actions"> <a href=<?php echo"rateProf.php?fname=".$first_name."&lname=".$last_name."&univName=".str_replace(" ", "%20", $uni_name); ?> class="rate" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;PROF:Rate_top&#39;, linkType:&#39;o&#39; } )">Rate this professor</a>
            <div class="links"> <a href=<?php echo"profCorrection.php?fname=".$first_name."&lname=".$last_name."&univName=".str_replace(" ", "%20", $uni_name)."&dept=".str_replace(" ", "%20", $department); ?> class="correction">Submit a Correction</a> <a href="help.php#tally" class="correction">| Learn how ratings work</a> </div>
          </div>
          <!-- <div id="ad-container" class="right-panel-mtvnad"></div> -->
        </div>
        <?php

        $proAvgRatingQry="SELECT AVG(helpfullness) as avg_help, AVG(clarity) as avg_clrty, AVG(easiness) as avg_esns FROM prof_rating WHERE first_name='$first_name' AND last_name='$last_name' AND school_name='$uni_name' AND available_status='approved'";
        /*$proAvgRatingQry="CALL show_prof_rating_avg('$first_name','$last_name','$uni_name')";*/
            $exeQry=mysql_query($proAvgRatingQry);
            while ($valOF=mysql_fetch_array($exeQry)) {
            	$AVG_helpfullness = number_format($valOF['avg_help'],1,'.','');
            	$AVG_clarity = number_format($valOF['avg_clrty'],1,'.','');
            	$AVG_easiness = number_format($valOF['avg_esns'],1,'.','');
            }

        ?>
        <div class="rating-breakdown">
          <div class="left-breakdown">
            <div class="breakdown-wrapper">
              <div class="breakdown-header"> Overall Quality
              <?php $overallQuality=($AVG_helpfullness+$AVG_clarity+$AVG_easiness)/3; ?>
                <div class="grade"><?php echo number_format($overallQuality,1,'.',''); ?></div>
              </div>
              <div class="breakdown-header"> Average Grade
                <div class="grade"><?php if($overallQuality>=1 && $overallQuality<2){ echo "C"; } else if($overallQuality>=2 && $overallQuality<3){ echo "C+";} else if($overallQuality>=3 && $overallQuality<4){ echo "B";} else if($overallQuality>=4 && $overallQuality<4.6){ echo "B+";} else if($overallQuality>=4.6 && $overallQuality<5.1){ echo "A";} else{ echo "N/A"; } ?></div>
              </div>
              <div class="breakdown-header"> Hotness
                <div class="grade">
                  <figure> <img src="assets/chilis/warm-chili.png" width="70"/> </figure>
                </div>
              </div>
            </div>
            <div class="faux-slides">
              <div class="rating-slider">
                <div class="label">Helpfulness</div>
                <div class="rating"><?php echo $AVG_helpfullness; ?></div>
                <div class="slider">
                  <div class="rate-slider" data-rating="good">
                  	<?php $PER_helpfullness=($AVG_helpfullness*100)/5; ?>
                    <div class="ui-slider-range" style=<?php echo "width:$PER_helpfullness%"; ?>></div>
                    <a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style=<?php echo "left:$PER_helpfullness%"; ?>></a> </div>
                </div>
              </div>
              <div class="rating-slider">
                <div class="label">Clarity</div>
                <div class="rating"><?php echo $AVG_clarity; ?></div>
                <div class="slider">
                  <div class="rate-slider"  data-rating="good">
                  <?php $PER_clarity=($AVG_clarity*100)/5; ?>
                    <div class="ui-slider-range" style=<?php echo "width:$PER_clarity%"; ?>></div>
                    <a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style=<?php echo "left:$PER_clarity%"; ?>></a> </div>
                </div>
              </div>
              <div class="rating-slider">
                <div class="label">Easiness</div>
                <div class="rating"><?php echo $AVG_easiness; ?></div>
                <div class="slider">
                  <div class="rate-slider" data-rating="good">
                  <?php $PER_easiness=($AVG_easiness*100)/5; ?>
                    <div class="ui-slider-range" style=<?php echo "width:$PER_easiness%"; ?>></div>
                    <a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style=<?php echo "left:$PER_easiness%"; ?>></a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action=<?php echo"rateProf.php?fname=".$first_name."&lname=".$last_name."&univName=".str_replace(" ", "%20", $uni_name); ?> method="post" name="sratingCommentForm" id="sratingCommentForm" >
          <div class="srating-Comments-text">
            <div class="input">
              <div class="input">
                <textarea name="sratingComments" id="sratingComments" class="field autoExpand" rows="1" maxlength="350" placeholder="Start typing your comment..."></textarea>
                <div id="noteCount" class="character-count"><span>350</span> characters left</div>
              </div>
              <input type="hidden" name="fromContinueRating" id="fromContinueRating" class="field" value="1"/>
            </div>
            <div class="submit-form">
              <input type="submit" value="Continue Your Rating" name="sratingSubmit" id="sratingSubmit" />
            </div>
          </div>
        </form>
        <div class="rating-filter togglable">
          <table class="tftable" border="0">
            <tr>
              <th class="head-label rating"> <span class="sort-type" onclick="">Rating</span> <span class="selected-type"></span>
              </th>
              <th class="head-label class"> <span class="sort-type">Class</span> </th>
              <th class="comment-nodropdown" colspan="2"> <span class="sort-type">Comment</span> </th>
            </tr>
            <!-- Iterate Through professor Ratings -->
            
            <?php

            $row=0;
            /*$proRatingQry="SELECT * FROM prof_rating WHERE first_name='$first_name' AND last_name='$last_name' AND school_name='$uni_name' AND available_status='approved' ORDER BY rating_id DESC";*/
            $proRatingQry="CALL show_prof_rating('$first_name','$last_name','$uni_name')";
            $exeQry=mysql_query($proRatingQry);
            while ($valOF=mysql_fetch_array($exeQry)) { $row++;?>

             <tr id="23844936" class = <?php if($row%2==0){echo "even";} else{echo "odd";} ?>>
              <td class="rating"><div class="date"><?php echo $valOF['rating_date']; ?></div>
                <div class="rating-block good">
                  <div class="rating-wrapper">
                    <div class="icon good-icon"></div>
                    <?php $ratingAvg=($valOF['helpfullness']+$valOF['clarity']+$valOF['easiness'])/3 ?>
                    <span class="rating-type mstl" style="text-align:center";><?php if($ratingAvg>=1 && $ratingAvg<2){ echo "POOR"; } else if($ratingAvg>=2 && $ratingAvg<3){ echo "NOT BAD";} else if($ratingAvg>=3 && $ratingAvg<4){ echo "GOOD";} else if($ratingAvg>=4 && $ratingAvg<4.6){ echo "VERY GOOD";} else{ echo "excellent";} ?></span> </div>
                  <div class="breakdown">
                    <div class="break"> <span class='score <?php echo "scorecolor".$valOF['helpfullness']; ?>'><?php echo $valOF['helpfullness']; ?></span> <span class="descriptor">Helpfulness</span> </div>
                    <div class="break"> <span class='score <?php echo "scorecolor".$valOF['clarity']; ?>'><?php echo $valOF['clarity']; ?></span> <span class="descriptor">Clarity</span> </div>
                    <div class="break"> <span class='score <?php echo "scorecolor".$valOF['easiness']; ?>'><?php echo $valOF['easiness']; ?></span> <span class="descriptor">Easiness</span> </div>
                  </div>
                </div></td>
              <td class="class"><span class="name "> <span class="response"><?php echo $valOF['class_id']; ?></span></span> <span class="credit">For Credit: <span class="response"><?php echo $valOF['class_for_credit']; ?></span></span> 
              <span class="attendance">Attendance: <span class="response"><?php if($valOF['attendence']!=null){echo $valOF['attendence'];} else{ echo "N/A"; } ?></span></span>
              <span class="textbook-use">Textbook Use: <span class="response"><?php if($valOF['textbook']==1){echo "What textbook?";} else if($valOF['textbook']==2){echo "Barely cracked it open";} else if($valOF['textbook']==3){echo "You need it sometimes";} else if($valOF['textbook']==4){echo "It's a must have";} else{ echo "Essential to passing"; } ?></span></span> 
              <span class="rater-interest">Rater Interest: <span class="response"><?php if($valOF['your_intrest']==1){echo "Meh";} else if($valOF['your_intrest']==2){echo "Low";} else if($valOF['your_intrest']==3){echo "Sorta interested";} else if($valOF['your_intrest']==4){echo "Really into it";} else{ echo "It's my life";} ?></span></span>
              <span class="grade">Grade Received: <span class="response"><?php if($valOF['grade_reciever']!=null){ echo $valOF['grade_reciever']; } else{ echo "N/A"; } ?></span></span></td>
              <td class="comments" colspan="2"><div class="tagbox"> <span>PARTICIPATION MATTERS</span> <span>HILARIOUS</span> <span>INSPIRATIONAL</span> </div>
                <p class="commentsParagraph"> <?php echo $valOF['comment']; ?> </p>
                <div class="helpful-links"> <a href=<?php echo "flagTeacherRating.php?rid=".$valOF['rating_id']."&comment=".str_replace(" ", "%20", $valOF['comment']); ?>>report this rating</a> </div></td>
            </tr>
             <?php } ?>

            
            
            
            <!-- START: Ad Placement Row -->
            <tr>
              <td colspan="4" class="ad-placement"><div id="item-mtvnad-10" ></div></td>
            </tr>
            <!-- END: Ad Placement Row -->
            
          </table>
          <div class="helpfulReviewBanner">
            <div class="text">Were these reviews helpful? Help out your fellow students.</div>
            <a href=<?php echo"rateProf.php?fname=".$first_name."&lname=".$last_name."&univName=".str_replace(" ", "%20", $uni_name); ?> class="rate" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;PROF:Rate_bottom&#39;, linkType:&#39;o&#39; } )">Rate this professor</a> </div>
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
        uri : "/ShowRatings.jsp",
        page: "show_professor",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "256160",
        schoolID: "",
        department: "Recreation",
        state: "UT",
        country: "0",
        user: {},
        pageLevelData: {
  "pageName": "/professors/Ramon Zabriskie/256160",
  "channel": "professors",
  "v49": "professors",
  "heir2": "/professors/Ramon Zabriskie/256160",
  "prop2": "United States",
  "prop3": "Recreation",
  "prop5": "UT",
  "prop6": "Brigham Young University",
  "prop7": "Ramon Zabriskie",
  "prop8": "visitor",
  "prop9": "135",
  "prop10": "256160",
  "section": "professors"
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