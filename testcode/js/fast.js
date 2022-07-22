import "./styles.css";

const arr = [];
const $scroll = document.querySelector(".scroll");
const $wrap = document.querySelector(".wrap");
const $ul = document.querySelector("ul");

const LIHEIGHT = 30; // li 높이
const MAX_DATA_COUNT = 2000; // 총 개수
const DATA_PER_PAGE = 10; // 페이지당 개수

const listMap = new Map();

let currentPageNum = 1;

for (let i = 0; i < MAX_DATA_COUNT; i++) {
  arr.push({
    title: `Title${i + 1}`
  });
}

// wrap 최소 높이값 설정
function setMinHeight() {
  const $lastLi = document.querySelector("ul li:last-child");
  const lastLiHight =
    $lastLi.clientHeight + heightWithBorderBommtomWidth($lastLi, 3);
  $wrap.style.minHeight = `${MAX_DATA_COUNT * lastLiHight}px`;
}

// 마지막 li가 scroll 영역에 들어온지 체크
const isCameLi = () => {
  const $lastLi = document.querySelector("ul li:last-child");

  return (
    $scroll.getBoundingClientRect().top + $scroll.clientHeight >
    $lastLi.getBoundingClientRect().top
  );
};

// li를 화면에 그려준다.
const render = (pageNum) => {
  const list = arr.slice(
    (pageNum - 1) * DATA_PER_PAGE,
    pageNum * DATA_PER_PAGE
  );

  list.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    $ul.appendChild(li);
  });
};

// element의 border Bootom Width 과 Clientheight 의 합친 값을 받는다.
// offsetHeight로 처리할 경우 1px 맞지 않는 케이스 발생
const heightWithBorderBommtomWidth = (el, num = 0) => {
  // element 인지 체크
  // https://hianna.tistory.com/412
  if (!el.nodeType) return;
  const borderBottomWidth = window.getComputedStyle(el).borderBottomWidth;
  let rerult = parseFloat(
    borderBottomWidth.substring(0, borderBottomWidth.length - 2)
  );
  return num > 0 ? parseFloat(rerult.toFixed(num)) : rerult;
};

// 스크롤된 현재 위치가 몇번째 페이지 인지 계산해준다.
const getPageNum = () => {
  const $lastLi = document.querySelector("ul li:last-child");
  const scrollHeight =
    $scroll.getBoundingClientRect().top +
    heightWithBorderBommtomWidth($scroll, 2) -
    $wrap.getBoundingClientRect().top.toFixed(2);
  const lastLiHeight =
    $lastLi.clientHeight + heightWithBorderBommtomWidth($lastLi, 2);
  const countLi = scrollHeight / lastLiHeight;
  const pageNum = Math.ceil(countLi / DATA_PER_PAGE) + 1;

  return pageNum;
};

// 스크롤 될때 이벤트 발생
const onScroll = (e) => {
  if (!isCameLi()) return;
  const pageNum = getPageNum();

  for (; currentPageNum < pageNum; ) {
    if (listMap.has(pageNum)) return;
    currentPageNum += 1;
    listMap.set(currentPageNum);
    render(currentPageNum);
  }
};

// 스크롤 이벤트
document.querySelector(".scroll").addEventListener("scroll", onScroll);

// 초기 실행
listMap.set(currentPageNum);
render(currentPageNum);
setMinHeight();
