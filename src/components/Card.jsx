import {
  Card as CardUI,
  CardContent,
  CardActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  makeStyles,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Input from '../components/Input'
import { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit'
const useStyles = makeStyles({
  check: {
    textDecoration: 'line-through',
    color: '#bdbdbd',
  },
})

const Card = ({
  name,
  items,
  delCard,
  addItem,
  delItem,
  changeFlag,
  editCard,
}) => {
  const [click, cliked] = useState(false)
  const handleClick = () => cliked(!click)
  const [renderInput, render] = useState(false)
  const handleRender = () => render(!renderInput)

  const classes = useStyles()
  return (
    <CardUI variant="outlined">
      <CardContent>
        <Grid
          container
          direction="row"
          spacing={0}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10}>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            {renderInput && (
              <Input
                add={(text) => {
                  editCard(text)
                  render(false)
                }}
                nameInput="Новое имя"
              />
            )}
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={delCard}>
              <CloseIcon />
            </IconButton>
            <IconButton onClick={handleRender}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>

        <List dense={true}>
          {items.map(({ text, flag }, index) => (
            <ListItem key={`${index}-${text.slice(6)}`}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={flag}
                  onClick={() => changeFlag(index)}
                />
              </ListItemIcon>
              <ListItemText className={flag && classes.check} primary={text} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => {
                    delItem(index)
                  }}
                  edge="end"
                  aria-label="delete"
                >
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        {click && <Input nameInput="Имя задачи" add={addItem} />}
        <CardActions disableSpacing={true}>
          <Button onClick={handleClick} size="small">
            <p>Добавить задачу</p>
          </Button>
        </CardActions>
      </CardContent>
    </CardUI>
  )
}

export default Card
