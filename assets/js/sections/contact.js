var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
var values = [];

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    var resume =
      "Your name is " +
      values[0] +
      ", your email address is " +
      values[1] +
      ", your phone number is : " +
      values[2] +
      ", you are " +
      values[4] +
      " at " +
      values[3] +
      ", who has " +
      values[5] +
      ".<br>" +
      "The reason your reached out to us is " +
      values[6];
    document.getElementById("recap").innerHTML = resume;
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  y = x[currentTab].getElementsByTagName("input");
  document.getElementById(y[0].id).focus();
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n === 1 && !validateForm()) return false;

  y = x[currentTab].getElementsByTagName("input");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y;
  const nameRegex = /^([A-ZÀ-ÿ-,a-z. ']+[ ]*)+$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // If a field is empty...
  if (y[0].value === "") {
    y[0].parentNode.children[2].children[1].children[1].innerHTML =
      "Please fill this in";
    // add an "invalid" class to the field:
    y[0].parentNode.children[2].children[1].classList.add("flex-element");
    return false;
  }
  if (y[0].name === "name" && !nameRegex.test(y[0].value)) {
    y[0].parentNode.children[2].children[1].children[1].innerHTML =
      "Invalid name";
    y[0].parentNode.children[2].children[1].classList.add("flex-element");
    return false;
  }
  if (y[0].name === "email" && !emailRegex.test(y[0].value)) {
    y[0].parentNode.children[2].children[1].children[1].innerHTML =
      "Invalid email address";
    y[0].parentNode.children[2].children[1].classList.add("flex-element");
    return false;
  }
  if (y[0].name === "phone" && !phoneRegex.test(y[0].value)) {
    y[0].parentNode.children[2].children[1].children[1].innerHTML =
      "Invalid phone number";
    y[0].parentNode.children[2].children[1].classList.add("flex-element");
    return false;
  }
  values.push(y[0].value);
  return true;
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    nextPrev(1);
  }
});

function changeClass(id) {
  var buttons = document.getElementsByClassName("btn");
  for (const [key, value] of Object.entries(buttons)) {
    value.classList.remove("selectedBtn");
  }
  var element = document.getElementById(id);
  element.classList.add("selectedBtn");
  document.getElementById("size").value = element.id;
}
