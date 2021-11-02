import styled from "styled-components"

type ContainerProps = {
  type  ?: string,
  margin  ?: string,
  padding  ?: string,
  children ?: any
}

const Area = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.format || "row"};
  margin: ${props => props.margin || "0px 0px"};
  padding: ${props => props.padding || "0px 0px"};
`

/**
 * @name Container
 * @description component to get childs and apply format
 * @param type (css) property, default row
 * @param margin (css) property
 * @param padding (css) property
 * @returns Component
 */
const Container = ( {type, margin, padding, children} : ContainerProps) => {
  return (
    <Area 
      format={type} 
      margin={margin} 
      padding={padding}
    >
      {children}
    </Area>
  )
}

export default Container