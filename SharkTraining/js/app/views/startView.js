const externals = {};

const handlers = {};

const elements = {};

const renderStartButtons = () =>{

    if(elements.gameStartButton){
        elements.gameStartButton.empty();
    }
    elements.gameStartButton = $("<center><a href='QuizGame.html'> <button id = 'startGame'>Start Game!</button></a></center>");
    elements.gameStartButton.click(handlers["buttonClick2"]);
    elements.app.append(elements.gameStartButton);

    elements.returnButton = $("<center><button id = 'returnMainPage'>Return</button></center>");
    elements.returnButton.click(handlers["buttonClick1"]);
    elements.app.append(elements.returnButton);

}

const renderForm = () =>{
    
    if(elements.loginForm){
        elements.loginForm.empty();
    }
    elements.loginForm = $(`<div class="container">
                                <form id="playerInfo" class="row">
                                <input type="hidden" id="playerNameRequest">
                                    <div class="form-group col-sm-3">
                                        <label class="d-block" for="playerName">Player Name</label>
                                        <input class="form-control d-block" id="playerName" type="text" placeholder="Enter your name">
                                    </div>
                                    <div class="container space">
                                        <button id="submit-btn" type="submit" class="btn btn-success" id="enterPlayerName">Submit</button>
                                    </div>
                                </form>
                            </div>`);
    elements.app.append(elements.loginForm);

}

externals.removeElements = () =>{

    elements.app.empty();

}

externals.bind = (event, handler) => {

    handlers[event] = handler;

}

externals.renderStart = () => {

    elements.app = $("#app");
    renderForm();
    renderStartButtons();

}

export default externals;