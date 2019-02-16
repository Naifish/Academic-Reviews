<script>
$(document).ready(function(){
    $(".fo").focusin(function(){
        $("#profauContainer2").show();
    });
    $(".fo2").focusin(function(){
        $("#profNameAc").show();
    });
    $(".fo3").focusin(function(){
        $("#uniFprofRate").show();
    });
    $(".fo4").focusin(function(){
        $("#profFprofRate").show();
    });
    $(".fo5").focusin(function(){
        $("#prfFPrate").show();
    });
    $(".fo6").focusin(function(){
        $("#uniFuni").show();
    });
    $(".fo7").focusin(function(){
        $("#uniFunirate").show();
    });
    $(".fo9").focusin(function(){
        $("#profNameAcMobHsearch").show();
    });
    $(".fo11").focusin(function(){
        $("#uniFuni").show();
    });
});
</script>

<script type="text/javascript">

//searching any prof from main searchbar
function showProfsMobHsearch(str) {
  if (str.length==0) {
    document.getElementById("profNameAcMobHsearch").innerHTML="";
    document.getElementById("profNameAcMobHsearch").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("profNameAcMobHsearch").innerHTML=xmlhttp.responseText;
      document.getElementById("profNameAcMobHsearch").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","../assets/myAjax/uniProf.php?profName="+str,true);
  xmlhttp.send();
}

//searching uni for finding professor
function showUni(str) {
  if (str.length==0) {
    document.getElementById("profauContainer2").innerHTML="";
    document.getElementById("profauContainer2").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("profauContainer2").innerHTML=xmlhttp.responseText;
      document.getElementById("profauContainer2").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","../assets/myAjax/uniProf.php?uniName="+str,true);
  xmlhttp.send();
}

//searching professor for finding professor
function findProfByName(str) {
  if (str.length==0) {
    document.getElementById("profNameAc").innerHTML="";
    document.getElementById("profNameAc").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("profNameAc").innerHTML=xmlhttp.responseText;
      document.getElementById("profNameAc").style.border="1px solid #A5ACB2";
    }
  }
  var uniName=document.getElementById("uniName").value;
  xmlhttp.open("GET","../assets/myAjax/uniProf.php?profName="+str+"&uniNam="+uniName,true);
  xmlhttp.send();
}

//searching uni for finding professor allover the country
function uniIncountry(str) {
  if (str.length==0) {
    document.getElementById("prfFPrate").innerHTML="";
    document.getElementById("prfFPrate").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("prfFPrate").innerHTML=xmlhttp.responseText;
      document.getElementById("prfFPrate").style.border="1px solid #A5ACB2";
    }
  }
  //xmlhttp.open("GET","../assets/myAjax/uniProf.php?uniName="+str,true);
  var countryName=document.getElementById("searchProfessorDepartment").value;
  xmlhttp.open("GET","../assets/myAjax/uniProf.php?uniName="+str+"&countryName="+countryName,true);
  xmlhttp.send();
}

//searching university for finding university all over the asia
function uniForuni(str) {
  if (str.length==0) {
    document.getElementById("uniFuni").innerHTML="";
    document.getElementById("uniFuni").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("uniFuni").innerHTML=xmlhttp.responseText;
      document.getElementById("uniFuni").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","../assets/myAjax/uniProfmob2.php?uniName="+str,true);
  xmlhttp.send();
}

//searching uni for rating professor
function UniForProfRate(str) {
  if (str.length==0) {
    document.getElementById("uniFprofRate").innerHTML="";
    document.getElementById("uniFprofRate").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("uniFprofRate").innerHTML=xmlhttp.responseText;
      document.getElementById("uniFprofRate").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","../assets/myAjax/uniProfmob3.php?uniName="+str,true);
  xmlhttp.send();
}

//searching professor for rating professor
function rateProfByName(str) {
  if (str.length==0) {
    document.getElementById("profFprofRate").innerHTML="";
    document.getElementById("profFprofRate").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("profFprofRate").innerHTML=xmlhttp.responseText;
      document.getElementById("profFprofRate").style.border="1px solid #A5ACB2";
    }
  }
  var uniName=document.getElementById("uniNamee").value;
  xmlhttp.open("GET","../assets/myAjax/uniProfmob2.php?profName="+str+"&uniNam="+uniName,true);
  xmlhttp.send();
}

//searching uni for rating uni
function unisFromcntrs(str) {
  if (str.length==0) {
    document.getElementById("uniFunirate").innerHTML="";
    document.getElementById("uniFunirate").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("uniFunirate").innerHTML=xmlhttp.responseText;
      document.getElementById("uniFunirate").style.border="1px solid #A5ACB2";
    }
  }
  var countryName=document.getElementById("cnttrNam").value;
  xmlhttp.open("GET","../assets/myAjax/uniProf.php?uniName="+str+"&countryName="+countryName,true);
  //xmlhttp.open("GET","../assets/myAjax/uniProf.php?uniName="+str,true);
  xmlhttp.send();
}


</script>