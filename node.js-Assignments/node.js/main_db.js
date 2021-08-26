let mongoose=require('mongoose');
let schema=mongoose.Schema;

let prototype=schema({
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        default:0
    }
});
 
let inventory=mongoose.model('inventory',prototype);

module.exports=inventory;