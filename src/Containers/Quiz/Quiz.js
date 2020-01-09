import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
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
    console.log('Answer Id: ', answerId)

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })
      const timeout = window.setTimeout(()=>{
        if (this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null //Очищение стилей
          })
        }
        window.clearTimeout(timeout) //Очищение таймаута для предотвращения утечки памяти
      }, 1000)

    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length //return true if the last question
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            anserNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz