// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketData= JSON.parse(localStorage.getItem("coffee"))
console.log(bucketData)

let total = bucketData.reduce(function(sum,ele,index,arr){
    return sum + Number(ele.price);
},0)
document.querySelector("#total_amount").innerText=`${total}`

bucketData.map(function (ele,index){

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
    btn.setAttribute("id","remove_coffee")
    btn.innerHTML="Remove"
    btn.addEventListener("click", function(){
        removeItem(ele,index)
    })
    div.append(image,type,price,btn)

    document.querySelector("#remove_coffee").append(div)
})

function removeItem(ele,index){
    console.log(ele.index)
    bucketData.splice(index,1)
    console.log(bucketData);
    localStorage.setItem("coffee",JSON.stringify(bucketData));
    window.location.reload();
}