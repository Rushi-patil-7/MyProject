
function toggleTab(evt, itemName) {
    // debugger
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
 