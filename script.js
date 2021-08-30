const nextBtn = document.getElementById('next')

const prevBtn = document.getElementById('prev')

const circles = document.querySelectorAll('.circle')
console.log(circles);

// const prog = document.getElementById('progress')
// const progStyles = window.getComputedStyle(prog)
// let progWidth = progStyles.getPropertyValue('width')

// console.log(progWidth);

nextBtn.addEventListener('click', () => {
  i = 0

  console.log('click');
  
  while (i < circles.length) {
    
    if (circles[i].classList.contains('active')) {
      i = i + 1
    } else {
      console.log(`clicked ${i} ${circles[i].innerHTML}`);
      document.getElementById('prev').removeAttribute('disabled')
      circles[i].classList.add('active')
      return
    }

  }


  


  // console.log('clicked1');
  // circles[0].classList.add('active')
  // document.getElementById('prev').removeAttribute('disabled')
})



prevBtn.addEventListener('click', () => {

})