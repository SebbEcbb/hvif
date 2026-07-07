
//Logo
function logo_en() {
    document.getElementById("logo-container").innerHTML = 
    "<a href='/'><img src='/assets/images/optimized/ui/logo-icon-1024.webp' height='20px' alt='Holiday Villas in France'> Holiday Villas in France </a>"+
    "<p class='sub-title'>Art of living on another level</p>";
  }

// Nav-list
function navlist_en() {
    document.getElementById("nav-list").innerHTML = 
    "<li><a href='/blog/'>Blog</a></li>"+
    "<li><a href='/villas/' target='_blank'>Villas</a></li>"+
    "<li><a href='/contact/'>Contact</a></li>"
}

/*************************************
// Dynamic Breadcrumb Logic 🧭
*************************************/
const path = window.location.pathname;
const segments = path.split('/').filter(segment => segment !== "" && !segment.endsWith(".html"));
const breadcrumbContainer = document.getElementById('breadcrumb-container');

// 1. Manually add the Home link at the very beginning 🏠
const homeLink = document.createElement('a');
homeLink.href = '/';
homeLink.textContent = 'Home';
breadcrumbContainer.appendChild(homeLink);

let accumulatedPath = '';

// 2. Loop through the remaining path segments
segments.forEach((segment) => {
  accumulatedPath += `/${segment}`;

  // Add a visual separator before the next link 
  breadcrumbContainer.append(' > '); 

  // Clean up the protocol characters first
  let cleanedSegment = segment.replaceAll('-', ' ').replaceAll('_', ' & ');

  // Split into individual words and capitalize each one 🧼
  const words = cleanedSegment.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const finalTitle = capitalizedWords.join(' ');

  // Create and append the new link
  const link = document.createElement('a');
  link.href = accumulatedPath;
  link.textContent = finalTitle;
  
  breadcrumbContainer.appendChild(link);
});

// Add Top of page
const topOfpage = document.createElement('a');
breadcrumbContainer.append(' > '); 
topOfpage.href = "#";
topOfpage.textContent = "Top of Page"
breadcrumbContainer.appendChild(topOfpage)

// Add Table of Content to breadcrumb
const toc = document.createElement('a');
breadcrumbContainer.append(' > '); 
toc.href = "#page-container";
toc.textContent = "Table of Content"
breadcrumbContainer.appendChild(toc)


/*************************************
//Sticky Menu Logic
*************************************/
function StickyMenu() {
    const element = document.documentElement.getBoundingClientRect();
    const m = -element.y

    if( m > 800 ){
        document.getElementById("breadcrumb-container").className = "breadcrumbs stick"; 
        
        if (window.innerWidth > 1024 ){
            document.getElementById("mobile-menu").style.display="none";
            document.getElementById("nav-list").style.display="flex";

        } else {
            document.getElementById("mobile-menu").style.display="flex";
            document.getElementById("nav-list").style.display="none";
        } 
    
    } else {     
        document.getElementById("breadcrumb-container").className = "breadcrumbs";
    }     
}   

/*************************************
//Mobile Responsive Menu Logic
*************************************/
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
        menuToggle.classList.add('hide');
        navList.classList.add('active');

        // Prevent body scroll when menu is open
    if (navList.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

document.querySelectorAll('.nav-links, .nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('hide');
        navList.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

/*************************************/
logo_en();
navlist_en();

