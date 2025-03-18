
const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "Images/gyukotsu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "Images/kojiro.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "Images/naruto.jpg",
  },
];

function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramenMenu.innerHTML = ""; 

  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.dataset.id = ramen.id;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

function handleClick(ramen) {
  const detailDiv = document.getElementById("ramen-detail");
  detailDiv.querySelector(".detail-image").src = ramen.image || "";
  detailDiv.querySelector(".name").textContent = ramen.name || "";
  detailDiv.querySelector(".restaurant").textContent = ramen.restaurant || "";
  detailDiv.querySelector(".rating").textContent = ramen.rating
    ? `Rating: ${ramen.rating}`
    : "";
  detailDiv.querySelector(".comment").textContent = ramen.comment || "";
}

function addSubmitListener() {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newRamen = {
      id: ramens.length + 1,
      name: form.querySelector('[name="name"]').value,
      restaurant: form.querySelector('[name="restaurant"]').value,
      image: form.querySelector('[name="image"]').value,
      rating:
        parseInt(form.querySelector('[name="rating"]').value) || undefined,
      comment: form.querySelector('[name="comment"]').value,
    };

    ramens.push(newRamen);
    displayRamens();
    form.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
  
  if (ramens.length > 0) {
    handleClick(ramens[0]);
  }
}


document.addEventListener("DOMContentLoaded", main);
