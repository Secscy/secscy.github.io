const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"


startGame();

function startGame() {
    initializeCards(game.createCardsFromTechs());
}


function initializeCards(cards) {

    let divCertaPraAgora = "div1";
    let divQueToMechendo = document.getElementById("div1");

    let j = 0;
    while (j < game.cards.length) {

        switch (j) {
            case  4: divCertaPraAgora = "div2"; break;
            case  8: divCertaPraAgora = "div3"; break;
            case 12: divCertaPraAgora = "div4"; break;
            case 16: divCertaPraAgora = "div5"; break;
            default: break;
            //Ele só deve entrar no default uma vez (no 0);
            // console.log("Bom dia! o J atual é: ");
            // console.log(j);
        }

        divQueToMechendo = document.getElementById(divCertaPraAgora);

        for (let i = 0; i < 4; i++) {
            let card = game.cards[j];

            let cardElement = document.createElement('div');
            cardElement.id = card.id;
            cardElement.classList.add(CARD);
            cardElement.dataset.icon = card.icon;

            createCardContent(card, cardElement);

            cardElement.addEventListener('click', flipCard);

            divQueToMechendo.appendChild(cardElement);

            j++;
        }
    }

    // function initializeCards(cards) {
    //     let gameBoard = document.getElementById("gameBoard");
    //     gameBoard.innerHTML = '';


    //     console.log(game.cards);

    //     let cardRow = document.createElement('div');

    //     for(let i = 0; i < game.cards.length ; i++)
    //     {
    //         let card = game.cards[i];

    //         let cardElement = document.createElement('div');
    //         cardElement.id = card.id;
    //         cardElement.classList.add(CARD);
    //         cardElement.dataset.icon = card.icon;

    //         createCardContent(card, cardElement);

    //         cardElement.addEventListener('click', flipCard);

    //         cardRow.appendChild(cardElement);

    //         if( i == 3 || i == 7 || i == 11 || i == 15 || i == 19) {
    //             gameBoard.appendChild(cardRow);

    //             console.log("Passei Aqui no i = " + i.toString());

    //             cardRow = null;
    //             cardRow = document.createElement('div');
    //         }

    //     }

    /*let varTemp = 0;
    while(vartemp <)
        começa a montar a div

        monta carta
        adiciona carta

        if i atual divisível por 4{
            termina de montar a div
        }
        i++

    */
    // game.cards.forEach(card => {


    //     let cardElement = document.createElement('div');
    //     cardElement.id = card.id;
    //     cardElement.classList.add(CARD);
    //     cardElement.dataset.icon = card.icon;

    //     createCardContent(card, cardElement);

    //     cardElement.addEventListener('click', flipCard);
    //     gameBoard.appendChild(cardElement);

    // })

}

function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if (face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);

    } else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}

function flipCard() {
    if (game.setCard(this.id)) {

        this.classList.add("flip");
        if (game.secondCard) {


            if (game.checkMatch()) {
                game.clearCards();
                if (game.checkGameOver()) {
                    let gameOverLayer = document.getElementById("gameOver");
                    gameOverLayer.style.display = 'flex';
                }
            }
            else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id);

                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');
                    game.unflipCards();
                }, 1000);
            }
        }
    }
}

function restart() {
    // game.clearCards();
    // startGame();
    // let gameOverLayer = document.getElementById("gameOver");
    // gameOverLayer.style.display = 'none';
    window.location.reload();
}