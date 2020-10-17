const button = document.getElementById("send__data");

const monthlyIncome = document.querySelector("#monthly_income")
const workActivity = document.querySelector("#work_activity")
const companyName = document.querySelector("#company_name")
const contractType = document.querySelector("#contract_type")
const residenceCity = document.querySelector("#residence_city")

function validateForm () {
  if (
      monthlyIncome.value === "" ||
      workActivity.value === "" ||
      companyName.value === "" ||
      contractType.value === "" ||
      residenceCity.value === "" 
    ) {
      button.disabled = true;
      button.classList.remove("enable__button");
      button.classList.add("disabled__button");
  } else {
      button.disabled = false;
      button.classList.remove("disabled__button");
      button.classList.add("enable__button");
  }
}

function sendData() {
  console.log("envio de datos")
}