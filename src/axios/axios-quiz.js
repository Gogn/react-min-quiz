import axios from 'axios'

export default axios.create({
  baseURL: 'https://reqct-quiz-1c5fd.firebaseio.com/'
})