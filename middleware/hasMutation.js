const consecutiveLetterCount = (sequence) => {
  let consecutiveLetters = sequence.match(/([a-zA-Z])\1*/g)||[];
  let mutation = false;
  consecutiveLetters.forEach(item => {
    if (item.length >= 4) {
      mutation = true
    }
  });
  return mutation;
}

const getVerticalSequences = (dna) => {
  let newDna = []
  for (let i = 0; i < dna.length; i++) {
    let newSequence = ''
    for (let j = 0; j < dna.length; j++) {
      newSequence += dna[j][i]
    }
    newDna.push(newSequence)
  }
  return newDna
}

const getDiagonalSequences = (dna) => {
  let i, j, a, container,
	newSequences = [];
	for (i = 0; i < dna.length; i++) {
	  container = [];
	  for(a = i, j = 0; a >= 0; a--, j++)
    container.push(dna[a][j]);
    newSequences.push(container);
	}
	for (i = 1; i < dna[0].length; i++) {
	  container = [];
	  for(a = dna.length - 1, j = i; j < dna[0].length; a--, j++)
    container.push(dna[a][j]);
	  newSequences.push(container);
	}
	return newSequences.map((sequence) => {
      return sequence.join('');
  });
}


module.exports = {
  hasMutation(dna) {
    let mutated = 0;

    //Get vertical sequences
    const vSequences = getVerticalSequences(dna)

    //Get diagonal sequences
    const dSequences = getDiagonalSequences(dna)

    //Concatenate all possible sequences
    const allSequences = dna.concat(vSequences, dSequences)

    //Evaluate each sequence
    allSequences.forEach(sequence => {
      (consecutiveLetterCount(sequence)) && (mutated++)
    })

    return mutated > 1 ? true : false
  }
}