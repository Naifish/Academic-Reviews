<?php

class Student{

    private $first_name,$last_name,$stu_email,$stu_pass,$stu_school,$grade_recieved,$stu_major,$stu_intrest,$graduate_year,$pass_error=null;
    public $countryID,$countryName;

    public function _get($property){
        if(property_exists($this, $property)){
            return $this->$property;
        }
    }

    public function _set($property,$value){
        if(property_exists($this, $property)){
            $this->$property=$value;
        }
    }

    public function singUp($first_name,$last_name,$stu_email,$stu_pass,$stu_school){
        
        //$ins_stu_query="INSERT INTO student(first_name, last_name, stu_email, stu_pass, stu_school) VALUES ('$first_name','$last_name','$stu_email','$stu_pass','$stu_school')";
        $signup_sp="CALL stu_signup('$first_name','$last_name','$stu_email','$stu_pass','$stu_school')";
        $res=mysql_query($signup_sp);
        if ($res==true) {
            header('Location:member.php');
        }
        else
        {
            echo "<h1>facing problem while inserting student</h1>";
        }
    }

    public function logIn($email,$pass){
            $login_info="SELECT * FROM student";
            $exeQry=mysql_query($login_info);
            while ($res=mysql_fetch_array($exeQry)) {
                # code...
                if ($res['stu_email']==$email && $res['stu_pass']==$pass ) {
                    # code...
                    //strart session and redirect user to respected page
                    session_start();

                    $_SESSION['user_email']=$email;
                    $_SESSION['user_pass']=$pass;
                    $_SESSION['user_status']="active";

                    //when user press logout button change user_status and (check the user_status and destroy session) on redirected page.
                    //$_SESSION['user_status']="deactive";


                    header('location:http://localhost:8080/AR/mobile/myprofs.php');
                }
                else{
                    $pass_error="Invalid Password";
                }
            }
    }

    public function rateProf($class_id,$helpfullness,$clarity,$easiness,$class_for_credit,$comment,$attendence,$your_intrest,$textbook,$textbook_used,$grade_recieved,$rating_date,$first_name,$last_name,$stu_email,$school_name,$enrollment_year,$graduate_year,$available_status){

        //$rateProf="INSERT INTO prof_rating(class_id,helpfullness,clarity,easiness,class_for_credit,comment,attendence,your_intrest,textbook,textbook_used,grade_reciever,your_major,first_name,last_name,stu_email,school_name) VALUES ('$courseCode','$helpfullness','$clarity','$easiness','$course_credit','$comments','$attendance','$your_interest','$textbookUse','$textbook_used','$gradeRecieved','$major','$fName','$lName','$stu_email','$uniName')";
        $rateProf="CALL rate_prof('$class_id','$helpfullness','$clarity','$easiness','$class_for_credit','$comment','$attendence','$your_intrest','$textbook','$textbook_used','$grade_recieved','$rating_date','$first_name','$last_name','$stu_email','$school_name','$enrollment_year','$graduate_year','$available_status')";
        $res=mysql_query($rateProf);
        if ($res==true) {
            //profRating.php?fname=".$res['first_name']."&lname=".$res['last_name']."&univName=".str_replace(" ", "%20", $res['school_name'])."&dept=".str_replace(" ", "%20", $res['department'])
            /*header('Location:profRating.php?fname='.$first_name.'&lname='.$last_name.'&univName='.$school_name.'&dept='.null);*/
            echo "<script>if (window.confirm('Your entry will need to be verified and approved by our moderators it can take 3-4 working days')){document.location = 'index.php'}else{document.location = 'index.php'}</script>";
        }
        else
        {
            echo "<h1>facing problem while rating professor</h1>";
        }
    }

    public function rateUni($reputation,$location,$opportunities,$library,$ground_commonAreas,$internet,$food,$club,$social,$hapiness,$graduate_year,$rating_date,$comment,$city,$stu_email,$school_name,$av_status){

        //$rateProf="INSERT INTO school_rating(reputation,location,opportunities,library,ground_commonAreas,internet,food,club,social,hapiness,graduate_year,comment,city,stu_email,school_name) VALUES ('$population','$location','$opportunities','$library','$ground_common_areas','$internet','$food','$club','$social','$hapiness','$graduate_year','$comment','$city_name','$stu_email','$uniName')";
        $rateUni="CALL rate_uni('$reputation','$location','$opportunities','$library','$ground_commonAreas','$internet','$food','$club','$social','$hapiness','$graduate_year','$rating_date','$comment','$city','$stu_email','$school_name','$av_status')";
        $res=mysql_query($rateUni);
        if ($res==true) {

            //just for getting countryID and country Name... extra work
            $cntryNM="SELECT s.school_name,s.country_id,s.state_name,s.city_name,s.school_nick_name,c.country_id,c.country_name
                    FROM country c,school s
                    WHERE s.country_id=c.country_id AND s.school_name= '$school_name' AND s.city_name='$city'";
            $exeQry=mysql_query($cntryNM);
            while ($res=mysql_fetch_array($exeQry)) {
            $countryID=$res['country_id'];
            $countryName=$res['country_name'];
        }//end of extra work

            //uniRating.php?univName=".str_replace(" ", "%20", $res['school_name'])."&citName=".$res['city_name']."&cntryName=".$res['country_name']."&cntryID=".$res['country_id']
            //header('Location:uniRating.php?univName='.$school_name.'&citName='.$city.'&cntryName='.$countryName.'&cntryID='.$countryID);
        echo "<script>if (window.confirm('Your entry will need to be verified and approved by our moderators it can take 3-4 working days')){document.location = 'index.php'}else{document.location = 'index.php'}</script>";
        }
        else
        {
            echo "<h1>facing problem while rating university</h1>";
        }
    }

