const formOrder = document.getElementById("formOrder");
const viewOrder = document.getElementById("viewOrder");
const resturentForm = document.getElementById("resturentForm");
const RemoveButton = document.getElementById("RemoveButton");
const listOrder = document.getElementById("listOrder");

let arr = [],
  arr1 = [];

arr1 = JSON.parse(localStorage.getItem("OrderList")) || [];
RemoveButton.addEventListener("click", (event) => {
  event.preventDefault();
  arr1 = [];
  localStorage.setItem("OrderList", JSON.stringify(arr1));
  renderData();
});
function Order(mealName, mealPrice, mealImag) {
  (this.mealImag = mealImag),
    (this.mealName = mealName),
    (this.mealPrice = mealPrice);
}

resturentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const url = document.getElementById("url").value;

  arr.push(new Order(name, price, url));
  arr1.push(new Order(name, price, url));
  if (name && price && url)
    localStorage.setItem("OrderList", JSON.stringify(arr1));
  renderData();
  arr = [];
});

function renderData() {
  listOrder.innerHTML = "";
  //   const h = document.createElement("tr");
  //   h.innerHTML = `
  //  <td>Type</td>  <td> Price  </td>
  //  <td> Photo </td>

  // `;
  // listOrder.appendChild(h);

  let data = JSON.parse(localStorage.getItem("OrderList"));
  if (data && Array.isArray(data)) {
    data.forEach((obj, index) => {
      const li = document.createElement("tr");

      li.innerHTML = `
 <td>${obj.mealName}</td>  <td>$ ${obj.mealPrice} </td>
 <td> <img   class="imageCard" src='${
   obj.mealImag ? obj.mealImag : "../images/pexels-photo-6275177.webp"
 }' ></td>

 
`;

      listOrder.appendChild(li);
    });
  }
}
renderData();
