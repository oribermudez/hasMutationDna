const getSequencesByValue = (sequences, value) => {
  return sequences.filter((sequence) => (sequence.hasMutation === value))
}

const getRatio = (normalSequences, mutatedSequences) => {
  return mutatedSequences/normalSequences;
}

module.exports = {
  getSequencesStats(sequences) {
    const normalSequences = getSequencesByValue(sequences, false).length
    const mutatedSequences = getSequencesByValue(sequences, true).length
    const ratio = getRatio(normalSequences, mutatedSequences)
    const stats = {
      count_mutations: mutatedSequences,
      count_no_mutation: normalSequences,
      ratio
    }
    return stats
  }
}