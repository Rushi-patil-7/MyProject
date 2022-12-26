

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

 
 function openSpec(boxid ,specid){

  neworder=document.getElementsByClassName("box")
  for(var i =0 ; i< neworder.length;i++){
    neworder[i].style.order=0;  
  }
  document.getElementById(boxid).style.order=-2;  
  document.getElementById(specid).style.display="block";
  document.getElementById(specid).style.order=-1;

  specview(boxid);
}

function specview(mobileid) {
  // mobileord=document.getElementsByClassName("box");
  // debugger
  var arr= [mobile= [model="Oneplus 10R", RAM="6GB", ROM="128GB", Camera="64MP", Battery="5000 mah",charger="100 watt"],
            [model="Oneplus 10 Pro", RAM="8GB", ROM="128GB", Camera="50MP", Battery="6000 mah",charger="64 watt"],
            [model="Oneplus 10T", RAM="4GB", ROM="64GB", Camera="48MP", Battery="4000 mah",charger="48watt"],
            [model="Oneplus Nord Lite ", RAM="4GB", ROM="64GB", Camera="48MP", Battery="4000 mah",charger="48watt"],
            [model="Oneplus 8 pro", RAM="4GB", ROM="64GB", Camera="48MP", Battery="4000 mah",charger="48watt"],
            [model="Oneplus 7T", RAM="4GB", ROM="64GB", Camera="48MP", Battery="4000 mah",charger="48watt"],
            [model="Oneplus 9 winter edition", RAM="4GB", ROM="64GB", Camera="48MP", Battery="4000 mah", charger="48watt"],
            [model="Oneplus 9 pro", RAM="4GB", ROM="64GB", Camera="48MP", Battery="4000 mah",charger="48watt"]
          ];
          if(mobileid=='mobile1'){ var x= 0 }
          if(mobileid=='mobile2'){ var x= 1 }
          if(mobileid=='mobile3'){ var x= 2 }
          if(mobileid=='mobile4'){ var x= 3 }
          if(mobileid=='mobile5'){ var x= 4 }
          if(mobileid=='mobile6'){ var x= 5 }
          if(mobileid=='mobile7'){ var x= 6 }
          if(mobileid=='mobile8'){ var x= 7 }
               for( var k=0 ; k<=6;k++ ){
                 document.getElementsByTagName("span")[k].innerText=arr[x][k-1];
               }
          
}


    
 