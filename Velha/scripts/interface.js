document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event)
{
    let square = event.target;
    let position2 = square.id;

    if (handleMove(position2))
    {
        setTimeout(() =>
        {
            if(playerTime == 0){
                alert("Pesseguinho Venceu!");
            }
            else
            {
                alert("Moranguinho Venceu!");
            }
        }, 10);
    }
   updateSquare(position2);
}

function updateSquare(position2)
{
    let square = document.getElementById(position2.toString());
    let symbol = board[position2];

    square.innerHTML = `<div class='${symbol}'></div>`
}
