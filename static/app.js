const menuData = {
  dorucak: [
    {
      name: "Omlet sa sirom",
      description: "Jaja, sir, začini",
      price: "6 KM",
      image: "/static/images/1.jpg"
    },
    {
      name: "Pohovani hljeb",
      description: "Hljeb, jaja, sir",
      price: "5 KM",
      image: "nesto"
    }
  ],

  salate: [
    {
      name: "Omlet sa sirom",
      description: "Jaja, sir, začini",
      price: "6 KM",
      image: "/static/images/1.jpg"
    },
    {
      name: "Pohovani hljeb",
      description: "Hljeb, jaja, sir",
      price: "5 KM",
      image: "https://source.unsplash.com/400x300/?toast"
    }

  ],
  // Dodaj i ostale kategorije kao u prethodnom kodu
  // ...
  //neki komentar 
};

// Funkcija za prikaz jela iz određene kategorije
function prikaziKategoriju(kategorija) {
  const menuSection = document.getElementById("menu-section");
  menuSection.innerHTML = ""; // Očisti prethodni sadržaj

  if (!menuData[kategorija]) {
    menuSection.innerHTML = "<p>Nema jela za odabranu kategoriju.</p>";
    return;
  }

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  menuData[kategorija].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span class="price">${item.price}</span>
    `;
    cardsContainer.appendChild(card);
  });

  menuSection.appendChild(cardsContainer);
}

// Postavi event listenere na dugmad nakon učitavanja stranice
window.onload = function () {
  const buttons = document.querySelectorAll(".category-nav button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const kategorija = button.getAttribute("data-category");
      prikaziKategoriju(kategorija);
    });
  });

  // Prikaži početnu kategoriju (npr. dorucak)
  prikaziKategoriju("dorucak");
};
