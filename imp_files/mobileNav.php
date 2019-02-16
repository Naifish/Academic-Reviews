<?php



?>


<div id="mobileNav" class="slide">
  <div class="mobile_nav_wrap">
    <div class="navItems">
      <ul class="menuNav">
        <!-- One Menu Item -->
        <li> <a href="mobile/professor_search.php"> <span class="icon icon-professor"></span> <span class="title">Professors</span> <span class="arrow"></span> </a> </li>
        <!-- One Menu Item --> 
        
        <!-- One Menu Item -->
        <li> <a href="mobile/school_search.php"> <span class="icon icon-school"></span> <span class="title">Universities</span> <span class="arrow"></span> </a> </li>
        <!-- One Menu Item --> 
        
        <!-- One Menu Item -->
        <li> <a href="mobile/rate_search.php"> <span class="icon icon-rate"></span> <span class="title">Rate</span> <span class="arrow"></span> </a> </li>
        <!-- One Menu Item --> 
		
        <!-- One Menu Item -->
        <li id="mobilemyProfContainer" class="hide"> <a href="mobile/myprofs.php" > <span class="icon icon-my-profs"></span> <span class="title">My Profs</span> <span class="arrow"></span> </a> </li>
        <!-- One Menu Item --> 
        
        <!-- Not Logged In -->
        <div id="mobileLoginSectionContainer"> 
          
          <!-- Need ajax widget -->
          <!-- <li class="mobile_login logged_off"> <a href="member.php"> <span class="mobile_login_text">log In</span> <span class="arrow"></span> </a> </li> -->

           <li class="mobile_login logged_off"> <a href="member.php" id="login" class="loggedout <?php session_start(); if($_SESSION['user_status']=="active"){echo 'hidee';} else{ echo 'blockk'; } ?>"> <span class="mobile_login_text">Log In</span> <span class="arrow"></span> </a></li>
           <li class="mobile_login logged_off"> <a href="member.php?stu_status=logout" style="display:none;" id="login" class=" <?php if($_SESSION['user_status']=="active"){echo 'blockk';} else{echo 'hidee';} ?>"> <span class="mobile_login_text">Log Out</span> <span class="arrow"></span> </a></li>
        </div>
        <li id="mobileSocial" >
          <ul>
            <li><a href="https://www.facebook.com" class="icon-facebook" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:facebook', linkType:'o' } );"></a></li>
            <li><a href="https://twitter.com" class="icon-twitter" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:twitter', linkType:'o' } );"></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>