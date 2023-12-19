const colors = ["green", "red", "rgba(133,122,200)", "purple", 'yellow',
'pink','grey','orange'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    //console.log(document.body)
    const randomNumber = Math.floor(Math.random()*(colors.length-1))
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent=colors[randomNumber]
    
})

// function getRandomNumber() {
//     Math.round(Math.random()*3)
// }