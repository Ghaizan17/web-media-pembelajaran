function nav(id) {
    // Aktifkan konten sesuai ID
    document.querySelectorAll('.konten').forEach(function (el) {
        el.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    // Reset semua tombol
    document.querySelectorAll('.btn-filter').forEach(function (btn) {
        btn.classList.remove('bg-warning' , 'text-dark');
        btn.classList.add('btn-outline-light' , 'text-light');
    });

    // Tambahkan gaya aktif ke tombol yang ditekan
    const activeBtn = event.currentTarget;
    activeBtn.classList.remove('btn-outline-light');
    activeBtn.classList.add('bg-warning', 'text-dark');
}
// scroll animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const offset = 150;

        if (elementTop < windowHeight - offset) {
        el.classList.add('active');
        } else {
        el.classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function ubah() {
    const body = document.body;
    const icon = document.getElementById("nightmode").firstElementChild;
    const teks = document.getElementById("nightmode");


    // Toggle ke light mode
    body.classList.toggle("light-mode");

    // Simpan preferensi di localStorage
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        teks.innerHTML = '<i class="fa fa-sun text-warning"></i> Light';
        
    } else {
        localStorage.setItem("theme", "night");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        teks.innerHTML = '<i class="fa fa-moon text-warning"></i> Dark';
        
    }
}

// Terapkan preferensi saat halaman dimuat
window.onload = function () {
    const body = document.body;
    const icon = document.getElementById("nightmode").firstElementChild;
    const savedTheme = localStorage.getItem("theme");
    const teks = document.getElementById("nightmode");
    
    if (savedTheme === "light") {
        body.classList.add("light-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        teks.innerHTML = '<i class="fa fa-sun text-warning"></i> Light';
        
    }
};


// Tombol scroll to top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Scroll up dengan smooth scroll
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// event listener tombol
scrollTopBtn.addEventListener("click", scrollToTop);


