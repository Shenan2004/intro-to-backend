// User model and the authentication model

import mongoose, { Schema } from "mongoose"; // Schema means structure

const userSchema = new Schema(
    {
        username: {
            
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,  // remove whitespace
            minLength: 1,
            maxLength: 30
        },

        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        }
    },

    {
        timestamps: true // automatically add createdAt and updatedAt fields
    }
)

export const User = mongoose.model("User", userSchema) //User model 