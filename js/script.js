 
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

    function responsiveJS(){
        if (window.innerWidth > 650) {
            const m1 = document.getElementById("media1");
            let h1 = m1.offsetHeight - 15
            document.getElementById("img1").style.height = h1 +"px";
            
            const m2 = document.getElementById("media2");
            let h2 = m2.offsetHeight - 15
            document.getElementById("img2").style.height = h2 +"px";

            const m3 = document.getElementById("media3");
            let h3 = m3.offsetHeight - 15
            document.getElementById("img3").style.height = h3 +"px";

            const m4 = document.getElementById("media4");
            let h4 = m4.offsetHeight - 15
            document.getElementById("img4").style.height = h4 +"px";

            const m5 = document.getElementById("media5");
            let h5 = m5.offsetHeight - 15
            document.getElementById("img5").style.height = h5 +"px";

            const m6 = document.getElementById("media6");
            let h6 = m6.offsetHeight - 15
            document.getElementById("img6").style.height = h6 +"px";
        }
    }