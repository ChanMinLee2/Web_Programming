//~할 때라는 것은 event, event에 따라 실행되는 함수는 eventhandler
//아이디 입력창(username)에 글자를 키보드로 입력할 때(onkeyup),
//글자수가 4개이상이면(isMoreThan4Length 함수 사용)
//"사용할 수 있는 아이디입니다"가 메시지로 출력된다.
//글자수가 4개이하라면
//"아이디는 네 글자 이상이어야 합니다"가 메시지로 출력된다.

//[비밀번호 확인] 입력창에서 값을 입력(keyup)하면
//[비밀번호] 값과 [비밀번호 확인] 값이 일치하는지 확인하고,(isMatch 함수 사용)
//일치하지 않은 경우, 불일치 메시지를 화면에 표시한다.
//"비밀번호가 일치하지 않습니다" 메시지 출력
//일치하다면 출력하지 않기

let nameElement = document.getElementById("name");
let emailElement = document.getElementById("email");
let ageElement = document.getElementById("age");
let passwordElement = document.getElementById("password");
let passwordValidElement = document.getElementById("passwordValid");

let nameInputElement = nameElement.getElementById("userName");
let nameSuccessElement = document.querySelector("#name .successMessage");
let nameFailElement = document.querySelector("#name .failMessage");

let membershipForm = document.querySelector("#membership");
membershipForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

// 이벤트리스너를 이용한 이벤트처리
//increaseButton.addEventListener("click", function (event) {
// numberElement.innerHTML = parseInt(numberElement.innerHTML) + 1;
//});

nameInputElement.addEventListener("keyup", function (event) {
  if (isMoreThan4Length(nameInputElement.value) == true) {
    nameSuccessElement.classList.remove("hide");
    nameFailElement.classList.add("hide");
  } else {
    nameSuccessElement.classList.add("hide");
    nameFailElement.classList.remove("hide");
  }
});

let emailInputElement = emailElement.getElementById("userEmail");
let emailSuccessElement = emailElement.getElementById("successMessage");
let emailFailElement = emailElement.getElementsById("failMessage");
let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

emailElement.addEventListener("keyup", function (event) {
  if (emailInputElement.value.match(pattern)) {
    emailSuccessElement.classList.remove("hide");
    emailFailElement.classList.add("hide");
  } else {
    emailSuccessElement.classList.add("hide");
    emailFailElement.classList.remove("hide");
  }
});

let ageInputElement = ageElement.getElementsById("userAge");
let ageSuccessElement = ageElement.getElementById("successMessage");
let ageNumFailElement = ageElement.getElementsById("numFailMessage");
let ageMinusFailElement = ageElement.getElementsById("minusFailMessage");
let ageFractionFailElement = ageElement.getElementsById("fractionFailMessage");
let ageMinFailElement = ageElement.getElementsById("minFailMessage");

ageElement.addEventListener("keyup", function (event) {
  if (isNaN(ageInputElement.value) == true) {
    ageSuccessElement.classList.add("hide");
    ageNumFailElement.classList.remove("hide");
  } else if (Number.isInteger(ageInputElement.value)) {
    ageSuccessElement.classList.add("hide");
    ageFractionFailElement.classList.remove("hide");
  } else if (parseInt(ageInputElement.value) < 0) {
    ageSuccessElement.classList.add("hide");
    ageMinusFailElement.classList.remove("hide");
  } else if (parseInt(ageInputElement.value) < 19) {
    ageSuccessElement.classList.add("hide");
    ageMinFailElement.classList.remove("hide");
  } else {
    ageSuccessElement.classList.remove("hide");
    //ageNumFailElement.classList.add("hide");
    //ageFractionFailElement.classList.add("hide");
    //ageMinusFailElement.classList.add("hide");
    //ageMinFailElement.classList.add("hide");
  }
});

let passwordInputElement = passwordElement.getElementById("userPassword");
let passwordSuccessElement = passwordElement.getElementById("successMessage");
let passwordFailElement = passwordElement.getElementsById("failMessage");

let passwordValidInputElement =
  passwordValidElement.getElementById("userPasswordValid");
let passwordValidSuccessElement =
  passwordValidElement.getElementById("successMessage");
let passwordValidFailElement =
  passwordValidElement.getElementsById("failMessage");
