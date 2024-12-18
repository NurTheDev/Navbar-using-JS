/**
 * todo-1: Create HTML file
 * todo-2: Design The HTMl file
 */

const body = document.body;
const tagName = ["nav", "div", "span", "ul", "img", "a"];
let htmlTag = [];
for (let tag of tagName) {
  htmlTag.push(document.createElement(tag));
}
const [nav, div, span, ul, img, a] = htmlTag;
nav.classList.add("navbar");
body.appendChild(nav);
div.classList.add("navbar-logo");
nav.appendChild(div);
img.setAttribute("src", "./logo/logo.png");
div.appendChild(img);
for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `link${i + 1}`;
  if (i == 0) {
    a.innerText = "Home";
  } else if (i == 1) {
    a.innerText = "Features";
  } else if (i == 2) {
    a.innerText = "Portfolio";
  } else if (i == 3) {
    a.innerText = "Blog";
  } else {
    a.innerText = "Pricing";
  }
  li.appendChild(a);
  ul.appendChild(li);
}
nav.appendChild(ul);
a.innerText = "Get Started Now";
a.classList.add("btn");
a.href = "#go";
nav.appendChild(a);
// Style the tag
body.style.margin = "0";
body.style.fontFamily = "Arial, sans-serif";
const navbar = {
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",
  backgroundColor: "#f04e30",
  padding: "10px 20px",
};
for (let i in navbar) {
  nav.style[i] = navbar[i];
}
img.style.width = "120px";
