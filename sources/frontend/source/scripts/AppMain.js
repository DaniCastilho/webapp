
import AppService from './services/AppService';
import AppController from './controllers/AppController';
import FormController from './controllers/FormController';
import ListDataController from './controllers/ListDataController';
import MapController from './controllers/MapController';


class AppMain {
    constructor() {
        new AppService();
        new AppController();
        new FormController();
        new ListDataController();
        new MapController();
    }
    
}

window.onload = function(){
    new AppMain();
}
