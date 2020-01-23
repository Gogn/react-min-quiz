import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";
import axios from '../../axios/axios-quiz'
import Loader from "../../Components/UI/Loader/Loader";

class Quiz extends Component {
  state = {
    results: {}, // { [id]: 'success' 'error' }
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // Для применения стилей в AnswerItem { [id]: 'success' 'error' }
    quiz: [],
    loading: true
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

  async componentDidMount() {
    try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      this.setState({
        quiz,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {
            this.state.loading
              ? <Loader/>
              : this.state.isFinished
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