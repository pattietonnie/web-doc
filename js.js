
//Javascript fil til webdokumentar

console.log('js.js = ok')

// globale variabler
let d = new Date(); // kan genbruges andre steder
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];


// Fortids video: Play when on screen

var video = document.getElementById('fortidvideo'), fraction = 0.8;

function checkScroll() {
    var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
    b = y + h, //bottom
    visibleX, visibleY, visible;

    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    visible = visibleX * visibleY / (w * h);

    if (visible > fraction) {
        video.play();
    } else {
        video.pause();
    }
} checkScroll();
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);


//videoer til faq
function swapVideo() {
  player.src = this.getAttribute("data-src");
  player.load();
  player.play();
}

var videoPlayButtons = document.querySelectorAll("button"),
  player = document.getElementById("player");

for (var i=0; i<videoPlayButtons.length; i++){
  videoPlayButtons[i].addEventListener('click', swapVideo);
}



// footer som objekt
const info = {
  author: '<p> Katrine Aebelo, Patricia Tonnie Jensen, Lea Hansen Danielsen, Ditte Schultz </p>',
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  Uddannelse: '<p> Erhvervsakademiet Aarhus </p>',
  adresse: '<p> Ringvej syd 104 <br> 8260 Viby j </p>',


  skrivTilFooter: function() {
    console.log('footeren.skrivTilFooter() = aktiv');
    footerInfo.innerHTML += `
      <div>
      <p> &copy; Opgave - Webdokumentar<br>
      ${this.author}</p>
        <p> ${this.dag}
         ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.</p>
      </div>
    `;
  },
  skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <p>${this.Uddannelse}</p>
        <p>
          ${this.adresse}
        </p>
      </div>
    `
  }
}

info.skrivAdresse(); // Spørgsmål 2
info.skrivTilFooter(); // Spørgsmål 1
