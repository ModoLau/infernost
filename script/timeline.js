var navLink = document.getElementById("navLink");

function showMenu(){
    navLink.style.right = "0";
}
function hideMenu(){
    navLink.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
  function timeline(element) {
      const selectors = {
          id: element,
          item: element.querySelectorAll(".timeline-box"),
          activeClass: "timeline-box--active",
          img: ".timeline-img"
      };

      selectors.item[0].classList.add(selectors.activeClass);
      selectors.id.style.backgroundImage = `url(${selectors.item[0].querySelector(selectors.img).src})`;

      const itemLength = selectors.item.length;

      window.addEventListener("scroll", function () {
        const pos = window.scrollY;
    
        selectors.item.forEach(function (item, i) {
            const min = item.getBoundingClientRect().top + window.scrollY;
            const max = item.offsetHeight + min;
    
            // Adjusted condition for earlier activation
            if (pos >= min && pos < max - 40) {
                selectors.id.style.backgroundImage = `url(${item.querySelector(selectors.img).src})`;
                removeActiveClass(selectors);
                item.classList.add(selectors.activeClass);
            }
        });
    });

      function removeActiveClass(selectors) {
          selectors.item.forEach(function (item) {
              item.classList.remove(selectors.activeClass);
          });
      }
  }

  const timelineElement = document.getElementById("timeline-1");
  if (timelineElement) {
      timeline(timelineElement);
  }
});

