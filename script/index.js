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








let indexdata = async () => {
  let res = await fetch("https://lovoda.herokuapp.com/api/productData")
  let data = await res.json()
  item_append(data)
}
indexdata()
let items = document.querySelector("#items")
let item_append = (data) => {
  data.forEach((el) => {
    let product_box = document.createElement("div");
    product_box.setAttribute("class", "card");
    //   add link
    product_box.onclick=()=>{
        window.location.href="page2.html"
    }
    product_box.addEventListener("mouseover", (e) => {
      img.src = el.hovimage;
      title.style.borderBottom = "1px solid #121212";
    });
    product_box.addEventListener("mouseout", (e) => {
      img.src = el.image;
      title.style.borderBottom = "1px solid transparent";
    });
    let img_div = document.createElement("div");
    img_div.setAttribute("class", "img-box");

    let img = document.createElement("img");
    img.src = el.image;
    img.loading = "lazy";
    img_div.append(img);

    let title = document.createElement("a");
    title.innerText = el.head;
    title.setAttribute("class", "prod-title");

    let price = document.createElement("p");
    price.innerText = `$ ${el.price.toFixed(2)}`;
    price.setAttribute("class", "prod-price");

    let like = document.createElement("button");
    like.setAttribute("class", "heart-back");
    like.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;

    like.addEventListener("click", (e) => {
      like.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>`;
    });

    product_box.append(like, img_div, title, price);
    items.append(product_box);
  });
};

let indexdata_social = async () => {
  let res = await fetch("https://lovoda.herokuapp.com/api/Data")
  let data = await res.json()
  console.log(data)
  social_img_append(data)
}


indexdata_social()

let social_img_append = (data) => {
  let grid_img_list = document.getElementById("social");

  let shop_feed_list = document.createElement("div");
  shop_feed_list.setAttribute("id", "shop-feed-list");

  data.forEach((item) => {
    let div = document.createElement("div");
    //  add link
    div.onclick=()=>{
      window.location.href="./shop_all.html"
    }

    let img = document.createElement("img");
    img.src = item.img;
    img.setAttribute("class", "grid-img");

    div.append(img,);
    shop_feed_list.append(div);
  });
  grid_img_list.append(shop_feed_list);
};


let indexdata_load = async () => {
  let res = await fetch("https://lovoda.herokuapp.com/api/load_more")
  let data = await res.json()
  console.log(data)
  social_img_append(data)
}
let load_more = document.getElementById("more")
load_more.onclick = () => {
  indexdata_load()
}

let searchbox=document.getElementById("search-box")
searchbox.oninput=()=>{
  debounce(1500,collectdata)
}
let collectdata = async () => {
    let send = document.getElementById("search-box").value;
    console.log(send)
    let res = await fetch(`https://lovoda.herokuapp.com/api/Arrayofproducts?q=${send}`)
    let data = await res.json()
    console.log(data)
    appendfun(data)
}
let id;
let debounce = (delay, fn) => {
    if (id) clearInterval(id)
    id = setTimeout(() => {
        fn()
    }, delay)
}
// search function
let searchboxappen=document.getElementById("searchboxappen")
let appendfun=(data)=>{
  searchboxappen.innerHTML=""
    data.forEach(el => {
        let div=document.createElement("div")
        div.onclick=()=>{
            window.location.href="shop_all.html"
        }
        div.setAttribute("id","searchboxappend")
        let img=document.createElement("img")
        img.src=el.image
        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("id","imgdivset")
        imgdiv.append(img)
        let h3=document.createElement("h3")
        h3.innerText=el.head
        div.append(imgdiv,h3)
        searchboxappen.append(div)
    });
}

let slideicon=document.getElementById("slideicon")
slideicon.onclick=()=>{
  searchboxappen.innerHTML=""
}
// collectdata()
function storethisdata(el){
    localStorage.setItem("productDetails",JSON.stringify(el))
    console.log(el)
    window.location.href="page2.html"
    // add cart page link
}