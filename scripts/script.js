let btn = document.querySelector("#btn");



btn.addEventListener("click", () => {

    let product = add("product");
    let date = add("date");
    let expense = add("expense");
    console.log(product + " " + date + " " + expense)
})

function add(string){
    let test = document.getElementById(string).value;
    return test;
}