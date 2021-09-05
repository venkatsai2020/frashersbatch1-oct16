let mongoose=require('mongoose');
let schema=mongoose.Schema;

let customer_schema=schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    ref_id:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
    }
});

customer_schema_model=mongoose.model('customer',customer_schema);

module.exports=customer_schema_model;