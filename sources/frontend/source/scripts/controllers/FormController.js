import AppService from '../services/AppService';
import DataBaseService from '../services/DataBaseService'
import MapController from '../controllers/MapController'
import MaskController from '../controllers/MaskController'

class FormController {

    constructor() {
        this.service = new AppService();
        this.dataBase = new DataBaseService();
        this.map = new MapController();
        this.mask = new MaskController();
        this.getFields();

    }

    getFields() {
        this.service.get(
            (response) => { this.onSuccess(response); },
            (fail) => { this.onFail(fail); }
        )

        return
    }

    onSuccess(response) {
        this.buildForm(response)
    }

    onFail(fail) {
        console.log(fail)
    }

    buildForm(fields) {

        let _field;
        let _container = document.getElementsByClassName('section__content')[0];
        let _form = document.createElement("form");
        _form.setAttribute("id", "form");
        _container.appendChild(_form);

        let _map = document.createElement("div");
        _map.setAttribute("id", "map");

        for (_field of fields) {
            let _input = document.createElement("input");

            _input.setAttribute("type", _field.type);
            _input.setAttribute("id", _field.id);
            _input.setAttribute("name", _field.name);
            _input.setAttribute("placeholder", _field.placeholder);
            _input.required = true;

            _form.appendChild(_input);
           

            if (_field.type == "address") {
                _form.appendChild(_map); 
            }
            
        }

        this.setListeners();
        // this.setPatterns();
        this.map.initMap();
    }

    setListeners() {
        let _form = document.getElementById("form");
        let _fieldCpf = document.getElementById("txtCPF");
        let _fieldPhone = document.getElementById("txtPhone");

        _form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.sendUserData(event);
        })


        // _fieldCpf.addEventListener("keyup", (e)=>{
        //     this.mask.setMask(e.currentTarget, "cpfMask");
        // })

    }

    setPatterns(){
        let _fieldName = document.getElementById("txtFullname");
        let _fieldCpf = document.getElementById("txtCPF");
        let _fieldPhone = document.getElementById("txtPhone");
 
        _fieldName.setAttribute("pattern", "[A-Za-z]");
        _fieldCpf.setAttribute("pattern", "[0-9]");
        _fieldPhone.setAttribute("pattern", "[0-9]");
    }
    sendUserData() {
        let _name, _cpf, _phone, _address, _file;

        _name = document.getElementById("txtFullname").value;
        _cpf = document.getElementById("txtCPF").value;
        _phone = document.getElementById("txtPhone").value;
        _address = document.getElementById("txtAddress").value;
        _file = document.getElementById("uplImage").value;


        this.dataBase.saveData({
            "name": _name,
            "cpf": _cpf,
            "phone": _phone,
            "address": _address,
            "file": _file
        })
        
    }
}


export default FormController;