let currentIdx = 0;
let solvedCount = 0;
let xp = 0;
let streak = 0;
let currentLang = 'en';
const results = new Array(questions.length).fill(null);

const uiStrings = {
    en: {
        progress: "Completed",
        check: "Check Answer",
        visualize: "Visualize Logic 👁️",
        next: "Next Question →",
        secret: "The Secret Behind It",
        gameOver: "GAME OVER! Final Score",
        correct: "Correct! +100 XP",
        wrong: "Incorrect. Try visualizing.",
        streakBonus: "Streak Bonus! +50 XP",
        vizHint: "Interact with the visualization to see the logic!"
    },
    tr: {
        progress: "Tamamlandı",
        check: "Cevabı Kontrol Et",
        visualize: "Mantığı Görselleştir 👁️",
        next: "Sıradaki Soru →",
        secret: "İşin Sırrı Burada",
        gameOver: "OYUN BİTTİ! Toplam Skor",
        correct: "Doğru! +100 XP",
        wrong: "Yanlış. Mantığı incele.",
        streakBonus: "Seri Bonusu! +50 XP",
        vizHint: "Mantığı görmek için görsele dokun/tıkla!"
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
    langBtns: document.querySelectorAll('.lang-btn'),
    xpValue: document.getElementById('xpValue'),
    streakValue: document.getElementById('streakValue'),
    feedbackArea: document.getElementById('feedbackArea')
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
            document.querySelectorAll(`.lang-btn[data-lang="${currentLang}"]`).forEach(el => el.classList.add('active'));
            updateStaticStrings();
            loadQuestion(currentIdx);
            renderNav();
        };
    });

    initMatrixRain();
}

function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$+-*/=%<>".split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff41";
        ctx.font = fontSize + "px Courier New";

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
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
        div.innerText = `${i + 1}. ${q.title[currentLang]}`;
        div.onclick = () => {
            currentIdx = i;
            loadQuestion(i);
            renderNav();
            elements.sidebar.classList.remove('open');
        };
        elements.nav.appendChild(div);
    });
}

