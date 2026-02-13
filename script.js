    const heartsContainer = document.querySelector('.hearts');

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤';

      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (3 + Math.random() * 5) + 's';
      heart.style.fontSize = (10 + Math.random() * 10) + 'px';

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 8000);
    }

    setInterval(createHeart, 300);

    document.addEventListener('click', () => {
    document.getElementById('bg-music').play();
  }, { once: true });

  const music = document.getElementById('bg-music');
music.volume = 0;

music.play();
let v = 0;
const fade = setInterval(() => {
  if (v < 0.6) {
    v += 0.01;
    music.volume = v;
  } else {
    clearInterval(fade);
  }
}, 100);


const startDate = new Date("2025-06-13T13:32:00");
const timeEl = document.getElementById("timeEl");

function updateTime() {
  const now = new Date();
  
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); 
    days += prevMonth.getDate();
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const totalMonths = years * 12 + months;

  timeEl.textContent = `${totalMonths} months ${days} days`;
}

setInterval(updateTime, 1000);
updateTime();

const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

