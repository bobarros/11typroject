
class FormHandle {
  constructor() {
    this.naviToggle = document.getElementById("navi-toggle");
    this.alertaForm = document.getElementsByClassName("alerta-form")[0];
    this.alertaErro = document.getElementsByClassName("alerta-form-erro")[0];
    this.navLink = document.getElementsByClassName("navigation__link")[0];
    this.closeForm = document.getElementsByClassName("alerta-form__close")[0];
    this.formButton = document.getElementsByClassName("alerta-form__button")[0];
    this.closeError = document.getElementsByClassName("alerta-form__close-erro")[0];
    this.errorButton = document.getElementsByClassName("alerta-form__button-erro")[0];
    this.events()
  }

  events() {
    this.navLink.addEventListener('click', () => {
      this.naviToggle.checked = false;
    })

    this.closeForm.addEventListener('click', () => {
      this.alertaForm.style.display = "none";
    })

    this.formButton.addEventListener('click', () => {
      this.alertaForm.style.display = "none";
    })

    this.closeError.addEventListener('click', () => {
      this.alertaErro.style.display = "none";
    })

    this.errorButton.addEventListener('click', () => {
      this.alertaErro.style.display = "none";
    })

  }
}

export default FormHandle