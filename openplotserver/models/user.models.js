const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "A username is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            }
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"]
        },
        dreamies: [],
    }, {timestamps: true}
);

// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

//additional validation
UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
    });

//bcrypt password hashing
UserSchema.pre('save', function(next) {
    //10 salt rounds
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
    });
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
