<?php

/* searching professor */

//if search professor by name or for rate
if(isset($_POST['prof-name-btn'])){
  $uni_name=$_POST['uniName'];
  $porf_name=$_POST['profName'];
  $porf_nameln=$_POST['profNameln'];
  //header("location:search.php?uniName=".$uni_name."&profName=".$porf_name);

  //sending values through query string without using header function
  if ($porf_nameln!="") {
    # code...
    echo "<script> location.href = 'showProfs.php?uniName=".$uni_name."&profName=".$porf_name."&profNameln=".$porf_nameln."' </script>";
  }
  else{
    echo "<script> location.href = 'showProfs.php?uniName=".$uni_name."&profName=".$porf_name."' </script>";
  }
}

//if search professor by university
if(isset($_POST['prof-location-btn'])){
  $uni_name=$_POST['uniName2'];
  $country_name=$_POST['country'];
  //header("location:search.php?uniName=".$uni_name."&countryName=".$country_name);

  //sending values through query string without using header function
  echo "<script> location.href = 'showProfs.php?uniName=".$uni_name."&countryName=".$country_name."' </script>";
}

/* searching university */

//if search university by name
if(isset($_POST['schoolNames-btn'])){
  $uni_name=$_POST['uniName'];
  //header("location:searchuni.php?uniName=".$uni_name);

  //sending values through query string without using header function
  echo "<script> location.href = 'showUnis.php?uniName=".$uni_name."' </script>";
}

//if search university by location
if(isset($_POST['schoolLocationz'])){
  $state_name=$_POST['state'];
  //header("location:searchuni.php?stateName=".$state_name);

  //sending values through query string without using header function
  echo "<script> location.href = 'showUnis.php?stateName=".$state_name."' </script>";
}

//if search university for rating
if(isset($_POST['rate-uni-btn'])){
  $uni_name2=$_POST['uniName2'];
  $country_name=$_POST['country'];
  //header("location:searchuni.php?uniName2=".$uni_name2."&countryName=".$country_name);

  //sending values through query string without using header function
  echo "<script> location.href = 'showUnis.php?uniName2=".$uni_name2."&countryName=".$country_name."' </script>";
}

?>



  <!-- Starts left Nav -->
  
  <aside id="leftNav" class="height-col">
    <div id="leftOverlay"></div>
    <!-- Starts Left Menus -->
    <div id="menuWrap"> 
      
      <!-- Prof Menu -->
      <div id="profMenu" class="menu">
        <div class="header">Find a Professor</div>
        <div class="prof-block-form">
          <div class="center-block-form">
            <div class="h1">Find a Professor</div>
            <div class="search-by" data-search="profMenu"> <span class="label">SEARCH BY</span> <a href="javascript:void(0)" data-type="professor-names" class="active" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byname', linkType:'o' } );">Name</a> <a href="javascript:void(0)" data-type="professor-locations" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byschool', linkType:'o' } );">University</a> </div>
            <form action="#" method="post" name="prof-name" class="professor-names" id="prof-name" >
              <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
              <input type="hidden" name="queryBy" value="teacherName" id="queryBy" />
              <div class="search-info">
                <div class="optional-flag"> <span class="line-form-txt">I'm looking for a professor at</span>
                  <div class="drop-down-fix">
                    <input type="text" id="uniName" data-type="school" name="uniName" onkeyup="showUniLeftNav(this.value)" class="fo10" placeholder="university's name" autocorrect="off" autocomplete="off" required/>
                    <input type="hidden" class="schoolID" name="schoolID" id="nameprofid" />
                    <div id="profauContainer22" class="autocomplete-container">
                      <ul>
                      </ul>
                    </div>

<script type="text/javascript">

function homeUniSearchLeftNav(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("uniName").value = va;
   $("#profauContainer22").hide();
}

</script>

                    <!-- <span class="optional-content">Optional</span>--> 
                  </div>
                  <span class="line-form-txt">named</span>
                  <div class="drop-down-fix">
                    <input type="text" name="profName" id="searchProfessorName" class="fo2" onkeyup="findProfByNameLeftNav(this.value)" data-type="name" placeholder="professor's name" autocorrect="off" autocomplete="off" required/>
                    <input type="hidden" name="profNameln"id="searchProfessorNameln">
                    <div id="profNameAc" class="autocomplete-container">
                      <ul>
                      </ul>
                    </div>

