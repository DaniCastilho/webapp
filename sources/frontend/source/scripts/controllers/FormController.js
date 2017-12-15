import AppService from '../services/AppService.js';
import DataBaseService from '../services/DataBaseService.js'
import MapController from '../controllers/MapController.js'

class FormController{

    constructor(){
        this.service = new AppService();
        this.dataBase = new DataBaseService();
        this.map = new MapController();
        this.getFields();
    }

    getFields(){
       this.service.get(
           (response) => { this.onSuccess(response); },
           (fail) => { this.onFail(fail); }
       )

       return
    }

    onSuccess(response){
       this.buildForm(response)
    }

    onFail(fail){
        console.log(fail)
    }

    buildForm(fields){

        let _field;
        let _container = document.getElementsByClassName('section__content')[0];
        let _form = document.createElement("form");
        _form.setAttribute("id", "form");
        _container.appendChild(_form);
        
        for(_field of fields){
            let _input = document.createElement("input");
            
            _input.setAttribute("type", _field.type);
            _input.setAttribute("id", _field.id);
            _input.setAttribute("name", _field.name);
            _input.setAttribute("placeholder", _field.placeholder);
            
            _form.appendChild(_input);
        }

        this.setListeners();
        this.map.initMap();

    }

    setListeners() {
       let _form = document.getElementById("form");
        
       _form.addEventListener("submit", (e)=>{
           e.preventDefault();
           this.sendUserData(event);
       })
    }
    sendUserData(){
        let _name, _cpf, _phone, _address, _file;

        _name = document.getElementById("txtFullname").value;
        _cpf = document.getElementById("txtCPF").value;
        _phone = document.getElementById("txtPhone").value;
        _address = document.getElementById("txtAddress").value;
        _file = document.getElementById("uplImage").value;

        
        this.dataBase.saveData({
            "name" : _name,
            "cpf" : _cpf,
            "phone" : _phone,
            "address" : _address,
            "file" : _file
        })
    }



}

export default FormController;