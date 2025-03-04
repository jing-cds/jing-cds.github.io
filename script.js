// navigation bar and menu
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

// filters for projects on works page
function filterWorks(category) {
    const buttons = document.querySelectorAll('.filter-button');
    const works = document.querySelectorAll('.project');

    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText.toLowerCase() === category) {
            button.classList.add('active');
        }
    });

    works.forEach(work => {
        if (category === 'all' || work.classList.contains(category)) {
            work.style.display = 'block';
        } else {
            work.style.display = 'none';
        }
    });
}

// filters for magazine
function filterMag(category) {
    const buttons = document.querySelectorAll('.filter-button');
    const magazine = document.querySelectorAll('.magazine');

    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText.toLowerCase() === category) {
            button.classList.add('active');
        }
    });

    magazine.forEach(magazine => {
        if (category === 'all' || magazine.classList.contains(category)) {
            magazine.style.display = 'block';
        } else {
            magazine.style.display = 'none';
        }
    });
}

// Image Carousel
const thumbnails = document.querySelectorAll('.thumbnail');
const featured = document.getElementById('featured');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        featured.src = this.src;
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Expandable Description
const toggleDesc = document.getElementById('toggle-desc');
const longDesc = document.querySelector('.long-desc');

toggleDesc.addEventListener('click', function() {
    if (longDesc.style.display === "none" || longDesc.style.display === "") {
        longDesc.style.display = "block";
        toggleDesc.textContent = "less ▲";
    } else {
        longDesc.style.display = "none";
        toggleDesc.textContent = "more ▼";
    }
});

/* scroll to top button
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
*/

/* magazine issue */
/*
let url = "https://drive.google.com/file/d/16eZKu5qo05SJl0R8wwZGUSmjOYJAV_lg/view?usp=sharing"; // Change this to your PDF file

    let pdfDoc = null,
        pageNum = 1,
        scale = 1.5,
        canvas = document.getElementById("pdf-canvas"),
        ctx = canvas.getContext("2d"),
        isDragging = false,
        startX = 0,
        endX = 0;

    // Load PDF
    pdfjsLib.getDocument(url).promise.then(pdf => {
        pdfDoc = pdf;
        renderPage(pageNum);
    });

    function renderPage(num) {
        pdfDoc.getPage(num).then(page => {
            let viewport = page.getViewport({ scale: scale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            let renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            page.render(renderContext);
        });
    }

    // Swipe Detection for Flick Navigation
    document.getElementById("pdf-container").addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    document.getElementById("pdf-container").addEventListener("touchend", e => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    document.getElementById("pdf-container").addEventListener("mousedown", e => {
        isDragging = true;
        startX = e.clientX;
    });

    document.getElementById("pdf-container").addEventListener("mouseup", e => {
        if (!isDragging) return;
        endX = e.clientX;
        isDragging = false;
        handleSwipe();
    });

    function handleSwipe() {
        let threshold = 50; // Minimum swipe distance
        if (startX - endX > threshold) {
            nextPage();
        } else if (endX - startX > threshold) {
            prevPage();
        }
    }

    function nextPage() {
        if (pageNum < pdfDoc.numPages) {
            pageNum++;
            canvas.style.transform = "translateX(-20px)"; // Flick effect
            setTimeout(() => {
                canvas.style.transform = "translateX(0)";
                renderPage(pageNum);
            }, 200);
        }
    }

    function prevPage() {
        if (pageNum > 1) {
            pageNum--;
            canvas.style.transform = "translateX(20px)"; // Flick effect
            setTimeout(() => {
                canvas.style.transform = "translateX(0)";
                renderPage(pageNum);
            }, 200);
        }
    } */