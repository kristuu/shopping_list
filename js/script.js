const pievienotIerakstu = document.getElementById('pievienotIerakstu');
let preces = [];

window.addEventListener('load', () => {
    preces = JSON.parse(localStorage.getItem("preces") || "[]");
    console.log(preces);
    render();
});

document.getElementById('jaunsIeraksts').addEventListener('click', () => {
    pievienotIerakstu.style.display = 'block';

})

document.getElementById('apstiprinatIerakstu').addEventListener('click', () => {
    pievienotIerakstu.style.display = 'none';

    let ieraksts = {prece: pieprasitPreci.value, daudzums: pieprasitDaudzumu.value};

    pieprasitPreci.value = "";
    pieprasitDaudzumu.value = "";

    preces.push(ieraksts);

    render();
})

function mDown(jaunsIeraksts) {
    jaunsIeraksts.style.backgroundColor = "rgb(0, 0, 0)";
    jaunsIeraksts.style.color = "rgb(255, 187, 0)";
}

function mUp(jaunsIeraksts) {
    jaunsIeraksts.style.backgroundColor = "rgb(255, 187, 0)";
    jaunsIeraksts.style.color = "rgb(255, 255, 255)";
}

function mFocus(jaunsIeraksts) {
    jaunsIeraksts.style.backgroundColor = "rgb(223, 163, 0)";
}

function mUnfocus(jaunsIeraksts) {
    jaunsIeraksts.style.backgroundColor = "rgb(255, 187, 0)";
}

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < preces.length; i++) {
        let ieraksts = `
        <div class="ieraksts">
            <p id="prece">${preces[i].prece}</p>
            <p id="daudzums">${preces[i].daudzums}</p>
        </div>`;

        saraksts.innerHTML += ieraksts;
    }

    localStorage.setItem("preces", JSON.stringify(preces))
}