<script type="text/javascript">

function homeFronSearchLeftNav(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   var vb =element.getElementsByTagName("span")[2].textContent;
   document.getElementById("searchProfessorName").value = va;
   document.getElementById("searchProfessorNameln").value = vb;
   $("#profNameAc").hide();
}

</script>

                    <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
                </div>
                <div class="cta">
                  <input type="submit" name="prof-name-btn" value="Search" />
                  <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byname_cancel', linkType:'o' } );">cancel</a> </div>
              </div>
            </form>
            <form action="#" method="post" name="prof-location" class="professor-locations" id="prof-location" >
              <input type="hidden" name="queryoption" value="TEACHER" id="queryoption" />
              <input type="hidden" name="queryBy" value="schoolDetails" id="queryBy" />
              <input type="hidden" class="schoolID" name="schoolID" />
              <div class="search-info"> <span class="inline-form-txt">I'm looking for professors in the</span>
                <select name="country" class="selwdth" id="searchProfessorDepartment" data-type="department" data-placeholder-option="false" data-size="10" required >
                  <option value="">select</option>
                  <!-- geting country name from database -->
                <?php
                  $countryQry="SELECT * FROM country";
                  $exeQry=mysql_query($countryQry);
                    while ($res=mysql_fetch_array($exeQry)) { ?>
                <option value="<?php echo $res['country_name']; ?>"><?php echo $res['country_name']; ?></option>
                <?php } ?>
                </select>
                <h2 style="margin-bottom:10px !important;" >country</h2>
                <div class="drop-down-fix"><span class="inline-form-txt"> at.</span>
                  <input type="text" style="margin-top:10px !important;" id="searchProfessorSchool" data-type="school" name="uniName2" class="fo5" onkeyup="uniIncountryLeftNav(this.value)" placeholder="university's name" autocorrect="off" autocomplete="off" required/>
                  <div id="prfFPrate" class="autocomplete-container searchProfessorSchoolAC mypos2">
                    <ul>
                    </ul>
                  </div>

<script type="text/javascript">

function homeCntUniSearchLeftNav(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("searchProfessorSchool").value = va;
   $("#prfFPrate").hide();
}

</script>

                  <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
                
              
                <div class="cta">
                  <input type="submit" name="prof-location-btn" value="Search" />
                  <a class="reset-search-form" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Profs_byschool_cancel', linkType:'o' } );">cancel</a> </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Ends Prof menu --> 
      
      <!-- School Menu -->
      <div id="schoolMenu" class="menu">
        <div class="header">Find a University</div>
        <div class="school-block-form">
          <div class="center-block-form">
            <div class="h1 mobile-header">Find a University</div>
            <div class="h1 header">Find your university</div>
            <div class="search-by" data-search="schoolMenu"> <span class="label">SEARCH BY</span> <a href="javascript:void(0)" data-type="school-names" class="active" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_byname', linkType:'o' } );">Name</a> <a href="javascript:void(0)" data-type="school-locations" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:School_bylocation', linkType:'o' } );">Location</a> </div>
            <form action="#" method="post" name="schoolNames" class="searchform school-names" id="schoolNames" >
              <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
              <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
              <div class="search-info">
                <div class="drop-down-fix">
                  <input type="text"  id="schoolName" name="uniName" onkeyup="uniForuniLeftNav(this.value)" class="fo6" placeholder="university's name" autocorrect="off" autocomplete="off" required/>
                  <div id="uniFuni" class="autocomplete-container mypos">
                    <ul>
                    </ul>
                  </div>

<script type="text/javascript">

function homeUniSearchLeftNav2(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("schoolName").value = va;
   $("#uniFuni").hide();
}

