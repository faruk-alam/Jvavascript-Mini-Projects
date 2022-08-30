let allSlide = ["images/nudpic1.jpg","images/nudpic2.jpg","images/nudpic3.jpg","images/nudpic4.jpg","images/nudpic5.jpg"
,"images/nudpic6.jpg","images/nudpic7.jpg","images/nudpic8.jpg","images/nudpic9.jpg","images/nudpic10.jpg"]
let count = 0;

let firstSlide = document.querySelector('.firstpic');
document.querySelector('#button-next').addEventListener("click", ()=> {
    count++;
    if(count>=allSlide.length){
        firstSlide.src = allSlide[count];
        count = 0;
    }
    else{
        firstSlide.src = allSlide[count];
    }
})

document.querySelector('#button-pre').addEventListener("click", ()=>{
    count--;
    if (count<0){
        count = allSlide.length-1;
       firstSlide.src = allSlide[count];
    }
    else{
        firstSlide.src = allSlide[count]
    }
})