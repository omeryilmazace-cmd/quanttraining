let currentIdx = 0;
let solvedCount = 0;
let currentLang = 'en';
const results = new Array(questions.length).fill(null);

const uiStrings = {
    en: {
        progress: "Completed",
        check: "Check Answer",
        visualize: "Visualize Logic 👁️",
        next: "Next Question →",
        secret: "The Secret Behind It",
        gameOver: "GAME OVER! Final Score"
    },
    tr: {
        progress: "Tamamlandı",
        check: "Cevabı Kontrol Et",
        visualize: "Mantığı Görselleştir 👁️",
        next: "Sıradaki Soru →",
        secret: "İşin Sırrı Burada",
        gameOver: "OYUN BİTTİ! Toplam Skor"
    }
};

const elements = {
    nav: document.getElementById('questionNav'),
    title: document.getElementById('questionTitle'),
    desc: document.getElementById('questionDesc'),
    grid: document.getElementById('optionsGrid'),
    checkBtn: document.getElementById('checkBtn'),
    vizBtn: document.getElementById('visualizeBtn'),
    nextBtn: document.getElementById('nextBtn'),
    badge: document.getElementById('categoryBadge'),
    overlay: document.getElementById('vizOverlay'),
    vizTarget: document.getElementById('vizTarget'),
    logicText: document.getElementById('logicText'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    sidebar: document.getElementById('sidebar'),
    menuToggle: document.getElementById('menuToggle'),
    langBtns: document.querySelectorAll('.lang-btn')
};

function init() {
    renderNav();
    loadQuestion(0);
    document.querySelector('.close-overlay').onclick = () => elements.overlay.classList.add('hidden');
    elements.menuToggle.onclick = () => elements.sidebar.classList.toggle('open');

    elements.langBtns.forEach(btn => {
        btn.onclick = () => {
            currentLang = btn.dataset.lang;
            elements.langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateStaticStrings();
            loadQuestion(currentIdx);
            renderNav();
        };
    });
}

function updateStaticStrings() {
    const s = uiStrings[currentLang];
    elements.checkBtn.innerText = s.check;
    elements.vizBtn.innerText = s.visualize;
    elements.nextBtn.innerText = s.next;
    document.querySelector('.logic-box h3').innerText = s.secret;
}

function renderNav() {
    elements.nav.innerHTML = '';
    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = `nav-item ${i === currentIdx ? 'active' : ''} ${results[i] !== null ? 'done' : ''}`;
        div.innerText = `${i + 1}. ${q.title}`;
        div.onclick = () => { currentIdx = i; loadQuestion(i); renderNav(); };
        elements.nav.appendChild(div);
    });
}

function loadQuestion(idx) {
    const q = questions[idx];
    elements.title.innerText = q.title;
    elements.desc.innerText = q.question;
    elements.badge.innerText = q.category;
    elements.grid.innerHTML = '';

    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerText = opt;
        if (results[idx] === i) div.classList.add(i === q.correct ? 'correct' : 'wrong');

        div.onclick = () => {
            if (results[idx] !== null) return;
            document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            div.classList.add('selected');
            elements.checkBtn.classList.remove('disabled');
        };
        elements.grid.appendChild(div);
    });

    updateUI(idx);
}

function updateUI(idx) {
    if (results[idx] !== null) {
        elements.checkBtn.classList.add('hidden');
        elements.vizBtn.classList.remove('hidden');
        elements.nextBtn.classList.toggle('hidden', idx === questions.length - 1);
    } else {
        elements.checkBtn.classList.remove('hidden');
        elements.checkBtn.classList.add('disabled');
        elements.vizBtn.classList.add('hidden');
        elements.nextBtn.classList.add('hidden');
    }

    elements.progressFill.style.width = `${(solvedCount / questions.length) * 100}%`;
    elements.progressText.innerText = `${solvedCount}/${questions.length} ${uiStrings[currentLang].progress}`;
}

elements.checkBtn.onclick = () => {
    const selected = document.querySelector('.option.selected');
    if (!selected || elements.checkBtn.classList.contains('disabled')) return;

    const q = questions[currentIdx];
    const selectedIdx = Array.from(elements.grid.children).indexOf(selected);
    results[currentIdx] = selectedIdx;

    if (selectedIdx === q.correct) {
        selected.classList.add('correct');
        solvedCount++;
    } else {
        selected.classList.add('wrong');
        elements.grid.children[q.correct].classList.add('correct');
    }

    renderNav();
    updateUI(currentIdx);
};

elements.nextBtn.onclick = () => {
    currentIdx++;
    loadQuestion(currentIdx);
    renderNav();
};

elements.vizBtn.onclick = () => {
    const q = questions[currentIdx];
    elements.logicText.innerText = q.logic[currentLang];
    elements.vizTarget.innerHTML = '';
    elements.overlay.classList.remove('hidden');

    // Trigger specific visualization
    if (q.id === 'cards') showCardsViz();
    if (q.id === 'coins') showCoinsViz();
    if (q.id === 'clock') showClockViz();
    if (q.id === 'dollar') showDollarViz();
    if (q.id === 'ants') showAntsViz();
    if (q.id === 'ropes') showRopesViz();
    if (q.id === 'socks') showSocksViz();
    if (q.id === 'children') showChildrenViz();
    if (q.id === 'elevator') showElevatorViz();
};

