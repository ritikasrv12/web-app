const colors=['yellow', 'green','red', 'purple','orange'];

function changecolor(){
    const colorIndex=parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex]
}

