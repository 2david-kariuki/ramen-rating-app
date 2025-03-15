const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "Images/gyukotsu.jpg",
    rating: 5,
    comment: "Delicious with nori!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "Images/kojiro.jpg",
    rating: 4,
    comment: "Great miso flavor with tofu!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "Images/naruto.jpg",
  },
  {
    id: 4,
    name: "Spicy Ramen",
    restaurant: "Spicy Bowl",
    image: "Images/nirvana.jpg",
    rating: 4,
    comment: "Love the kick!",
  },
  {
    id: 5,
    name: "Classic Ramen",
    restaurant: "Ramen House",
    image: "Images/shoyu.jpg",
    rating: 5,
    comment: "Perfect pork and egg combo!",
  },
];

function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramens.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

function handleClick(ramen) {
  const ramenDetail = document.getElementById('ramen-detail');
  ramenDetail.innerHTML = `
    <h2>${ramen.name}</h2>
    <h3>${ramen.restaurant}</h3>
    ${ramen.rating ? `<p>Rating: ${ramen.rating}</p>` : ''}
    ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ''}
  `;
}

document.addEventListener('DOMContentLoaded', displayRamens);
