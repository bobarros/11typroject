
class NavMobile {
  constructor() {
    this.naviToggle = document.getElementById("navi-toggle");
    this.navLink = document.getElementsByClassName("navigation__link");
    this.events()
  }

  events() {

    for (let i = 0; i < this.navLink.length; i++) {
      
      this.navLink[i].addEventListener('click', () => {
        this.naviToggle.checked = false;
      })      
      
    }
    
  }

}

export default NavMobile