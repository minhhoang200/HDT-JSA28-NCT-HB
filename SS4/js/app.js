let products = {
    data: [
      {
        name: "MATRIX 1999 DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/matrix-1999-1.jpg"
      },
      {
        name: "RAEDA DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Raeda-Deck.jpg"
      },
      {
        name: "MUSTY DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Musty-Deck.jpg"
      },
      {
        name: "TRISTIQUE DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Tristique-deck.jpg"
      },
      {
        name: "FIELD TRIP DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Fied-Trip-deck.jpg"
      },
      {
        name: "TARO RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-5.jpg"
      },
      {
        name: "NEON RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-1.jpg"
      },
      {
        name: "ORANAGE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-2.jpg"
      },
      {
        name: "BLUE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-3.jpg"
      },
      {
        name: "WHITE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-4.jpg"
      },
      {
        name: "CUTIS MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/cutis.jpg"
      },
  
      {
        name: "CAM VU MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/cam-vu.jpg"
      },
  
      {
        name: "SON NGUYEN MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/son-nguyen.jpg"
      },
    ]
  };
  
  
  for (let items of products.data) {
  
    // Tạo Tag với javascript
    let card = document.createElement("div");
    card.classList.add("card");
  
  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
  
    let image = document.createElement("img");
    image.setAttribute("src", items.image);
  
    // Đặt vị trí cha con
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
  
    // Xác định vị trí tên sản phẩm
    let container = document.createElement("div");
    container.classList.add("container");
  
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name)
  
  
    // Xác định vị trí giá sản phẩm
    let price = document.createElement("h6");
    price.innerHTML = `<b>Price:</b> ${items.price}`
    container.appendChild(price);
  
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "addToCart()");
    // Button có thuộc tính onclick ="addToCart()"
    btn.innerHTML = "Thêm vào giỏ hàng";
    container.appendChild(btn);
  
    // Xác định vị trí của Container
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }