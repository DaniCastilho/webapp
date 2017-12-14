import AppService from './services/AppService';
import AppController from './controllers/AppController';
import FormController from './controllers/FormController';


class AppMain {
    constructor() {
        new AppService();
        new AppController();
        new FormController();
    }
    
}

window.onload = function(){
    new AppMain();
}
