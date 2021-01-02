import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Link } from 'react-router-dom'

const Header = ({ name, preChild }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid
          container
          spacing={preChild ? 1 : 0}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {preChild && (
            <Grid item>
              <Link to="/boards">
                <IconButton>
                  <ArrowBackIcon />
                </IconButton>
              </Link>
            </Grid>
          )}

          <Grid item>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Header
