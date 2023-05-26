document.addEventListener("DOMContentLoaded", ()=>{
  const crContainer = document.querySelector('.carousel-container');
  const crTrack = crContainer.querySelector('.carousel');
  const btnPrev = crContainer.querySelector('button.carousel-prev');
  const btnNext = crContainer.querySelector('button.carousel-next');
  const crItems = crTrack.querySelectorAll('.carousel-item');

  let currentWidth = crContainer.clientWidth
  let currentIndex = 0;
  let maxIndex = crItems.length - 1;
  console.log("Linea 12", {btnPrev, btnNext});
  const moveTrackTo = (index)=>{
    console.log("Move To:", index);
    crTrack.style.transform = `translateX(-${(index * currentWidth)}px)`;
    currentIndex = index;
  }
  btnNext.addEventListener("click", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(1+currentIndex > maxIndex) {
      moveTrackTo(0);
    } else {
      moveTrackTo(currentIndex + 1);
    }
  });
  btnPrev.addEventListener("click", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(currentIndex - 1 < 0) {
      moveTrackTo(maxIndex);
    } else {
      moveTrackTo(currentIndex - 1);
    }
  });

});
