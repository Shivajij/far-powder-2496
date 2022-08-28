

// console.log("done")
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



 let wish111=document.getElementById("wishdiv")
 wish111.onclick=()=>{
  wislistfunction()
 }


let wislistfunction=()=>{
 let body=document.querySelector("#wishbody")
 let divapp=document.createElement("div")
divapp.setAttribute("id","wishlistdiv")

let butcan=document.createElement("h2")
butcan.innerText="X"
butcan.setAttribute("id","canceldiv")
butcan.addEventListener("click",function(){
cancelfunction()
})
divapp.append(butcan)



let  cancelfunction=()=>{
let cancell=document.getElementById("wishbody")
cancell.innerHTML=""
}

let im1=document.createElement("img")
im1.src="https://static.vecteezy.com/system/resources/previews/001/187/385/non_2x/heart-png.png"
let im2=document.createElement("h2")
im2.innerText="wishlist"
let im3=document.createElement("h2")
im3.innerText="Share"

let chil11=document.createElement("div")
chil11.setAttribute("id","c11hil")
let chil22=document.createElement("img")
chil22.src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
let chil33=document.createElement("img")
chil33.src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg"
let chil44=document.createElement("img")
chil44.src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=2000"
let chil55=document.createElement("img")
chil55.src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
let chilh5=document.createElement("h5")
chilh5.innerText="Go to wishlist page"
let chilbtt=document.createElement("button")
  chilbtt.innerText="+ ADD A NEW LIST"
chil11.append(chil22,chil33,chil44,chil55)
divapp.append(im1,im2,im3,chil11,chilh5,chilbtt)
let productswish=JSON.parse(localStorage.getItem("productofwishlist"))||[]

productswish.forEach((el)=>{

let divwiah=document.createElement("div")
divwiah.setAttribute("id","childdiv2")
let childwi=document.createElement("div")
childwi.setAttribute("id","divwiahdata")

let but1=document.createElement("img")
let but2=document.createElement("h5")
let but3=document.createElement("h4")
let but4=document.createElement("button")

but1.src=el.image
but2.innerText=el.name
but3.innerText=el.price
// console.log(but1,but2,but3,but4)
but4.innerText="ADD TO CART"
childwi.append(but2,but3)
divwiah.append(but1,childwi)
// divapp.append(but1,but2,but3,but4)
divapp.append(divwiah,but4)
body.append(divapp)

})

}

// wislistfunction()
let wish112=document.getElementById("wishlist")
wish112.onclick=()=>{
  addtowishlist()
}

let flag=false
let addtowishlist=()=>{
let first="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8xEN3FK9e5vn6Uq5H5e9dS9BGgAAMoRgpynHfvEsRKr7wCiRMfQYPzABkhkXniljAo4&usqp=CAU"
let secont="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0nfOhIIR6hG-N_5ut-xxfw733eij8yXBjQ&usqp=CAU"
let wishdiv=document.getElementById("wishlist")
let heartimg=document.getElementById("heartimg")
let productsdata=JSON.parse(localStorage.getItem("productDetails"))
if(flag==true)
{
 heartimg.src=first
 let proddel=JSON.parse(localStorage.getItem("productofwishlist"))

 proddel.forEach((el,i)=>{
   proddel.splice(i,1)
   localStorage.setItem("productofwishlist",JSON.stringify(proddel))

 })
   flag=false
}
else
{
 heartimg.src=secont
 

let productarr=JSON.parse(localStorage.getItem("productofwishlist"))||[]
productsdata.forEach((el)=>{
let cartdata={
image:el.image,
name:el.head,
price:`$ ${el.price}`,
quantity:document.getElementById("quantitynum").innerText
}
productarr.push(cartdata)
})
localStorage.setItem("productofwishlist",JSON.stringify(productarr))
 flag=true
}
}

// let dumarr=[]
// let dumdata={
//  image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-2_1.jpg?v=1659450313",
// hovimage:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-3_1_1100x.jpg?v=1659450313",
// quantity:document.getElementById("quantitynum").innerText,
// head:"dataName",
// price:"$10"
// }
// dumarr.push(dumdata)
// localStorage.setItem("productDetails",JSON.stringify(dumarr))

let img44="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-3_1_1100x.jpg?v=1659450313"
let img33="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-2_1.jpg?v=1659450313"
let dataarr2=[]
let  qqqq=()=>{
let datas=JSON.parse(localStorage.getItem("productDetails"))||[]
dataarr2.push(datas)
console.log(dataarr2);
datasfunction(dataarr2)
}
let datasfunction=(datasqq)=>{
let img3=document.createElement("img")
let img4=document.createElement("img")
img3.src=img33
img4.src=img44
document.getElementById("ggchi2").append(img3)
document.getElementById("gchi3").append(img4)
datasqq.forEach((el)=>{
let prices=document.getElementById("price")
prices.innerText=`$ ${el.price}`
let names=document.getElementById("name")
names.innerText=el.head
let img1=document.createElement("img")
img1.src=el.image
let img2=document.createElement("img")
img2.src=el.hovimage
document.getElementById("gchi1").append(img1)
document.getElementById("ggchi1").append(img2)

})

}
qqqq()


 let wish113=document.getElementById("addcart")

 wish113.onclick=()=>{
  addtocart()
 }
