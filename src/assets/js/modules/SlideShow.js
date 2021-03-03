class SlideShow {
  constructor() {
    this.slideIndexMobile = 1;
    this.slideIndex = 1;
    this.nextButton = document.getElementsByClassName("next")[0];
    this.prevButton = document.getElementsByClassName("prev")[0];
    this.dotItem = document.getElementsByClassName("dot");
    this.intervalTime
    this.events()
  }

  events() {
    this.addSlidesMobile();
    this.showSlides(this.slideIndex);

    let self = this;    
    this.intervalTime = setInterval(function() {
      self.plusSlides(1); 
    }, 15000);

    this.nextButton.addEventListener('click', () => {
      this.plusSlides(1);
    })

    this.prevButton.addEventListener('click', () => {
      this.plusSlides(-1);
    })

    for (let i = 0; i < this.dotItem.length; i++) {
      this.dotItem[i].addEventListener('click', (event) => {

        let targetDot = event.target.id;

        if (targetDot === 'primeiro') {
          this.currentSlide(1);
        }
        if (targetDot === 'segundo') {
          this.currentSlide(2);
        }
        if (targetDot === 'terceiro') {
          this.currentSlide(3);
        }

      }, false);
    }

  }

  addSlidesMobile() {
    let j;  
    let quadrosMobile = document.getElementsByClassName("mySlidesMobile");         
    let arraySize = quadrosMobile.length;
    

    for (j = 0; j <  arraySize; j++) {
       quadrosMobile[j].style.display = "none";
    }
    this.slideIndexMobile++;
    if (this.slideIndexMobile >  arraySize) {this.slideIndexMobile = 1}
    
    quadrosMobile[this.slideIndexMobile-1].style.display = "block";
    setTimeout(this.addSlidesMobile.bind(this), 15000);
  }

  plusSlides(n) {
    clearInterval(this.slideTimer);
    this.showSlides(this.slideIndex += n);
  }
  
  currentSlide(n) {
    clearInterval(this.slideTimer);
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("dot");
    let getSlides = document.getElementsByClassName("mySlides");
  
    if (n > getSlides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = getSlides.length}
    for (i = 0; i < getSlides.length; i++) {
        getSlides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    getSlides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
    clearTimeout(this.slideTimer);
    
  }
  
  addSlides() {
    let j;
    let quadros = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (j = 0; j < quadros.length; j++) {
      quadros[j].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > quadros.length) {this.slideIndex = 1}
    for (j = 0; j < dots.length; j++) {
            dots[j].className = dots[j].className.replace(" active", "");
        }
    quadros[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }

}

export default SlideShow


