const mongoose = require('../database/database');
const autoIncrementModelID = require('./counterModel');


const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true, 
        min: 1
    },
    name: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: false
    },
    profileImageUrl: {
        type: String,
        require: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});


UserSchema.pre('save', function (next) {
    if (!this.isNew) {
      next();
      return;
    }
  
    autoIncrementModelID('activities', this, next);
  });

const User = mongoose.model('User', UserSchema);



module.exports = User;