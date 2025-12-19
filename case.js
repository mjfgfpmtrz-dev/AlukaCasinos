const items = [
  { name: "Ничего", img: "assets/empty.png", weight: 55 },
  { name: "25 Stars", img: "assets/empty.png", weight: 30 },
  { name: "Pepe NFT", img: "assets/pepe.png", weight: 10 },
  { name: "Кепка Дурова", img: "assets/durov.png", weight: 5 },
];

const line = document.getElementById("caseLine");
const btn = document.getElementById("openBtn");
const result = document.getElementById("result");

function rollItem() {
  const roll = Math.random() * 100;
  let sum = 0;
  for (const item of items) {
    sum += item.weight;
    if (roll <= sum) return item;
  }
}

function buildLine(winItem) {
  line.innerHTML = "";
  const fakeItems = [];

  for (let i = 0; i < 20; i++) {
    fakeItems.push(items[Math.floor(Math.random() * items.length)]);
  }

  fakeItems[15] = winItem;

  fakeItems.forEach(item => {
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `
      <img src="${item.img}">
      <div>${item.name}</div>
    `;
    line.appendChild(el);
  });
}

btn.onclick = () => {
  result.textContent = "";

  const winItem = rollItem();
  buildLine(winItem);

  line.style.transition = "none";
  line.style.transform = "translateX(0)";

  setTimeout(() => {
    line.style.transition = "transform 3s cubic-bezier(.1,.6,0,1)";
    line.style.transform = "translateX(-960px)";
  }, 50);

  setTimeout(() => {
    result.textContent = `🎁 Выпало: ${winItem.name}`;
  }, 3200);
};