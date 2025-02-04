const valueInput = document.getElementById("valueInput");
const animateCheckbox = document.getElementById("animateCheckbox");
const hideCheckbox = document.getElementById("hideCheckbox");
const progressBar = document.getElementById("svg");
const progressCircle = document.getElementById("progress");

valueInput.addEventListener("input", (e) => {
  const value = e.target.value;
  updateProgress(value);
});

animateCheckbox.addEventListener("change", updateAnimation);

hideCheckbox.addEventListener("change", updateVisibility);

function updateProgress(value) {
  const minValue = 0;
  const maxValue = 100;

  if (/\.\d/.test(value)) {
    value = value.split(".")[0];
  }
  if (value.startsWith("0") && value.length > 1) {
    value = value.slice(1);
  }

  value = parseInt(value, 10);
  if (value < minValue) {
    value = minValue;
  } else if (value > maxValue) {
    value = maxValue;
  }

  if (isNaN(value)) {
    value = minValue;
  }

  valueInput.value = value;

  const percent = value / 100;
  const circleLength = 2 * Math.PI * 40;
  const dashoffset = circleLength - percent * circleLength;

  progressCircle.style.strokeDasharray = circleLength;
  progressCircle.style.strokeDashoffset = dashoffset;
}

function updateAnimation() {
  if (animateCheckbox.checked) {
    progressCircle.classList.add("animated");
  } else {
    progressCircle.classList.remove("animated");
  }
}

function updateVisibility() {
  if (hideCheckbox.checked) {
    progressBar.style.visibility = "hidden";
  } else {
    progressBar.style.visibility = "visible";
  }
}
