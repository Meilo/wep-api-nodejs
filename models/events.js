/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function (server) {
    var EventsSchema = server.mongoose.Schema({
        title:{
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        date: {
            type:String,
            required: true
        },
        lieu: {
            type: String,
            required: true
        },
        nb_member:{
            type: Number,
            min:10,
            required: true
        },
        categoryId:{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        userId:{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        users:[{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    });

    EventsSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('Events', EventsSchema);
};