const externals = {};

const handlers = {};

const elements = {};



const renderStartButtons = () =>{

    if(elements.gameStartButton){
        elements.gameStartButton.empty();
    }
    elements.gameStartButton = $("<center><a href='QuizGame.html'> <button id = 'startGame'>Start Game!</button></a></center>");

    elements.app.append(elements.gameStartButton);

    elements.returnButton = $("<center><button id = 'returnMainPage'>Return</button></center>");
    elements.returnButton.click(handlers["buttonClick1"]);
    elements.app.append(elements.returnButton);

}



externals.removeElements = () =>{

    elements.app.empty();

}

externals.bind = (event, handler) => {

    handlers[event] = handler;

}

externals.renderStart = () => {

    elements.app = $("#app");
    renderStartButtons();

}

export default externals;