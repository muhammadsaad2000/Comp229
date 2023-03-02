//File Name: app.js, Student Name: Muhammad Saad,
// Student ID: 301077320 
//Web App Name: Comp 229 MidTerm 

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);