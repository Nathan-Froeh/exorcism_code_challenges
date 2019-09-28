//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  if(!rna) return []
  const codons = rna.match(/.{1,3}/g)
  const allCodons = proteinList.map((protein) => {
    return Object.values(protein)[0]
  }).flat()
  const proteins = codons.reduce((acc, codon, index, arr) => {
    if(!allCodons.includes(codon)) {
      throw Error('Invalid codon')
    }
    proteinList.forEach((protein) => {
      if(Object.values(protein)[0].includes(codon)
        && Object.keys(protein)[0] !== 'STOP') {
        acc.push(Object.keys(protein)[0])
      } else if(Object.values(protein)[0].includes(codon)
      && Object.keys(protein)[0] === 'STOP') {
        arr.splice(index)
      } 
    })
    return acc
  }, [])
  return proteins
};

const proteinList = [
  {Methionine: ['AUG']}, 
  {Phenylalanine: ['UUU', 'UUC']}, 
  {Leucine: ['UUA', 'UUG']}, 
  {Serine: ['UCU', 'UCC', 'UCA', 'UCG']}, 
  {Tyrosine: ['UAU', 'UAC']}, 
  {Cysteine: ['UGU', 'UGC']}, 
  {Tryptophan: ['UGG']},
  {STOP: ['UAA', 'UAG', 'UGA']}
]