window.onload = function(){
    const leftArrow = document.querySelector(".arrowLeft");
    const rightArrow = document.querySelector(".arrowRight");

    const images = document.querySelectorAll('.image-carousel');

    let index = 2;

    leftArrow.addEventListener('click',function(){
        images[index].style.display="none";
        if(index <= 0){
            index = 2;
            images[index].style.display = "block";
        }
        else{
            index-=1;
            images[index].style.display = "block";
        }

    })
    rightArrow.addEventListener('click',function(){
        images[index].style.display="none";
        if(index >= images.length-1){
            index = 0;
            images[index].style.display = "block";
        }
        else{
            index+=1;
            images[index].style.display = "block";
        }
    })
}