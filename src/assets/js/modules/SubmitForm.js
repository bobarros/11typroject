class SubmitForm {
  constructor() {
    if (document.getElementById("form_inscricao")) {
      this.formIscricao = document.getElementById("form_inscricao");
    } else {
      this.formIscricao = document.getElementById("form_parte");
    }

    this.events();
  }

  events() {
    this.formIscricao.addEventListener("submit", this.SubmitForm);
  }

  SubmitForm(e) {
    e.preventDefault();
    document.getElementsByClassName("loading-box")[0].style.display ="flex";
    setTimeout(() => {
      document.getElementsByTagName("form")[0].submit();
    }, 2000);

  }
}

export default SubmitForm;
