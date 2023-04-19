import startView from "../views/startView.js";

const externals = {};

const buttonHandler1 = async () =>{

    window.location.hash = "#game";

}

const buttonHandler2 = async () =>{

    window.location.hash = "#menu";

}

externals.start = () =>{

    startView.bind("buttonClick1", buttonHandler1);
    startView.bind("buttonClick2", buttonHandler2);
    startView.render();

}

export default externals;