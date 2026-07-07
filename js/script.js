
function StickyJs() {
    if (window.innerWidth > 650 ){
        const element = document.documentElement.getBoundingClientRect();
        const m = -element.y

        if( m > 720 ){      
            document.getElementById("header").className = "sticky-header";
        } else { 
            document.getElementById("header").className = "";
        } 
    }
}

function menu_on() {
    document.getElementById("mob_menu").style.display = "none";
    document.getElementById("mob_overlay").style.display = "block";
    document.getElementById("page_container").style.opacity = "0.3";
}

function menu_off() {
    document.getElementById("mob_menu").style.display = "block";
    document.getElementById("mob_overlay").style.display = "none";
    document.getElementById("page_container").style.opacity = "1";
}
