const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        rating: { type: String, required: true },
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