</script>

                  <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
                <div class="cta">
                  <input type="submit" value="Search" action="#" name="schoolNames-btn" style="margin-bottom:200px;"  />
                  <br />
                  <a class="reset-search-form">CANCEL</a>
                </div>
              </div>
            </form>
            <form action="#" method="post" name="schoollocations" class="searchform school-locations" >
              <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
              <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
              <input type="hidden" name="country" value="united states" id="country" />
              <input type="hidden" name="facetSearch" value="true" id="facetSearch" />
              <div class="search-info"> <span class="line-form-txt">
                <h2>I'm looking for a university in </h2>
                </span>
                <div class="select-wraper">
                  <select id="schoolState" name="state" required="" data-placeholder-option="false" data-size="10" required style="margin-bottom:23px;" >
                    <option value="">select state</option>
                    <!-- geting country name from database -->
                      <?php
                         $statepro="SELECT * FROM state_province";
                         $exeQry=mysql_query($statepro);
                         while ($res=mysql_fetch_array($exeQry)) { ?>
                         <option value="<?php echo $res['state_name']; ?>"><?php echo $res['state_name']; ?></option>
                      <?php } ?>
                  </select>
                </div>
                <span class="error-message" id ="leftNav_error-message-align">This field is required.</span> </div>
              <div class="cta">
                <input type="submit"  name="schoolLocationz" value="Search" />
                <a class="reset-search-form">CANCEL</a> </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Ends school menu --> 
      
      <!-- Rate Menu -->
      <div id="rateMenu" class="menu">
        <div class="header">Rate a</div>
        <div class="school-block-form">
          <div class="h1">Rate a</div>
          <div class="search-by" data-search="rateMenu"> <a href="javascript:void(0)" data-type="rate-professor" class="active" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Rate_Prof', linkType:'o' } );">Professor</a> <a href="javascript:void(0)" data-type="rate-schools" class="" onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'LEFTNAV:Rate_School', linkType:'o' } );">University</a> </div>
          <form action="#" method="post" name="rateProfessor" class="searchform rate-professor" style="" id="rateProfessor" >
            <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
            <input type="hidden" name="queryBy" value="teacherName" id="queryBy" />
            <div class="search-info"> <span class="wrap"> I am looking for a professor at <br />
              <input type="text"  id="uniNamee" onkeyup="UniForProfRateLeftNav(this.value)" class="fo3" name="uniName" autocomplete="off" placeholder="university's name" required />
              <span class="error-message">This field is required.</span>
              <div id="uniFprofRate" class="autocomplete-container mypos3">
                <ul>
                </ul>
              </div>

<script type="text/javascript">

function homeUniSearchLeftNav3(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("uniNamee").value = va;
   $("#uniFprofRate").hide();
}

</script>

              </span>
              <span class="wrap"> named <br />
              <input type="text" id="rateProfdadaessorAC" name="profName" onkeyup="rateProfByNameLeftNav(this.value)" class="fo4" placeholder="professor's name" required autocomplete="off" /> <!-- onkeyup="profForProfRate(this.value) -->
              <input type="hidden" name="profNameln" id="rateProfdadaessorACln">
              <span class="error-message">This field is required.</span>
              <div id="profFprofRate" class="autocomplete-container mypos3">
                <ul>
                </ul>
              </div>

<script type="text/javascript">

function homeFronSearchLeftNav3(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   var vb =element.getElementsByTagName("span")[2].textContent;
   document.getElementById("rateProfdadaessorAC").value = va;
   document.getElementById("rateProfdadaessorACln").value = vb;
   $("#profFprofRate").hide();
}

</script>

              </span> 
              </div>
            <div class="cta">
              <input type="submit" value="Search" name="prof-name-btn"/>
              <br />
              <a class="reset-search-form">cancel</a> </div>
          </form>
          <form action="#" method="post" name="rateSchool" class="searchform rate-schools" style="" id="rateSchool" >
            <input type="hidden" name="queryoption" value="HEADER" id="queryoption" />
            <input type="hidden" name="queryBy" value="schoolName" id="queryBy" />
            <div class="search-info"> <span class="wrap"> I am looking in the <br />
                <select class="myselect percnt" name="country" required id="cntrNM">
                <option value="">Select</option>
                <!-- geting country name from database -->
                <?php
                  $countryQry="SELECT * FROM country";
                  $exeQry=mysql_query($countryQry);
                    while ($res=mysql_fetch_array($exeQry)) { ?>
                <option value="<?php echo $res['country_name']; ?>"><?php echo $res['country_name']; ?></option>
                <?php } ?>
              </select>
              <h2 style="color:#000;">country</h2>
              <span class="error-message">This field is required.</span>
              <div id="rateSchoolAC" class="autocomplete-container">
                <ul>
                </ul>
              </div>
              </span>
              <span class="wrap"> for <br />
              <input type="text" id="schoolNamesss" style="margin-top:6px !important; margin-botton:15px !important"; class="fo7" onkeyup="rateuniFrmCntryLeftNav2(this.value)" name="uniName2" autocomplete="off" placeholder="University's Name" required />
              <span class="error-message">This field is required.</span>
              <div id="uniFunirate" class="autocomplete-container mypos3">
                <ul>
                </ul>
              </div>

