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
    if (q.id === 'rabbit') showRabbitViz();
    if (q.id === 'switches') showSwitchesViz();
    if (q.id === 'monty') showMontyViz();
    if (q.id === 'eggs') showEggsViz();
    if (q.id === 'poison') showPoisonViz();
    if (q.id === 'gold') showGoldViz();
};

// --- Matrix-Optimized Visualization Sub-factories ---

function showAntsViz() {
    const hint = currentLang === 'tr' ? "Yön değiştirmek için karıncalara tıkla!" : "Click ants to toggle their direction!";
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">${hint}</div>
        <div style="position:relative; width:200px; height:200px; margin:auto">
            <div class="ant" id="ant1" style="background:var(--primary); animation: ant1 4s infinite linear; box-shadow: var(--glow);"></div>
            <div class="ant" id="ant2" style="background:var(--primary); animation: ant2 4s infinite linear; opacity:0.7;"></div>
            <div class="ant" id="ant3" style="background:var(--primary); animation: ant3 4s infinite linear; opacity:0.4;"></div>
            <div style="width:0; height:0; border-left:100px solid transparent; border-right:100px solid transparent; border-bottom:173px solid rgba(0, 255, 65, 0.1);"></div>
        </div>
    `;
    document.querySelectorAll('.ant').forEach(ant => {
        ant.onclick = () => {
            const cur = ant.style.animationDirection || 'normal';
            ant.style.animationDirection = (cur === 'normal' ? 'reverse' : 'normal');
            ant.style.boxShadow = "0 0 20px #fff";
            setTimeout(() => ant.style.boxShadow = "var(--glow)", 300);
        };
    });
}

function showRopesViz() {
    const hint = currentLang === 'tr' ? "Uçları yakmak için 🔥 simgelerine tıkla!" : "Click 🔥 to light the rope ends!";
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">${hint}</div>
        <div style="display:flex; flex-direction:column; gap:50px; width:85%; margin:auto">
            <div class="rope-container">
                <div class="rope-bar"></div>
                <div class="flame left">🔥</div>
                <div class="flame right">🔥</div>
            </div>
            <div class="rope-container">
                <div class="rope-bar"></div>
                <div class="flame left">🔥</div>
                <div class="flame right">🔥</div>
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
            f.style.color = "var(--primary)";
            const rope = f.parentElement;
            checkRope(rope.querySelector('.rope-bar'), rope.querySelectorAll('.flame'));
        };
    });
}

function showSocksViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:25px; font-size:0.85rem">SYSTEM ACCESS: Click 🗄️ to retrieve data</div>
        <div id="drawer" style="width:140px; height:90px; border:1px solid var(--primary); background:rgba(0, 255, 65, 0.1); margin:auto; cursor:pointer; display:flex; justify-content:center; align-items:center; font-size:2.5rem; box-shadow:var(--glow);">🗄️</div>
        <div id="socksPile" style="display:flex; gap:15px; margin-top:30px; justify-content:center; min-height:60px"></div>
    `;
    let count = 0;
    const colors = ['#fff', '#000', '#fff']; // Data bits: 1, 0, 1
    document.getElementById('drawer').onclick = () => {
        if (count >= 3) return;
        const s = document.createElement('div');
        s.className = 'sock-anim';
        s.style.background = colors[count];
        s.style.border = "1px solid var(--primary)";
        if (colors[count] === '#fff') s.style.boxShadow = "var(--glow)";
        document.getElementById('socksPile').appendChild(s);
        count++;
    };
}

