<?php

//including connection file
include('imp_files/con_file.php');

include('classes/school_class.php');
include('classes/student_class.php');

$rating_exist=false;$userIsStudent=false;$showMessage="";$uniNickName="";$uniMatched=null;$belongToUni=false;
$nameMch=0;$nickNameMch=0;

//agr user login nai hai to use login karwao
session_start();
if(!isset($_SESSION['user_status'])){
  $request=$_SERVER['REQUEST_URI'];
  header('location:member.php?req='.$request);
}

if (isset($_SESSION["educationPlaces"])) {
  # code...
  //echo "lecturerPlaces set";
  if ($_SESSION["educationPlaces"]!="") {
    # code...
    $userIsStudent=true;
    $studentAt=explode("***", $_SESSION["educationPlaces"]);



    /*getting the nick name of the university*/
    $chckqru="SELECT * FROM school WHERE school_name='$_GET[univName]' AND state_name='$_GET[stateName]' AND city_name='$_GET[citName]'";
    $exQry=mysql_query($chckqru);
    while ($valOf=mysql_fetch_array($exQry)) {
    	# code...
    	$uniNickName=$valOf['school_nick_name'];
    }
    /*end of getting the nick name of the university*/



    //agr valid user ko b restrict kar raha hoga rrate karne se to pht me apna algo likhunga for matching uni's
	//print_r($studentAt);
	/*matching the university name with the universitie's name of student attended*/
    for ($i=0; $i <count($studentAt) ; $i++) {
    	# code...
    	similar_text(strtolower($_GET['univName']),strtolower($studentAt[$i]),$nameMchTemp);
    	if ($nameMchTemp>$nameMch) {
    		# code...
    		$nameMch=$nameMchTemp;
    	}
    }
    //echo $nameMch."<br>";

    /*matching the university nick name with the universitie's name of student attended*/
     for ($i=0; $i <count($studentAt) ; $i++) {
    	# code...
    	similar_text(strtolower($uniNickName),strtolower($studentAt[$i]),$nickNameMchTemp);
    	if ($nickNameMchTemp>$nickNameMch) {
    		# code...
    		$nickNameMch=$nickNameMchTemp;
    	}
    }
    //echo $nickNameMch."<br>";

    if ($nameMch>80 || $nickNameMch>80) {
    	# code...
    	$belongToUni=true;
    }

  }else{}
}

