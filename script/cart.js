// import { navbar, footer } from "../components/navbar.js";
// let navbarContainer = document.getElementById("navbar");
// let footerContainer = document.getElementById("footer");

// navbarContainer.innerHTML = navbar();
// footerContainer.innerHTML = footer();

// home redirect
// let logo = document.getElementById("logo");
// logo.addEventListener("click", () => {
//   window.location.href = "index.html";
// });

//cart item count


// let arr=[{
//   image: "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030100160-3__70321_493x.jpg?v=1645115635",
// name: "Thin and Thin Chain Bracelet(18K)",
// price: 24,
// quantity: "3"
// }]
// // let cart_items = JSON.parse(localStorage.getItem("productofcart")) || [];
// let cart_items=arr
// let loginUser = JSON.parse(localStorage.getItem("loginUser")) || null;
// let sumCount = 0;

// let displayCartCount = () => {
//   let cart_items = JSON.parse(localStorage.getItem("productofcart")) || [];
//   let loginUser = JSON.parse(localStorage.getItem("loginUser")) || null;
//   let total_cart_item = document.getElementById("total-cart-item");
//   let sumCount = 0;
//   if (loginUser == null) {
//     total_cart_item.innerText = sumCount;
//   } else {
//     if (cart_items.length > 0) {
//       let elements = cart_items.filter((ele) => {
//         if (loginUser.email == ele.email) return ele;
//       });

//       for (let i = 0; i < elements.length; i++) {
//         let x = elements[i].cartItems;
//         for (let j = 0; j < x.length; j++) {
//           sumCount += x[j].count;
//         }
//       }
//       total_cart_item.innerText = sumCount;
//     } else {
//       total_cart_item.innerText = sumCount;
//     }
//   }
// };
// displayCartCount();

// // redirect to account/login
// let login_icon = document.getElementById("login-icon");
// login_icon.addEventListener("click", () => {
//   if (loginUser) {
//     window.location.href = "account.html";
//   } else {
//     window.location.href = "login.html";
//   }
// });

// // append total cart price Display
// let displayTotalPrice = () => {
//   let cart_items = JSON.parse(localStorage.getItem("productofcart")) || [];
//   let loginUser = JSON.parse(localStorage.getItem("loginUser")) || null;
//   let total_sum_amount = document.getElementById("subtotal");
//   let totalSumAmount = 0;
//   if (loginUser == null) {
//     total_sum_amount.innerText = `$${totalSumAmount.toFixed(2)}`;
//   } else {
//     if (cart_items.length > 0) {
//       let elements = cart_items.filter((ele) => {
//         if (loginUser.email == ele.email) return ele;
//       });
//       for (let i = 0; i < elements.length; i++) {
//         let x = elements[i].cartItems;
//         for (let j = 0; j < x.length; j++) {
//           totalSumAmount += x[j].count * x[j].price;
//         }
//       }
//       total_sum_amount.innerText = `$${totalSumAmount.toFixed(2)}`;
//     } else {
//       total_sum_amount.innerText = `$${totalSumAmount.toFixed(2)}`;
//     }
//   }
// };
// displayTotalPrice();

// // cart product append function
// let totalRowPrice = 0;
// let totalCartPrice = 0;

// let appendFunction = (data) => {
//   if (!data) return;
//   let products_list = document.getElementById("products-list");
//   products_list.innerHTML = "";

//   // filtering current user cart_items
//   let cartData = [];
//   let userIndex = null;
//   if (loginUser == null) {
//     console.log("Login to get Cart Item");
//   } else {
//     if (cart_items.length > 0) {
//       let elements = cart_items.filter((ele, index) => {
//         if (loginUser.email == ele.email) {
//           userIndex = index;
//           return ele;
//         }
//       });

//       for (let i = 0; i < elements.length; i++) {
//         let x = elements[i].cartItems;
//         for (let j = 0; j < x.length; j++) {
//           cartData.push(x[j]);
//         }
//       }
//     }
//   }
//   cartData.forEach((element, index, array) => {
//     let row = document.createElement("div");
//     row.setAttribute("id", "row");

//     let img_secc = document.createElement("div");
//     img_secc.setAttribute("id", "img-secc");

//     let img = document.createElement("img");
//     img.src = element.image;

//     let prod_description = document.createElement("div");
//     prod_description.setAttribute("id", "prod_description");

//     let p1 = document.createElement("p");
//     p1.innerText = element.head;
//     p1.setAttribute("id", "prod-title");

//     let p2 = document.createElement("p");
//     let price = Number(element.price);
//     price = price.toFixed(2);
//     p2.innerText = `$${price}`;
//     p2.setAttribute("id", "prod-price");

