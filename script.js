class SnowFlake {
  snowFlakeEl = document.createElement('div');

  constructor() {
    this.snowFlakeEl.classList.add('snow-flake');

    const size = Math.round(Math.random() * 5 + 5);
    this.snowFlakeEl.style.left = `${Math.floor(Math.random()* 100)}%`;
    this.snowFlakeEl.style.width = size + 'px';
    this.snowFlakeEl.style.height = size + 'px';
    this.snowFlakeEl.style.backgroundColor = `rgba(255, 255, 255, ${25 / size**2})`;
  }

  fall() {
    const duration = Math.random() * 2 + 1;
    this.snowFlakeEl.style.transitionDuration = duration + 's';
    document.body.append(this.snowFlakeEl);
    setTimeout(() => {
      this.snowFlakeEl.style.transform = `translate(${Math.floor(Math.random() * 300 - 150)}px, 102vh)`;
    }, 0);
    setTimeout(() => {
      this.snowFlakeEl.remove();
    }, duration * 1000);
  }
}

setInterval(() => {
  (new SnowFlake()).fall();
}, 20)
