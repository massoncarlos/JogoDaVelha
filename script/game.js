let state = ['','','','','','','','','']
let player = 0;
let imagePlayer = ['o','x']
let gameOver = false;
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function putImagePlayer(pos){
    if(state[pos] !='' || gameOver == true){
        return
    }
    state[pos] = imagePlayer[player];
    player == 0 ? player =1 : player = 0;
    return state
}

function thereIsAWinner(){
    let loopLenght = win.length
    for (i =0; i < loopLenght; i++ ){
        if (state[win[i][0]] == state[win[i][1]] &&
            state[win[i][0]] == state[win[i][2]] &&
            state[win[i][0]] != ''){
                let playerWinner = state[win[i][0]] == 'o' ? 1 : 2
                gameOver = true;
                alert('There is a Winner!!! O jogador foi o Player ' + playerWinner)
            }
    }
}

function resetGamer(){
    player = 0;
    gameOver = false;
    for (i = 0; i < state.length; i++){
        state[i] = '';
    }
}