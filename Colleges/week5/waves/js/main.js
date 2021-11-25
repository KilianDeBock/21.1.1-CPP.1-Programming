(() => {
  const app = {
    init() {
      console.log('1. Application Initialized!');
      // Call the function cacheElements:
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Cache Document Object Model elements!');
      // Get the element with classname waves.
      this.wavesElement = document.querySelector('.waves');
      console.log(this.wavesElement);
    },
    generateUI() {
      console.log('3. Generating User Interface!');
      // Generate a set of wave elements within the waves element.
      let outputStr = '', count = 2000, color = 0, angle = 0, saturation = 0,
        w = 0;
      for (let i = 0; i < count; i++) {
        color = (360 / count) * i;
        angle = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 100);
        w = Math.round(Math.random() * 100);
        outputStr += `
          <div class="wave" style="width: ${w}px; height: ${w}px; background: hsla(${color}, ${saturation}%, 50%, 1); transform: rotate(${angle}deg)">
          </div>`;
      }
      this.wavesElement.innerHTML = outputStr;
    }
  };
  app.init();
})();

function mouseOver() {
  this.parentNode.remove(this);
}

var list = document.getElementsByClassName('wave');
for (var i = 0; i < list.length; ++i) {
  list[i].addEventListener('mouseover', mouseOver);
}

function mouseOver(event) {
  event.target.remove();
}