function toggleTab(item) {

            switch ( item) {
                    case "Mobile":
                    document.getElementById(item).style.display="inline-flex";
                    // document.getElementById("tabph").style.color="white ";
                    // document.getElementById("tabph").style.borderLeft="10px solid white "

                    document.getElementById("tvs").style.display="none";
                    document.getElementById("Headphones").style.display="none";

                    
                    break;
                    case  "tvs":
                        document.getElementById("Mobile").style.display="none";
                        document.getElementById(item).style.display="inline-flex";
                    document.getElementById("Headphones").style.display="none";
                    break;
                    case  "Headphones":
                        document.getElementById("Mobile").style.display="none";
                        document.getElementById("tvs").style.display="none";
                        document.getElementById("Headphones").style.display="inline-flex";
                    break;
                    default:document.getElementById(item).style.display="inline-flex";
                    break;
            }
        }
    