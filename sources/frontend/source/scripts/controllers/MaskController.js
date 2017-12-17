class MaskController {
    constructor(){

    }
    setMask(obj, fn){
        let _obj = obj;
        let _fn = fn;
        
        setTimeout( this.initMask(_obj, _fn), 1);
    }
    initMask(obj, fn){
        let _obj = obj;
        let _fn = fn;

        _obj.value = this._fn(_obj.value)
        console.log(_obj.value)
    }


    phoneMask(val){
        console.log(val)
        val=val.replace(/\D/g,"");            
        val=val.replace(/^(\d{2})(\d)/g,"($1) $2"); 
        val=val.replace(/(\d)(\d{4})$/,"$1-$2");
        return val;
    }

    cpfMask(val){
        val=val.replace(/\D/g,"");                   
        val=val.replace(/(\d{3})(\d)/,"$1.$2");
        val=val.replace(/(\d{3})(\d)/,"$1.$2");
        val=val.replace(/(\d{3})(\d{1,2})$/,"$1-$2"); 
        return val;
    }
}
export default MaskController;