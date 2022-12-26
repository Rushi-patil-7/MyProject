

function toggleTab(evt, itemName) {
     // Declare all variables
    var i, showcase, tablinks;
    // Get all elements with class="showcase" and hide them
    showcase = document.getElementsByClassName("showcase");
    for (i = 0; i < showcase.length; i++) {
      showcase[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(itemName).style.display = "inline-flex";
    evt.currentTarget.className += " active";
    
 }

 
 function openSpec(boxid){

  // document.getElementsByClassName("box")[0].style.order=boxorder+1;
  neworder=document.getElementsByClassName("box")
  for(var i =0 ; i< neworder.length;i++){
    neworder[i].style.order=0;  
  }


  document.getElementById(boxid).style.order=-2;
  document.getElementById("Specifications").style.order=-1;
  document.getElementById("Specifications").style.display="block";

  // boxorder= neworder+1;
  // console.log(neworder)
  document.getElementById(boxid).style.order=neworder;


  // var boxorder2= document.getElementById(boxid).style.order ;
  // boxorder2[0].style.order=neworder
  // document.getElementsByClassName("box").style.display="none";
  // document.getElementById(boxid).style.display="none";

  // var a=document.getElementsByClassName("box")
  // console.log(a);  
  // a.style.display="none"
  // document.getElementById(boxid).style.display="none";
  // console.log("blcok")

  //   document.getElementById("Specifications").style.order = a-1 ;


    }
    
    
    // evt.currentTarget.className += " active";


 