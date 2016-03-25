/**
 * Created by Ludovic on 25/03/2016.
 */
module.exports = function (server) {
    var CategoriesSchema = server.mongoose.Schema({
        label:{
            type: String,
            required: true
        },
        events:[{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        }]
    });

    CategoriesSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('Categories', CategoriesSchema);
};