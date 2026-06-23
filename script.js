const LINK_FOTO_HUJAN = [
    "https://cdn.phototourl.com/free/2026-06-23-c98fabfa-17fc-4225-9006-ff1c94a0265d.jpg",
    "https://cdn.phototourl.com/free/2026-06-23-f7ca5781-292c-4cbd-bc60-b5f62279d5ec.jpg",
    "https://cdn.phototourl.com/free/2026-06-23-0a6e4d6e-bc24-4bb5-b1b4-33db95113fba.jpg"
];

let bearTimeout;

function pindahBab(babSekarang, babTujuan) {
    document.getElementById(babSekarang).classList.remove('active');
    document.getElementById(babTujuan).classList.add('active');

    if (babTujuan === 'bab2') {
        document.getElementById('laguUltah').play();
        mulaiHujanKonfeti();
    }

    if (babTujuan === 'bab1') {
        document.getElementById('laguUltah').pause();
        document.getElementById('laguUltah').currentTime = 0;
        document.getElementById('mainBear').classList.remove('action-triggered');
    }
}

function hujanFotoAksi() {
    const bear = document.getElementById('mainBear');
    bear.classList.add('action-triggered');

    clearTimeout(bearTimeout);

    bearTimeout = setTimeout(() => {
        bear.classList.remove('action-triggered');
    }, 4000);

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const foto = document.createElement('img');
            
            foto.src = LINK_FOTO_HUJAN[i % LINK_FOTO_HUJAN.length];
            foto.classList.add('photo-rain');
            
            foto.style.left = Math.random() * 90 + 'vw';
            foto.style.top = '-100px';
            
            const ukuran = Math.random() * 20 + 65; 
            foto.style.width = ukuran + 'px';
            foto.style.height = ukuran + 'px';
            
            foto.style.animationDuration = Math.random() * 1.5 + 2.5 + 's'; 
            
            document.body.appendChild(foto);

            setTimeout(() => { foto.remove(); }, 4000);
        }, i * 200);
    }
}

function mulaiHujanKonfeti() {
    setInterval(() => {
        const warna = ['#ff6b81', '#10ac84', '#00d2d3', '#feca57', '#5f27cd', '#ff9ff3'];
        const konfeti = document.createElement('div');
        konfeti.classList.add('confetti');
        
        konfeti.style.backgroundColor = warna[Math.floor(Math.random() * warna.length)];
        konfeti.style.left = Math.random() * 100 + 'vw';
        konfeti.style.top = '-10px';
        konfeti.style.width = Math.random() * 8 + 6 + 'px';
        konfeti.style.height = konfeti.style.width;
        konfeti.style.animationDuration = Math.random() * 2 + 3 + 's';
        konfeti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';

        document.body.appendChild(konfeti);
        setTimeout(() => { konfeti.remove(); }, 5000);
    }, 300);
}
