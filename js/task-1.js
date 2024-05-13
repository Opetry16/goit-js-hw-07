const categories = document.querySelector("ul#categories");

const item = document.querySelectorAll(".item");

//   console.log(`Number of categories: ${categories.children.length}`);
console.log(`Number of categories: ${item.length}`);
item.forEach((el) => {
  // console.log(`Category: ${el.children[0].textContent}`);
  // console.log(`Elements: ${el.children[1].children.length}`);
  const categoryTitle = el.querySelector("h2").textContent;
  const categoryElements = el.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
