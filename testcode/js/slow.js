import "../css/styles.css";

const arr = [];
const $scroll = document.querySelector(".scroll");
const $ul = document.querySelector("ul");

// DATA Setting
for (let i = 0; i < 2000; i++) {
  arr.push({
    title: `Title${i + 1}`
  });
}

// Infinite scroll
let currentPage = 0;
const DATA_PER_PAGE = 10;
const lastPage = arr.length / DATA_PER_PAGE;

const addData = (currentPage) => {
  if (currentPage > lastPage) return console.log("end");

  const m = arr.slice(
    (currentPage - 1) * DATA_PER_PAGE,
    currentPage * DATA_PER_PAGE
  );
  m.map((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.title}`;
    $ul.appendChild(li);
  });
  intersectionObserver.observe(
    document.querySelectorAll("ul li:last-child")[0]
  );
};

const intersectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        addData(++currentPage);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: $scroll
  }
);

addData(++currentPage);