let addtocart=()=>{
let productsdata=dataarr2
let productarr=[]
productsdata.forEach((el)=>{
let cartdata={
image:el.image,
name:el.head,
price:el.price,
quantity:document.getElementById("quantitynum").innerText
}
productarr.push(cartdata)
})

localStorage.setItem("productofcart",JSON.stringify(productarr))
alert("Item added to your cart")
window.location.href="cart.html"
}

 let wish114=document.querySelector(".scrollfunc")
 wish114.onclick=()=>{
  scrollfunction()
 }
 let wish001=document.querySelector(".scrollfun")
 wish001.onclick=()=>{
  scrollfunction()
 }
let scrollfunction=()=>{
window.scrollTo(0, 1000);
// window.scrollBy(0, window.innerHeight)
}
 let wish115=document.getElementById("wishdiv")
 wish115.onclick=()=>{
  wislistfunction()
 }

let count=1
let wish116=document.getElementById("increace")
wish116.onclick=()=>{
  increace()
}
let increace=()=>{
count++
document.getElementById("quantitynum").innerText=count
}

 let wish117=document.getElementById("decreas")
 wish117.onclick=()=>{
  decreas()
 }
let decreas=()=>{
if(count>1)
count--
document.getElementById("quantitynum").innerText=count
}

 let wish118=document.querySelector(".reviewses")
 wish118.onclick=()=>{
  reviewses()
 }
 let wish18=document.querySelector("#reviewses")
 wish18.onclick=()=>{
  reviewses()
 }

let reviewses=()=>{
document.getElementById("questcreat").innerHTML=null
let qustop=document.querySelector("#questions")
qustop.style.borderBottom=""
let revdii=document.getElementById("revicreat")
revdii.innerHTML=""

 let revidiv=document.getElementById("revicreat")
let review=document.querySelector("#reviews")
review.style.borderBottom="solid 3px #dc8504"

let div=document.createElement("div")
div.setAttribute("id","divcontai")
let h4=document.createElement("h4")
h4.innerText="Rating"
let but1=document.createElement("button")
let but2=document.createElement("button")
let but3=document.createElement("button")
let but4=document.createElement("button")
let but5=document.createElement("button")
but1.innerHTML="&#9734;"
but2.innerHTML="&#9734;"
but3.innerHTML="&#9734;"
but5.innerHTML="&#9734;"
but4.innerHTML="&#9734;"
but1.setAttribute("class","star")
but2.setAttribute("class","star")
but3.setAttribute("class","star")
but4.setAttribute("class","star")
but5.setAttribute("class","star")


let h41=document.createElement("h4")
h41.innerText="Your review"

let input=document.createElement("input")
input.setAttribute("id","inputrevie")
input.placeholder="Why do you recommend..."

let inputpho=document.createElement("input")
inputpho.setAttribute("id","inputphoto")
inputpho.type="file"

let div1=document.createElement("div")
div1.addEventListener("click",()=>{
reviewposted()
})
let butpost=document.createElement("button")
butpost.innerText="Post"
butpost.setAttribute("id","butpost")
div1.setAttribute("id","butpostdiv")
div1.append(butpost)

div.append(h4,but1,but2,but3,but4,but5,h41,input,inputpho,div1)
revidiv.append(div)


const allstar= document.querySelectorAll(".star")
allstar.forEach((star,i)=>{
 star.onclick=function(){
     let current_star=i+1
     allstar.forEach((star,j)=>{
         if(current_star>=j+1)
         {
             star.innerHTML="&#9733";
         }
         else{
             star.innerHTML="&#9734"; 
         }
     })
 }
})


let reviewposted=()=>{
document.querySelector("#divcontai").innerHTML=""
let div=document.createElement("div")
div.setAttribute("id","divposted")
let h5=document.createElement("h3")
h5.innerText="Thank you for posting a review! It will be published very soon."
div.append(h5)
revdii.append(div)
}


}

 let wish119=document.getElementById("questionse")
 wish119.onclick=()=>{
  questions()
 }
 let wish19=document.querySelector(".questionss")
 wish19.onclick=()=>{
  questions()
 }
let questions=()=>{
let revidiv=document.getElementById("questcreat")
revidiv.innerHTML=""
let review=document.querySelector("#questions")
review.style.borderBottom="solid 3px #dc8504"

document.getElementById("revicreat").innerHTML=null
let qustop=document.querySelector("#reviews")
qustop.style.borderBottom=null


let div=document.createElement("div")
div.setAttribute("id","divcontai")
let input=document.createElement("input")
input.setAttribute("id","inputrevie")
input.placeholder="Your question..."

let div1=document.createElement("div")
div1.addEventListener("click",()=>{
reviewposted()
})
let butpost=document.createElement("button")
butpost.innerText="Post"
butpost.setAttribute("id","butpost")
div1.setAttribute("id","butpostdiv")
div1.append(butpost)

div.append(input,div1)
revidiv.append(div)


let reviewposted=()=>{
document.querySelector("#divcontai").innerHTML=""
let div=document.createElement("div")
div.setAttribute("id","divposted")
let h5=document.createElement("h3")
h5.innerText="Thank you for posting a question! Your question will appear on the site once we've answered it."
div.append(h5)
revidiv.append(div)
}
}


