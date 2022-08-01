import mongoose from 'mongoose';

export function configDatabase() {
    mongoose.connect(
      "mongodb+srv://admin:12345@cluster0.yrfjf.mongodb.net/finances-app?retryWrites=true&w=majority"
    );
}