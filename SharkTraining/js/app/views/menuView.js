
const externals = {};

const handlers = {};

const elements = {};



const renderMenuButtons = () =>{
    if(elements.startButton){
        elements.startButton.empty();
    }
    elements.startButton = $(`<center><button id = 'diveIn' style="--color: #D9E021;;">Dive in!</button><span></span><span></span><span></span><span></span></center>`);
    elements.startButton.click(handlers["buttonClick"]);
    elements.app.append(elements.startButton);

}

const renderInfo = () =>{
    if(elements.introText){
        elements.introText.empty();
    }
    elements.introText = $('<img id="background" src="js/img/background_homepage.png" alt="some text">');
    elements.app.append(elements.introText);

}

externals.removeElements = () =>{

    elements.app.empty();

}

externals.bind = (event, handler) => {

    handlers[event] = handler;

}

externals.renderMenu = () => {

    elements.app = $("#app");
    renderInfo();
    renderMenuButtons();

}

export default externals;