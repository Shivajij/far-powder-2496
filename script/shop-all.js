import {footer,navbar} from "../component/navbar.js";

document.getElementById("top-navbar").innerHTML=navbar()


document.getElementById('srch').addEventListener('click',searchSlide);
function searchSlide(){
  
  document.getElementById('search-div').classList.toggle('active')
}

document.getElementById('slideicon').addEventListener('click',Slide);
function Slide(){
   
  document.getElementById('search-div').classList.toggle('active')
}

document.getElementById("footerstart").innerHTML=footer()

let array = []
let getData = async ()=>{
  let res = await fetch("https://lovoda.herokuapp.com/api/Arrayofproducts")
  let data = await res.json()
  append(data)
  array.push(data)
  // console.log(array)
  
}
getData()

let append= (data) => {
  if (!data) return;

  let products = document.getElementById("product-list");
  products.innerHTML = "";

  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    card.addEventListener("click", () => {
      localStorage.setItem("productDetails", JSON.stringify(el));
      window.location.href = "./page2.html";
    });

    let love_btn = document.createElement("button");
    love_btn.setAttribute("class", "heart-back");
    love_btn.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;

    love_btn.addEventListener("click", (e) => {
      love_btn.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>`;
    });

    let img_box = document.createElement("div");
    img_box.setAttribute("class", "img-box");

    let img = document.createElement("img");
    img.src = el.image;
    img.loading = "lazy";
    img_box.append(img);

    let title = document.createElement("a");
    title.innerText = el.head;
    title.setAttribute("class", "prod-title");

    // hover effect
    card.addEventListener("mouseover", (e) => {
      img.src = el.hovimage;
      title.style.borderBottom = "1px solid #121212";
    });
    card.addEventListener("mouseout", (e) => {
      img.src = el.image;
      title.style.borderBottom = "1px solid transparent";
    });

    let price = document.createElement("p");
    price.innerText = `$${el.price.toFixed(2)}`;
    price.setAttribute("class", "prod-price");

    card.append(love_btn, img_box, title, price);
    products.append(card);
  });
};


// let data = shopAllProducts();
// append(data);



let sortfun=document.querySelector("#selector")
sortfun.addEventListener("change",function(){
  sorting(array)
})
let sorting = (array) => {
  // console.log("hello");
  let x = document.querySelector("#selector").value;
  console.log("clicked",x)
  let newarr=array[0]
  // console.log(newarr.length);
  if (x === "Bestselling") {
    let res = [];
    console.log("hello")
    for (let i = 0; i < newarr.length; i++) {
      if (x === newarr[i].tag) {
        res.push(newarr[i]);
      }
    }
    console.log(res)
    append(res);
  }
    // Featured Filter
   else if (x === "Featured") {
    let res = [];
    for (let i = 0; i < newarr.length; i++) {
      if (x === newarr[i].tag) {
        res.push(newarr[i]);
      }
    }
    console.log(res)
    append(res);
  }
    // A to Z Filter
   else if (x === "A-Z") {
    let newarrsort=newarr.sort(function (a, b) {
      if (a.head > b.head) {
        return 1;
      }
      if (b.head > a.head) {
        return -1;
      }
      return 0;
    });
    append(newarrsort);
   
  } else if (x === "Z-A") {
    let newarrsortza=newarr.sort(function (a, b) {
      if (a.head < b.head) {
        return 1;
      }
      if (b.head < a.head) {
        return -1;
      }
      return 0;
    });
    append(newarrsortza);
  }





   else if (x === "low-to-high") {
    console.log("heloo")
   let sortlth=newarr.sort(function (a, b) {
      return a.price - b.price;
    });
    console.log(sortlth)
    append(sortlth);

  }
   else if (x === "high-to-low") {
    let htl=newarr.sort(function (a, b) {
      return b.price - a.price;
    });
    append(htl);

    
  } else if (x === "old-new") {
   let otn= newarr.sort(function (a, b) {
      return a.date - b.date;
    });
    append(otn);

    
  } else if (x === "new-old") {
    let nto=newarr.sort(function (a, b) {
      return b.date - a.date;
    });
    append( nto);
  }

}
      
    


  