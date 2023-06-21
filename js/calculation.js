function getElement(id) {
  return document.getElementById(id);
}

const inputAchieved = getElement("input-achieved");

const inputHighest = getElement("input-highest");

const inputLowest = getElement("input-lowest");

const inputGermanCgpa = getElement("input-german-cgpa");

const inputGermanElucidation = getElement("input-german-elucidation");

getElement("btn-calculate").addEventListener("click", function () {
  const result = (
    ((inputHighest.value - inputAchieved.value) /
      (inputHighest.value - inputLowest.value)) *
      3 +
    1
  ).toFixed(2);

  //   const result2 = Math.floor(result.toFixed(1));

  inputGermanCgpa.value = result;
  if (result >= 5) {
    inputGermanElucidation.value = "Failed";
  } else if (result >= 3.51 && result <= 4.9) {
    inputGermanElucidation.value = "Sufficient";
  } else if (result >= 2.51 && result <= 3.5) {
    inputGermanElucidation.value = "Satisfactory";
  } else if (result >= 1.51 && result <= 2.5) {
    inputGermanElucidation.value = "Good";
  } else if (result >= 1.0 && result <= 1.5) {
    inputGermanElucidation.value = "Very Good";
  } else {
    inputGermanElucidation.value = "Unknown";
  }
});