//     prod_description.append(p1, p2);
//     img_secc.append(img, prod_description);

//     let btn_action = document.createElement("div");
//     btn_action.setAttribute("id", "btn-action");

//     let counter = document.createElement("div");
//     counter.setAttribute("id", "counter");

//     let btn1 = document.createElement("button");
//     btn1.setAttribute("id", "dec");
//     btn1.innerText = "-";

//     let btn2 = document.createElement("button");
//     btn2.setAttribute("id", "count-num");
//     btn2.innerText = element.count;

//     let btn3 = document.createElement("button");
//     btn3.setAttribute("id", "inc");
//     btn3.innerText = "+";

//     let trash = document.createElement("i");
//     trash.setAttribute("class", "fa fa-trash-o");
//     trash.setAttribute("aria-hidden", "true");

//     // remove from cart function
//     trash.addEventListener("click", () => {
//       array.splice(index, 1);
//       let obj = {
//         email: loginUser.email,
//         cartItems: array,
//       };
//       let newArray = [];
//       newArray.push(obj);

//       localStorage.setItem("productofcart", JSON.stringify(newArray));
//       displayCartCount();
//       displayTotalPrice();
//       window.location.reload();
//     });

//     counter.append(btn1, btn2, btn3);
//     btn_action.append(counter, trash);

//     let row_price_display = document.createElement("div");
//     row_price_display.setAttribute("id", "row-price-display");

//     // total row price
//     let p3 = document.createElement("p");
//     let total = (element.price * element.count).toFixed(2);
//     totalRowPrice += +total;
//     p3.innerText = `$${total}`;

//     // increment the counter by one
//     btn3.addEventListener("click", (e) => {
//       qty++;
//       total = +total;
//       total += element.price;
//       total = Number(total).toFixed(2);

//       btn2.innerText = qty;
//       p3.innerText = `$${total}`;

//       //store updated data to LS
//       element.count = qty;
//       cart_items.splice(userIndex, 1);
//       let obj = {
//         email: loginUser.email,
//         cartItems: array,
//       };
//       cart_items.push(obj);
//       localStorage.setItem("productofcart", JSON.stringify(cart_items));
//       displayCartCount();
//       displayTotalPrice();
//     });

//     // decrement the counter by one
//     let qty = element.count;
//     btn1.addEventListener("click", (e) => {
//       if (qty > 1) {
//         qty--;
//         total = +total;
//         total -= element.price;
//         total = Number(total).toFixed(2);
//         p3.innerText = `$${total}`;

//         // store updated data to LS
//         element.count = qty;
//         cart_items.splice(userIndex, 1);
//         let obj = {
//           email: loginUser.email,
//           cartItems: array,
//         };
//         cart_items.push(obj);
//         localStorage.setItem("productofcart", JSON.stringify(cart_items));
//         displayCartCount();
//         displayTotalPrice();
//       }
//       btn2.innerText = qty;
//     });

//     row_price_display.append(p3);

//     row.append(img_secc, btn_action, row_price_display);
//     products_list.append(row);
//   });
// };
// appendFunction(cart_items);

// // redirect to checkout page




// new
let cart_itemsss = JSON.parse(localStorage.getItem("productofcart")) || [];
let arrmain=[]
let displayCartsec=(data)=>{
  data.forEach((el)=>{
    let div=document.createElement("div")
    div.id="cartpagediv"
    let cartimg=document.createElement("img")
    cartimg.src=el.image
    cartimg.id="cartimgid"
    let cartimgdiv=document.createElement("div")
    cartimgdiv.append(cartimg)
    cartimgdiv.id="cartimgdiv"
    let name=document.createElement("h3")
    name.innerText=el.name
    name.id="cartname"
    let quantity=document.createElement("h3")
    quantity.innerText=el.quantity
    quantity.id="quantitycart"
    let p3=document.createElement("h1")
    let total = (el.price * el.quantity).toFixed(2);
    
    p3.innerText = `$${total}`;
    p3.id="totalamount"

    arrmain.push(el)
    console.log(arrmain)
    
    div.append(cartimgdiv,name,quantity,p3)
    document.getElementById("products-list").append(div)
  })
  
  
}
displayCartsec(cart_itemsss)

let finalss= document.getElementById("checkout")
 finalss.onclick=()=>{
  console.log(cart_itemsss);
  localStorage.setItem("finals",JSON.stringify(arrmain))
  window.location.href="./checkout.html"
    
 } 
 
    


  // for (let i = 0; i < elements.length; i++) {
  //   let x = elements[i].cartItems;
  //   if (x.length > 0) flag = true;
  // }
  