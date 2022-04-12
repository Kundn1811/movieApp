function Gomovie(){
  window.location.href = "movie.html"
}


let data = JSON.parse(localStorage.getItem("movies"));

let i =0
let image = document.createElement("img");
image.setAttribute("id","poster")
setInterval(function(){
if(i==data.length){
    i=0
}
image.src = data[i].url
document.getElementById("slideshow").append(image)

i++
},900)

data.map(function(el){
   
    var box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("id","img")
    image.src = el.url;
    let name = document.createElement("p");
    name.innerText = el.name
    let rating = document.createElement("p");
    rating.innerText = `Movie rating ${el.rating}`
   // console.log(name,image,rating)
    box.append(image,name,rating);
   
    
    document.querySelector("#movies").append(box)
   
})


function lth(){
    document.querySelector("#movies").innerHTML = "";
    let data = JSON.parse(localStorage.getItem("movies"));
    data.sort(function(a,b){
        return a.rating -b.rating
    })

    data.map(function(el){
    var box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("id","img")
    image.src = el.url;
    let name = document.createElement("p");
    name.innerText = el.name
    let rating = document.createElement("p");
    rating.innerText = `Movie rating ${el.rating}`
   // console.log(name,image,rating)
    box.append(image,name,rating);
   
    
    document.querySelector("#movies").append(box)
})
}

function htl(){
    document.querySelector("#movies").innerHTML = "";
    let data = JSON.parse(localStorage.getItem("movies"));
    data.sort(function(a,b){
        return b.rating -a.rating
    })

    data.map(function(el){
    var box = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("id","img")
    image.src = el.url;
    let name = document.createElement("p");
    name.innerText = el.name
    let rating = document.createElement("p");
    rating.innerText = `Movie rating ${el.rating}`
   // console.log(name,image,rating)
    box.append(image,name,rating);
   
    
    document.querySelector("#movies").append(box)
})
}

