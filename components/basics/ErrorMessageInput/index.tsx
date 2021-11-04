import styled from "styled-components";
import Container from "../containers/Container";
import { Normal } from "../Text";

type ErrorMessageInputProps = {
  errorMessage: string
}

const TextError = styled(Normal)`
  color: red;
`

/**
 * @name ErrorMessageInput
 * @description Show a error text (red), for a field  
 * @param errorMessage 
 * @returns Component
 */
const ErrorMessageInput = ( { errorMessage } : ErrorMessageInputProps ) => {
  return (
    <Container
      padding={'-4px 10px 7px 10px'}
    >
      <TextError>{errorMessage}</TextError>
    </Container>
  )
}

export default ErrorMessageInput