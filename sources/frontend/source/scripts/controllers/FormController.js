import AppService from '../services/AppService.js';

class FormController{

    constructor(){
        this.service = new AppService();
        this.buildFields();
    }

    buildFields(){
        console.log(this.service.get)
    }


}

export default FormController;