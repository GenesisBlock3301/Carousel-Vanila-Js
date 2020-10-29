const slides = document.querySelector('.slider-items').children;
const nextSlide = document.querySelector(".right-slide");
const prevSlide = document.querySelector(".left-slide");
const totalSlides = slides.length;
let index = 0;

nextSlide.onclick=function () {
     next("next");
};
prevSlide.onclick=function () {
     next("prev");
};

function next(direction){

   if(direction=="next"){
      index+=2;
       if(index >= totalSlides){
        index=0;
       }
   }
   else{
           if(index <= 0){
            index=totalSlides-1;
           }
           else{
            index-=2;
           }
    }

  for(let i=0;i < slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
  slides[index+1].classList.add("active");


}







