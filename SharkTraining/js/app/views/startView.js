const externals = {};

const handlers = {};

const elements = {};

const renderButtons = () =>{

    elements.gameStartButton = $("<center><button id = 'startGame'>Start Game!</button></center>");
    elements.gameStartButton.click(handlers["buttonClick1"]);
    elements.app.append(elements.gameStartButton);

    elements.returnButton = $("<center><button id = 'returnMainPage'>Return</button></center>");
    elements.returnButton.click(handlers["buttonClick2"]);
    elements.app.append(elements.returnButton);

}

const renderForm = () =>{

    elements.loginForm = $(`<div class="container">
                                <form id="playerInfo" class="row">
                                <input type="hidden" id="playerNameRequest">
                                    <div class="form-group col-sm-3">
                                        <label class="d-block" for="playerName">Player Name</label>
                                        <input class="form-control d-block" id="playerName" type="text" placeholder="Enter your name">
                                    </div>
                                    <div class="container space">
                                        <button type="submit" class="btn btn-success" id="enterPlayerName">Submit</button>
                                    </div>
                                </form>
                            </div>`);
    elements.app.append(elements.loginForm);

}






externals.render = () => {

    elements.app = $("#app");
    renderForm();
    renderButtons();

}

export default externals;