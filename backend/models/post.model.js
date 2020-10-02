const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    post_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Post', Post);