function loadQuestion(idx) {
    const q = questions[idx];
    elements.title.innerText = q.title[currentLang];
    elements.desc.innerText = q.question[currentLang];
    elements.badge.innerText = q.category[currentLang];
    elements.grid.innerHTML = '';
    elements.feedbackArea.classList.add('hidden');

    q.options[currentLang].forEach((opt, i) => {
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
    elements.xpValue.innerText = xp;
    elements.streakValue.innerText = streak;
}

elements.checkBtn.onclick = () => {
    const selected = document.querySelector('.option.selected');
    if (!selected || elements.checkBtn.classList.contains('disabled')) return;

    const q = questions[currentIdx];
    const selectedIdx = Array.from(elements.grid.children).indexOf(selected);
    results[currentIdx] = selectedIdx;

    elements.feedbackArea.classList.remove('hidden');
    const statusIcon = elements.feedbackArea.querySelector('.status-icon');
    const feedbackText = elements.feedbackArea.querySelector('.feedback-text');

    if (selectedIdx === q.correct) {
        selected.classList.add('correct');
        solvedCount++;
        xp += 100;
        streak++;
        if (streak > 2) xp += 50;
        statusIcon.innerText = "✅";
        feedbackText.innerText = uiStrings[currentLang].correct + (streak > 2 ? ` (+50 ${uiStrings[currentLang].streakBonus})` : "");
    } else {
        selected.classList.add('wrong');
        elements.grid.children[q.correct].classList.add('correct');
        streak = 0;
        statusIcon.innerText = "❌";
        feedbackText.innerText = uiStrings[currentLang].wrong;
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

    // Interactive Visualizers
    if (q.id === 'ants') showAntsViz();
    if (q.id === 'ropes') showRopesViz();
    if (q.id === 'socks') showSocksViz();
    if (q.id === 'cards') showCardsViz();
    if (q.id === 'coins') showCoinsViz();
    if (q.id === 'clock') showClockViz();
    if (q.id === 'elevator') showElevatorViz();
    if (q.id === 'children') showChildrenViz();
    if (q.id === 'dollar') showDollarViz();
};

// --- Visualization Sub-factories ---

function showAntsViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">${uiStrings[currentLang].vizHint}</div>
        <div style="position:relative; width:200px; height:200px; margin:auto">
            <div class="ant" id="ant1" style="--dir:1; background:#ef4444; animation: ant1 4s infinite linear;"></div>
            <div class="ant" id="ant2" style="--dir:1; background:#10b981; animation: ant2 4s infinite linear;"></div>
            <div class="ant" id="ant3" style="--dir:1; background:#6366f1; animation: ant3 4s infinite linear;"></div>
            <div style="width:0; height:0; border-left:100px solid transparent; border-right:100px solid transparent; border-bottom:173px solid rgba(255,255,255,0.05);"></div>
        </div>
    `;
    document.querySelectorAll('.ant').forEach(ant => {
        ant.onclick = () => {
            const cur = ant.style.animationDirection || 'normal';
            ant.style.animationDirection = (cur === 'normal' ? 'reverse' : 'normal');
            ant.style.boxShadow = "0 0 15px white";
            setTimeout(() => ant.style.boxShadow = "none", 300);
        };
    });
}

function showRopesViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">${uiStrings[currentLang].vizHint}</div>
        <div style="display:flex; flex-direction:column; gap:40px; width:80%; margin:auto">
            <div class="rope-container" id="r1">
                <div class="rope-bar" id="b1"></div>
                <div class="flame left" id="f1l">🔥</div>
                <div class="flame right" id="f1r">🔥</div>
            </div>
            <div class="rope-container" id="r2">
                <div class="rope-bar" id="b2"></div>
                <div class="flame left" id="f2l">🔥</div>
                <div class="flame right" id="f2r">🔥</div>
            </div>
        </div>
    `;
    const checkRope = (bar, flames) => {
        const active = [...flames].filter(f => f.classList.contains('active')).length;
        if (active === 1) bar.style.animation = "burnFull 4s linear forwards";
        else if (active === 2) bar.style.animation = "burnHalf 2s linear forwards";
    };
    document.querySelectorAll('.flame').forEach(f => {
        f.onclick = () => {
            f.classList.add('active');
            const rope = f.parentElement;
            checkRope(rope.querySelector('.rope-bar'), rope.querySelectorAll('.flame'));
        };
    });
}

function showSocksViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">Click the drawer to pull a sock!</div>
        <div id="drawer" style="width:150px; height:100px; background:#334155; border-radius:10px; margin:auto; cursor:pointer; display:flex; justify-content:center; align-items:center; font-size:2.5rem">🗄️</div>
        <div id="socksPile" style="display:flex; gap:10px; margin-top:20px; justify-content:center"></div>
    `;
    let count = 0;
    const colors = ['white', 'black', 'white'];
    document.getElementById('drawer').onclick = () => {
        if (count >= 3) return;
        const s = document.createElement('div');
        s.className = 'sock-anim';
        s.style.background = colors[count];
        s.style.border = colors[count] === 'white' ? 'none' : '1px solid white';
        document.getElementById('socksPile').appendChild(s);
        count++;
    };
}

function showCardsViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">${uiStrings[currentLang].vizHint}</div>
        <div style="display:flex; gap:30px; justify-content:center; align-items:center; width:100%">
            <div class="interactive-card" id="c1">?</div>
            <div style="font-size:1.5rem; color:var(--gold); font-weight:800; text-shadow: 0 0 10px rgba(212, 175, 55, 0.5)">VS</div>
            <div class="interactive-card" id="c2">?</div>
        </div>
    `;
    const vals = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
    document.querySelectorAll('.interactive-card').forEach((c, i) => {
        c.onclick = () => {
            if (c.classList.contains('revealed')) return;
            c.innerText = vals[i];
            c.classList.add('revealed');
        };
    });
}

function showCoinsViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">Click 10 coins to move them to Group B and flip!</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; width:100%">
            <div id="gA" style="border:1px dashed rgba(255,255,255,0.1); padding:10px; border-radius:10px">
                <div style="font-size:0.6rem; color:#818cf8">A</div>
                <div class="coin-grid-viz small" id="gridA"></div>
            </div>
            <div id="gB" style="border:1px dashed rgba(255,255,255,0.1); padding:10px; border-radius:10px">
                <div style="font-size:0.6rem; color:#818cf8">B</div>
                <div class="coin-grid-viz small" id="gridB"></div>
            </div>
        </div>
    `;
    const gridA = document.getElementById('gridA');
    const gridB = document.getElementById('gridB');
    for (let i = 0; i < 100; i++) {
        const c = document.createElement('div');
        c.className = 'coin' + (i < 10 ? ' head' : '');
        c.onclick = () => {
            if (c.parentElement === gridA && gridB.children.length < 10) {
                gridB.appendChild(c);
                c.classList.toggle('head');
                c.style.transform = 'scale(1.2)';
            }
        };
        gridA.appendChild(c);
    }
}

function showClockViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">Click to see the offset!</div>
        <div class="clock-viz" style="margin:auto" id="clk">
            <div class="hand hour-h" id="hh" style="transform: rotate(90deg)"></div>
            <div class="hand min-h" id="mh" style="transform: rotate(90deg)"></div>
        </div>
    `;
    document.getElementById('clk').onclick = () => {
        document.getElementById('hh').style.transform = "rotate(97.5deg)";
        document.getElementById('mh').style.transform = "rotate(90deg)";
    };
}

function showElevatorViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:flex; gap:30px; align-items:center; justify-content:center">
            <div style="display:flex; flex-direction:column; gap:10px">
                <button class="btn primary small" id="up">UP</button>
            </div>
            <div id="elev" style="width:80px; height:120px; border:3px solid white; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; padding-bottom:10px; transition: 1s">
                <div id="scale" style="color:gold; font-size:0.8rem; margin-bottom:5px">70kg</div>
                <div style="width:30px; height:60px; background:#818cf8; border-radius:5px"></div>
            </div>
        </div>
    `;
    document.getElementById('up').onclick = () => {
        document.getElementById('elev').style.transform = "translateY(-50px)";
        document.getElementById('scale').innerText = "85kg!";
        setTimeout(() => {
            document.getElementById('elev').style.transform = "translateY(0)";
            document.getElementById('scale').innerText = "70kg";
        }, 1500);
    };
}

function showChildrenViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:10px; justify-content:center">
            <div style="color:pink">G</div><div style="color:cyan">B</div><div style="color:cyan">B</div><div style="color:pink">G</div><div style="color:cyan">B</div>
            <div style="color:pink">G</div><div style="color:pink">G</div><div style="color:cyan">B</div><div style="color:pink">G</div><div style="color:cyan">B</div>
        </div>
    `;
}

function showDollarViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:white">
            <div style="background:#10b981; padding:15px; border-radius:10px; margin-bottom:20px">Total Out: $27</div>
            <div style="display:flex; gap:20px; justify-content:center">
                <div style="border:1px solid #4f46e5; padding:10px">Hotel: $25</div>
                <div style="border:1px solid #f59e0b; padding:10px">Boy: $2$</div>
            </div>
        </div>
    `;
}

init();
