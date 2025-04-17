//Navigation Bar function
var navLink = document.getElementById("navLink");

function showMenu(){
    navLink.style.right = "0";
}
function hideMenu(){
    navLink.style.right = "-200px";
}

// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray content: 
var textArray = ["I was an IT Prefect Trainee in Form 4","I was the IT Form Head Prefect in Form 5", "I was the IT School Head Prefect in Form 6", "I am the author of the ITP Survival Diary"];


// function to the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function (){
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);
	

//ITP Introduction OnMouseOver effect
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



//Scroll To Top Button
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
  
  // Show button when scrolling down
  window.onscroll = function() {
    const button = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = 'block'; // Show button
    } else {
      button.style.display = 'none'; // Hide button
    }
  };

