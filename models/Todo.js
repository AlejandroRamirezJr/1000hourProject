const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  totalPoints: {
    type: Number, 
    required : true,
    default: 0
  },
  positivePoints: {
    type: Number, 
    required : true,
    default: 0
  },
  negativePoints: {
    type: Number, 
    required : true,
    default: 0
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
