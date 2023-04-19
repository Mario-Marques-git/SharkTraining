const externals = {};

const handlers = {};

const elements = {};

const renderButton = () =>{

console.log("estou aqui")
    elements.startButton = $("<center><button id = 'diveIn'>Dive in!</button></center>");
    elements.startButton.click(handlers["buttonClick"]);
    elements.app.append(elements.startButton);

}

externals.bind = (event, handler) => {

    handlers[event] = handler;

}




externals.render = () => {

    elements.app = $("#app");
    renderButton();

}

export default externals;