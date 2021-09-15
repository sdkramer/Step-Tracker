const progress = document.getElementById('progress')

const nextBtn = document.getElementById('next')

const prevBtn = document.getElementById('prev')

const circles = document.querySelectorAll('.circle')
console.log(circles);

// const prog = document.getElementById('progress')
// const progStyles = window.getComputedStyle(prog)
// let progWidth = progStyles.getPropertyValue('width')

// console.log(progWidth);
let currentActive = 1

nextBtn.addEventListener('click', () => {
  currentActive++
 

  if(currentActive > circles.length) {
    currentActive = circles.length
  }

  console.log(`ca: ${currentActive}`);
  console.log(circles.length);

  update()
  // document.getElementById('prev').removeAttribute('disabled')
  // circles[currentActive].classList.add('active')
  
  // while (currentActive < circles.length) {
    
  //   if (circles[currentActive].classList.contains('active')) {
  //     i = i + 1
  //   } else {
  //     console.log(`clicked ${i} ${circles[i].innerHTML}`);
  //     document.getElementById('prev').removeAttribute('disabled')
  //     circles[currentActive].classList.add('active')
  //     return
  //   } 
  //   }
  // document.getElementById('next').setAttribute('disabled', '')

  })


  


  // console.log('clicked1');
  // circles[0].classList.add('active')
  // document.getElementById('prev').removeAttribute('disabled')



prevBtn.addEventListener('click', () => {

  currentActive--
  if(currentActive < 1) {
    currentActive = 1
  }

  update()

  
})

function update() {
  circles.forEach((circle, idx) => {
    // console.log(`circle: ${circle}; index: ${idx}`)
    if(idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  if(currentActive === 1) {
    prevBtn.disabled = true
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}