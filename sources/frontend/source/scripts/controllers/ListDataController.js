import DataBaseService from '../services/DataBaseService.js'

class ListDataController {

    constructor() {
        this.database = new DataBaseService();
        this.setListener();
    }
    setListener() {
        let _buttonGetData = document.getElementById("btn");
        _buttonGetData.addEventListener("click", (e) => {
            e.preventDefault();
            this.listData();
        })
    }
    listData() {
        let _data = this.database.getData();
        let _table = document.getElementById("dados")
        let _row = document.createElement("tr");
        let _item;
        console.log(_data)
        for (_item in _data) {
            let _collum = document.createElement("td");
            console.log(_data[_item])
            _collum.innerHTML = _data[_item];
            _row.appendChild(_collum);

        }
        _table.appendChild(_row)
    }

}
export default ListDataController;