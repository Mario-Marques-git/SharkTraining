const externals = {};

const handlers = {};

const elements = {};

const renderButton = () =>{

    elements.startButton = $("<center><button id = 'diveIn' >Dive in!</button></center>");
    elements.startButton.click(handlers["buttonClick"]);
    elements.app.append(elements.helpButton);

}






externals.render = () => {

    elements.app = $("#app");
    renderButton();

}

export default externals;