//getting data object keys
const ObjKeys = Object.keys(data)
//["response_code", "categories", "clues"]

//pulling category entries (key and vlue pair) into an array
const catKeys = Object.entries(data.categories)
//0: (2) ["unitedStatesHistory", 1] 1: (2)["lifeSciences", 2] 2: (2)["publicHealth", 3]

//pulling from categories obj, putting into new array with name and ID
let arrayOfPotentialCategories = catKeys.map(category => {
  return { name: category[0], id: category[1] };
})

//randomizing array function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//shuffle all categories
shuffleArray(arrayOfPotentialCategories);

function getRoundQuestions(categories) {
  roundQuestions = categories.reduce((array, category) => {
    [100, 200, 300, 400].forEach(pointValue => {
      let categoryClues = data.clues.filter(clue => {
        return clue.categoryId === category.id && clue.pointValue === pointValue
      })
      shuffleArray(categoryClues)
      array.push(categoryClues[0]);
    })
    return array;
  }, [])
  return roundQuestions;
}

function getFinalRoundQuestion(category) {
  finalQuestion = data.clues.filter(clue => {
    return clue.categoryId === category[0].id;
  })
  shuffleArray(finalQuestion);
  return finalQuestion[0];
}

const gameQuestions = {
  Round1: getRoundQuestions(arrayOfPotentialCategories.splice(-4)),
  Round2: getRoundQuestions(arrayOfPotentialCategories.splice(-4)),
  Round3: getFinalRoundQuestion(arrayOfPotentialCategories.splice(-1))
};