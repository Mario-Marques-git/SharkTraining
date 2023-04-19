import startView from "../views/startView.js";

const externals = {};


const buttonHandler1 = async () =>{

    window.location.hash = "#menu";
    startView.removeElements();

}

externals.start = () =>{

    startView.bind("buttonClick1", buttonHandler1);
    startView.renderStart();

}

export default externals;