import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import Input from './Input'

const Board = ({ name, index, del, edit }) => {
  const [renderInput, render] = useState(false)
  const handleClick = () => render(!renderInput)
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10}>
            <Link className="link" to={`/board/${index}`}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h5" component="h2">
                    {name}
                  </Typography>
                  {renderInput && (
                    <Input
                      add={(text) => {
                        edit(text)
                        render(false)
                      }}
                      nameInput="Новое имя"
                    />
                  )}
                </Grid>
              </Grid>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <IconButton onClick={() => del(index)}>
              <CloseIcon />
            </IconButton>
            <IconButton onClick={handleClick}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Board
