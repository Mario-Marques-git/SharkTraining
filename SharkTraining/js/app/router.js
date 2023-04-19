import menuController from "./controllers/menuController.js";
import startController from "./controllers/startController.js";

const externals = {};

const routes = {
    menu: {
        hash: "#menu",
        controller: menuController
    },
    start:{
        hash: "#start",
        controller: startController
    }
    
};

const defaultRoute = "menu";

const hashCheck = () => {
    var routeName = Object.keys(routes).find(function (name) {
      return window.location.hash === routes[name].hash;
    });
  
    if (!routeName) {
      routeName = defaultRoute;
      window.location.hash = routes[defaultRoute].hash;
    }
  
    loadController(routes[routeName].controller);
  };
  
  const loadController = controller => {
    try {
      controller.start();
    } catch (err) {
      console.log(err.stack);
      window.location.hash = routes[defaultRoute].hash;
    }
  };
  
  externals.start = () => {
    hashCheck();
  
    $(window).on("hashchange", function () {
      console.log("Hash has changed.");
      hashCheck();
    });
  };
  
export default externals;