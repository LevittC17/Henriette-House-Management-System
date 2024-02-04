const {Schema, model} = require ('mongoose');

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        },
    lastName:{
        type: String,
        required: true,
        },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        required: true,
        default:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
    }
        
}, {
    timestamps: true
}); 

const UserModel = module.exports = model('User',UserSchema);
module.exports = UserModel;