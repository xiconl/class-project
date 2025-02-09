function aloy() {
    const chikwendu = document.getElementById("utc-time");
    const dominic = new Date();
    chikwendu.textContent = `The Current Time Is: ${dominic.toUTCString()}`;
}

aloy();

setInterval(aloy, 1000)