// let name = "riya";
// let age = "22";

// console.log("My ... name is " + name +". she is " + age);
// console.log(`My ... name is ${name} . she is ${age}`);

// let buchi = document.getElementById("buchi");

// buchi.innerText = "<b>hello</b>";
// buchi.innerText = "<b>hello</b>";


// let boxes = document.getElementsByClassName("box");

// let para = document.getElementsByClassName("para");

// boxes[1].innerHTML = "bye";

// para[0].innerHTML = "holaa";


// Events


// let isShow = true
// const myFun = () => {
//    let display = document.getElementById("display");
// //    display.innerHTML = display.innerHTML === "Hello" ? "bye" : "Hello"

// if (isShow) {
//     display.src = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
//     isShow = !isShow
// }  else {
//     display.src = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
//     isShow = !isShow
// }
    
// };

// const add = () => {
//     event.preventDefault();
//     let val1 = Number(document.getElementById("value1").value)
//     let val2 = Number(document.getElementById("value2").value)
//     let display = document.getElementById("display")

//     display.innerHTML = `sum of ${val1} and ${val2} is ${val1 + val2}`

// }

// changing color


const  changeColor =() => {
    let display = document.getElementById("display");
    let color = "#" // 6
    let colorCOdes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

    for(let i=0;i<6;i++){
        let randNo = Math.floor(Math.random() * 16)
        color += colorCOdes[randNo]
    }

    display.style.backgroundColor = color
}

changeColor()