<script type="text/javascript">

function homeCntUniSearchLeftNav2(elementid){
    var element= document.getElementById(elementid);
   var va =element.getElementsByTagName("span")[0].textContent;
   document.getElementById("schoolNamesss").value = va;
   $("#uniFunirate").hide();
}

</script>

              </span>
               </div>
            <div class="cta">
              <input type="submit" value="Search" name="rate-uni-btn"/>
              <br />
              <a class="reset-search-form">cancel</a> </div>
          </form>
        </div>
      </div>
      <!-- Ends Rate Menu --> 
      
      <!-- Blog Menu -->
      
      <div id="blogMenu" class="menu js-blog-menu-global">
        <div class="blogMenu-inner">
          <div class="header">Rate My Professors Blog</div>
          <a class='close-left-nav close-this'>&#215;</a>
          <div class = "clearfix"></div>
          <div class="panel-filter">
            <div class="result-count">
              <div class="sort-option" id="no-default">
                <select id="blog-filter" name="blogfilter" class="blog-filters" >
                  <option value="All">All Categories</option>
                  <option value="RMP Buzz" >RMP Buzz</option>
                  <option value="Professors Strike Back" >Video</option>
                  <option value="Lists" >Top Lists</option>
                  <option value="Misc." >Miscellaneous</option>
                </select>
              </div>
            </div>
          </div>
          <div class="result-list">
            <ul id="blog-item-list">
            </ul>
            <input type="submit" value="LOAD MORE" id="loadmoreBlog"
  onclick="javascript:mtvn.btg.Controller.sendLinkEvent({ linkName:'BLOG:LoadMore', linkType:'o' } );" />
            
            <!-- Blog item templates --> 
            <script type="text/template" id="blogitems">
    <li>
      <a href="/{{actionUrl}}{{blogurl}}">
        <figure><img src="{{imageurl}}" width="73" height="73" /></figure>
        <div class="text-wrap">
          <div class="tag">
            <span>{{category}}</span>
          </div>
          <p>{{title}}</p>
        </div>
      </a>
      <div class = "clearfix"></div>
    </li>
  </script> 
          </div>
        </div>
      </div>
      
      <!-- Ends Blog Menu --> 
      
      <!-- My Profs Menu -->
      <div id="myProfsMenu" class="menu"> <a class='close-left-nav close-this'>&#215;</a>
        <div class="header">My Professors</div>
        <hr>
        <div class="my-professors-result-list">
          <ul>
          </ul>
          <p class = "no-professors"></p>
        </div>
        <script type="text/template" id="my-professor-result-template">
  <li id = "my-professor-{{id}}">
    <a href="ShowRatings3423.html?tid={{id}}&amp;showMyProfs=true">
      <span class="{{ratingclass}}-icon"></span>
      <span class="remove-this-button" data-id="{{id}}">&#215;</span>
      <span class="rating">{{overall_rating}}</span>
      <span class="name">{{plname}}, {{{pfname}}}
        <span class="info">{{rating_count}} RATINGS</span>
      </span>
    </a>
  </li>
</script> 
      </div>
      <!-- Ends My Profs Menu --> 
      
    </div>
    <!-- Ends Left Menu --> 
    
    <!-- Starts Left Nav -->
	
   <!-- including leftnav -->
	<?php include('leftNav.php') ?>
    
	<!-- Ends left Nav --> 
    
  </aside>