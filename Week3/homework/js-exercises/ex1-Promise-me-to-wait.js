// Exercise A
async function getData(url) {
  const response = await fetch(url)
  return response.json
}
async function logData() {
  try {
    const data = await getData('https://randomfox.ca/floof/')
    console.log(data)
  }
  catch{
    console.error('ERROR !!')
  }

}
logData()

// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = async array => {
  try {
    let capsArray = await array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        throw 'Error: Not all items in the array are strings!'
      }
    })
    console.log(capsArray)
  } catch (error) {
    console.log(error)
  }

}

makeAllCaps(arrayOfWords);
