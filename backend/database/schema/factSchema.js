const { model, Schema } = require('mongoose');

const FactSchema = new Schema({
    Date: {type: Date, default: Date.now()},
    UserID: String,
    Text: String,
    Title: String,
    Likes: [],
    Dislikes: [],
})

const FactModel = model("Fact", FactSchema);

module.exports = FactModel;