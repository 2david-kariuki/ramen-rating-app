document.addEventListener("DOMContentLoaded", main);

const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "images/shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "images/naruto.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "images/nirvana.jpg",
    rating: 5,
    comment: "So rich!",
  },
];


function displayRamens() {
  const menu = document.getElementById("ramen-menu");
  

  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", handleRamenClick.bind(null, ramen));
    if (!menu.querySelector(`img[src="${ramen.image}"]`)) {
      menu.appendChild(img);
    }
  });
}
function handleRamenClick(ramen) {

function handleClick(ramen) {
  document.getElementById("detail-image").src = ramen.image;
  document.getElementById("detail-name").textContent = ramen.name;
  document.getElementById("detail-restaurant").textContent = ramen.restaurant;
  document.getElementById("detail-rating").textContent = ramen.rating ? ramen.rating : "N/A";
  document.getElementById("detail-comment").textContent = ramen.comment ? ramen.comment : "No comment";
}


function addSubmitListener() {
  const form = document.getElementById("new-ramen-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const newRamen = {
      id: ramens.length + 1,
      name: form.name.value,
      restaurant: form.restaurant.value,
      image: form.image.value,
      rating: form.rating.value,
      rating: parseFloat(form.rating.value),
    };

    ramens.push(newRamen);
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener("click", handleRamenClick.bind(null, newRamen));
    document.getElementById("ramen-menu").appendChild(img);
    form.reset();
  });
}


function main() {
  displayRamens();
  addSubmitListener();
}