// --- Visualization Sub-factories ---

function showAntsViz() {
    elements.vizTarget.innerHTML = `
        <div style="position:relative; width:200px; height:200px">
            <div style="position:absolute; top:0; left:50%; width:10px; height:10px; background:#ef4444; border-radius:50%; transform:translateX(-50%); animation: ant1 2s infinite linear;"></div>
            <div style="position:absolute; bottom:0; left:0; width:10px; height:10px; background:#10b981; border-radius:50%; animation: ant2 2s infinite linear;"></div>
            <div style="position:absolute; bottom:0; right:0; width:10px; height:10px; background:#6366f1; border-radius:50%; animation: ant3 2s infinite linear;"></div>
            <div style="width:0; height:0; border-left:100px solid transparent; border-right:100px solid transparent; border-bottom:173px solid rgba(255,255,255,0.05);"></div>
        </div>
        <div style="margin-top:20px; color:white">All CCW or All CW avoids collision.</div>
    `;
}

function showRopesViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:20px; width:80%">
            <div style="height:10px; background:#475569; position:relative; border-radius:5px">
                <div style="position:absolute; left:0; right:50%; height:100%; background:orange; animation: burn 2s forwards"></div>
                <div style="position:absolute; right:0; left:50%; height:100%; background:orange; animation: burn 2s forwards"></div>
            </div>
            <div style="height:10px; background:#475569; position:relative; border-radius:5px">
                <div style="position:absolute; left:0; width:0; height:100%; background:orange; animation: burnWait 2s forwards"></div>
            </div>
        </div>
    `;
}

function showSocksViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:flex; gap:10px">
            <div style="width:40px; height:60px; background:white; border-radius:5px"></div>
            <div style="width:40px; height:60px; background:black; border:1px solid white; border-radius:5px"></div>
            <div style="width:40px; height:60px; background:white; border-radius:5px; border:3px solid #10b981"></div>
        </div>
        <p style="color:white; margin-top:20px">3rd sock MUST match one of the first two.</p>
    `;
}

function showChildrenViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:10px">
            <div style="color:pink">G</div><div style="color:cyan">B</div><div style="color:cyan">B</div><div style="color:pink">G</div><div style="color:cyan">B</div>
            <div style="color:pink">G</div><div style="color:pink">G</div><div style="color:cyan">B</div><div style="color:pink">G</div><div style="color:cyan">B</div>
        </div>
        <p style="color:white; margin-top:20px">Each birth is 50/50 regardless of history.</p>
    `;
}

function showElevatorViz() {
    elements.vizTarget.innerHTML = `
        <div style="width:100px; height:150px; border:2px solid white; position:relative; animation: liftUp 2s infinite">
            <div style="position:absolute; bottom:10px; left:50%; transform:translateX(-50%); width:40px; height:10px; background:silver"></div>
            <div style="position:absolute; bottom:20px; left:50%; transform:translateX(-50%); width:20px; height:40px; background:#6366f1"></div>
        </div>
    `;
}

function showCardsViz() {
    elements.vizTarget.innerHTML = `
        <div class="viz-card" id="vCard1">?</div>
        <div style="font-size:2rem; color:gold">VS</div>
        <div class="viz-card" id="vCard2">?</div>
    `;
    setTimeout(() => {
        const v1 = Math.floor(Math.random() * 100) + 1;
        let v2 = Math.floor(Math.random() * 100) + 1;
        while (v2 == v1) v2 = Math.floor(Math.random() * 100) + 1;
        document.getElementById('vCard1').innerText = v1;
        document.getElementById('vCard2').innerText = v2;
    }, 500);
}

function showCoinsViz() {
    elements.vizTarget.innerHTML = '<div class="coin-grid-viz" id="vCoinGrid"></div>';
    const grid = document.getElementById('vCoinGrid');
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.className = 'coin' + (i < 10 ? ' head' : '');
        grid.appendChild(div);
    }
    setTimeout(() => {
        const coins = document.querySelectorAll('.coin');
        for (let i = 0; i < 10; i++) {
            coins[i].classList.toggle('head');
            coins[i].style.transform = 'scale(1.2)';
            coins[i].style.border = '2px solid white';
        }
    }, 1000);
}

function showClockViz() {
    elements.vizTarget.innerHTML = `
        <div class="clock-viz">
            <div class="hand hour-h" style="transform: rotate(97.5deg)"></div>
            <div class="hand min-h" style="transform: rotate(90deg)"></div>
        </div>
    `;
}

function showDollarViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:white">
            <div style="background:#10b981; padding:15px; border-radius:10px; margin-bottom:20px">Total Out: $27</div>
            <div style="display:flex; gap:20px">
                <div style="border:1px solid #4f46e5; padding:10px">Hotel: $25</div>
                <div style="border:1px solid #f59e0b; padding:10px">Boy: $2$</div>
            </div>
            <p style="margin-top:20px; font-size:0.9rem">25 + 2 = 27. It balances!</p>
        </div>
    `;
}

init();
