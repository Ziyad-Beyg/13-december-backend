import mongoose from 'mongoose'

// field details
let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})
                        // collection Name 
let User = mongoose.model("user", userSchema);

// to use this model in our code
export default User;