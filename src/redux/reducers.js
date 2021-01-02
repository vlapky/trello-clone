import { combineReducers } from 'redux'
import {
  ADD_BOARD,
  DEL_BOARD,
  EDIT_BOARD,
  ADD_CARD,
  DEL_CARD,
  EDIT_CARD,
  ADD_ITEM,
  DEL_ITEM,
  CHANGE_FLAG,
} from './constants'

import { load } from 'redux-localstorage-simple'

let BOARDS = load({ namespace: 'trello' })

if (!BOARDS || !BOARDS.boards || !BOARDS.boards.length) {
  BOARDS = {
    boards: [],
  }
}

const boards = (state = BOARDS.boards, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    //board

    case ADD_BOARD:
      return state.concat([{ name: action.text, cards: [] }])
    case DEL_BOARD:
      return state.filter((board, index) => index !== action.indexBoard)
    case EDIT_BOARD:
      return state.map((board, index) => {
        if (index === action.indexBoard) {
          return { name: action.text, cards: board.cards }
        }
        return board
      })

    //card

    case ADD_CARD:
      return state.map((board, index) => {
        if (index.toString() === action.indexBoard) {
          let newCard = [{ name: action.text, items: [] }]
          let newCards = board.cards.concat(newCard)
          return { name: board.name, cards: newCards }
        }
        return board
      })

    case DEL_CARD:
      return state.map((board, index) => {
        if (index.toString() === action.indexBoard) {
          let newCards = board.cards.filter(
            (card, index) => index !== action.indexCard
          )
          return { name: board.name, cards: newCards }
        }
        return board
      })

    case EDIT_CARD:
      return state.map((board, index) => {
        if (index.toString() === action.indexBoard) {
          let newCards = board.cards.map((card, index) => {
            if (index === action.indexCard) {
              return { name: action.text, items: card.items }
            }
            return card
          })
          return { name: board.name, cards: newCards }
        }
        return board
      })

    //item

    case ADD_ITEM:
      return state.map((board, index) => {
        if (index.toString() === action.indexBoard) {
          let newCards = board.cards.map((card, index) => {
            if (index === action.indexCard) {
              let newItem = [
                {
                  text: action.text,
                  flag: false,
                },
              ]
              return { name: card.name, items: card.items.concat(newItem) }
            }
            return card
          })
          return { name: board.name, cards: newCards }
        }
        return board
      })
    case DEL_ITEM:
      return state.map((board, index) => {
        if (index.toString() === action.indexBoard) {
          let newCards = board.cards.map((card, index) => {
            if (index === action.indexCard) {
              return {
                name: card.name,
                items: card.items.filter(
                  (item, index) => index !== action.indexItem
                ),
              }
            }
            return card
          })
          return { name: board.name, cards: newCards }
        }
        return board
      })

    case CHANGE_FLAG:
      return state.map((board, index) => {
        if (index.toString() === action.indexBoard) {
          let newCards = board.cards.map((card, index) => {
            if (index === action.indexCard) {
              return {
                name: card.name,
                items: card.items.map((item, index) => {
                  if (index === action.indexItem) {
                    return {
                      text: item.text,
                      flag: !item.flag,
                    }
                  }
                  return item
                }),
              }
            }
            return card
          })
          return { name: board.name, cards: newCards }
        }
        return board
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({ boards })

export default rootReducer
