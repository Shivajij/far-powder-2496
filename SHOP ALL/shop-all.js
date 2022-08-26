const url = `https://lovoda.herokuapp.com/api/Arrayofproducts`
     
     fetch(url)
    .then(function(res){
        return res.json()
        //append(res.data)
    })

    .then(function(res){
        //console.log([res]);
        append([res])
       //return data
    })
    .catch(function(res){
       // console.log(err);
    })
    

     function append([res]){
        //console.log(res)
        res.forEach(el => {
            //console.log(el);
            let container = document.getElementById("product-list")
            let div = document.createElement("div")
            let img = document.createElement("img")
            img.src=el.image;
            let p = document.createElement("p")
            p.innerText = el.head;
            let h3 = document.createElement("h3")
            h3.innerText=el.price;
            //console.log(img,p,h3);
            div.append(img,p,h3)
            container.append(div)


        });
     }
     append()
