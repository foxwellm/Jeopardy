const ObjKeys = Object.keys(data)
const catKeys = Object.entries(data.categories)

let arrayOfPotentialCategories = catKeys.map(category => {
  return { name: category[0], id: category[1] };
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function removeCamelCase(arrayOfPotentialCategories) {
  arrayOfPotentialCategories.forEach(category => {
    let text = category.name 
    let result = text.replace( /([A-Z])/g, " $1" );
    category.name = result.charAt(0).toUpperCase() + result.slice(1);
  })
  return arrayOfPotentialCategories;
}

removeCamelCase(arrayOfPotentialCategories)

shuffleArray(arrayOfPotentialCategories)

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
  return [finalQuestion[0]];
}

const gameQuestions = {
  Round1Categories: (arrayOfPotentialCategories.slice(-4)),
  Round1Questions: getRoundQuestions(arrayOfPotentialCategories.splice(-4)),
  Round2Categories: (arrayOfPotentialCategories.slice(-4)),
  Round2Questions: getRoundQuestions(arrayOfPotentialCategories.splice(-4)),
  Round3Categories: (arrayOfPotentialCategories.slice(-1)),
  Round3Questions: getFinalRoundQuestion(arrayOfPotentialCategories.splice(-1))
}
