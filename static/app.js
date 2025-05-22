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
  wok: [
    {
      name: "Piletina Wok",
      description: "Piletina u kombinaciji sa svježim povrćem",
      price: "12,00 KM",
      image: "/static/images/45.avif"
    },
    {
      name: "Biftek Wok",
      description: "Biftek pripremljen na zdrav način",
      price: "12,00 KM",
      image: "/static/images/46.avif"
    },
  ],
  burgeri: [
    {
      name: "Author Sandwich",
      description: "Šunka, sir, salata, svježe pecivo",
      price: "6,00 KM",
      image: "/static/images/47.avif"
    },
    {
      name: "Author Chickenburger",
      description: "Piletina, salata, svježe pecivo",
      price: "6,50 KM",
      image: "/static/images/48.avif"
    },
    {
      name: "Author Hamburger",
      description: "Pljeskavica, salata, svježe pecivo",
      price: "7,00 KM",
      image: "/static/images/49.avif"
    },
    {
      name: "Author Cheeseburger",
      description: "Burger posebno za ljubitelje sira",
      price: "8,00 KM",
      image: "/static/images/50.avif"
    },
  ],
  hladneplate: [
    {
      name: "Mesna plata",
      description: "Bogato jelo s raznim vrstama mesa, prilozima i umacima",
      price: "22,00 KM",
      image: "/static/images/14.avif"
    },
    {
      name: "Sirna plata",
      description: "Pažljivo odabrani sirevi uz orašaste plodove, voće i dekoraciju",
      price: "18,00 KM",
      image: "/static/images/14.avif"
    },
    {
      name: "Premium Author plata",
      description: "Specijalitet s mesom i sirom, uz umake i dekoraciju",
      price: "22,00 KM",
      image: "/static/images/14.avif"
    },
  ],
  burgermenu: [
    {
      name: "Author Sandwich Meni",
      description: "Sendvič s krompirićima i Coca-Cola pićem",
      price: "9,00 KM",
      image: "/static/images/54.avif"
    },
    {
      name: "Author Chickenburger Meni",
      description: "Piletina u svježem pecivu, krompirići i Coca-Cola piće",
      price: "10,00 KM",
      image: "/static/images/55.avif"
    },
    {
      name: "Author Hamburger Meni",
      description: "Pljeskavica s krompirićima i Coca-Cola pićem",
      price: "10,00 KM",
      image: "/static/images/56.avif"
    },
    {
      name: "Author Cheeseburger Meni",
      description: "Cheeseburger, krompirići i Coca-Cola piće",
      price: "11,00 KM",
      image: "/static/images/57.avif"
    },
    {
      name: "Author Wrap Meni",
      description: "Tortilja punjena mesom i povrćem, uz krompiriće i Coca-Cola piće",
      price: "10,00 KM",
      image: "/static/images/58.avif"
    },
  ],
  palacinke: [
    {
      name: "Snickers",
      description: "Hrskavi komadići Snickers čokolade",
      price: "8,00 KM",
      image: "/static/images/59.avif"
    },
    {
      name: "Raffaello",
      description: "Za ljubitelje kokosa",
      price: "8,00 KM",
      image: "/static/images/60.avif"
    },
    {
      name: "Oreo",
      description: "Hrskavi Oreo keks",
      price: "8,00 KM",
      image: "/static/images/61.avif"
    },
    {
      name: "Twix",
      description: "Karamel Twix čokoladice",
      price: "8,00 KM",
      image: "/static/images/62.avif"
    },
    {
      name: "Nutella",
      description: "Sočni palačinci s Nutellom",
      price: "8,00 KM",
      image: "/static/images/63.avif"
    },
    {
      name: "Nutella i banana",
      description: "Najbolja kombinacija Nutelle i banane",
      price: "9,00 KM",
      image: "/static/images/64.avif"
    },
  ],
  pizza: [
    {
      name: "Margarita",
      description: "Sir, masline, paradajz sos",
      price: "8,00 KM",
      image: "/static/images/65.avif"
    },
    {
      name: "Vegetariana",
      description: "Paprika, paradajz, kukuruz, šampinjoni, sir, masline, paradajz sos",
      price: "9,00 KM",
      image: "/static/images/66.avif"
    },
    {
      name: "Quattro Formaggi",
      description: "Sir, gorgonzola, mozzarella, parmezan, masline, paradajz sos",
      price: "10,00 KM",
      image: "/static/images/67.avif"
    },
    {
      name: "Funghi",
      description: "Šampinjoni, sir, masline, paradajz sos",
      price: "9,00 KM",
      image: "/static/images/68.avif"
    },
    {
      name: "Tonno",
      description: "Tunjevina, sir, luk, paradajz sos, marinada",
      price: "10,00 KM",
      image: "/static/images/69.avif"
    },
    {
      name: "Mexicana",
      description: "Sir, sudžuka, čili",
      price: "10,00 KM",
      image: "/static/images/70.avif"
    },
    {
      name: "Capricciosa",
      description: "Pureća šunka, šampinjoni, masline, sir, paradajz sos",
      price: "9,00 KM",
      image: "/static/images/71.avif"
    },
    {
      name: "Bosnia",
      description: "Sir, suho meso, paradajz sos",
      price: "10,00 KM",
      image: "/static/images/72.avif"
    },
  ],
  kolaci: [
    {
      name: "Sufle od čokolade",
      description: "Svježi desert poznat kao lava cake",
      price: "8,00 KM",
      image: "/static/images/73.avif"
    },
    {
      name: "Medena torta",
      description: "Slojevita poslastica s bogatim medenim korama i kremastim punjenjem",
      price: "5,00 KM",
      image: "/static/images/75.avif"
    },
    {
      name: "Cheesecake",
      description: "Voćni desert u čaši",
      price: "5,00 KM",
      image: "/static/images/76.avif"
    },
    {
      name: "Pistacija",
      description: "Dubai desert u čaši",
      price: "5,00 KM",
      image: "/static/images/77.avif"
    },
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
