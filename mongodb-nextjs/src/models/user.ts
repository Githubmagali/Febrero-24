import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
email:{
    type: String,
    unique: true,
    required: [true, 'email is required'],
    match:[
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
    ]
},
password:{
    type: String,
    required: [true, 'Password is required'],
    select: false
},
fullname:{
 type: String,
 required:[true, "Fullname is required"],
 minLength:[4, 'Fullname must be at last 4 characters'],
 maxLength:[20, 'Fullname mustbe at most 20 characters']
}
},
{
    timestamps: true,
});

const User = models.User || model('User', UserSchema)
export default User