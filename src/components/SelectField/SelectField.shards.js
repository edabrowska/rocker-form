import { text } from '../../styles/theme/colors'

export const customStyles = {
  control: (provided, state) => {
    const { theme, selectProps } = state
    const customBorderColor = selectProps.error
      ? theme.colors.error
      : theme.colors.success

    const keepColor = (selectProps.error || selectProps.success)
      ? customBorderColor
      : theme.colors.input

    return ({
      ...provided,
      boxShadow: 'none',
      borderColor: (state.isFocused || state.isSelected) ? keepColor : keepColor,
      cursor: 'pointer',
      '&:hover': {
        borderColor: keepColor
      },
    })
  },
  placeholder: (provided) => ({
    ...provided,
    color: text.placeholder
  }),
  option: (provided) => ({
    ...provided,
    color: text.primary
  })
}