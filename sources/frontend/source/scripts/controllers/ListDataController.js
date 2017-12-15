import DataBaseService from '../services/DataBaseService.js'

class ListDataController{

    constructor(){
        this.database = new DataBaseService();
        this.setListener();
    }
    setListener(){
        let _buttonGetData = document.getElementById("btn");
        _buttonGetData.addEventListener("click", (e)=>{
            e.preventDefault();
            this.listData();
        })
    }
    listData(){
       console.log(this.database.getData())
    }

}
export default ListDataController;