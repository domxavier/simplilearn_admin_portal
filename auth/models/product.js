const mongoose = require('mongoose'), 

Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    pcode : String,
    pname : String,
    pdetails : String,
    pimage : String,
    price : Number,
    pcompany : { type : Schema.Types.ObjectId, ref : 'Company' }
});

module.exports = mongoose.model('Product', ProductSchema);
