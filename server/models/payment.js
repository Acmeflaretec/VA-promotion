const mongoose = require('mongoose')

const paymetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
     phone: {
      type: String,
      required: true
  },
    videoilink: {
        type: String,
    },
    paymentimage: {
        type: String,
        required: true
    },
    location: {
      type: String,
     
  },
    status: {
        type: Boolean,
        default: true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('Payment', paymetSchema)

