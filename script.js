const captions=[
 'the chaos committee','school-era evidence','main character behaviour','zero explanation','professional nonsense','the cat department 🐈','the photo we definitely needed','my day ❤️','caught in 4K','and somehow… this became a memory'
];
function openGift(){document.getElementById('opening').classList.add('hidden');document.getElementById('site').classList.remove('hidden');window.scrollTo(0,0)}
function openLightbox(n){document.getElementById('lightbox-img').src=`images/photo${n}.jpg`;document.getElementById('lightbox-caption').textContent=captions[n-1];document.getElementById('lightbox').classList.add('open')}
function closeLightbox(e){if(!e||e.target.id==='lightbox'||e.target.tagName==='BUTTON')document.getElementById('lightbox').classList.remove('open')}
function revealAward(card){card.classList.toggle('open')}
let score=0,done=new Set();
function quiz(btn,choice){const q=btn.closest('.question');if(done.has(q))return;done.add(q);const correct=Number(q.dataset.correct)===choice;q.querySelectorAll('button').forEach(b=>b.disabled=true);btn.classList.add(correct?'correct':'wrong');if(correct)score++;if(done.size===3){const r=document.getElementById('quiz-result');r.textContent=score===3?'3/3. Okayyy, you actually know us. 😭💗':`${score}/3. We need to have another conversation immediately. 😂`}}
function openLetter(){
  const letter = document.getElementById("letter");

  letter.classList.toggle("hidden");

  if(!letter.classList.contains("hidden")){
    letter.classList.remove("letter-open");

    void letter.offsetWidth;

    letter.classList.add("letter-open");
  }
}
function makeWish(){document.getElementById('cakeScene').classList.add('blown');document.getElementById('wishMessage').textContent='Wish made. ✨ Now go have the happiest birthday ever. 🎂💗';burst(80)}
function celebrate(){burst(130);document.getElementById('finalMessage').textContent='SURPRISEEEE 🎉 You are officially stuck with me for another year. 💗'}
function burst(count){const wrap=document.getElementById('confetti');for(let i=0;i<count;i++){const s=document.createElement('span');s.className='confetti-piece';s.style.left=Math.random()*100+'vw';s.style.top=(-10-Math.random()*20)+'vh';s.style.setProperty('--x',(Math.random()*220-110)+'px');s.style.background=['#ffb5c8','#f7d79d','#fff7ef','#e97f9d','#b9d7ff'][i%5];s.style.animationDelay=Math.random()*.6+'s';wrap.appendChild(s);setTimeout(()=>s.remove(),3200)}}
// ✨ Cute floating hearts and stars
const cuteFloaters = document.querySelector(".cute-floaters");

function createCuteFloater(){
  if(!cuteFloaters) return;

  const floater = document.createElement("span");
  floater.className = "cute-floater";

  const decorations = ["♡", "♥", "✦", "✧", "⋆", "💗"];
  floater.textContent =
    decorations[Math.floor(Math.random() * decorations.length)];

  floater.style.left = Math.random() * 100 + "vw";
  floater.style.fontSize = (14 + Math.random() * 14) + "px";
  floater.style.animationDuration = (6 + Math.random() * 4) + "s";

  cuteFloaters.appendChild(floater);

  setTimeout(() => {
    floater.remove();
  }, 10000);
}

setInterval(createCuteFloater, 900);
// 📸 Reveal photos when they enter the screen

const memoryPhotos = document.querySelectorAll(".memory-photo");

const photoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("photo-visible");
        photoObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold:0.15
  }
);

memoryPhotos.forEach((photo) => {
  photoObserver.observe(photo);
});
// 🎁 Brand new final surprise
function openFinalSurprise() {
  const scene = document.getElementById("surpriseScene");
  const button = document.getElementById("surpriseButton");

  if (!scene || !button) return;

  scene.classList.remove("hidden");
  button.disabled = true;
  button.textContent = "Your surprise is here! 💗";

  scene.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  if (typeof celebrate === "function") {
    celebrate();
  }
}

// Tap the gift to reveal the photo and message
document.getElementById("surpriseGift")?.addEventListener("click", function () {
  const reveal = document.getElementById("surpriseReveal");
  const hint = document.querySelector(".surprise-hint");

  if (!reveal || !reveal.classList.contains("hidden")) return;

  this.textContent = "💝";
  this.style.animation = "none";
  reveal.classList.remove("hidden");

  if (hint) {
    hint.textContent = "Surprise, my birthday girl! 💗";
  }

  if (typeof celebrate === "function") {
    celebrate();
  }
});