import { Grid, Button } from '@material-ui/core'
import Board from '../components/Board'
import Input from '../components/Input'
import { useState } from 'react'
import Header from '../components/Header'

const Boards = ({ boards, add, del, edit }) => {
  const [click, cliked] = useState(false)
  const handleClick = () => cliked(!click)
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Header name="Мои доски" />
      </Grid>
      {boards.map(({ name }, index) => (
        <Grid key={`${index}-${name}`} item xs={3}>
          <Board
            name={name}
            index={index}
            del={del}
            edit={(text) => edit(text, index)}
          />
        </Grid>
      ))}
      <Grid item xs={3}>
        <Button onClick={handleClick} variant="contained" color="primary">
          Добавить доску
        </Button>
        {click && <Input nameInput="Имя доски" add={add} />}
      </Grid>
    </Grid>
  )
}

export default Boards
