let locationNameEl = document.querySelector("#location-name");
let userFormEl = document.querySelector("#user-form");
let formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(locationNameEl.value);
  console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);
