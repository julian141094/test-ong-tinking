import styled from "styled-components"

type TextProps = {
  type  ?: string,
  children ?: any
}

export const Normal = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`

export const Title = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
`

export const SubTitle = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`
