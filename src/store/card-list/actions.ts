import { createAction } from '@reduxjs/toolkit'

export const getCards = createAction('GET_CARDS')

export const setCards = createAction<any[]>('SET_CARDS')
