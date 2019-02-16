<?php

//including connection file
include('imp_files/con_file.php');

include('classes/professor_class.php');
include('classes/student_class.php');

$rating_exist=false;$userIsStudent=false;$showMessage="";$uniNickName="";$uniMatched=null;$belongToUni=false;$profStartYear=null;$profEndYear=null;$belongToProf=true;
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



    /*getting the nick name of the university,prof start year and end year*/
    $chckqru="SELECT p.first_name,p.last_name,p.school_name,p.start_year,p.end_year,p.available_status,s.school_nick_name
    FROM professor p,school s 
    WHERE p.first_name='$_GET[fname]' AND p.last_name='$_GET[lname]' AND p.school_name=s.school_name AND p.school_name='$_GET[univName]' AND p.available_status='approved'";
    $exQry=mysql_query($chckqru);
    while ($valOf=mysql_fetch_array($exQry)) {
      # code...
      $uniNickName=$valOf['school_nick_name'];
      $profStartYear=$valOf['start_year'];
      $profEndYear=$valOf['end_year'];
    }
    /*end of getting the nick name of the university,prof start year and end year*/



    if ($profEndYear==0) {
      # code...
      $profEndYear=date("Y");
    }



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

//using hiddenfield of helprating(required by JS) instead of submit button because JS is unseting submit button.
if(isset($_POST['helprating'])){
  $prof=new Professor();

  $start_date=null;$stuEndYear=null;

  $prof->_set('first_name',$_GET['fname']);
  $prof->_set('last_name',$_GET['lname']);
  $prof->_set('school_name',$_GET['univName']);

  $courseCode=$_POST['courseName'];
  $helpfullness=$_POST['helprating'];
  $clarity=$_POST['clarityrating'];
  $easiness=$_POST['easinessrating'];
  $course_credit=$_POST['course_credit'];
  $comments=$_POST['comments'];
  $your_interest=$_POST['interestrating'];
  $textbookUse=$_POST['textbookrating'];
  $fName=$prof->_get('first_name');
  $lName=$prof->_get('last_name');
  $uniName=$prof->_get('school_name');
  $stu_email=$_SESSION['user_email'];
  $rating_date=date("m/d/Y");


   //$attendance=$_POST['attendance'];
  if ($_POST['attendance']!=null) {
  	# code...
  	$attendance=$_POST['attendance'];
  }
  else{
  	$attendance="";
  }

  //$textbook_used=$_POST['rTextBookUsed'];
  if ($_POST['rTextBookUsed']!=null) {
  	# code...
  	$textbook_used=$_POST['rTextBookUsed'];
  }
  else{
  	$textbook_used=null;
  }

  //$gradeRecieved=$_POST['grade'];
  if ($_POST['grade']!=null) {
  	# code...
  	$gradeRecieved=$_POST['grade'];
  }
  else{
  	$gradeRecieved=null;
  }

  //$start_date=$_POST['startDate'];
  if ($_POST['startDate']!=null) {
  	# code...
  	$start_date=$_POST['startDate'];
  }
  else{
  	$start_date=null;
  }

  //$start_date=$_POST['startDate'];
  if ($_POST['endDate']!=null) {
    # code...
    $end_date=$_POST['endDate'];
    $stuEndYear=$_POST['endDate'];
  }
  else{
    $end_date=null;
    $stuEndYear=date("Y");
  }

  $av_status="pending";

 $start_date."-".$stuEndYear."<br>";
 $profStartYear."-".$profEndYear."<br>";
  /*if user belongs to professor or not*/
  if ($profEndYear<$start_date || $stuEndYear<$profStartYear) {
    # code...
    $belongToProf=false;
  }

  //if rating is unique then allow(insert) else not allow.
  $chckqru="SELECT * FROM prof_rating";
    $myqry=mysql_query($chckqru);
    while ($val_of=mysql_fetch_array($myqry)) {
      if ($fName==$val_of['first_name'] && $lName==$val_of['last_name'] && $uniName==$val_of['school_name'] && $stu_email==$val_of['stu_email'] && $courseCode==$val_of['class_id']) {
        $rating_exist=true;
      }else{}
  }

      if ($rating_exist!=true && $userIsStudent==true && $belongToUni==true && $belongToProf==true) {
      	# code...
      	//INSERT INTO student(first_name, last_name, stu_email, stu_pass, stu_school) VALUES(first_name,last_name,stu_email,stu_pass,stu_school);
      	$stu = new Student();
      	$stu->rateProf($courseCode,$helpfullness,$clarity,$easiness,$course_credit,$comments,$attendance,$your_interest,$textbookUse,$textbook_used,$gradeRecieved,$rating_date,$fName,$lName,$stu_email,$uniName,$start_date,$end_date,$av_status);
      }
      else{
      	//echo "you have already rate this professor for this course";
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

<!-- Mirrored from www.ratemyprofessors.com/AddRating.jsp?tid=341359 by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 16 Oct 2015 01:16:57 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<!-- including header -->
<?php include('imp_files/head_file.php') ?>

<body class="rate_professor">

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
      <style>
  	::-webkit-input-placeholder{
  		text-transform:none;
  	}
  </style>
      <div class="right-panel">
        <!-- <div id="ad-container" class="right-panel-mtvnad"></div> -->
        <div class="rate-wrap">
          <div class="dosanddonts">
            <div class="header">
              <h1>Rating Do's and Don'ts</h1>
              <a onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFRATING:Help', linkType:'o' } );" href="TermsOfUse_us.html#guidelines" target="_blank" class="viewguidelines">View all Guidelines</a> </div>
            <div class="doanddontwrap">
              <div class="item">
                <div class="label">Do</div>
                <div class="description"> Double check your comments before posting. Course codes must be accurate, and it doesn’t hurt to check grammar. </div>
              </div>
              <div class="item">
                <div class="label">Do</div>
                <div class="description"> Discuss the professor’s professional abilities including teaching style and ability to convey the material clearly. </div>
              </div>
              <div class="item">
                <div class="label">Don't</div>
                <div class="description"> Use profanity, name-calling, derogatory terms, definitive language, (e.g., "always","never","etc."). And, don’t claim that the professor shows bias or favoritism for or against students. </div>
              </div>
            </div>
          </div>
          
          <form action="#" method="post" name="rateProfessorForm" class="rate" id="rateProfessorForm" >
            <input type="hidden" name="sId" value="2614" id="sId" />
            
            <!-- if prof has 0 ratings -->
            
            <div class="headline">It's your turn to grade Professor <?php echo $_GET['fname']." ".$_GET['lname']; ?>.</div>
            <div class="form-element required course-code-form">
              <div class="label">
                <div class="counter">1</div>
                <div class="text">course code</div>
                <div class="explain-course-text"> <!-- Please make sure this is accurate, or your entire rating may be
                  removed. <br />
                  <br /> -->
                  examples: COS126, ECON-UA 238 </div>
              </div>
              <div class="input course-code">
                <input type="text" name="courseName" id="course-code" placeholder="Class"
								value="" maxlength="15" style="text-transform:uppercase!important;"/>
                <!-- <a href="#" class="lozeng single">online <span
									class="hidden-md">class</span></a> -->
                <input type="hidden" id="online" name="OnlineClass"
								value="">
              </div>
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error" id = "course-character-limit"></div>
                <div class="error" id = "course-digit-validation"></div>
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter">2</div>
                <div class="text">Helpfulness</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="helpSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="helprating" value="0" />
                <span class="help-toggle"></span>
                <div class="bubble-text"
            data-bub1="No help here"
            data-bub2="You have to beg for help"
            data-bub3="If you ask for help, it’s there"
            data-bub4="Most likely to help"
            data-bub5="Saved my semester"
            > </div>
              </div>
              <div class="help-text">Is this professor helpful when needed?</div>
              
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required">
              <div class="label">
                <div class="counter">3</div>
                <div class="text">clarity</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="claritySlider" class="rate-slider" data-value="0"></div>
                <input type="hidden" name="clarityrating" value="0" />
                <span class="help-toggle"></span>
                <div class="bubble-text"
            data-bub1="Say what??"
            data-bub2="Confusing"
            data-bub3="Pretty clear"
            data-bub4="Clear-cut"
            data-bub5="Crystal-clear"
            > </div>
              </div>
              <div class="help-text">Is this professor clear about the class requirements and subject matter?</div>
              
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required">
              <div class="label">
                <div class="counter">4</div>
                <div class="text">easiness</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="easinessSlider" class="rate-slider" data-value="0"></div>
                <input type="hidden" name="easinessrating" value="0" />
                <span class="help-toggle"></span>
                <div class="bubble-text"
            data-bub1="Hardest thing I've ever done"
            data-bub2="Makes you work for it"
            data-bub3="The usual"
            data-bub4="Easy A"
            data-bub5="Show up &amp; pass"
            > </div>
              </div>
              <div class="help-text">How hard did you have to work for this class?</div>
              
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element lozenger required">
              <div class="label">
                <div class="counter">5</div>
                <div class="text">WAS THIS CLASS TAKEN FOR CREDIT?</div>
              </div>
              <div class="input"> <a href="#" class="lozeng">YEAH</a> <a href="#" class="lozeng negative">UM, NO.</a>
                <input type="hidden" name="course_credit" value="" />
              </div>
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element comment-box required">
              <div class="label">
                <div class="counter">6</div>
                <div class="text">Here's Your Chance To Be More Specific</div>
              </div>
              <span class="help-toggle"></span>
              <div class="input">
                <textarea id='comments' name = "comments" maxlength="350" ></textarea>
              </div>
              <div class="help-text">Not sure what to write? <br>
                Here are some comment suggestions… <br>
                your unique experience <br>
                writing / reading intensity <br>
                attendance policy <br>
                availability outside of class <br>
                required participation</div>
              <!-- Extra Text Fields -->
              <div class="character-count"><span>350</span> characters left</div>
              <div class="extra">
                <div class="error"> This field is required. <br />
                </div>
              </div>
              <!-- Extra Text Fields --> 
            </div>
            <div class="headline">How was the class?</div>
            <div class="form-element lozenger">
              <div class="label fix-wide">
                <div class="counter" style="margin-right:11px;">7</div>
                <div class="text">Attendance <span class="optional">(Optional)</span></div>
              </div>
              <div class="input fix-wide"> <a href="#" class="lozeng mandatory">Mandatory</a> <a href="#" class="lozeng non-mandatory negative">non Mandatory</a>
                <input type="hidden" name="attendance"  value= "" />
              </div>
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter" style="margin-right:11px;">8</div>
                <div class="text">Your Interest</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="interestSlider" class="rate-slider" data-value="0"></div>
                <input type="hidden" name="interestrating" value="0" />
                <span class="help-toggle"></span>
                <div class="bubble-text"
	        data-bub1="Meh"
	        data-bub2="Low"
	        data-bub3="Sorta interested"
	        data-bub4="Really into it"
	        data-bub5="It's my life"
	        > </div>
              </div>
              <div class="help-text">Before you took this class, how interested were you in the subject? <br />
                Don’t worry, you can be honest—we won’t judge :) </div>
              
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter"style="margin-right:13px;">9</div>
                <div class="text">Textbook use</div>
              </div>
              <div class="input">
                <div class="rate-number">0</div>
                <div id="textbookSlider" class="rate-slider" data-value="0" ></div>
                <input type="hidden" name="textbookrating" value="0" />
                <span class="help-toggle"></span>
                <div class="bubble-text"
        data-bub1="What textbook?"
        data-bub2="Barely cracked it open"
        data-bub3="You need it sometimes"
        data-bub4="It's a must have"
        data-bub5="Essential to passing"
        > </div>
              </div>
              <div class="help-text">Okay, let’s talk textbooks. </div>
              
              <!-- Extra Text Fields -->
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element slider required" >
              <div class="label">
                <div class="counter"style="margin-right:13px;">10</div>
                <div class="text">Enrollment Year</div>
              </div>
                <select  class="js-required myselect" name="startDate" id="start_date" style="border:1px solid rgba(0, 0, 0, 0.25) !important; float:right;" required data-placeholder-option="false">
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
                      <option value="2017" >2017</option>
                </select>
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element" >
              <div class="label">
                <div class="counter"style="margin-right:13px;">10</div>
                <div class="text">Pass out Year</div>
              </div>
                <select  class="myselect" name="endDate" id="end_date" style="border:1px solid rgba(0, 0, 0, 0.25) !important; float:right;" data-placeholder-option="false">
                      <option value="">Select Year</option>
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
              <div class="extra">
                <div class="error">This field is required.</div>
              </div>
              <!-- Extra Text Fields --> 
              
            </div>
            <div class="form-element textbook-used">
              <div class="label">
                <div class="counter" style="margin-right:11px;">12</div>
                <div class="text">Textbook used <span class="optional">(Optional)</span></div>
                <!-- <div class="explain-course-text">Enter the 13-digit ISBN# without dashes or spaces</div> -->
              </div>
              <div class="input">
                <input type="text" name="rTextBookUsed" id="textbook-used"
					value="" maxlength="13" min="10" max="13"/>
              </div>
            </div>
            <div class="form-element grade">
              <div class="label">
                <div class="counter" style="margin-right:12px;">13</div>
                <div class="text">Grade Received <span class="optional">(Optional)</span></div>
              </div>
              <div class="input">
                <select id="grade" name="grade" var="grade" class="myselect" style="border:1px solid rgba(0, 0, 0, 0.25) !important;" >
                  <option value="">Select</option>
                  <option value="A+" >A+</option>
                  <option value="A" >A</option>
                  <option value="A-" >A-</option>
                  <option value="B+" >B+</option>
                  <option value="B" >B</option>
                  <option value="B-" >B-</option>
                  <option value="C+" >C+</option>
                  <option value="C" >C</option>
                  <option value="C-" >C-</option>
                  <option value="D+" >D+</option>
                  <option value="D" >D</option>
                  <option value="D-" >D-</option>
                  <option value="F" >F</option>
                  <option value="Drop/Withdrawal" >Drop/Withdrawal</option>
                  <option value="Incomplete" >Incomplete</option>
                  <option value="Not sure yet" >Not sure yet</option>
                  <option value="Rather not say" >Rather not say</option>
                  <option value="Audit/No Grade" >Audit/No Grade</option>
                </select>
              </div>
            </div>
            <input type="hidden" name="additionalQuestionCount" value="0" id="additionalQuestionCount" />
            <div class="form-element submit">
                <div class="another_email"><?php if($rating_exist==true){ echo 'you have already rate this professor for this course'; } if(isset($_POST['helprating']) && ($userIsStudent==false || $belongToUni==false)){ echo 'You can not rate this Professor'; } if($belongToProf==false){ echo 'You can not rate this professor, You do not belog to this professor.'; } ?></div>
              <input type="submit" id="rateProfessorBtn" name="rateProfessorBtn" class="save" value="Submit" />
              <a href="#" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'PROFRATING:Cancel', linkType:'o' } ); history.back(-1); return false;"
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
        uri : "/AddRating.jsp",
        page: "rate_professor",
        typeahead :"http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10",
        professorID : "341359",
        schoolID: "",
        department: "",
        state: "",
        country: "",
        user: {},
        pageLevelData: {
  "pageName": "#",
  "channel": "professors",
  "hier2": "add rating/main",
  "prop2": "United States",
  "prop3": "Psychology",
  "prop5": "CA",
  "prop6": "Ohlone College",
  "prop7": "Julia Dickinson",
  "prop8": "visitor",
  "prop10": "341359",
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

</html>
<?php



?>