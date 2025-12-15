

const fruits = [
  {
    id: "apple",
    name: "Apple",
    nepali: "स्याउ",
    price: 99,
    image: "images/apple.jpg"
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    nepali: "अनार",
    price: 98,
    image: "images/pomegranate.jpg"
  },
  {
    id: "orange",
    name: "Orange",
    nepali: "सुन्तला",
    price: 97,
    image: "images/orange.jpg"
  },
  {
    id: "banana",
    name: "Banana",
    nepali: "केरा",
    price: 96,
    image: "images/banana.jpg"
  },
  {
    id: "lapsi",
    name: "Lapsi",
    nepali: "लप्सी",
    price: 95,
    image: "images/lapsi.jpg"
  },
  {
    id: "lemon",
    name: "Lemon",
    nepali: "कागती",
    price: 94,
    image: "images/lemon.jpg"
  },
  {
    id: "amla",
    name: "Amla",
    nepali: "अमला",
    price: 93,
    image: "images/amla.jpg"
  },
  {
    id: "cucumber",
    name: "Cucumber",
    nepali: "काँक्रो",
    price: 92,
    image: "images/cucumber.jpg"
  }
];

const vegetables = [
  {
    id: "tomato",
    name: "Tomato",
    nepali: "गोलभेडा",
    price: 80,
    image: "images/tomato.jpg"
  },
  {
    id: "potato",
    name: "Potato",
    nepali: "आलु",
    price: 40,
    image: "images/potato.jpg"
  },
  {
    id: "onion",
    name: "Onion",
    nepali: "प्याज",
    price: 50,
    image: "images/onion.jpg"
  },
  {
    id: "cabbage",
    name: "Cabbage",
    nepali: "बन्दा",
    price: 30,
    image: "images/cabbage.jpg"
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    nepali: "काउली",
    price: 60,
    image: "images/cauliflower.jpg"
  },
  {
    id: "carrot",
    name: "Carrot",
    nepali: "गाजर",
    price: 70,
    image: "images/carrot.jpg"
  },
  {
    id: "garlic",
    name: "Garlic",
    nepali: "लसुन",
    price: 240,
    image: "images/garlic.jpg"
  },
  {
    id: "ginger",
    name: "Ginger",
    nepali: "अदुवा",
    price: 120,
    image: "images/ginger.jpg"
  },
  {
    id: "green_chilli",
    name: "Green Chilli",
    nepali: "हरियो खुर्सानी",
    price: 160,
    image: "images/green_chilli.jpg"
  },
  {
    id: "cucumber",
    name: "Cucumber",
    nepali: "काँक्रो",
    price: 45,
    image: "images/cucumber.jpg"
  },
  {
    id: "radish",
    name: "Radish",
    nepali: "मूला",
    price: 50,
    image: "images/radish.jpg"
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    nepali: "फर्सी",
    price: 80,
    image: "images/pumpkin.jpg"
  },
  {
    id: "sweet_potato",
    name: "Sweet Potato",
    nepali: "सखरखण्ड",
    price: 100,
    image: "images/sweet_potato.jpg"
  },
  {
    id: "bitter_gourd",
    name: "Bitter Gourd",
    nepali: "तिते करेला",
    price: 200,
    image: "images/bitter_gourd.jpg"
  },
  {
    id: "bottle_gourd",
    name: "Bottle Gourd",
    nepali: "लौका",
    price: 100,
    image: "images/bottle_gourd.jpg"
  },
  {
    id: "bell_pepper",
    name: "Bell Pepper",
    nepali: "क्याप्सिकम",
    price: 200,
    image: "images/bell_pepper.jpg"
  },
  {
    id: "ladyfinger",
    name: "Ladyfinger",
    nepali: "भिण्डी",
    price: 200,
    image: "images/ladyfinger.jpg"
  },
  {
    id: "mushroom",
    name: "Mushroom",
    nepali: "च्याउ",
    price: 240,
    image: "images/mushroom.jpg"
  },
  {
    id: "rayo_saag",
    name: "Rayo Saag",
    nepali: "रायोको साग",
    price: 70,
    image: "images/rayo_saag.jpg"
  },
  {
    id: "long_bean",
    name: "Long Bean",
    nepali: "टपरे बोडी",
    price: 240,
    image: "images/long_bean.jpg"
  },
  {
    id: "mung_bean",
    name: "Mung Bean",
    nepali: "मूंग बोडी",
    price: 200,
    image: "images/mung_bean.jpg"
  },
  {
    id: "normal_bean",
    name: "Normal Bean",
    nepali: "सिमी / हरियो बोडी",
    price: 200,
    image: "images/normal_bean.jpg"
  },
  {
    id: "red_bean",
    name: "Red Bean",
    nepali: "राजमा",
    price: 240,
    image: "images/red_bean.jpg"
  },
  {
    id: "coriander",
    name: "Coriander Leaves",
    nepali: "धनिया",
    price: 80,
    image: "images/coriander.jpg"
  },
  {
    id: "peas",
    name: "Green Peas",
    nepali: "केराउ",
    price: 200,
    image: "images/peas.jpg"
  },
  {
    id: "broad_bean",
    name: "Broad Bean",
    nepali: "सिमी",
    price: 200,
    image: "images/broad_bean.jpg"
  },
  {
    id: "gheramla",
    name: "Gheramla",
    nepali: "घिरौं ला",
    price: 60,
    image: "images/gheramla.jpg"
  },
  {
    id: "chayote",
    name: "Chayote",
    nepali: "इस्कुस",
    price: 100,
    image: "images/chayote.jpg"
  },
  {
    id: "cocoyam",
    name: "Cocoyam",
    nepali: "पिडालु",
    price: 100,
    image: "images/cocoyam.jpg"
  },
  {
    id: "gundruk",
    name: "Gundruk",
    nepali: "गुन्द्रुक",
    price: 400,
    image: "images/gundruk.jpg"
  },
  {
    id: "big_chilli",
    name: "Big Chilli",
    nepali: "हरियो ठूलो खुर्सानी",
    price: 100,
    image: "images/big_chilli.jpg"
  },
];




