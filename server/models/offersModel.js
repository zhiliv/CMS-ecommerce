const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Offers = new Schema(
  {
    name: {
      // наименование оффера
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Offers', Offers)
