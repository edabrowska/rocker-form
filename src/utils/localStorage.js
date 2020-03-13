export const saveFormToLS = values => {
  const formData = { ...values }
  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

export const getDataFromLS = storageName => {
  const retrivedData = localStorage.getItem(storageName)
  // const retrivedData = localStorage.getItem('contactFormData')

  if (retrivedData === null) {
    return undefined
  }

  return JSON.parse(retrivedData)
}

export const removeFormFromLS = () => localStorage
  .removeItem('contactFormData')

export const saveCountriesToLS = data => localStorage
  .setItem('countriesData', JSON.stringify(data))
