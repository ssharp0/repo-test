const Person = new Schema({
  regNo: Number,
  name: String,
  location: String
})

module.exports = model('Person', Person)
