const form = document.querySelector("form");

const btnSubmit = document.querySelector('button');
const name = document.getElementById("txtName");
const email = document.getElementById("txtEmail");
const number = document.getElementById("txtPhone");
const subject = document.getElementById("txtSub");
const mess = document.getElementById("txtResponse");
const dict = [];
btnSubmit.addEventListener('click', () =>{
    checkinputs();
    console.log(dict);
})
// function submission() {
//     checkinputs();
// }
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkinputs();
// });

function checkinputs() {
    const items = document.querySelectorAll(".item");
    for(const item of items) {
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        
        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.add("error");
                item.parentElement.classList.remove("error");
            } 
            else{
                item.classList.add("error");
                item.parentElement.classList.remove("error");
            } 
        });
        dict = dict +item;
        console.log(item)
    }
}