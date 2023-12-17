const cardContainer = document.querySelector(".card__container");
const paginationContainer = document.querySelector(".pagination");
const itemsPerPage = 9;
let currentPage = 1;

const fetchDataAndRender = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const products = data.products;
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);

    cardContainer.innerHTML = "";

    for (let i = startIndex; i < endIndex; i++) {
      const product = products[i];

      const card = document.createElement("div");
      card.classList.add("card");

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("card__img");
      const img = document.createElement("img");
      img.src = product.images[0];
      img.style.width = "200px";
      imgContainer.appendChild(img);

      const paragraphname = document.createElement("button");
      paragraphname.textContent = ` ${product.category}`;

      const subtitle = document.createElement("h3");
      subtitle.textContent = ` ${product.title}`;

      const definition = document.createElement("p");
      definition.textContent = ` ${product.description}`;

      const productItem = document.createElement("div");
      productItem.textContent = `price:${product.price}$`;

      card.appendChild(imgContainer);
      card.appendChild(paragraphname);
      card.appendChild(subtitle);
      card.appendChild(definition);
      card.appendChild(productItem);
      cardContainer.appendChild(card);
    }
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", () => {
        currentPage = i;
        fetchDataAndRender();
      });
      paginationContainer.appendChild(button);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchDataAndRender();

//burger menu



// document.addEventListener("DOMContentLoaded", function() {
//   const burger = document.getElementById("menu-icon");
//   const navlinks = document.querySelector(".nav-links.mobile-menu");
//   const header = document.querySelector(".header");

//   burger.addEventListener('click', () => {
//       navlinks.classList.toggle('active');
//   });

//   // Close the mobile menu when clicking outside of it
//   header.addEventListener('click', (e) => {
//       if (!navlinks.contains(e.target) && e.target !== burger) {
//           navlinks.classList.remove('active');
//       }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const sliderImage = document.getElementById("slider-image");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  const imageArray = ["./image.png", "./image1.png", "./image2.png"];

  let currentImageIndex = 0;

  function updateImage() {
    sliderImage.src = imageArray[currentImageIndex];
  }

  prevButton.addEventListener("click", function () {
    currentImageIndex =
      (currentImageIndex - 1 + imageArray.length) % imageArray.length;
    updateImage();
  });

  nextButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    updateImage();
  });

  updateImage();
});



document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.querySelector(".nav-links.mobile-menu");

  menuIcon.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
  });
});
