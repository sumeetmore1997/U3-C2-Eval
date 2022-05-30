// Add the coffee to local storage with key "coffee"

const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

let bucketData= JSON.parse(localStorage.getItem("coffee")) || []
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log("res:",res)
    appendData(res)
})
.catch(function(err){
    console.log("err:",err)
})

function appendData(res){
res.menu.data.forEach(function(ele){

    let div = document.createElement("div")
    div.setAttribute("id","coffies")
    console.log(ele)

    let image = document.createElement("img")
    image.src=ele.image

    let type = document.createElement("p")
    type.innerText=ele.title

    let price = document.createElement("p")
    price.innerText=ele.price

    let btn = document.createElement("button")
    btn.setAttribute("id","add_to_bucket")
    btn.innerHTML="Add To Bucket"
    btn.addEventListener("click", function(){
        addToBucket(ele)
    })
    div.append(image,type,price,btn)

    menu.append(div)
})

function addToBucket(ele){
    console.log(ele)
    bucketData.push(ele);
    localStorage.setItem("coffee",JSON.stringify(bucketData));
    document.querySelector("#coffee_count").innerText=bucketData.length
}
}
