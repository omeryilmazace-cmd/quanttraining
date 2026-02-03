// --- Interactive Visualization Sub-factories ---

function showAntsViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">${uiStrings[currentLang].vizHint}</div>
        <div style="position:relative; width:200px; height:200px; margin:auto">
            <div id="ant1" class="ant" style="--dir:1; background:#ef4444; animation: ant1 4s infinite linear;"></div>
            <div id="ant2" class="ant" style="--dir:1; background:#10b981; animation: ant2 4s infinite linear;"></div>
            <div id="ant3" class="ant" style="--dir:1; background:#6366f1; animation: ant3 4s infinite linear;"></div>
            <div style="width:0; height:0; border-left:100px solid transparent; border-right:100px solid transparent; border-bottom:173px solid rgba(255,255,255,0.05);"></div>
        </div>
    `;

    document.querySelectorAll('.ant').forEach(ant => {
        ant.onclick = () => {
            const currentDir = ant.style.getPropertyValue('--dir') || '1';
            const newDir = currentDir === '1' ? '-1' : '1';
            ant.style.setProperty('--dir', newDir);
            ant.style.animationDirection = newDir === '1' ? 'normal' : 'reverse';
            ant.style.boxShadow = "0 0 15px white";
            setTimeout(() => ant.style.boxShadow = "none", 300);
        };
    });
}

function showRopesViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">${uiStrings[currentLang].vizHint}</div>
        <div style="display:flex; flex-direction:column; gap:40px; width:80%; margin:auto">
            <div class="rope-container" id="rope1">
                <div class="rope-bar"></div>
                <div class="flame left" data-side="left">🔥</div>
                <div class="flame right" data-side="right">🔥</div>
            </div>
            <div class="rope-container" id="rope2">
                <div class="rope-bar"></div>
                <div class="flame left" data-side="left">🔥</div>
                <div class="flame right" data-side="right">🔥</div>
            </div>
        </div>
    `;

    document.querySelectorAll('.flame').forEach(f => {
        f.onclick = () => {
            f.classList.add('active');
            const rope = f.parentElement;
            const bar = rope.querySelector('.rope-bar');
            const activeFlames = rope.querySelectorAll('.flame.active').length;

            if (activeFlames === 1) {
                bar.style.animation = "burnFull 4s linear forwards";
            } else if (activeFlames === 2) {
                bar.style.animation = "burnHalf 2s linear forwards";
            }
        };
    });
}

function showSocksViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">Click the drawer to pull a sock!</div>
        <div id="drawer" style="width:150px; height:100px; background:#334155; border-radius:10px; position:relative; cursor:pointer; display:flex; justify-content:center; align-items:center; font-size:2rem">🗄️</div>
        <div id="socksPile" style="display:flex; gap:10px; margin-top:20px"></div>
    `;

    let count = 0;
    const colors = ['white', 'black', 'white', 'black']; // Pre-determined for logic
    document.getElementById('drawer').onclick = () => {
        if (count >= 3) return;
        const color = colors[count];
        const sock = document.createElement('div');
        sock.className = 'sock-anim';
        sock.style.background = color;
        sock.style.border = color === 'white' ? 'none' : '1px solid white';
        document.getElementById('socksPile').appendChild(sock);
        count++;
        if (count === 3) {
            setTimeout(() => alert(currentLang === 'tr' ? 'Eşleşme Tamam!' : 'Match Found!'), 500);
        }
    };
}

function showCardsViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:20px; font-size:0.8rem">${uiStrings[currentLang].vizHint}</div>
        <div style="display:flex; gap:20px; align-items:center">
            <div class="interactive-card" id="card1">?</div>
            <div style="font-size:1.5rem; color:gold; font-weight:800">VS</div>
            <div class="interactive-card" id="card2">?</div>
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
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px; width:100%">
            <div id="groupA" style="border:2px dashed rgba(255,255,255,0.1); padding:15px; border-radius:15px">
                <div style="font-size:0.7rem; color:#818cf8; margin-bottom:5px">Group A (90)</div>
                <div class="coin-grid-viz small" id="gridA"></div>
            </div>
            <div id="groupB" style="border:2px dashed rgba(255,255,255,0.1); padding:15px; border-radius:15px">
                <div style="font-size:0.7rem; color:#818cf8; margin-bottom:5px">Group B (10)</div>
                <div class="coin-grid-viz small" id="gridB"></div>
            </div>
        </div>
    `;

    const gridA = document.getElementById('gridA');
    const gridB = document.getElementById('gridB');
    for (let i = 0; i < 100; i++) {
        const c = document.createElement('div');
        c.className = 'coin' + (i < 10 ? ' head' : '');
        c.style.cursor = 'pointer';
        c.onclick = () => {
            if (c.parentElement === gridA && gridB.children.length < 10) {
                gridB.appendChild(c);
                c.classList.toggle('head'); // Flip on move
                c.style.transform = "rotateY(180deg)";
            }
        };
        gridA.appendChild(c);
    }
}

function showClockViz() {
    elements.vizTarget.innerHTML = `
        <div style="text-align:center; color:#94a3b8; margin-bottom:15px; font-size:0.8rem">Click to see the offset calculation!</div>
        <div class="clock-viz interactive" id="clockMain">
            <div class="hand hour-h" id="hourHand" style="transform: rotate(90deg)"></div>
            <div class="hand min-h" id="minHand" style="transform: rotate(90deg)"></div>
        </div>
        <div id="angleCalc" style="margin-top:20px; font-family:monospace; color:#10b981; font-weight:700"></div>
    `;

    document.getElementById('clockMain').onclick = () => {
        document.getElementById('hourHand').style.transform = "rotate(97.5deg)";
        document.getElementById('angleCalc').innerText = "3:15 -> Hour hand moved 15 * 0.5° = 7.5°";
    };
}

function showElevatorViz() {
    elements.vizTarget.innerHTML = `
        <div style="display:flex; gap:30px; align-items:center">
            <div style="display:flex; flex-direction:column; gap:10px">
                <button class="btn primary small" id="upBtn">UP</button>
                <button class="btn secondary small" id="downBtn">DOWN</button>
            </div>
            <div id="elevatorBox" style="width:80px; height:120px; border:3px solid white; display:flex; flex-direction:column; justify-content:flex-end; align-items:center; padding-bottom:10px; transition: 1s">
                <div id="scaleValue" style="color:gold; font-size:0.8rem; margin-bottom:5px">70kg</div>
                <div style="width:30px; height:60px; background:#818cf8; border-radius:5px"></div>
            </div>
        </div>
    `;

    const el = document.getElementById('elevatorBox');
    const sc = document.getElementById('scaleValue');
    document.getElementById('upBtn').onclick = () => {
        el.style.transform = "translateY(-50px)";
        sc.innerText = "85kg!";
        sc.style.color = "#ef4444";
        setTimeout(() => { el.style.transform = "translateY(0)"; sc.innerText = "70kg"; sc.style.color = "gold"; }, 1500);
    };
}
