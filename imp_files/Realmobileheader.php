<?php

if (isset($_POST['profNameee']) && isset($_POST["profNamelnmob"]) && isset($_POST["profNameunimob"]) && $_POST["profNamelnmob"]!="" && $_POST["profNameunimob"]!="") {
  # code...
  //sending values through query string without using header function
  echo "<script> location.href = '../showProfs.php?uniName=".$_POST["profNameunimob"]."&profName=".$_POST['profNameee']."&profNameln=".$_POST["profNamelnmob"]."' </script>";
}

if (isset($_POST['profNameee']) && isset($_POST["profNamelnmob"]) && isset($_POST["profNameunimob"]) && $_POST["profNamelnmob"]=="" && $_POST["profNameunimob"]=="") {
  # code...
  //sending values through query string without using header function
  echo "<script> location.href = 'showProfs.php?profName=".$_POST["profNameee"]."' </script>";
}


?>

<!-- Begins Mobile Header --><!-- containing searchbar -->
  <div id="mobileHeader" class="slide"> <a id="mobileHamburger" href="#"><span></span></a> <a href="index.php" id="mLogo"></a> <a href="#" class="icon-search"></a>
    <div class="mobileSearch">
      <div id="mSearchBox">
        <form class = "" method = "POST" action="#">
          <input type="text" id="searchr" name = "profNameee" class="fo9" onkeyup="showProfsMobHsearch(this.value)" placeholder="Search for a professor" autocomplete="off" autocorrect="off" spellcheck="false"/><!-- class="main-search-form" -->
          <input type="hidden" name="profNamelnmob" id="searchrln">
          <input type="hidden" name="profNameunimob" id="searchruni">
        </form>
          <div id="profNameAcMobHsearch" class="autocomplete-container mw mypos6">
            <ul>
            </ul>
          </div>

<script type="text/javascript">

function mainSearch(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   var vb =element.getElementsByTagName("span")[2].textContent;
   var vc =element.getElementsByTagName("span")[4].textContent;
   document.getElementById("searchr").value = va;
   document.getElementById("searchrln").value = vb;
   document.getElementById("searchruni").value = vc;
   $("#profNameAcMobHsearch").hide();
   location.href="../showProfs.php?uniName="+vc+"&profName="+va+"&profNameln="+vb;
}

</script>

        </form>
      </div>
    </div>
  </div>
  <div id="mobileLeaderboardAd" class="top-header">
    <div id="mobileLeaderboardAdWrap"></div>
  </div>
  <!-- Ends Mobile Header -->