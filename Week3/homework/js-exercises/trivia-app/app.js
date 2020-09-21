
class DataFetcher {
  constructor(url) {
    this._url = url;
  }
  async getData() {
    try {
      const response = await axios.get(this._url);
      return response.data.results;

    } catch (error) {
      console.error(error);
    }
  }
}

const triviaData = new DataFetcher('https://opentdb.com/api.php?amount=5');

class Main {
  constructor() {
    this.data = triviaData.getData();
    this.mainContainer = document.createElement('div')
    this.questions = [];
    this.answers = [];
    // this.question = document.querySelectorAll('question')
  }
  async createHTMLTags() {
    const data = await this.data;
    data.forEach(element => {

      const question = document.createElement('h4')
      const answer = document.createElement('h4')
      // appending
      document.body.appendChild(this.mainContainer)
      this.mainContainer.appendChild(question)
      this.mainContainer.appendChild(answer)
      // setAttr
      this.mainContainer.setAttribute('id', 'mainContainer')
      question.setAttribute('id', 'question')
      answer.setAttribute('id', 'answer')
      answer.setAttribute('class', 'hide')
      // insert
      question.textContent = element.question
      answer.textContent = element.correct_answer
      this.questions.push(question);
      this.answers.push(answer);
    });

    function showAnswer(e) {
      e.target.nextSibling.classList.toggle("display");
    }

    this.mainContainer.addEventListener('click', showAnswer.bind(this))
  }
  printToConsole() {
    console.log(this.questions.length)
  }
  async showAnswer() {
    const res = await this.data
    console.log(res.results[0].question)
  }
}
async function main() {
  const createMainSection = new Main()
  createMainSection.printToConsole()
  await createMainSection.createHTMLTags()
  // createMainSection.questions.forEach(e => console.log(e))
  createMainSection.printToConsole()
}
main().then(() => console.log("done"))
// createMainSection.question.addEventListener('click', showAnswer)



// class FetchData {
//   constructor(url) {
//     this._url = url;
//   }
//   async getData() {
//     try {
//       const response = await axios.get(this._url);
//       return response.data.results;

//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
// const triviaData = new FetchData('https://opentdb.com/api.php?amount=5');
// class Message {
//   constructor() {
//     this.data = triviaData.getData();
//     this.body = document.body;
//     this.message = document.getElementById('message')
//   }

//   // I want to change this
//   async createHTMLTags() {
//     const data = await this.data;
//     data.forEach(element => {
//       const message = document.createElement('h4')
//       // appending
//       this.body.appendChild(message)
//       // setAttr
//       message.setAttribute('id', 'message')
//       // insert
//       message.textContent = element.question
//     });
//     // to this :)
//     // async createHTMLTags(){}
//     // async appending(){}
//     // async setAttr(){}
//   }
//   async printInConsole() {
//     console.log(await this.message);
//   }
// }
// const createMessage = new Message()
// createMessage.createHTMLTags()
// createMessage.printInConsole()