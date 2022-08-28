let subTotal = 0;
let subTotalWithoutDiscount = 0;

// product display function
// let displayProductList = (cart_items, loginUser) => {
//   if (!cart_items) return;
//   let productList = document.getElementById("product-list");
//   productList.innerHTML = "";

//   let elements = cart_items.filter((ele) => {
//     if (loginUser.email == ele.email) return ele;
//   });

//   let data = [];
//   for (let i = 0; i < elements.length; i++) {
//     let valuee = elements[i].cartItems;
//     for (let j = 0; j < valuee.length; j++) {
//       data.push(valuee[j]);
//     }
//   }

//   data.forEach((element) => {
//     let row = document.createElement("div");
//     row.setAttribute("id", "row");

//     let img_box = document.createElement("div");
//     img_box.setAttribute("id", "img-box");

//     let p1 = document.createElement("p");
//     p1.innerText = element.count;

//     let img = document.createElement("img");
//     img.src = element.image;

//     img_box.append(p1, img);

//     let title = document.createElement("h3");
//     title.innerText = element.head;
//     title.setAttribute("id", "che_title");

//     let price = document.createElement("h3");
//     let totalPrice = element.count * element.price;
//     subTotal += totalPrice;
//     subTotalWithoutDiscount += totalPrice;

//     totalPrice = totalPrice.toFixed(2);
//     price.innerText = `$${totalPrice}`;
//     price.setAttribute("id", "che_price");

//     row.append(img_box, title, price);
//     productList.append(row);

//   });

// };

let cart_items = JSON.parse(localStorage.getItem("finals")) || [];
let loginUser = JSON.parse(localStorage.getItem("loginUser")) || null;
// displayProductList(cart_items, loginUser);



let displaySubTotal = (data) => {
  let sub_top = document.getElementById("sub-total-top");
  let sub_bottom = document.getElementById("sub-total-bottom");
  let sbTotal = localStorage.getItem("discountSubTotal");
  let productlist=document.getElementById("product-list")
data.forEach((el)=>{
  let h3=document.createElement("h3")
  let total = (el.price * el.quantity).toFixed(2);

  h3.innerText=total
  sub_top.append(h3)
  let sub_bottoms=document.createElement("h2")
  sub_bottoms.innerText=`$${total*0.82}`
  sub_bottom.append(sub_bottoms)

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

    div.append(cartimgdiv,name)
    productlist.append(div)
})

};
displaySubTotal(cart_items);






let form = document.querySelector("form");



let checkoutFunction = (event) => {
  event.preventDefault();

  // let elements = cart_items.filter((ele, index) => {
  //   if (loginUser.email == ele.email) {
  //     return ele;
  //   }
  // });


  let email_mobile = form.emailmobile.value;
  let country = form.country.value;
  let firstname = form.firstname.value;
  let lastname = form.lastname.value;
  let company = form.company.value;
  let address = form.address.value;
  let apartment = form.apartment.value;
  let city = form.city.value;
  let state = form.state.value;
  let zipcode = form.zipcode.value;

  if (email_mobile == "") {
    alert("Please enter a email or mobile number");
  } else if (country == "") {
    alert("Please select a country");
  } else if (firstname == "") {
    alert("Please enter first name");
  } else if (lastname == "") {
    alert("Please enter last name");
  } else if (address == "") {
    alert("Please enter address");
  } else if (city == "") {
    alert("Please enter city");
  } else if (state == "") {
    alert("Please select state");
  } else if (zipcode == "") {
    alert("Please enter zipcode");
  } 
  else {
    let flag = false;
    while (true) {
      let msg = prompt("We have sent a OTP, Enter this here (e.g:1234)");
      if (msg == 1234) {
        let shippingAddress = {
          email_mobile: email_mobile,
          country: country,
          firstname: firstname,
          lastname: lastname,
          company: company,
          address: address,
          apartment: apartment,
          city: city,
          state: state,
          zipcode: zipcode,
        };
        let loginUserLS = JSON.parse(localStorage.getItem("loginUser"));

        let randNum = Math.floor(Math.random() * 100000 + 1);
        let newOrders = {
          order_id: randNum,
          // email: loginUserLS.email,
          shippingAddress: shippingAddress,
          orderItems: cart_items,
        };
        // orders.push(newOrders);
        // localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.removeItem("#");
        localStorage.removeItem("discountAmount");
        localStorage.removeItem("cuponApply");
        localStorage.removeItem("discountSubTotal");
        alert("Congratulations! your orders successfully orderd ");
        flag = true;
      } 
      else {
        alert("Wrong OTP!");
        flag = false;
      }
      if (flag == false) continue;
      else if (flag==true) {
        window.location.href = "./index.html";
        break;
      }
    }
  }
};
form.addEventListener("submit", checkoutFunction);
