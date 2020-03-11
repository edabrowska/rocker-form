export const phoneNumber = value => {
  let errorTxt = undefined

  if (value.charAt(0) !== '0') errorTxt = 'Invalid phone number, must start with 0'

  if (value.length < 5) errorTxt = 'Invalid phone number, must be at least 5 characters'

  if (value.length > 10) errorTxt = 'Invalid phone number, must be max 10 characters'

  if (isNaN(Number(value))) errorTxt = 'Invalid phone number, must be a number'

  return errorTxt
}

export const required = value => value ? undefined : 'Required'

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const ssnFormat = value => {
  const regexFormat = /^(19|20)?([0-9]){2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[-+](\d{4})$/

  return value.match(regexFormat) ? undefined : 'Invalid SSN format'
}

export const ssnChecksum = value => {
  const reduceTo10 = value.length === 8
    ? value.slice(2, value.length)
    : value
  const indexOfDash = reduceTo10.indexOf('-')
  const numbersArr = reduceTo10.split('')
  numbersArr.splice(indexOfDash, 1)
  numbersArr.pop()

  let numberTime1 = []
  let numberTime2 = []

  for (let i = 0; i < numbersArr.length; i++) {
    if (i % 2 === 0) {
      const result = Number(numbersArr[i]) * 2
      const resultArr = `${result}`.split('')

      if (resultArr.length === 2) {
        numberTime2.push(Number(resultArr[0]) + Number(resultArr[1]))
      } else {
        numberTime2.push(result)
      }
    } else {
      numberTime1.push(Number(numbersArr[i]))
    }
  }

  const sumTime1 = numberTime1.reduce((acc, curr) => acc += curr, 0)
  const sumTime2 = numberTime2.reduce((acc, curr) => acc += curr, 0)
  const lastDigitOfSum = `${sumTime1 + sumTime2}`.split('').pop()
  const checksum = `${10 - lastDigitOfSum}`.split('').pop()

  return value.split('').pop() === checksum ? undefined : 'Invalid SSN checksum'
}