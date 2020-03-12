export const saveToLocalStorage = values => {
  const formData = { ...values }
  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

export const getFromLocalStorage = () => {
  const retrivedData = localStorage.getItem('contactFormData')

  if (retrivedData === null) {
    return undefined
  }

  return JSON.parse(retrivedData)
}

export const removeFromLocalStorage = () => localStorage
  .removeItem('contactFormData')