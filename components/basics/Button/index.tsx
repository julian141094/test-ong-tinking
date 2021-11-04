import styled from "styled-components"

type BtnProps = {
  text: string,
  type?: string,
  disabled: boolean,
  click: () => void,
}

const AreaButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 24px;
`

const Button = styled.button`
  background: ${props => props.disabled ? props.theme.colors.eleventh : props.theme.colors.nineth};
  border-color: transparent;
  border-radius: 25px;
  color: white;
  width: 95px;
  height: 48px;
  padding: 12px 32px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonOutlined = styled.button`
  background: white;
  border-color: ${props => props.theme.colors.nineth};
  border-radius: 25px;
  color: ${props => props.theme.colors.nineth};
  width: 95px;
  height: 48px;
  padding: 12px 32px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

/**
 * @name Btn
 * @description Render a button outlined or normal button
 * @param text 
 * @param type 
 * @param click 
 * @param disabled 
 * @returns Component
 */
const Btn = ( { text, type, click, disabled } : BtnProps ) => {
  return type == 'outline' ? 
    (
      <AreaButton>
        <ButtonOutlined type="button" disabled={disabled} onClick={() => click()}>
          {text}
        </ButtonOutlined>
      </AreaButton>
    )
  :
    (
      <AreaButton>
        <Button type="button" disabled={disabled} onClick={() => click()}>
          {text}
        </Button>
      </AreaButton>
    )
}

export default Btn