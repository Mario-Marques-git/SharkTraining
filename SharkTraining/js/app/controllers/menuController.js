import menuView from "../views/menuView.js";

const externals = {};

const buttonHandler = async () =>{

    window.location.hash = "#start";
    menuView.removeElements();

}

externals.start = () =>{

    menuView.bind("buttonClick", buttonHandler);
    menuView.renderMenu();

}

export default externals;