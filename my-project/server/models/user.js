import db from "../mongodb";
let userSchema = db.Schema({
    username: String,
    password: String
})

export default db.model('users', userSchema);