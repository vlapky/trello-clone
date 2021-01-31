import { connect } from 'react-redux'
import {
  AddBoard,
  DelBoard,
  EditBoard,
  AddCard,
  DelCard,
  EditCard,
  AddItem,
  DelItem,
  ChangeFlag,
} from './redux/actionCreator'
import { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Boards from './pages/Boards'
import Cards from './pages/Cards'
import './styles.css'

class App extends Component {
  render() {
    const {
      boards,
      AddBoard,
      DelBoard,
      AddCard,
      DelCard,
      AddItem,
      DelItem,
      ChangeFlag,
      EditBoard,
      EditCard,
    } = this.props
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path="/boards">
            <Boards
              boards={boards}
              add={AddBoard}
              del={DelBoard}
              edit={EditBoard}
            />
          </Route>
          <Route exact={true} path="/board/:id">
            <Cards
              boards={boards}
              addCard={AddCard}
              delCard={DelCard}
              addItem={AddItem}
              delItem={DelItem}
              changeFlag={ChangeFlag}
              editCard={EditCard}
            />
          </Route>
          <Route
            exact={true}
            path="/"
            render={() => <Redirect to="/boards" />}
          />
        </Switch>
      </HashRouter>
    )
  }
}

export default connect(
  ({ boards }) => ({
    boards,
  }),
  {
    AddBoard,
    DelBoard,
    EditBoard,
    AddCard,
    DelCard,
    EditCard,
    AddItem,
    DelItem,
    ChangeFlag,
  }
)(App)
