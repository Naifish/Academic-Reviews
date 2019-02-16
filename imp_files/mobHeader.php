<?php


?>


  <header>
    <div class="overlay"></div>
    <a href="../index.php" id="logo"  onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:Logo', linkType:'o' } );"></a> 
    <!-- Starts the header search box -->
    <div id="searchBox">
      <div class="searchBox-wrapper">
        <form class = "main-search-form" method = "GET">
          <input type="text" id="searchr" name = "profName" placeholder="Search for a professor or university" autocomplete="off" autocorrect="off" spellcheck="false"/>
        </form>
        <div id="tablet-social-dropdown">
          <div class="tablet-social"> <span class="social-text">Follow us</span> </div>
          <div class="tablet-social-list">
            <ul>
              <a href="#" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:facebook', linkType:'o' } );">
              <li class="icon-facebook"> <span class="text-social">facebook</span> </li>
              </a> <a href="#" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:twitter', linkType:'o' } );">
              <li class="icon-twitter"> <span class="text-social">twitter</span> </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Ends the header search box --> 
    
    <!-- Starts the Head Social Bar -->
    <div id="headSocial">
      <ul>
        <li><a href="https://www.facebook.com" class="icon-facebook" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:facebook', linkType:'o' } );"></a></li>
        <li><a href="https://twitter.com" class="icon-twitter" target="_blank" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:twitter', linkType:'o' } );"></a></li>
      </ul>
    </div>
    <!-- Ends the Head Social Bar -->
    <div id="desktopLoginSectionContainer"> 
      
      <!-- Need ajax widget --> 
       <a href="../member.php" id="login" class="loggedout <?php session_start(); if($_SESSION['user_status']=="active"){echo 'hidee';} else{ echo 'blockk'; } ?>"> <span class="welcome-tablet">Log In</span> <span class="welcome"> Log In</span> </a>
      <a href="../member.php?stu_status=logout" style="display:none;" id="login" class=" <?php if($_SESSION['user_status']=="active"){echo 'blockk';} else{echo 'hidee';} ?>"> <span class="welcome-tablet">Log Out</span> <span class="welcome"> Log Out </span> </a>
  </header>