/**
 * Created by Ludovic on 23/03/2016.
 */
module.exports = function (server) {
    var UserSchema = server.mongoose.Schema({
        username:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type:String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        },
        Role:{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        },
        todos:
        [{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Todo'
        }]
    });

    UserSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('User', UserSchema);
};