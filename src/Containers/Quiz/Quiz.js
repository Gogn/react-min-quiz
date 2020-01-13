import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {}, // { [id]: 'success' 'error' }
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // Для применения стилей в AnswerItem { [id]: 'success' 'error' }
    quiz: [
      {
        id: 1,
        question: 'Как выйти из vim?',
        rightAnswerId: 3,
        answers: [
          {text: 'Alt+F4', id: 1},
          {text: '`Esc`', id: 2},
          {text: ':q!', id: 3},
          {text: 'Из vim нет выхода', id: 4},
        ]
      },
      {
        id: 2,
        question: 'Какая компания является разработчиком библиотеки React?',
        rightAnswerId: 2,
        answers: [
          {text: 'Microsoft', id: 1},
          {text: 'Facebook', id: 2},
          {text: 'Apple', id: 3},
          {text: 'Amazon', id: 4},
        ]
      },
      {
        id: 3,
        question: 'Вопрос 3?',
        rightAnswerId: 1,
        answers: [
          {text: 'Microsoft', id: 1},
          {text: 'Facebook', id: 2},
          {text: 'Apple', id: 3},
          {text: 'Amazon', id: 4},
        ]
      },
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log('Quiz: 50: ', answerId)
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        console.log('Quiz: return: ')
        return
      }
    }

    console.log('Quiz: Answer Id: ', answerId)

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      console.log(results[answerId])
      // if (!results[answerId]) {
      results[question.id] = 'success'
      console.log('65' + results[answerId])
      // }

      this.setState({
        answerState: {[answerId]: 'success'},
        // results //results: results
      })
      const timeout = window.setTimeout(() => {
        console.log('Quiz: results: ', results)
        if (this.isQuizFinished()) {
          console.log('isQuizFinished')
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null //Очищение стилей
          })
        }
        window.clearTimeout(timeout) //Очищение таймаута для предотвращения утечки памяти
      }, 200)

      // } else {
      //   results[answerId] = 'error'
      //   this.setState({
      //     answerState: {[answerId]: 'error'},
      //     results
      //   })
      // }

    } else {
      // if (!results[answerId]) {
      results[question.id] = 'error'
      console.log('97' + results[answerId])
      // }
      this.setState({
        answerState: {[answerId]: 'error'},
        // results //results: results // (answerState)
      })
      const timeout = window.setTimeout(() => {
        console.log('Quiz: results: ', results)

        if (this.isQuizFinished()) {
          console.log('isQuizFinished')
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null //Очищение стилей
          })
        }
        window.clearTimeout(timeout) //Очищение таймаута для предотвращения утечки памяти
      }, 500)
    }
  }


  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length //return true if the last question
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {
            this.state.isFinished
              ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
              />
              : <ActiveQuiz
                question={this.state.quiz[this.state.activeQuestion].question}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }

        </div>
      </div>
    )
  }
}

export default Quiz