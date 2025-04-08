var navLink = document.getElementById("navLink");

function showMenu(){
    navLink.style.right = "0";
}
function hideMenu(){
    navLink.style.right = "-200px";
}

const typewriter = document.getElementById('typewriter');
const fullText = "I am a School Head IT Prefect";
let typing = false;

function typeText() {
    let index = 0;
    typing = true;

    const interval = setInterval(() => {
        if (index < fullText.length) {
            typewriter.textContent += fullText.charAt(index);
            index++;
        } else {
            clearInterval(interval);
            typing = false;
        }
    }, 100); // Adjust typing speed
}
