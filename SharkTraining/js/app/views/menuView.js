const externals = {};

const handlers = {};

const elements = {};

const renderMenuButtons = () =>{
    if(elements.startButton){
        elements.startButton.empty();
    }
    elements.startButton = $("<center><button id = 'diveIn'>Dive in!</button></center>");
    elements.startButton.click(handlers["buttonClick"]);
    elements.app.append(elements.startButton);

}

const renderInfo = () =>{
    if(elements.introText){
        elements.introText.empty();
    }
    elements.introText = $("<h4>Ahoy Code Cadet... After the first dive into the world of programming, which these last 14 crazy weeks have been, it's finally time to get on your boat and sail to deeper waters, full of mermaids ready to charm you and take you to the bottom of the sea, and capable sharks to tear your bowels apart. But fear nothing, the SCRIPTAHOLICS are here and they won't let you down. To help you on this new journey, through seas never sailed before, we have prepared an amazing journey full of challenges. Immerse yourself in this adventure and don't forget to keep your focus and your head above water.</h4>");
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