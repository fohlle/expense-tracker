let btn = document.querySelector("#btn");
let btnClear = [...document.querySelectorAll("#list li > button")];
let count = 0;
let sum = [];

function clear(string){
    string.addEventListener("click", () => {
        console.log(string.getAttribute("id"));
        let ul = document.getElementById("list");
        let list = document.getElementById(string.getAttribute("id"));
        ul.removeChild(list);
    })
}


function total(num){
    let total = document.getElementById("total");
    sum.push(+num);
    console.log(sum)
    let totalNum = sum.reduce( (t,n) => t + n);
    total.textContent = "Total" + ":" + totalNum;
}

btn.addEventListener("click", () => {

    let date = add("date");
    let product = add("product");
    let expense = add("expense");

    list(date,product,expense);
    total(expense);
    document.getElementById("product").value = "";
    document.getElementById("date").value = "";
    document.getElementById("expense").value = "";


})

function add(string){
    let test = document.getElementById(string).value;
    return test;
}
function list(s1,s2,s3){
    count++;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let btn = document.createElement("button");

    btn.textContent = "Clear";
    btn.setAttribute("id",count);
    li.setAttribute("id",count);

    clear(btn);

    div1.textContent = s1;
    div2.textContent = s2;
    div3.textContent = s3;
    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(div3);
    li.appendChild(btn);

    ul.appendChild(li);
}
