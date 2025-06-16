
document.getElementById("up").onclick = () => {
    fetch(espIP + "/forward");
};

document.getElementById("down").onclick = () => {
    fetch(espIP + "/backward");
};

document.getElementById("left").onclick = () => {
    fetch(espIP + "/left");
};

document.getElementById("right").onclick = () => {
    fetch(espIP + "/right");
};

document.getElementById("auto").onclick = () => {
    fetch(espIP + "/auto");
};

document.getElementById("manual").onclick = () => {
    fetch(espIP + "/manual");
};
