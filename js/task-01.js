const categoriesListRef = document.getElementById("categories");
const categoriesListArrRef = categoriesListRef.children;
const arrRef = Array.from(categoriesListArrRef);
const categoriesListItemRef = categoriesListRef.querySelectorAll(".item");

console.log(`Number of ${categoriesListRef.children.length} categories`);
console.log("=========================");

arrRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}
Number of elements: ${item.lastElementChild.children.length}`);
});