    public function addProf($first_name,$middle_name,$last_name,$school_name,$department,$dircttory_listing,$country_name,$email,$start_year,$end_year,$contact,$available_status){

        $addProf="CALL add_prof('$first_name','$middle_name','$last_name','$school_name','$department','$dircttory_listing','$country_name','$email','$start_year','$end_year','$contact','$available_status')";
        $exeQry=mysql_query($addProf);
        if ($exeQry==true) {
            # code...
            //profRating.php?fname=rafiullah&lname=afridi&univName=university of karachi&dept=Department of Computer Science & Technology
            //header('location:profRating.php?fname='.$first_name.'&lname='.$last_name.'&univName='.$school_name.'&dept='.$department);

            echo "<script>if (window.confirm('Your entry will need to be verified and approved by our moderators it can take 3-4 working days')){document.location = 'index.php'}else{document.location = 'index.php'}</script>";
        }
        else{
            //echo "<h1>facing problem while adding professor</h1>";
        }
    }

    public function addUni($school_name,$school_nick_name,$country_id,$state_name,$city_name,$website,$av_status){

        $countryName=null;

        $addUni="CALL add_uni('$school_name','$school_nick_name','$country_id','$state_name','$city_name','$website','$av_status')";
        $exeQry=mysql_query($addUni);
        if ($exeQry==true) {
            # code...

            //just to get country name for redirecting URL
            $cntryInfoQry="SELECT * FROM country WHERE country_id='$country_id'";
            $myqry=mysql_query($cntryInfoQry);
                while ($val_of=mysql_fetch_array($myqry)) {
                $countryName=$val_of['country_name'];
                }
            //end of geting country name

            //uniRating.php?univName=university of karachi&citName=karachi&cntryName=pakistan&cntryID=1
            //header('location:uniRating.php?univName='.$school_name.'&citName='.$city_name.'&cntryName='.$countryName.'&cntryID='.$country_id);

            echo "<script>if (window.confirm('Your entry will need to be verified and approved by our moderators it can take 3-4 working days')){document.location = 'index.php'}else{document.location = 'index.php'}</script>";
        }
        else{
            //echo "<h1>facing problem while adding professor</h1>";
        }
    }

    public function correctProfInfo($school_name,$first_name,$last_name,$stu_email,$problem,$correction){
        $correctProf="CALL correct_prof('$school_name','$first_name','$last_name','$stu_email','$problem','$correction')";
        $exeQry=mysql_query($correctProf);
        $report="correction can not be record";
        if ($exeQry==true) {
            # code...
            //header('location:index.php');
            $report="thank you for providing us corrent info";
            return $report;
        }
        else{
            //echo "<h1>facing problem while adding professor</h1>";
        }
    }

    public function correctUniInfo($uniName,$cityName,$stu_email,$problem,$correction){
        $correctProf="CALL correct_uni('$uniName','$cityName','$stu_email','$problem','$correction')";
        $exeQry=mysql_query($correctProf);
        $report="correction can not be record";
        if ($exeQry==true) {
            # code...
            //header('location:index.php');
            $report="thank you for providing us corrent info";
            return $report;
        }
        else{
            //echo "<h1>facing problem while adding professor</h1>";
        }
    }

    public function reportProfRating($rating_id,$stu_email,$stu_comment){
         $reportQry="CALL reportProfRating('$rating_id','$stu_email','$stu_comment')";
        $exeQry=mysql_query($reportQry);
        if ($exeQry==true) {
            return "your report has been recorded";
        }
        else
        {
            return "system currently facing problem in recording your report";
        }
    }

     public function reportUniRating($rating_id,$stu_email,$stu_comment){
         $reportQry="CALL reportUniRating('$rating_id','$stu_email','$stu_comment')";
        $exeQry=mysql_query($reportQry);
        if ($exeQry==true) {
            return "your report has been recorded";
        }
        else
        {
            return "system currently facing problem in recording your report";
        }
    }
}//end of Student class

?>