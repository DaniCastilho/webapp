class AppService{

    constructor(){
        this.BASE_URL = "http://private-da937a-izitest1.apiary-mock.com/";
        this.ENDPOINT_FIELDS = "fields"
    }

    get(){

        fetch(`${this.BASE_URL}${this.ENDPOINT_FIELDS}`)
            .then(function(response) {
            return response
        })
    }
}
export default AppService;