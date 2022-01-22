import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import 'antd/es/button/style/css'

const StyledButton = styled(Button)`
  color:#B4846C;

`

export default ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)
