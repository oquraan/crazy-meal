let mune = [
  new Mnue("Mansaf", "$200", "images/photo9jpg.jpg"),
  new Mnue("Makloba", "$100", "images/makloba.jpg"),
  new Mnue("Checken mANSAF", "$200", "images/mansaf.jpg"),
  new Mnue("Beef ", "$600", "images/mashawi.jpg"),
  new Mnue("Mshaka l ", "$200", "images/mashawi.jpg"),
];
function Mnue(mealName, mealPrice, mealImag) {
  (this.mealImag = mealImag),
    (this.mealName = mealName),
    (this.mealPrice = mealPrice);
}
localStorage.setItem("MnueList", JSON.stringify(mune));

const CardContaier = document.getElementById("CardContaier");

function displayData() {
  JSON.parse(localStorage.getItem("MnueList")).forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `         <img class="imgcard" src="${
      element.mealImag ? element.mealImag : "images/not-found.png"
    }" />
              <div class="cardContant">
              
      <p class="nameOfCard">${element.mealName}</p>
            <p class="houseOfCard">${element.mealPrice}</p>

            
              </div>
    `;
    CardContaier.appendChild(card);
  });
}
displayData();
