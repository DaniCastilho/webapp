class DataBaseService {

    constructor(){

    }
    saveData(userdata){
        
        let _storage = localStorage;
        let _data;

        for(_data in userdata){

            localStorage.setItem(_data, userdata[_data])
        }
    }
    getData(){
        let _data ={
            'nome' : localStorage.getItem("name"),
            'cpf' : localStorage.getItem("cpf"),
            'telephone' : localStorage.getItem("phone"),
            'endereco' : localStorage.getItem("address"),
            'imagem' : localStorage.getItem("file")
        }

        return _data;
    }
}
export default DataBaseService;