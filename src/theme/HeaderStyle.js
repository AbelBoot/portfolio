import styled  from "styled-components"
import { pink, violet } from "./variables"
import { Link } from "react-router-dom"

export const HeaderLink = styled(Link)`
  color: ${violet};
  &:hover {
    color: black;
  }  
  font-weight: bold;
  font-size: 1.3em;
  margin-right: 1em;
`

export const HeaderDiv = styled.div`
  box-shadow: 0px 4px 15px 0px ${pink};
`

export const BigDiv = styled.div`
`

export const HeadDiv0 = styled.div`
  background: transparent;
  margin: .4em;
  margin-right: auto;
  font-weight: 700;
  font-size: 1.5em;
`

export const HeadDiv1 = styled.div`
  background: transparent;
  margin: .4em;
`