let fruitsData = [...fruits];
let vegetablesData = [...vegetables];


let selectedItemName = "";
let selectedPricePerKg = 0;
let selectedGrams = 0;


function closeCart() {
  document.getElementById('cartPanel').style.display = 'none';
}
function searchItems() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  document.querySelectorAll('.item').forEach(item => {
    const name = item.innerText.toLowerCase();
    item.style.display = name.includes(query) ? '' : 'none';
    
  });
}
document.getElementById('searchBar').addEventListener('input', searchItems);

let cart = [];

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
    existing.totalPrice += price;
  } else {
    cart.push({name, price, qty:1, totalPrice:price});
  }
  updateCart();
}

function updateCart() {
  document.getElementById('cartCount').innerText = cart.reduce((sum,i)=>sum+i.qty,0);
  const cartList = document.getElementById('cartItems');
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.totalPrice;
    cartList.innerHTML += `<li>${item.name} x ${item.qty} = Rs. ${item.totalPrice}</li>`;
  });
  document.getElementById('cartTotal').innerHTML = `<b>Total: Rs. ${total}</b>`;
}

function removeItem(index) {
  cart.splice(index, 1); // Remove item at the given index
  updateCart(); // Refresh cart display
}

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

cart.forEach((item, index) => {
  total += item.totalPrice;
  cartList.innerHTML += `
    <li>
      ${item.name} x ${item.qty} = Rs. ${item.totalPrice}
      <span style="color:red;cursor:pointer;font-weight:bold;margin-left:8px;"
            onclick="removeItem(${index})">×</span>
    </li>`;
});

function openQtyModal(name, pricePerKg) {
  selectedItemName = name;
  selectedPricePerKg = pricePerKg;
  selectedGrams = 0;

  document.getElementById("modalItemName").innerText = name;
  document.getElementById("modalPricePerKg").innerText =
    `Rs ${pricePerKg} / kg`;

  document.getElementById("gramInput").value = "";
  document.getElementById("finalPrice").innerText = "Total: Rs 0";

  document.getElementById("qtyModal").style.display = "block";
}

function closeQtyModal() {
  document.getElementById("qtyModal").style.display = "none";
}

function selectQty(grams) {
  selectedGrams = grams;
  document.getElementById("gramInput").value = grams;
  updateFinalPrice();
}

document.getElementById("gramInput").addEventListener("input", function () {
  selectedGrams = Number(this.value);
  updateFinalPrice();
});

function updateFinalPrice() {
  if (selectedGrams <= 0) return;
  const price =
    (selectedPricePerKg / 1000) * selectedGrams;
  document.getElementById("finalPrice").innerText =
    `Total: Rs ${price.toFixed(2)}`;
}
function confirmAddToCart() {
  if (selectedGrams <= 0) {
    alert("Enter quantity");
    return;
  }

  const price =
    (selectedPricePerKg / 1000) * selectedGrams;

  addToCart(
    `${selectedItemName} (${selectedGrams}g)`,
    price
  );

  closeQtyModal();
}



function renderFruits(data) {
  const container = document.getElementById("fruitsGrid");
  container.innerHTML = "";

  data.forEach(fruit => {
    container.innerHTML += `
      <div class="item">
        <img src="${fruit.image}">
        <div class="name">${fruit.name}</div>
        <div class="nepali">${fruit.nepali}</div>
        <div class="price">Rs. ${fruit.price}/kg</div>
        <button onclick="openQtyModal('${fruit.name}', ${fruit.price})">
          Buy
        </button>
      </div>
    `;
  });
}




function renderVegetables(data) {
  const container = document.getElementById("vegetablesGrid");
  container.innerHTML = "";

  data.forEach(veg => {
    container.innerHTML += `
      <div class="item">
        <img src="${veg.image}">
        <div class="name">${veg.name}</div>
        <div class="nepali">${veg.nepali}</div>
        <div class="price">Rs. ${veg.price}/kg</div>
        <button onclick="openQtyModal('${veg.name}', ${veg.price})">
          Buy
        </button>
      </div>
    `;
  });
}

renderFruits(fruitsData);
renderVegetables(vegetablesData);


renderItems(fruits, "fruitsGrid");
renderItems(vegetables, "vegetablesGrid");

function applyPriceFilter() {
  const filter = document.getElementById("priceFilter").value;

  if (filter === "low-high") {
    fruitsData.sort((a, b) => a.price - b.price);
    vegetablesData.sort((a, b) => a.price - b.price);
  } 
  else if (filter === "high-low") {
    fruitsData.sort((a, b) => b.price - a.price);
    vegetablesData.sort((a, b) => b.price - a.price);
  } 
  else {
    fruitsData = [...fruits];
    vegetablesData = [...vegetables];
  }

  renderFruits(fruitsData);
  renderVegetables(vegetablesData);
}

if (item.keywords.some(k => k.includes(searchValue))) {
  // show item
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(reg => console.log('SW registered'))
    .catch(err => console.log('SW failed', err));
}
