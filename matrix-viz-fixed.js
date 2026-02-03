// --- Matrix-Optimized Visualization Sub-factories ---

function showAntsViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">${uiStrings[currentLang].vizHint}</div>
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
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">${uiStrings[currentLang].vizHint}</div>
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

function showCoinsViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:20px; font-size:0.85rem">MATRIX_SHIFT: Transfer 10 bits to Group B</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:25px; width:100%; max-width:600px">
            <div id="gA" style="border:1px solid var(--primary); background:rgba(0,255,65,0.05); padding:15px; border-radius:4px">
                <div style="font-size:0.7rem; color:var(--primary); margin-bottom:8px">SECTOR_A (90)</div>
                <div class="coin-grid-viz small" id="gridA"></div>
            </div>
            <div id="gB" style="border:1px solid var(--primary); background:rgba(0,255,65,0.05); padding:15px; border-radius:4px">
                <div style="font-size:0.7rem; color:var(--primary); margin-bottom:8px">SECTOR_B (10)</div>
                <div class="coin-grid-viz small" id="gridB"></div>
            </div>
        </div>
    `;
    const gridA = document.getElementById('gridA');
    const gridB = document.getElementById('gridB');
    for (let i = 0; i < 100; i++) {
        const c = document.createElement('div');
        c.className = 'coin' + (i < 10 ? ' head' : '');
        c.style.cursor = "pointer";
        c.onclick = () => {
            if (c.parentElement === gridA && gridB.children.length < 10) {
                gridB.appendChild(c);
                c.classList.toggle('head');
                c.style.filter = "hue-rotate(90deg)";
            }
        };
        gridA.appendChild(c);
    }
}

function showClockViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:var(--primary); margin-bottom:25px; font-size:0.85rem">TIME_CALIBRATION: Analyze offset</div>
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
