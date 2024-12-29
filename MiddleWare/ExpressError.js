class ExpressError extends Error{
    constructor(sts,message){
        super();
        this.sts=sts;
        this.message=message;

    }
}

module.exports=ExpressError;