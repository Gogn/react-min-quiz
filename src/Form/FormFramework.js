export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: '',
  }
}

export function validate(value, validation = null) {// validation по умолчанию - null
  if (!validation) {
    return true
  }

  let isValid = true
  if (validation.required) {
    isValid = value.trim() !== '' && isValid
  }
  return isValid
}

export function validateForm(formControls) {
  let isFormValid = true

  for (let control in formControls) {
    if (formControls.hasOwnProperty(control)) { //Если в корне formControls, для проверки только полей formControls
      isFormValid = formControls[control].valid && isFormValid
    }
  }

  return isFormValid
}