import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const LabelRoot = styled.label`
  font-weight: 600;

  ${({ smaller }) => smaller && css`
    font-size: 1.2rem;
    font-style: italic;
    display: block;
  `}
`

export const Asterisk = styled.span`
  color: ${({ theme }) => theme.colors.text.error};
`