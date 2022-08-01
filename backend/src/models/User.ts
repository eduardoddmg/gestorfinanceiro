import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const UserModel = mongoose.model('users', UserSchema);