//using hiddenfield of rep_rating(required by JS) instead of submit button because JS is unseting submit button.
if(isset($_POST['rep_rating'])){

  $schl=new School();
  $schl->_set('reputation',$_POST['rep_rating']);
  $schl->_set('location',$_POST['location_rating']);
  $schl->_set('opportunities',$_POST['opt_rating']);
  $schl->_set('library',$_POST['library_rating']);
  $schl->_set('ground_common_areas',$_POST['campus_rating']);
  $schl->_set('internet',$_POST['internet_rating']);
  $schl->_set('food',$_POST['food_rating']);
  $schl->_set('club',$_POST['club_rating']);
  $schl->_set('social',$_POST['social_rating']);
  $schl->_set('hapiness',$_POST['happy_rating']);
  $schl->_set('school_name',$_GET['univName']);
  $schl->_set('city_name',$_GET['citName']);
  $graduate_year=$_POST['crYearGraduating'];
  $comment=$_POST['crComments'];
  $stu_email=$_SESSION['user_email'];
  $rating_date=date("m/d/Y");
  $av_status="pending";

  $city_name=$schl->_get('city_name');
  $uniName=$schl->_get('school_name');

  //if rating is unique then allow(insert) else not allow.
  $chckqru="SELECT * FROM school_rating";
    $myqry=mysql_query($chckqru);
    while ($val_of=mysql_fetch_array($myqry)) {
      if ($uniName==$val_of['school_name'] && $city_name==$val_of['city'] && $stu_email==$val_of['stu_email']) {
        $rating_exist=true;
      }else{}
  }

   if ($rating_exist!=true && $userIsStudent==true && $belongToUni==true) {
        # code...

        $reputation=$schl->_get('reputation');
        $location=$schl->_get('location');
        $opportunities=$schl->_get('opportunities');
        $library=$schl->_get('library');
        $ground_common_areas=$schl->_get('ground_common_areas');
        $internet=$schl->_get('internet');
        $food=$schl->_get('food');
        $club=$schl->_get('club');
        $social=$schl->_get('social');
        $hapiness=$schl->_get('hapiness');

        $stu = new Student();
        $stu->rateUni($reputation,$location,$opportunities,$library,$ground_common_areas,$internet,$food,$club,$social,$hapiness,$graduate_year,$rating_date,$comment,$city_name,$stu_email,$uniName,$av_status);

      }
      else{
        //echo "you have already rate this University";
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

<!-- Mirrored from www.ratemyprofessors.com/ratemyCampusA.jsp?sid=1836 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 00:46:08 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="rate_school">

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
        <!-- <div id="ad-container" class="right-panel-mtvnad"></div> -->
        <div class="rate-wrap">
          <div class="dosanddonts">
            <div class="header">
              <h1>Rating Do's and Don'ts</h1>
              <a onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'SCHOOLRATING:Help', linkType:'o' } );" href="TermsOfUse_us.html#guidelines" target="_blank" class="viewguidelines" >View the full site guidelines</a> </div>
            <div class="doanddontwrap">
              <div class="item">
                <div class="label">Do</div>
                <div class="description"> Double check your comments before posting. It never hurts to check your grammar. </div>
              </div>
              <div class="item">
                <div class="label">Do</div>
                <div class="description"> Refer to the rating categories to help you better elaborate your comments. </div>
              </div>
              <div class="item">
                <div class="label">Don't</div>
                <div class="description"> Reference existing comments or comments that have been deleted by our moderators. </div>
              </div>
            </div>
          </div>
          <form action="#" method="post" class="rate" name="rateSchoolForm" id="rateSchoolForm" >
            <input type="hidden" name="sid" value="1836" id="sid" />
            <div class="headline">Give us an insider’s guide to <?php echo $_GET['univName']; ?>.</div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">1</div>
                <div class="text">Reputation</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="repSlider" class="rate-slider" data-value="0"></div>
                <input type="hidden" name="rep_rating" value="0" required  />
                <span class="help-toggle"></span>
                <div class="bubble-text"
                	data-bub1="Virtually unknown"
              		data-bub2="Gets no respect"
              		data-bub3="It's ok"
              		data-bub4="Well respected"
              		data-bub5="Distinguished"
              	  > </div>
              </div>
              <div class="help-text">How’s your university viewed by the world?</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">2</div>
                <div class="text">Location</div>
              </div>
              <div class="input">
                <div class="rate-number"> 0 </div>
                <div id="locationSlider" class="rate-slider" data-value="0"></div>
                <input type="hidden" name="location_rating" value="0" />
                <span class="help-toggle"></span>
                <div class="bubble-text"
              data-bub1="#WorstPlaceEver"
              data-bub2="'blah' all around"
              data-bub3="This spot's alright"
              data-bub4="Like it here a lot"
              data-bub5="Center of the universe"
              > </div>
              </div>
              <div class="help-text">Let’s talk whereabouts. How’s your campus’ location? And once you’re there, is getting around easy?</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">3</div>
                <div class="text">opportunities</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="optSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="opt_rating" value="0"/>
                <span class="help-toggle"></span>
                <div class="bubble-text"
              data-bub1="No help at all"
              data-bub2="Slim pickin's"
              data-bub3="There's opportunity, if you make it"
              data-bub4="So many opportunities"
              data-bub5="Best network ever"
              > </div>
              </div>
              <div class="help-text">Does your university have the hook up? An all-powerful alumni network? How much has your college/university helped you take advantage of career opportunities?</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">4</div>
                <div class="text">library</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="librarySlider" class="rate-slider" data-value="0"></div>
                <input type="hidden" name="library_rating" value="0"/>
                <span class="help-toggle"></span>
                <div class="bubble-text"
              data-bub1="Not worth visiting"
              data-bub2="Bare bones"
              data-bub3="It does the job"
              data-bub4="I'm a regular"
              data-bub5="Home away from home"
              > </div>
              </div>
              <div class="help-text">In any library, a quiet place to study, convenient hours and good technology are key...and if coffee’s available it’s a major plus. So how’s the library at your university? </div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">5</div>
                <div class="text">GROUNDS AND COMMON AREAS</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="campusSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="campus_rating" value="0"/>
                <span class="help-toggle"></span>
                <div class="bubble-text"
              data-bub1="Ew"
              data-bub2="Needs a makeover"
              data-bub3="Works for me"
              data-bub4="Charming"
              data-bub5="Like a postcard"
              > </div>
              </div>
              <div class="help-text">Campus: the main hub of college life. How’s your campus looking these days?</div>
              <!-- Extra Text Fields -->
              <div class="extra double">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">6</div>
                <div class="text">internet</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="internetSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="internet_rating" value="0"/>
                <span class="help-toggle"></span>
                <div class="bubble-text"
              data-bub1="Buffering..."
              data-bub2="Spotty connection"
              data-bub3="For the most part, you're connected"
              data-bub4="It's got mad connections"
              data-bub5="Best connection I've ever had"
              > </div>
              </div>
              <div class="help-text">Bad Internet connections can ruin lives. So what’s the Internet like at your university?</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">7</div>
                <div class="text">food</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="foodSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="food_rating" value="0"/>
                <span class="help-toggle"></span>
                <div class="bubble-text"
              data-bub1="Makes me lose my appetite"
              data-bub2="I choke the food down"
              data-bub3="Some meals are better than others"
              data-bub4="Nom nom nom"
              data-bub5="Top chef quality"
              > </div>
              </div>
              <div class="help-text">Whether you gained the Freshman 15 or not, we want to hear what you have to say about the food on campus. Dining halls, public eating areas…how’s the grub?</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">8</div>
                <div class="text">clubs</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="clubsSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="club_rating" value="0"/>
                <span class="help-toggle"></span>
                <div class="bubble-text"
              data-bub1="There are clubs here?"
              data-bub2="Not much going on"
              data-bub3="Just the usuals"
              data-bub4="Lots of choices"
              data-bub5="Clubs rule campus"
              > </div>
              </div>
              <div class="help-text"> What’s the extracurricular scene like at your university?</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">9</div>
                <div class="text">social</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="socialSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="social_rating" value="0"/>
                <span class="help-toggle"></span>
                <div class="bubble-text"
              data-bub1="Social desert"
              data-bub2="Would rather watch TV"
              data-bub3="About what you'd expect"
              data-bub4="My social calendar is full"
              data-bub5="Not to be missed"
              > </div>
              </div>
              <div class="help-text">What’s the social scene like on campus? Are there lots of different events like concerts, lectures, rallies and sporting events that you'd actually attend?</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">10</div>
                <div class="text">happiness</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="happinessSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="happy_rating" value="0"/>
                <span class="help-toggle"></span>
                <div class="bubble-text"
                data-bub1=":("
                data-bub2="Disappointed"
                data-bub3="I'm not smiling. But I'm not frowning."
                data-bub4="Can't stop smiling"
                data-bub5="Don't make me leave"
                > </div>
              </div>
              <div class="help-text">Are you happy with your university overall?</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
            </div>
            <div class="form-element grade required">
              <div class="label">
                <div class="counter">11</div>
                <div class="text">graduation year</div>
              </div>
              <div class="input">
                <select name="crYearGraduating" required="" id="crYearGraduating" class="myselect" style="border:1px solid rgba(0, 0, 0, 0.25) !important; width:100% !important;" >
                  <option value="">Please select</option>
                  <option value="2019" >2019</option>
                  <option value="2018" >2018</option>
                  <option value="2017" >2017</option>
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
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
            </div>
            <div class="form-element comment-box required">
              <div class="label">
                <div class="counter">12</div>
                <div class="text">Here's Your Chance To Be More Specific</div>
              </div>
              <div class="input">
                <textarea id="comments" name = "crComments" maxlength="350"></textarea>
              </div>
              <div class="character-count"><span>350</span> characters left</div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
                <div class="help-text">Not sure what to say about your university? <br />
                  Here are some comment suggestions… <br />
                  examples of social events on campus <br />
                  campus layout / condition <br />
                  university spirit <br />
                  internship opportunities <br />
                  alumni connections</div>
              </div>
            </div>
            <!-- Extra Text Fields -->
            
            <div class="form-element submit">
              <div class="another_email"><?php if($rating_exist==true){ echo 'you have already rate this University'; } if(isset($_POST['rep_rating']) && ($userIsStudent==false || $belongToUni==false)){ echo 'You can not rate this university'; } ?></div>
              <input type="submit" name="rateSchoolBtn" id="rateSchoolBtn" params="{sid=1836}" value="Submit" />
              <a href="campusRatings0b44.html?sid=1836" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:&#39;SCHOOLRATING:Cancel&#39;, linkType:&#39;o&#39; } );history.back(-1); return false;"
                 class="cancelbtn"
            >CANCEL</a> </div>
          </form>
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
        uri : "/ratemyCampusA.jsp",
        page: "rate_school",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "",
        schoolID: "1836",
        department: "",
        state: "CA",
        country: "0",
        user: {},
        pageLevelData: {
  "pageName": "#",
  "channel": "schools",
  "hier2": "add rating/main",
  "prop8": "visitor",
  "section": "rate"
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

<!-- Mirrored from www.ratemyprofessors.com/ratemyCampusA.jsp?sid=1836 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 00:46:08 GMT -->
</html>
<?php



?>