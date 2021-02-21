function rnd(i) {
    return Math.random() * i;
}

function init() {
    let vis = document.getElementById("vis");
    const N = 100;
    let e = document.getElementById("electric").value;
    let t = Math.floor(100 * (1 - result / E));
    console.log(t);
    let test = 0;
    for (let i = 0; i < N; ++i) {
        let obj = document.createElement("object");
        obj.data = i < e ? "greencar.svg" : "redcar.svg";
        obj.width = 100;
        obj.style = `
            animation: move_${Math.floor(rnd(5))} ${4+rnd(12)}s linear ${rnd(3)}s infinite;
            opacity: ${(i % (N/t) < 1) ? 0.25 : 1};
        `;
        vis.appendChild(obj);
    }
}

function resetVisualization() {
    let vis = document.getElementById("vis");
    while (vis.firstChild)
        vis.removeChild(vis.firstChild);
    init();
}

window.addEventListener("DOMContentLoaded", init);