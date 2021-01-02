import {
  ADD_BOARD,
  DEL_BOARD,
  EDIT_BOARD,
  ADD_CARD,
  DEL_CARD,
  EDIT_CARD,
  ADD_ITEM,
  DEL_ITEM,
  EDIT_ITEM,
  CHANGE_FLAG,
} from './constants'

//board

export const AddBoard = (text) => ({
  type: ADD_BOARD,
  text,
})

export const DelBoard = (indexBoard) => ({
  type: DEL_BOARD,
  indexBoard,
})

export const EditBoard = (text, indexBoard) => ({
  type: EDIT_BOARD,
  indexBoard,
  text,
})

//card

export const AddCard = (text, indexBoard) => ({
  type: ADD_CARD,
  text,
  indexBoard,
})

export const DelCard = (indexBoard, indexCard) => ({
  type: DEL_CARD,
  indexCard,
  indexBoard,
})

export const EditCard = (text, indexBoard, indexCard) => ({
  type: EDIT_CARD,
  text,
  indexBoard,
  indexCard,
})

//item

export const AddItem = (text, indexBoard, indexCard) => ({
  type: ADD_ITEM,
  text,
  indexBoard,
  indexCard,
})

export const DelItem = (indexBoard, indexCard, indexItem) => ({
  type: DEL_ITEM,
  indexBoard,
  indexCard,
  indexItem,
})

export const ChangeFlag = (indexBoard, indexCard, indexItem) => ({
  type: CHANGE_FLAG,
  indexBoard,
  indexCard,
  indexItem,
})
