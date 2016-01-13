var mongoose = require('mongoose');

var GuestSchema = new mongoose.Schema({
  name: { type: String },
  dish: { type: String },
  type: { type: String }
});

mongoose.model('Guest', GuestSchema);