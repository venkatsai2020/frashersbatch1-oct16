let mongoose=require('mongoose');
let schema=mongoose.Schema;
let admin_schema=schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    ref_id:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
});
let admin_db_model=mongoose.model('admin',admin_schema);

module.exports=admin_db_model;