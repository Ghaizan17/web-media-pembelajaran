function nav(id) {
    // Aktifkan konten sesuai ID
    document.querySelectorAll('.konten').forEach(function (el) {
        el.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    // Reset semua tombol
    document.querySelectorAll('.btn-filter').forEach(function (btn) {
        btn.classList.remove('bg-warning', 'text-dark');
        btn.classList.add('btn-outline-light');
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

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show/hide button on scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
    } else {
    scrollTopBtn.classList.remove("show");
    }
});

// Manual scroll-up effect
function scrollStep() {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
    window.scrollBy(0, -100); 
    requestAnimationFrame(scrollStep);
    }
}

scrollTopBtn.addEventListener("click", function () {
    requestAnimationFrame(scrollStep);
});

// latihan mtk

const btnKirim = document.getElementById('btnKirim');
    const btnCobaLagi = document.getElementById('btnCobaLagi');
    const resultDiv = document.getElementById('result');
    const progressBar = document.getElementById('progressBar');
    const quizForm = document.getElementById('quizForm');

    const correctAnswers = {
      q1: "1",
      q2: "Jika kedua input bernilai 1 maka outputnya bernilai 1",
      q3: "0"
    };

    btnKirim.addEventListener('click', () => {
      let correctCount = 0;
      let totalQuestions = Object.keys(correctAnswers).length;
      for (let key in correctAnswers) {
        const selected = quizForm.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
          correctCount++;
        }
      }

      let score = Math.round((correctCount / totalQuestions) * 100);
      progressBar.style.width = `${score}%`;
      progressBar.textContent = `${score}%`;

      if (correctCount === totalQuestions) {
        resultDiv.innerHTML = `<div class="alert alert-success mt-3">Hebat! Semua jawaban kamu benar! 🎉</div>`;
      } else {
        resultDiv.innerHTML = `<div class="alert alert-info mt-3">Kamu benar ${correctCount} dari ${totalQuestions} soal.</div>`;
      }
    });

    btnCobaLagi.addEventListener('click', () => {
      quizForm.reset();
      progressBar.style.width = '0%';
      progressBar.textContent = '0%';
      resultDiv.innerHTML = "";
    });
