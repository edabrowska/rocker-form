import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Input = styled.input`
  min-height: 38px;
  width: 100%;
  padding: 2px 8px;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: ${({ theme }) => theme.commons.borders.input};
  border-radius: ${({ theme }) => theme.commons.borderRadius.main};
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }

  ${({ error, theme }) => error && css`
    border: ${theme.commons.borders.error};
  `}

  ${({ success, theme }) => success && css`
    border: ${theme.commons.borders.success};
  `}
`