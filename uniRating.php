<?php

//including connection file
include('imp_files/con_file.php');

$uni_name;$uni_nick_name;$uni_web;$city_name;$state_name;$uniNM=null;$cityNM=null;$countryName=null;$array_length;
$ft_name=array();$lt_name=array();$Qulty=array();

//header me logout k href se stu_status ko set kar rahe hai agr user ne logout ka button press kia ho to user ka status deactivate kar de and member k page par redirect karde.
if(isset($_GET['stu_status'])){

  session_start();
  $_SESSION['user_status']="deactive";
   session_unset();
  session_destroy();
  header('location:member.php');
}

//geting university info
if(isset($_GET['univName']) && isset($_GET['citName']) && isset($_GET['cntryID'])){

  $uniNM=$_GET['univName'];
  $cityNM=$_GET['citName'];
  $countryID=$_GET['cntryID'];

  //geting country name because if user press show all prof button
  $countryName=$_GET['cntryName'];

  $getinfo="SELECT * FROM school WHERE school_name='$uniNM' AND city_name='$cityNM' AND country_id='$countryID'";
  $exeQry=mysql_query($getinfo);
    while ($res=mysql_fetch_array($exeQry)) {
      $uni_name=$res['school_name'];
      $uni_nick_name=$res['school_nick_name'];
      $uni_web=$res['website'];
      $city_name=$res['city_name'];
      $state_name=$res['state_name'];
    }
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

<!-- Mirrored from www.ratemyprofessors.com/campusRatings.jsp?sid=1355 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 01:14:56 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="show_school">

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
      <!-- Starts the blocks -->
      <div class="right-panel school-result"> 
        <!-- School info -->
        <div class="top-info-block">
        <div class="result-image2"> </div>
          <div class="result-info">
            <div class="result-name"> <?php echo $uni_name; ?></div>
            <div class="result-title"> <span> <?php echo $city_name.", ".$state_name; ?></span> <a href=<?php echo $uni_web; ?> class="website-icon" target="_blank">Website</a> </div>
          </div>
          <div class="actions">
            <!-- <div id="ad-container" class="right-panel-mtvnad"></div> -->
            <a href=<?php echo"rateUni.php?univName=".str_replace(" ", "%20", $uni_name)."&citName=".$city_name."&stateName=".$state_name; ?> class="rate" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;SCHOOL:Rate_top&#39;, linkType:&#39;o&#39; } );">Rate this University</a>
            <a href=<?php echo"uniCorrection.php?univName=".str_replace(" ", "%20", $uni_name)."&citName=".$city_name."&stateName=".$state_name; ?> class="correction">Submit a Correction</a> </div>
        </div>
        <!-- Ends School Info --> 
        <!-- Starts Rating Breakdowns -->
        <div class="rating-breakdown">
          <div class="left-breakdown top-professors">
            <div class="header-wrapper">
            <!-- showProfs.php?uniName=ku&countryName=pakistan -->
              <div class="header"> Top Professors <a href=<?php echo"showProfs.php?uniName=".str_replace(" ", "%20", $uni_name)."&countryName=".$countryName; ?> data-school="Miami Dade College (all)" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;SCHOOL:ViewAllProfs&#39;, linkType:&#39;o&#39; } );" class="button-link"> view all <span class = "hidden-sm">professors</span></a> </div>
            </div>
            <div class="professor-breakdown">
              <div class="top-professor-ratings">
                <ul class="professor-list">

                <!-- getting top 3 professors -->
                <?php

                $thisUniProfsQry="SELECT first_name,last_name,school_name available_status FROM professor WHERE school_name='$uni_name' AND country_name='$countryName' AND available_status='approved'";
                $exeQry=mysql_query($thisUniProfsQry);
                while ($valOF=mysql_fetch_array($exeQry)) {
                  # code...
                  $ft_name[]=$valOF['first_name'];
                  $lt_name[]=$valOF['last_name'];
                }

                  //echo "first name: '$fName' and last name: '$lName' '<br>'";


                $arr_length=count($ft_name);

                for ($i=0; $i <$arr_length ; $i++) { 
                  # code...
                  $profAvgRatingQry="SELECT AVG(helpfullness) as avg_help, AVG(clarity) as avg_clrty, AVG(easiness) as avg_esns FROM prof_rating WHERE first_name='$ft_name[$i]' AND last_name='$lt_name[$i]' AND school_name='$uni_name'  AND available_status='approved'";
                  $exeQry=mysql_query($profAvgRatingQry);
                  while ($valOF=mysql_fetch_array($exeQry)) {
                    $AVG_helpfullness = number_format($valOF['avg_help'],1,'.','');
                    $AVG_clarity = number_format($valOF['avg_clrty'],1,'.','');
                    $AVG_easiness = number_format($valOF['avg_esns'],1,'.','');

                   $overallQuality=($AVG_helpfullness+$AVG_clarity+$AVG_easiness)/3;
                   $Qulty[]=$overallQuality;
                   //echo $ft_name[$i]." ".$lt_name[$i]." ".$overallQuality."<br>";
                  }
                }

                //sorting top professors
                $array_length=count($ft_name);

                for ($i = 1; $i < $array_length; $i++) {
                  for ($j = $array_length - 1; $j >= $i; $j--) {
                    if($Qulty[$j-1] < $Qulty[$j]) {

                      //swaping values
                      $tmp1 = $Qulty[$j - 1];
                      $Qulty[$j - 1] = $Qulty[$j];
                      $Qulty[$j] = $tmp1;

                      //swaping first names
                      $tmp = $ft_name[$j - 1];
                      $ft_name[$j - 1] = $ft_name[$j];
                      $ft_name[$j] = $tmp;

                      //swaping last names
                      $tmp = $lt_name[$j - 1];
                      $lt_name[$j - 1] = $lt_name[$j];
                      $lt_name[$j] = $tmp;
                    }
                  }
                }

            if($array_length!=0){
              $range;
              if($array_length==1){$range=1;} else if($array_length==2){$range=2;} else{$range=3;}
                for ($i=0; $i <$range ; $i++) {
                  # code...
                  //echo $ft_name[$i]." ".$lt_name[$i]." ".$Qulty[$i];
                ?>
                  <!-- Begins: one professor in top professors -->
                  <!-- http://localhost:8080/AR/profRating.php?fname=rafiullah&lname=afridi&univName=university%20of%20karachi&dept=Department%20of%20Computer%20Science%20&%20Technology --> 
                  <a href=<?php echo "profRating.php?fname=".$ft_name[$i]."&lname=".$lt_name[$i]."&univName=".str_replace(" ", "%20", $uni_name)."&dept=".str_replace(" ", "%20", "from qry"); ?>>
                  <li> <span class="rating-icon"></span>
                    <div class = "professor-name-rating">
                      <div class="professor-name"><?php echo $ft_name[$i].', '.$lt_name[$i]; ?></div>
                      <!-- <div class="professor-rating-count"> 2 reviews </div> -->
                    </div>
                    <span class="professor-rating"><?php echo number_format($Qulty[$i],1,'.',''); ?></span>
                    <div class = "clearfix"></div>
                  </li>
                  </a> 
                  <!-- Ends: one professor in top professors --> 
                  <?php }} ?>

                </ul>
              </div>

              <?php

              //getting average rating of all professor at this university
              $sum=0;
              for ($i=0; $i < $array_length; $i++) { 
                # code...
                $sum +=$Qulty[$i];
              }
              if ($array_length!=0) {
                # code...
                 $overAllproRating=$sum/$array_length;
              }
              else{$overAllproRating=0;}
              ?>

              <div class="overall-rating"> <span class="score average-professor-score"><?php echo number_format($overAllproRating,2,'.',''); ?></span> <span class="label">Average Professor Rating</span> </div>
            </div>
          </div>
        </div>
        <!-- Ends Rating Breakdown -->
        <!-- <div id="mobile-ad-container" style="text-align:center;"></div> -->
        <!-- Begins: Ratings Listings -->
        <div class="school-rating-list">
          <!-- <h1>415 University Ratings</h1> -->
          <table class="school-ratings" border="0">
            <tr>
              <th>Rating</th>
              <th>Comment</th>
            </tr>
            
            <!-- Begins: Loop for One Rating -->
             <?php

            $row=0;
            /*$uniRatingQry="SELECT * FROM school_rating WHERE school_name='$uniNM' AND city='$cityNM' AND available_status='approved' ORDER BY rating_id DESC";*/
            $uniRatingQry="CALL show_uni_rating('$uniNM','$cityNM')";
            $exeQry=mysql_query($uniRatingQry);
            while ($valOF=mysql_fetch_array($exeQry)) { $row++;?>

            <tr id="221030" class = <?php if($row%2==0){echo "even";} else{echo "odd";} ?>>
              <td class="scores"><div class="js-open">
                  <div class="date"><?php echo $valOF['rating_date']; ?></div>
                </div>
                <div class="rate-list">
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['reputation']; ?>'><?php echo $valOF['reputation']; ?></div>
                    <div class="label">Reputation</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['location']; ?>'><?php echo $valOF['location']; ?></div>
                    <div class="label">Location</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['internet']; ?>'><?php echo $valOF['internet']; ?></div>
                    <div class="label">Internet</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['food']; ?>'><?php echo $valOF['food']; ?></div>
                    <div class="label">Food</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['library']; ?>'><?php echo $valOF['library']; ?></div>
                    <div class="label">Library</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['ground_commonAreas']; ?>'><?php echo $valOF['ground_commonAreas']; ?></div>
                    <div class="label">Common areas</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['social']; ?>'><?php echo $valOF['social']; ?></div>
                    <div class="label">Social</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['hapiness']; ?>'><?php echo $valOF['hapiness']; ?></div>
                    <div class="label">Happiness</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['opportunities']; ?>'><?php echo $valOF['opportunities']; ?></div>
                    <div class="label">Opportunities</div>
                  </div>
                  <div class="rating">
                    <div class='score <?php echo "scorecolor".$valOF['club']; ?>'><?php echo $valOF['club']; ?></div>
                    <div class="label">Clubs</div>
                  </div>
                </div></td>
              <td class="comments"><p> <?php echo $valOF['comment']; ?> </p>
                <div class="helpful-links"> <a href=<?php echo "flagUniRating.php?rid=".$valOF['rating_id']."&comment=".str_replace(" ", "%20", $valOF['comment']); ?> data-report-text="good school you save a lot of money" class="report">report this rating</a> </div></td>
            </tr>

             <?php } ?>
            <!-- Ends: Loop for One Rating -->
            
            <tr>
              <td colspan="4" class="ad-placement"><div id="item-mtvnad-20"></div></td>
            </tr>
          </table>
          <div class="helpfulReviewBanner">
            <div class="text">Were these reviews useful? Help out your fellow students.</div>
            <a href=<?php echo"rateUni.php?univName=".str_replace(" ", "%20", $uni_name)."&citName=".$city_name."&stateName=".$state_name; ?> class="rate" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;SCHOOL:Rate_bottom&#39;, linkType:&#39;o&#39; } );">Rate this University</a> </div>
        </div>
      </div>
      <!-- Ends the blocks -->  
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
        uri : "/campusRatings.jsp",
        page: "show_school",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "1355",
        department: "",
        state: "FL",
        country: "0",
        user: {},
        pageLevelData: {
  "pageName": "/schools/Miami Dade College (all)",
  "channel": "schools",
  "v49": "schools",
  "heir2": "/schools/Miami Dade College (all)",
  "prop2": "United States",
  "prop5": "FL",
  "prop6": "Miami Dade College (all)",
  "prop8": "visitor",
  "prop9": "1355",
  "section": "school"
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