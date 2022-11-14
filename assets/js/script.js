const main = document.querySelector(".container");
const categoryGames = document.getElementById("category-games");

const jogos = [
  {
    id: 1,
    title: "Forza 5",
    category: "Corrida",
    price: 180.99,
    img: "./assets/img/forza5.jpg",
  },
  {
    id: 2,
    title: "The Witcher 3 Wild Hunt",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/TW3_Wild_Hunt.png",
  },
  {
    id: 3,
    title: "Alien Isolation",
    category: "Terror",
    price: 180.99,
    img: "./assets/img/Alien_Isolation_capa.png",
  },
  {
    id: 4,
    title: "Resident Evil 2",
    category: "Terror",
    price: 180.99,
    img: "./assets/img/ResidentEvil2.jpg",
  },
  {
    id: 5,
    title: "Dark Souls 3",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/Dark_Souls_3.png",
  },
  {
    id: 6,
    title: "Outlast",
    category: "Terror",
    price: 180.99,
    img: "./assets/img/Outlast_Cover.jpg",
  },
  {
    id: 7,
    title: "Dead By Daylight",
    category: "Terror",
    price: 180.99,
    img: "./assets/img/Dead_By_Daylight.png",
  },
  {
    id: 8,
    title: "Nioh 2",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/Nioh_2_capa.jpg",
  },
  {
    id: 9,
    title: "Diablo 3",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/diablo.jpg",
  },
  {
    id: 10,
    title: "NBA",
    category: "Esporte",
    price: 180.99,
    img: "./assets/img/NBA.png",
  },
  {
    id: 11,
    title: "Divinity Original Sin 2",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/divinity.jpg",
  },
  {
    id: 12,
    title: "Monster Hunter World",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/Monster_Hunter_World_capa.jpg",
  },
  {
    id: 13,
    title: "Dragon Age Inquisition",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/Dragon_Age_Inquisition.png",
  },
  {
    id: 14,
    title: "Dragon Age",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/dragon-age.jpg",
  },
  {
    id: 15,
    title: "Fifa 22",
    category: "Esporte",
    price: 180.99,
    img: "./assets/img/fifa.jfif",
  },
  {
    id: 16,
    title: "F1 22",
    category: "Corrida",
    price: 180.99,
    img: "./assets/img/F1-22-capa-do-jogo.jpg",
  },
  {
    id: 17,
    title: "Final Fantasy",
    category: "RPG",
    price: 180.99,
    img: "./assets/img/final-fantasy.jpg",
  },
];

function init() {
  showGames(jogos);
  displayMenuButtons();
}

const displayMenuButtons = () => {
  const categories = jogos.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Todos"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn category-game" data-id=${category}>${category}</button>`;
    })
    .join("");

  categoryGames.innerHTML = categoryBtns;
  const filterBtns = categoryGames.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const gameCategory = jogos.filter((game, index) => {
        if (game.category === category) {
          return game;
        }
      });
      if (category === "Todos") {
        showGames(jogos);
      } else {
        showGames(gameCategory);
      }
    });
  });
};


const showGames = (jogos) => {
  main.innerHTML = "";

  jogos.forEach((jogo) => {
    const { id, title, price, img } = jogo;

    const gameEL = document.createElement("div");
    gameEL.classList.add("cart-item");
    gameEL.innerHTML = `

    <img src="${img}" alt="${title}">
      <div class="cart-item-info">
        <p class="title">${title}</p>
        <p><small class="price-small"> R$249,99</small></p>
        <p class="real-price">R$ ${price}</p>
        <button id="${id}" class="buy-btn" >Comprar</button>
      </div>

    `;
    main.appendChild(gameEL);
  });
};

init();
