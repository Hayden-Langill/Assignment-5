let r = document.getElementById('input').value
const pi = 3.14
let n = 0

document.getElementById('button').addEventListener('click', area)
document.getElementById('button2').addEventListener('click', cir)

function area () {
  r = document.getElementById('input').value
  r = parseInt(r)
  r = r * r
  n = pi * r
  document.getElementById('answer').innerHTML = Math.floor(n)
}

function cir () {
  r = document.getElementById('input').value
  r = parseInt(r)
  n = (pi * r) * 2
  document.getElementById('answer').innerHTML = Math.floor(n)
}