function showCardsViz() {
    const hint = currentLang === 'tr' ? "Kartları açmak için üzerlerine tıkla!" : "Click cards to reveal their value!";
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">${hint}</div>
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
    const hint = currentLang === 'tr' ? "10 parayı B'ye taşı (Tıkladığında otomatik ters dönerler!)" : "Move 10 bits to B (They flip automatically on click!)";
    const headsText = currentLang === 'tr' ? "Tura Sayısı" : "Heads Count";
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">${hint}</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:25px; width:100%; max-width:600px">
            <div id="gA" style="border:1px solid var(--primary); background:rgba(0,255,65,0.05); padding:15px; border-radius:4px">
                <div style="font-size:0.7rem; color:var(--primary); margin-bottom:8px">SECTOR_A (90)</div>
                <div class="coin-grid-viz small" id="gridA"></div>
                <div style="margin-top:10px; font-size:0.75rem; color:var(--gold)" id="countA">${headsText}: 10</div>
            </div>
            <div id="gB" style="border:1px solid var(--primary); background:rgba(0,255,65,0.05); padding:15px; border-radius:4px">
                <div style="font-size:0.7rem; color:var(--primary); margin-bottom:8px">SECTOR_B (10)</div>
                <div class="coin-grid-viz small" id="gridB"></div>
                <div style="margin-top:10px; font-size:0.75rem; color:var(--gold)" id="countB">${headsText}: 0</div>
            </div>
        </div>
        <div id="coinMatchMsg" class="hidden" style="margin-top:20px; color:var(--success); font-weight:900; text-align:center; animation: matrixPulse 1s infinite alternate">
            ${currentLang === 'tr' ? "EŞLEŞME SAĞLANDI! (A = B)" : "MATCH DETECTED! (A = B)"}
        </div>
    `;
    const gridA = document.getElementById('gridA');
    const gridB = document.getElementById('gridB');
    const updateCounts = () => {
        const a = gridA.querySelectorAll('.coin.head').length;
        const b = gridB.querySelectorAll('.coin.head').length;
        document.getElementById('countA').innerText = `${headsText}: ${a}`;
        document.getElementById('countB').innerText = `${headsText}: ${b}`;
        if (gridB.children.length === 10 && a === b) {
            document.getElementById('coinMatchMsg').classList.remove('hidden');
        }
    };

    for (let i = 0; i < 100; i++) {
        const c = document.createElement('div');
        c.className = 'coin' + (i < 10 ? ' head' : '');
        c.style.cursor = "pointer";
        c.onclick = () => {
            if (c.parentElement === gridA && gridB.children.length < 10) {
                gridB.appendChild(c);
                c.classList.toggle('head');
                c.style.filter = "hue-rotate(90deg)";
                updateCounts();
            }
        };
        gridA.appendChild(c);
    }
}

function showClockViz() {
    const hint = currentLang === 'tr' ? "Akrep sapmasını görmek için saate tıkla!" : "Click clock to see the hour hand shift!";
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:25px; font-size:0.85rem">${hint}</div>
        <div class="clock-viz" style="margin:auto; border:2px solid var(--primary); box-shadow:var(--glow)" id="clk">
            <div class="hand hour-h" id="hh" style="transform: rotate(90deg); background:white !important;"></div>
            <div class="hand min-h" id="mh" style="transform: rotate(90deg); background:var(--primary) !important;"></div>
        </div>
    `;
    document.getElementById('clk').onclick = () => {
        document.getElementById('hh').style.transform = "rotate(97.5deg)";
        document.getElementById('mh').style.transform = "rotate(90deg)";
        document.getElementById('hh').style.boxShadow = "0 0 10px #fff";
    };
}

function showElevatorViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:flex; gap:40px; align-items:center; justify-content:center">
            <button class="btn primary small" id="up" style="max-width:80px">RUN</button>
            <div id="elev" style="width:80px; height:130px; border:2px solid var(--primary); display:flex; flex-direction:column; justify-content:flex-end; align-items:center; padding-bottom:15px; transition: 1.5s cubic-bezier(0.4, 0, 0.2, 1); background:rgba(0,255,65,0.05);">
                <div id="scale" style="color:var(--gold); font-size:0.9rem; margin-bottom:10px; font-weight:900">70KG</div>
                <div style="width:30px; height:60px; background:var(--primary); border-radius:2px; box-shadow:var(--glow)"></div>
            </div>
        </div>
    `;
    document.getElementById('up').onclick = () => {
        document.getElementById('elev').style.transform = "translateY(-60px)";
        document.getElementById('scale').innerText = "85KG!";
        document.getElementById('scale').style.color = "var(--error)";
        setTimeout(() => {
            document.getElementById('elev').style.transform = "translateY(0)";
            document.getElementById('scale').innerText = "70KG";
            document.getElementById('scale').style.color = "var(--gold)";
        }, 1800);
    };
}

function showChildrenViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:15px; justify-content:center; color:var(--primary); font-weight:900; background:rgba(0,255,65,0.05); padding:20px; border:1px solid var(--primary);">
            <div style="color:#fff; text-shadow:var(--glow)">1:G</div><div style="color:var(--primary)">0:B</div><div style="color:var(--primary)">0:B</div><div style="color:#fff; text-shadow:var(--glow)">1:G</div><div style="color:var(--primary)">0:B</div>
            <div style="color:#fff; text-shadow:var(--glow)">1:G</div><div style="color:#fff; text-shadow:var(--glow)">1:G</div><div style="color:var(--primary)">0:B</div><div style="color:#fff; text-shadow:var(--glow)">1:G</div><div style="color:var(--primary)">0:B</div>
        </div>
    `;
}

function showDollarViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary)">
            <div style="background:rgba(0,255,65,0.1); padding:20px; border-radius:4px; border:1px solid var(--primary); margin-bottom:20px; box-shadow:var(--glow)">TOTAL_LOG: $27 RECOVERED</div>
            <div style="display:flex; gap:25px; justify-content:center">
                <div style="border:1px solid var(--primary); padding:12px; background:#000">SERVER: $25</div>
                <div style="border:1px solid var(--gold); padding:12px; background:#000; color:var(--gold)">LEAK: $2</div>
            </div>
            <p style="margin-top:20px; font-size:0.8rem; font-family:monospace">25 + 2 = 27. LOGS BALANCED.</p>
        </div>
    `;
}

function showRabbitViz() {
    const hint = currentLang === 'tr' ? "Zıplamak için düğmelere tıkla!" : "Click buttons to jump!";
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">${hint}</div>
        <div style="display:flex; flex-direction:column; align-items:center; gap:20px; width:100%">
            <div id="staircase" style="position:relative; width:220px; height:220px; border-bottom:2px solid var(--primary); border-left:2px solid var(--primary); background:rgba(0,0,0,0.5)">
                <div id="rabbit" style="position:absolute; bottom:0; left:0; width:20px; height:20px; background:var(--primary); border-radius:50%; box-shadow:var(--glow); transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index:10;"></div>
            </div>
            <div style="display:flex; gap:10px">
                <button class="btn primary small" id="jump1" style="max-width:60px; padding:8px">+1</button>
                <button class="btn primary small" id="jump2" style="max-width:60px; padding:8px">+2</button>
                <button class="btn secondary small" id="resetJump" style="max-width:80px; padding:8px">Reset</button>
            </div>
            <div id="stepCounter" style="color:var(--gold); font-weight:800; font-family:monospace; font-size:1.1rem">STEP: 0</div>
        </div>
    `;

    const staircase = document.getElementById('staircase');
    const rabbit = document.getElementById('rabbit');
    const stepCounter = document.getElementById('stepCounter');
    let currentStep = 0;

    for (let i = 1; i <= 10; i++) {
        const step = document.createElement('div');
        step.style.position = 'absolute';
        step.style.bottom = (i * 20) + 'px';
        step.style.left = (i * 20) - 5 + 'px';
        step.style.width = '25px';
        step.style.height = '4px';
        step.style.background = 'rgba(0, 255, 65, 0.3)';
        step.style.boxShadow = "0 0 5px var(--primary)";
        staircase.appendChild(step);
    }

    const updateRabbit = () => {
        rabbit.style.bottom = (currentStep * 20) + 'px';
        rabbit.style.left = (currentStep * 20) + 'px';
        stepCounter.innerText = `STEP: ${currentStep}`;
        if (currentStep >= 10) {
            rabbit.style.background = "#fff";
            rabbit.style.boxShadow = "0 0 20px #fff";
            stepCounter.style.color = "var(--success)";
            stepCounter.innerText = currentLang === 'tr' ? "10. BASAMAK! (Hedef)" : "STEP 10! (Goal)";
        } else {
            rabbit.style.background = "var(--primary)";
            rabbit.style.boxShadow = "var(--glow)";
            stepCounter.style.color = "var(--gold)";
        }
    };

    document.getElementById('jump1').onclick = () => {
        if (currentStep < 10) {
            currentStep += 1;
            updateRabbit();
        }
    };
    document.getElementById('jump2').onclick = () => {
        if (currentStep <= 8) {
            currentStep += 2;
            updateRabbit();
        } else if (currentStep === 9) {
            currentStep = 10;
            updateRabbit();
        }
    };
    document.getElementById('resetJump').onclick = () => {
        currentStep = 0;
        updateRabbit();
    };
}

function showSwitchesViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:flex; gap:20px; justify-content:center; align-items:flex-end; height:180px">
            <div id="bulb1" class="bulb" style="background:#333; width:40px; height:60px; border-radius:20px 20px 5px 5px; border:2px solid #555"></div>
            <div id="bulb2" class="bulb" style="background:#333; width:40px; height:60px; border-radius:20px 20px 5px 5px; border:2px solid #555"></div>
            <div id="bulb3" class="bulb" style="background:#333; width:40px; height:60px; border-radius:20px 20px 5px 5px; border:2px solid #555"></div>
        </div>
        <div style="display:flex; gap:20px; margin-top:30px; justify-content:center">
            <button class="btn primary small" id="sw1">SW 1</button>
            <button class="btn primary small" id="sw2">SW 2</button>
            <button class="btn primary small" id="sw3">SW 3</button>
        </div>
    `;
    let b1Temp = 0; // 0 cold, 1 warm
    document.getElementById('sw1').onclick = () => {
        const b = document.getElementById('bulb1');
        const active = b.style.background === 'var(--primary)';
        b.style.background = active ? '#333' : 'var(--primary)';
        if (!active) b1Temp = 1;
    };
    document.getElementById('sw2').onclick = () => {
        const b = document.getElementById('bulb2');
        b.style.background = b.style.background === 'var(--primary)' ? '#333' : 'var(--primary)';
    };
    document.getElementById('sw3').onclick = () => {
        const b = document.getElementById('bulb3');
        b.style.background = b.style.background === 'var(--primary)' ? '#333' : 'var(--primary)';
    };
}

function showMontyViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:15px">PICK A DOOR</div>
        <div style="display:flex; gap:15px; justify-content:center">
            <div class="monty-door" id="d1">1</div>
            <div class="monty-door" id="d2">2</div>
            <div class="monty-door" id="d3">3</div>
        </div>
        <div id="montyAdvice" style="margin-top:20px; color:var(--gold); text-align:center; min-height:24px"></div>
    `;
    const carIdx = Math.floor(Math.random() * 3);
    const doors = document.querySelectorAll('.monty-door');
    let picked = -1;

    doors.forEach((d, i) => {
        d.onclick = () => {
            if (picked !== -1) return;
            picked = i;
            d.style.borderColor = "var(--primary)";
            d.style.boxShadow = "var(--glow)";

            // Host opens a goat door
            let hostIdx = [0, 1, 2].find(idx => idx !== carIdx && idx !== picked);
            setTimeout(() => {
                doors[hostIdx].innerText = "🐐";
                doors[hostIdx].style.opacity = "0.5";
                document.getElementById('montyAdvice').innerText = currentLang === 'tr' ? "Sunucu keçiyi açtı! Değiştirmek daha mantıklı..." : "Host opened a goat! Switching is statistically better...";
            }, 800);
        };
    });
}

function showEggsViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:flex; gap:30px; align-items:flex-end">
            <div id="building" style="width:60px; height:200px; border:2px solid var(--primary); background:rgba(0,255,65,0.05); position:relative">
                <div id="floorMarker" style="position:absolute; bottom:0; width:100%; height:14%; border:1px solid var(--gold); background:rgba(212,175,55,0.1)"></div>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px">
                <div style="color:var(--primary)">DROP FROM:</div>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:5px">
                    <button class="btn primary small" onclick="document.getElementById('floorMarker').style.bottom='14%'">14</button>
                    <button class="btn primary small" onclick="document.getElementById('floorMarker').style.bottom='27%'">27</button>
                    <button class="btn primary small" onclick="document.getElementById('floorMarker').style.bottom='39%'">39</button>
                    <button class="btn primary small" onclick="document.getElementById('floorMarker').style.bottom='50%'">50</button>
                </div>
                <div style="font-size:0.75rem; color:var(--text-dim); margin-top:10px">Interval: x, x-1, x-2...</div>
            </div>
        </div>
    `;
}

function showPoisonViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:15px">BINARY DECODING</div>
        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:10px; justify-content:center">
            ${[...Array(10)].map((_, i) => `<div class="prisoner" id="p${i}" style="width:30px; height:40px; border:1px solid var(--primary); display:flex; align-items:center; justify-content:center; font-size:0.6rem">P${i}</div>`).join('')}
        </div>
        <div style="margin-top:20px; font-family:monospace; color:var(--gold); font-size:0.8rem; text-align:center">
            Bottle #542 = <span style="color:#fff">1000011110</span><br>
            Prisoners 1, 2, 3, 4, 9 would drink.
        </div>
    `;
}

function showGoldViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; gap:20px">
            <div style="display:flex; gap:10px">
                <div style="width:20px; height:40px; background:var(--gold); border:1px solid #000; display:flex; align-items:center; justify-content:center; color:#000; font-weight:900">1</div>
                <div style="width:40px; height:40px; background:var(--gold); border:1px solid #000; display:flex; align-items:center; justify-content:center; color:#000; font-weight:900">2</div>
                <div style="width:80px; height:40px; background:var(--gold); border:1px solid #000; display:flex; align-items:center; justify-content:center; color:#000; font-weight:900">4</div>
            </div>
            <div style="color:var(--primary); font-family:monospace; font-size:0.8rem">
                Day 1: Give 1<br>
                Day 2: Give 2, Take 1<br>
                Day 3: Give 1
            </div>
        </div>
    `;
}

init();
