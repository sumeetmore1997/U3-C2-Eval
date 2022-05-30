
let id;
function checkOut(e){
e.preventDefault();
alert("Your order is accepted")

const myTimeout=setTimeout(myorder,3000)

function myorder(){
    alert("Your order is being Prepared")
}

function mystopfunc(){
    clearTimeout(myTimeout)
}

const time = setTimeout(timecoffiee,8000)

function timecoffiee(){
    alert("Your order is being packed")
}
function mystopfunc(){
    clearTimeout(time)
}

const delivery = setTimeout(delivercoffiee, 10000)

function delivercoffiee(){
    alert("Your order is out for delivery")
}
function mystopfunc(){
    clearTimeout(delivery)
}

const deliverd = setTimeout(delivercoffiee,12000)

function delivercoffiee(){
    alert("Order delivered")
}
function mystopfunc(){
    clearTimeout(deliverd)
}

}