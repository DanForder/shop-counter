let counter = 0;
console.log(counter);

const changeCounter = function (isAdd) {
  if (isAdd == true) {
    counter++;
  } else {
    counter--;
  }

  let plural = "person";
  let vocab = "is";
  if (counter != 1) {
    plural = "people";
    vocab = "are";
  }

  let storeText = "There " + vocab + " " + counter + " " + plural + " in store";

  console.log(storeText);
  document.getElementById("store-count-text").innerHTML = storeText;
};
