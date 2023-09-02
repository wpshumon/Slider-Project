let sliderBox = document.querySelector(".sliderBox");
let allImagesArr = [...document.querySelector(".sliderImgs").children];
let currentValue = 0;

//Creating Navigator Buttons
let navigatorDiv = document.createElement('div')
navigatorDiv.classList.add('navigator')
navigatorDiv.innerHTML = `
                <button id="prev" onclick="prevImg()">&larr;</button>
                <button id="next" onclick="nextImg()">&rarr;</button>
`;
sliderBox.append(navigatorDiv)

let prevImg = () =>{
    currentValue--; 
    if(currentValue < 0){
        currentValue = allImagesArr.length - 1;
    }
    currentImg();
}
let nextImg = () =>{
    currentValue++;
    if(currentValue > allImagesArr.length - 1){
        currentValue = 0;
    }
    currentImg();
}

// let prevBtn = document.getElementById("prev");
// let nextBtn = document.getElementById("next");
// if(currentValue == 0){
//     prevBtn.style.display = "none";
// } else {
//     prevBtn.style.display = "block";
// }
// if(currentValue == allImagesArr.length - 1){
//     nextBtn.style.display = "none";
// } else{
//     nextBtn.style.display = "block";
// }
allImagesArr.forEach((value, index)=>{
    value.style.left = `${index * 100}%`;
})

let currentImg = () =>{
    allImagesArr.forEach((value) =>{
        value.style.transform = `translateX(-${currentValue * 100}%)`;
    })
}
