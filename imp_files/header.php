<?php

if (isset($_POST['profName']) && isset($_POST["profNameln"]) && isset($_POST["profNameuni"]) && $_POST["profNameln"]!="" && $_POST["profNameuni"]!="") {
  # code...
  //sending values through query string without using header function
  echo "<script> location.href = 'showProfs.php?uniName=".$_POST["profNameuni"]."&profName=".$_POST['profName']."&profNameln=".$_POST["profNameln"]."' </script>";
}

if (isset($_POST['profName']) && isset($_POST["profNameln"]) && isset($_POST["profNameuni"]) && $_POST["profNameln"]=="" && $_POST["profNameuni"]=="") {
  # code...
  //sending values through query string without using header function
  echo "<script> location.href = 'showProfs.php?profName=".$_POST["profName"]."' </script>";
}

?>


  <header>
    <div class="overlay"></div>
    <a href="index.php" id="logo"  onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'GLOBAL:Logo', linkType:'o' } );"></a> 
    <!-- Starts the header search box -->
    <div id="searchBox">
      <div class="searchBox-wrapper">
        <form class = "nomargin" method = "POST" action="#">
          <input type="text" id="ProfName"  onkeyup="showProfsHsearch(this.value)" class="fo8" name = "profName" placeholder="Search for a professor" autocomplete="off" autocorrect="off" spellcheck="false"/><!-- class="main-search-form" -->
          <input type="hidden" name="profNameln" id="ProfNameln">
          <input type="hidden" name="profNameuni" id="ProfNamelnuli">
          <div id="profNameAcHsearch" class="autocomplete-container">
            <ul>
            </ul>
          </div>
<script type="text/javascript">

function mainSearch(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   var vb =element.getElementsByTagName("span")[2].textContent;
   var vc =element.getElementsByTagName("span")[4].textContent;
   document.getElementById("ProfName").value = va;
   document.getElementById("ProfNameln").value = vb;
   document.getElementById("ProfNamelnuli").value = vc;
   $("#profNameAcHsearch").hide();
   location.href="showProfs.php?uniName="+vc+"&profName="+va+"&profNameln="+vb;
}

</script>
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
      <a href="member.php" id="login" class="loggedout <?php session_start(); if($_SESSION['user_status']=="active"){echo 'hidee';} else{ echo 'blockk'; } ?>"> <span class="welcome-tablet">Log In</span> <span class="welcome">Log In</span> </a>
      <a href="member.php?stu_status=logout" style="display:none;" id="login" class=" <?php if($_SESSION['user_status']=="active"){echo 'blockk';} else{echo 'hidee';} ?>"> <span class="welcome-tablet">Log Out</span> <span class="welcome"> Log Out </span> </a>
       </div>
  </header>