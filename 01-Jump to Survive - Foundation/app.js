const character = document.querySelector('.character')
const enemy = document.querySelector('.enemy')

document.addEventListener('keydown', start)
document.addEventListener('keydown', jump)

// functions
function start(e) {
  if (e.keyCode === 32) {
    if (!enemy.classList.contains('animate')) {
      enemy.classList.add('animate')
    }
  }
}
function jump(e) {
  //   console.log(e)
  if (e.keyCode === 38) {
    if (!character.classList.contains('animate')) {
      character.classList.add('animate')
    }
    setTimeout(() => {
      character.classList.remove('animate')
    }, 500)
  }
}

setInterval(() => {
  //   console.log('logged')
  const characterBottom = parseInt(
    window.getComputedStyle(character).getPropertyValue('bottom'),
  )
  let enemyLeft = parseInt(
    window.getComputedStyle(enemy).getPropertyValue('left'),
  )
  if (enemyLeft < 30 && enemyLeft > 0 && characterBottom <= 50) {
    enemy.classList.remove('animate')
    enemy.style.left = '30px'
    alert('you loose')
  }
}, 10)
