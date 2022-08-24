let indexdata = async () => {
    let res = await fetch("https://lovoda.herokuapp.com/api/productData")
    let data = await res.json()
    console.log(data)
    item_append(data)
}
indexdata()
let items = document.getElementById("items")
let item_append = (data) => {
    items.innerHTML = ""
    data.forEach((el) => {
        let card = document.createElement("div")
        card.setAttribute("class", "card_div");


        let img_box = document.createElement("div");
        img_box.setAttribute("class", "img_box");
        let img = document.createElement("img");
        img.src = el.image;
        img.loading = "lazy";
        img_box.append(img);


        let love_btn = document.createElement("button");
        love_btn.setAttribute("class", "heart-back");
        love_btn.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;

        love_btn.addEventListener("click", (e) => {
            love_btn.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>`;
        });

        let title = document.createElement("a");
        title.innerText = el.head;
        title.setAttribute("class", "title");

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
        price.setAttribute("class", "price_tag");

        card.append(img_box, love_btn, title, price)
        items.append(card)
    });
}
indexdata_social()


let indexdata_social = async () => {
    let res = await fetch("https://lovoda.herokuapp.com/api/Data")
    let data = await res.json()
    console.log(data)
    social_img_append(data)
}

indexdata_social()
let social_img_append = (data) => {
    let social_img = document.getElementById("social_img")
    let social_list = document.createElement("div");
    social_list.setAttribute("id", "social_list");

    data.forEach((el) => {
        let div = document.createElement("div");
        div.addEventListener("click", () => {
            window.location.href = "";
        });
        let shopnow = document.createElement("button")
        shopnow.innerText = "SHOP IT"
        shopnow.setAttribute("id", "shop_it")

        let img = document.createElement("img");
        img.src = el.img;
        img.setAttribute("class", "grid-img");

        div.append(img, shopnow);
        social_list.append(div);
    })
    social_img.append(social_list)
}


let indexdata_load = async () => {
    let res = await fetch("https://lovoda.herokuapp.com/api/load_more")
    let data = await res.json()
    console.log(data)
    social_img_append(data)
}
let load_more = document.getElementById("load_more")
load_more.onclick = () => {
    indexdata_load()
}


