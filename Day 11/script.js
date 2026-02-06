// function handleClick(){
//     document.querySelector("#head").style.color="Red"
//     document.getElementById("btn").textContent="Color Chnaged to Red"
// }
//Q2
// const handleClick= () => {
//     const image = document.createElement("img");
//     image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75YKiAGS2xGwGSwmAe0y8jSxjFiF1ZHPcSg&s")
//     image.setAttribute("alt","EYES");
//     document.getElementById("content").append(image);
// }
document.getElementById("btn").addEventListener("click",()=>{
    const image = document.createElement("img");
    image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75YKiAGS2xGwGSwmAe0y8jSxjFiF1ZHPcSg&s")
    image.setAttribute("alt","EYES");
    document.getElementById("content").append(image);
})