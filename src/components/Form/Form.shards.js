import styled from '@emotion/styled'

export const FormRoot = styled.form`
  max-width: 500px;
  width: 100%;
`

export const Button = styled.button`
  margin: 20px auto;
  padding: 15px 20px;
  cursor: pointer;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.button.active};
  border-radius: ${({ theme }) => theme.commons.borderRadius.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.button.hover};
    cursor: default;
  }
`
export const InputRoot = styled.div`
  margin: 20px 0;
`

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 10px;
`

export const ErrorMsg = styled.span`
  position: absolute;
  bottom: -15px;
  left: 10px;
  font-size: 1.2rem;
`