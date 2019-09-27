const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name:  { type: String },
  species:  { type: String }, 
  strength: { type: String }, 
  weakness:   { type: String }
}); 


mongoose.model('User', UserSchema); 