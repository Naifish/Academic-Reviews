<?php

class Faculty{
	private $fac_name,$fac_email,$fac_pass,$fac_dir,$fac_contact;

	public function _set($property,$value){
		if (property_exists($this, $property)) {
			# code...
			$this->$property=$value;
		}
	}

	public function _get($property){
		if (property_exists($this, $property)) {
			# code...
			return $this->$property;
		}
	}

	public function signUp($fac_name,$fac_email,$fac_pass,$fac_dir,$fac_contact){

	  //$insert_fac="INSERT INTO faculty(fac_name, fac_email, fac_pass, fac_dir_link, fac_contact) VALUES ('$fac_name','$fac_email','$fac_pass','$fac_dir','$fac_contact')";
      $signup_sp="CALL fac_signup('$fac_name','$fac_email','$fac_pass','$fac_dir','$fac_contact')";
      $execQury=mysql_query($signup_sp);
      if ($execQury==true) {
        # code...
        header('Location:member.php');
      }
      else{
        echo "<h1>facing problem while inserting student</h1>";
      }

	}

	public function logIn($email,$pass){
		
		$login_info="SELECT * FROM faculty";
		$exeQry=mysql_query($login_info);
		while ($res=mysql_fetch_array($exeQry)) {
				# code...
			if ($res['fac_email']==$email && $res['fac_pass']==$email ) {
				# code...
				//strart session and redirect user to respected page
				session_start();

				$_SESSION['user_email']=$email;
				$_SESSION['user_pass']=$email;
				$_SESSION['user_status']="active";

				//when user press logout button change user_status and (check the user_status and destroy session) on redirected page.
				//$_SESSION['user_status']="deactive";


				header('location:https://www.google.com.pk');
			}
			else{
					$u_pass_error="Invalid Password";
			}
		}
	}
}

?>