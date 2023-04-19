import menuView from "../views/menuView.js";

const externals = {};

const buttonHandler = async () =>{

    window.location.hash = "#start";

}

externals.start = () =>{

    menuView.bind("buttonClick", buttonHandler);
    menuView.render();

}

export default externals;