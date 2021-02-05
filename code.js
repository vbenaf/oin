window.onload = function(){
    const leftArrow = document.querySelector(".arrowLeft");
    const rightArrow = document.querySelector(".arrowRight");

    const points = document.querySelectorAll(".point");
    const images = document.querySelectorAll('.image-carousel');


    let index = 2;
    let ind = 0;

    leftArrow.addEventListener('click',function(){
        images[index].style.display="none";
        points[ind].classList.remove("active");
        if(index <= 0){
            index = 2;
            ind = 2;
            images[index].style.display = "block";
            points[ind].classList.add("active");
        }
        else{
            index-=1;
            ind-=1;
            images[index].style.display = "block";
            points[ind].classList.add("active");
        }

    })
    rightArrow.addEventListener('click',function(){
        images[index].style.display="none";
        points[ind].classList.remove("active");
        if(index >= images.length-1){
            index = 0;
            ind = 0;
            images[index].style.display = "block";
            points[ind].classList.add("active");
        }
        else{
            index+=1;
            ind+=1;
            images[index].style.display = "block";
            points[ind].classList.add("active");
        }
    })
}