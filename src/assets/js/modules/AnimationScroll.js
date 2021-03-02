class AnimationScroll {
  constructor() {
    this.posicao_flip = document.getElementById("animation__flip");
    this.bounding = this.posicao_flip.getBoundingClientRect();
    this.executed = false;
    this.solucao = document.getElementsByClassName("solucoes__item");

    this.events();
  }

  events() {
    
    document.addEventListener('scroll', function(e) {
      this.watchScroll();
    }.bind(this));
  }

  isInViewport(elem) {
    this.bounding = elem.getBoundingClientRect();

    return (
      this.bounding.top >= 0 &&
      this.bounding.left >= 0 &&
      this.bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      this.bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  watchScroll() {
    let j;
    
    if (!this.executed) {
      if (this.isInViewport(this.posicao_flip)) {
        
        for (j = 0; j < this.solucao.length; j++) {
          this.solucao[j].className += " animate__animated animate__flipInX";
        }

        this.executed = true;
      }
    }
  }
}

export default AnimationScroll;
