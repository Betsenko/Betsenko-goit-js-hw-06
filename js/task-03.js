const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListRef = document.getElementById("gallery");

const imagesList = images.map(({ url, alt }) => {
  return `<li class="gallery-elem"><img class="gallery-img" src="${url}" alt="${alt}"></li>`;
});

console.log(images);
galleryListRef.insertAdjacentHTML("afterbegin", imagesList.join(" "));

galleryListRef.classList.add("list", "gallery");

const stylesRef = document.querySelector("style");
const styleSheet = document.createElement("style");
styleSheet.textContent =
  ".list {list-style: none; display: flex; margin-left: -30px} .gallery-elem {margin-left: 30px} .gallery-img {max-width: 100%}";
