import { Grid, Button } from '@material-ui/core'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Input from '../components/Input'
import { useState } from 'react'

const Cards = ({
  boards,
  addCard,
  delCard,
  addItem,
  delItem,
  changeFlag,
  editCard,
}) => {
  let { id } = useParams()
  console.log(boards)
  const { name, cards } = boards[id]
  const [click, cliked] = useState(false)
  const handleClick = () => cliked(!click)
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Header name={name} preChild={true} />
      </Grid>
      {cards.map(({ name, items }, index) => (
        <Grid key={`${index}-${name}`} item xs={3}>
          <Card
            name={name}
            items={items}
            delCard={() => {
              delCard(id, index)
            }}
            addItem={(text) => {
              addItem(text, id, index)
            }}
            delItem={(indexItem) => {
              delItem(id, index, indexItem)
            }}
            changeFlag={(indexItem) => {
              changeFlag(id, index, indexItem)
            }}
            editCard={(text) => {
              editCard(text, id, index)
            }}
          />
        </Grid>
      ))}
      <Grid item xs={3}>
        <Button onClick={handleClick} variant="contained" color="primary">
          Добавить карту
        </Button>
        {click && (
          <Input nameInput="Имя карты" add={(text) => addCard(text, id)} />
        )}
      </Grid>
    </Grid>
  )
}

export default Cards
