document.addEventListener('DOMContentLoaded', () => {
    let positions = document.querySelectorAll(".position")

    positions.forEach((position) =>{
        position.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let pos = event.target.id;
    let state = putImagePlayer(pos);
    upDateScreenPos(state, pos);
    setTimeout(() => {thereIsAWinner()}, 10)
}

function upDateScreenPos(state, pos){
    let posToChange = document.getElementById(pos);
    posToChange.innerHTML = "<div class='" + state[pos] + "'=></div>";  
}

function reset(){
    let stateReset = resetGamer();
    for ( i = 0; i <= 8; i ++){
        let posToClear = document.getElementById(i);
        posToClear.innerHTML = "";
    }
}