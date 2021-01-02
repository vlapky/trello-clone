import { useState } from 'react'
import TextField from '@material-ui/core/TextField'

const Input = ({ nameInput, add }) => {
  const [text, changeText] = useState('')
  const handleChange = ({ target: { value } }) => changeText(value)
  const adding = (text) => {
    add(text)
    changeText('')
  }
  const handlePress = ({ key }) => {
    key === 'Enter' && text.length > 2 && adding(text)
  }
  return (
    <TextField
      margin={'dense'}
      autoFocus={true}
      label={nameInput}
      variant="outlined"
      size="small"
      value={text}
      onChange={handleChange}
      onKeyPress={handlePress}
    />
  )
}

export default Input
