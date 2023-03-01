## JavaScript Game: "Jump and avoid enemy"

#### Resource

[Youtube](https://www.youtube.com/watch?v=bG2BmmYr9NQ)

### Codes for the game

```html
<div class="game">
  <div class="game-info">
    <h4 style="color: red">Instruction</h4>
    <p>press <span>'Space Bar'</span> to start</p>
    <p>press <span>↑</span> key to 'jump'</p>
  </div>
  <div class="game-container">
    <div class="character"></div>
    <div class="enemy"></div>
  </div>
</div>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  display: flex;
  justify-content: center;
}

.game-info {
  width: 500px;
  border: 2px solid #000;
  padding: 1rem;
}

.game-container {
  width: 500px;
  height: 300px;
  border: 2px solid #000;
  overflow: hidden;
  position: relative;
}
.character {
  width: 30px;
  height: 80px;
  background-color: green;
  position: absolute;
  bottom: 0;
  left: 0;
}
.character.animate {
  animation: characterJump 500ms linear;
}
.enemy {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 500px;
}
.enemy.animate {
  animation: enemyMove 1s linear infinite;
}

/* animations */
@keyframes enemyMove {
  0% {
    left: 500px;
  }
  100% {
    left: -50px;
  }
}
@keyframes characterJump {
  0% {
    bottom: 0;
  }
  40% {
    bottom: 100px;
  }
  60% {
    bottom: 100px;
  }
  100% {
    bottom: 0;
  }
}
```

```js
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
```

_The End_
