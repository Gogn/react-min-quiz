import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from '../../Components/UI/Button/Button'
import Input from "../../Components/UI/Input/Input"
import is from 'is_js'

export default class Auth extends Component {

  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      },
    }
  }

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  validateControl (value, validation) {
    if (!validation) {
      return true //Если параметры не были переданы - не валидировать
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid //Если в строке что-то сдержится и проверка еще не была зафейлена
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls } //Копия state
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
    formControls[controlName] = control //Изменение состояния state после получений новых значений выше

    let isFormValid = true
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.Type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation} //Преобразование в булевый тип
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>

            { this.renderInputs() }

            <Button
              type="success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Войти</Button>

            <Button
              type="primary"
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Зарегестрироваться</Button>
          </form>
        </div>
      </div>
    )
  }
}