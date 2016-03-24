/**
 * Created by Ludovic on 24/03/2016.
 */
module.exports = function (server) {
    RoleSchema = server.mongoose.Schema({
       label:{
           type:String,
           required:true
       }, 
        weight:{
            type:Number,
            default:0
        },
        userId:{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    });

    RoleSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('Role', RoleSchema);
};