module.exports = function (server) {
    var TodoSchema = server.mongoose.Schema({
        name:{
            type: String,
            required: true
        },
        test: {
            type: String,
            required: true
        },
        details: String,
        dueDate: String,
        done: Boolean,
        userId: String
    });

    TodoSchema.plugin(require('mongoose-timestamp'));
    
    return server.mongoose.model('Todo', TodoSchema);
};