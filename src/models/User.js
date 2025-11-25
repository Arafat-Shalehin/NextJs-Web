import mongoose, {Schema, model, models} from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, require: true},
    password: {type: String, require: true}
})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;