const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})



taskSchema.pre('save', async function(next){
    const task = this
    
    if(task.isModified){
        console.log('Changing how task are updating')    
    }
    
    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports= Task