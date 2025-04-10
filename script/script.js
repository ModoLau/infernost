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
let hasTyped = false;

function typeText() {
    let index = 0;
    typing = true;
    
    // Clear existing text before starting
    typewriter.textContent = '';

    const interval = setInterval(() => {
        if (index < fullText.length) {
            typewriter.textContent += fullText.charAt(index);
            index++;
        } else {
            clearInterval(interval);
            typing = false;
            hasTyped = true; // 設置為已打字完成
        }
    }, 100); // 調整打字速度
}

function reverseText() {
    let index = fullText.length - 1;
    typing = true;

    const interval = setInterval(() => {
        if (index >= 0) {
            typewriter.textContent = typewriter.textContent.slice(0, index);
            index--;
        } else {
            clearInterval(interval);
            typing = false;
        }
    }, 100); // 調整反向速度
}

function onScroll() {
    const rect = typewriter.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 當元素進入視口範圍內開始動畫
    if (rect.top < windowHeight && rect.bottom >= 0 && !hasTyped) {
        typeText();
        window.removeEventListener('scroll', onScroll); // 移除事件監聽器，防止重複觸發
    }

    // 當元素即將離開視口範圍開始反向動畫
    if (rect.bottom < 0 && hasTyped) {
        reverseText();
        hasTyped = false; // 重置狀態
    }
}

// 當 DOM 完全加載後開始監聽滾動事件
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', onScroll);
});


