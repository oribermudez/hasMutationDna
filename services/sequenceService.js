const Sequence = require('../model/sequence');

module.exports = {
  async addSequence (sequence) {
    let result = await Sequence.create(sequence);
    if(result) {
      return {
        data: sequence,
        message: "Sequence successfully added!"
      };
    }
    return "Error adding sequence"
  },

  async getStats()  {
    let sequences = await Sequence.find();
    if(sequences)  return sequences;
    return "Error fetching sequences from db"
  },
}