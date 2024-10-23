// Left Section of Card(Image)
const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardMonth = document.getElementById("cardMonth");
const cardYear = document.getElementById("cardYear");
const cardCvv = document.getElementById("cardCvv");

// Right Section of Card(InputFields)
const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const cvvInput = document.getElementById("cvvInput");

// Buttons and Inputs fields
const allInput = document.querySelectorAll("input");
const submitBtn = document.getElementById("submit-btn");
const completeBtn = document.getElementById("complete-btn");

// Error Messages
const text_error = document.getElementById("text-error");
const number_error = document.getElementById("number-error");
const month_error = document.getElementById("month-error");
const year_error = document.getElementsByClassName("year-error")[0];
const cvv_error = document.getElementById("cvv-error");

// Both Sections
const right_section = document.getElementById("right-sec");
const completeState = document.getElementById("complete-state");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
});

// Regular Expression
const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
const numberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
const monthRegex = /^\d{2}$/;
const yearRegex = /^\d{2}$/;
const cvvRegex = /^\d{3}$/;

function validateCardDetails() {
  clearErrors();

  let isValid = true;
  if (!nameRegex.test(nameInput.value) || nameInput.value === "") {
    text_error.textContent = "Wrong Format, include text only";
    isValid = false;
  }
  if (!numberRegex.test(numberInput.value) || numberInput.value === "") {
    number_error.textContent = "Wrong Format, include number only";
    isValid = false;
  }
  if (!monthRegex.test(monthInput.value) || monthInput.value === "") {
    month_error.textContent = "Can't be blank";
    isValid = false;
  }
  if (!yearRegex.test(yearInput.value) || yearInput.value === "") {
    year_error.textContent = "Can't be blank";
    isValid = false;
  }
  if (!cvvRegex.test(cvvInput.value) || cvvInput.value === "") {
    cvv_error.textContent = "Can't be blank";
    isValid = false;
  }
  return isValid;
}

function clearErrors() {
  text_error.textContent = "";
  number_error.textContent = "";
  month_error.textContent = "";
  year_error.textContent = "";
  cvv_error.textContent = "";
}
function resetForm() {
  nameInput.value = "";
  numberInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
  cvvInput.value = "";
  cardName.innerHTML = "JANE APPLESEED";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  cardMonth.innerHTML = "00";
  cardYear.innerHTML = "00";
  cardCvv.innerHTML = "000";
  cardNumber.style.fontSize = "27px";
  cardNumber.style.letterSpacing = "4px";
  clearErrors();
}

submitBtn.addEventListener("click", function () {
  if (validateCardDetails()) {
    right_section.classList.add("hidden");
    completeState.classList.remove("hidden");
  }
});

completeBtn.addEventListener("click", function () {
  resetForm();

  right_section.classList.remove("hidden");
  completeState.classList.add("hidden");
});

// Live updating the input as user entering

const dummyText = cardName.textContent;

function updateCardByUserName() {
  cardName.innerHTML = nameInput.value;
  if (nameInput.value.length > 0) {
    cardName.textContent = nameInput.value;
  } else {
    cardName.textContent = dummyText;
  }
}
nameInput.addEventListener("input", updateCardByUserName);

const dummyNumber = cardNumber.textContent;

function updateCardByUserNum() {
  cardNumber.innerHTML = numberInput.value;
  if (numberInput.value.length > 0) {
    cardNumber.textContent = numberInput.value;
    cardNumber.style.fontSize = "25px";
    cardNumber.style.letterSpacing = "5px";
  } else {
    cardNumber.textContent = dummyNumber;
    cardNumber.style.fontSize = "27px";
    cardNumber.style.letterSpacing = "4px";
  }
}
function cardFormat(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
function cardFormatDisplay() {
  let formattedValue = cardFormat(numberInput.value);
  numberInput.value = formattedValue;
}
numberInput.addEventListener("input", function () {
  updateCardByUserNum();
  cardFormatDisplay();
});

const dummyMonth = cardMonth.textContent;

function updateCardByUserMonth() {
  cardMonth.innerHTML = monthInput.value;
  if (monthInput.value.length > 0) {
    cardMonth.textContent = monthInput.value;
  } else {
    cardMonth.textContent = dummyMonth;
  }
}
monthInput.addEventListener("input", updateCardByUserMonth);

const dummyYear = cardYear.textContent;

function updateCardByUserYear() {
  cardYear.innerHTML = yearInput.value;
  if (yearInput.value.length > 0) {
    cardYear.textContent = yearInput.value;
  } else {
    cardYear.textContent = dummyYear;
  }
}
yearInput.addEventListener("input", updateCardByUserYear);

const dummyCvv = cardCvv.textContent;

function updateCardByUserCvv() {
  cardCvv.innerHTML = cvvInput.value;
  if (cvvInput.value.length > 0) {
    cardCvv.textContent = cvvInput.value;
  } else {
    cardCvv.textContent = dummyCvv;
  }
}
cvvInput.addEventListener("input", updateCardByUserCvv);
