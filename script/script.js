var navLink = document.getElementById("navLink");

function showMenu(){
    navLink.style.right = "0";
}
function hideMenu(){
    navLink.style.right = "-200px";
}


const typewriter = document.getElementById('typewriter');
const fullText = "I am a School Head IT Prefect";
let hasTyped = false;
let intervalId;

function typeText() {
    let index = 0;

    // 清除现有文本
    typewriter.textContent = '';

    intervalId = setInterval(() => {
        if (index < fullText.length) {
            typewriter.textContent += fullText.charAt(index);
            index++;
        } else {
            clearInterval(intervalId);
            hasTyped = true; // 设置为已打字完成
        }
    }, 100); // 调整打字速度
}

function reverseText() {
    let index = typewriter.textContent.length;

    intervalId = setInterval(() => {
        if (index > 0) {
            typewriter.textContent = typewriter.textContent.slice(0, index - 1); // 移除最后一个字符
            index--;
        } else {
            clearInterval(intervalId);
            hasTyped = false; // 重置状态以便再次触发打字
        }
    }, 50); // 调整反向速度
}

// 创建一个 Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
            typeText(); // 当元素在视口内时触发打字
        } else if (!entry.isIntersecting && hasTyped) {
            reverseText(); // 离开视口时触发反向打字
        }
    });
});

// 观察目标元素
observer.observe(typewriter);

// 监听页面滚动事件
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        // 当用户滚动到页面底部时，清除文本
        typewriter.textContent = '';
        hasTyped = false; // 重置状态
    }
});



// 當 DOM 完全加載後開始監聽滾動事件
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', onScroll);
});

let cards = document.querySelectorAll('.card-box-patrol, .card-box-ctrm, .card-box-stage, .card-box-aud');

cards.forEach(card => {
    card.onmousemove = (e) => {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    };
});



