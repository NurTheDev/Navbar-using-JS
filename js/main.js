/**
 * todo-1: Create HTML file
 * todo-2: Design The HTMl file
 */

const body = document.body;
const tagName = ["nav", "div", "span", "ul", "img", "button"];
let htmlTag = [];
for (let tag of tagName) {
  htmlTag.push(document.createElement(tag));
}
const [nav, div, span, ul, img, button] = htmlTag;
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
  li.style.margin = "0 10px";
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    transition: "color 0.3s",
  };
  for (let n in linkStyle) {
    a.style[n] = linkStyle[n];
  }
  a.addEventListener("mouseenter", () => {
    a.style.color = "#ffddc1";
  });
  a.addEventListener("mouseleave", () => {
    a.style.color = "white";
  });
}
nav.appendChild(ul);
button.innerText = "Get Started Now";
button.classList.add("btn");
nav.appendChild(button);
// Style the tag
body.style.margin = "0";
body.style.fontFamily = "Arial, sans-serif";
const navbar = {
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f04e30",
  padding: "10px 20px",
};
for (let i in navbar) {
  nav.style[i] = navbar[i];
}
img.style.width = "120px";
const ulStyle = {
  listStyle: "none",
  display: "flex",
  margin: "0",
  padding: "0",
};
for (let i in ulStyle) {
  ul.style[i] = ulStyle[i];
}
const buttonStyle = {
  backgroundColor: "#ffcb4d",
  color: "#f04e30",
  padding: "10px 15px",
  borderRadius: "5px",
  fontWeight: "bold",
  transition: "background-color 0.3s",
  border: "none",
};
for (let i in buttonStyle) {
  button.style[i] = buttonStyle[i];
}
button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "#ffc107";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "#ffcb4d";
});
