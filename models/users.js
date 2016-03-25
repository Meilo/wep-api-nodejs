/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function (server) {
    var UsersSchema = server.mongoose.Schema({
        Prenom:{
            type: String
        },
        Email: {
            type: String,
            required: true
        },
        Password: {
            type:String,
            required: true
        },
        events:[{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        }]
    });

    UsersSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('Users', UsersSchema);
};