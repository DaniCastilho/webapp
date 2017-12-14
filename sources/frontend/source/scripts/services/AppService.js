class AppService{

    constructor(){
        this.BASE_URL = "http://private-da937a-izitest1.apiary-mock.com/";
        this.ENDPOINT_FIELDS = "fields"
    }

    get(success, fail){

        fetch(`${this.BASE_URL}${this.ENDPOINT_FIELDS}`,{
            method: 'get'
        })
        .then(function(response) {
               response.json().then(function(data){
                  success(data)
               })
        })
        .catch(function(error){
            console.error('Failed retrieving information', err);
        })
    }

    saveData(userData){
        let _storage = localStorage;
        console.log(userData)
        // localStorage.setItem(userData.name);
        // localStorage.setItem(userData.cpf);
        // localStorage.setItem(userData.telefone);
        // localStorage.setItem(userData.endereco);
        // localStorage.setItem(userData.file);
    }
}
export default AppService;