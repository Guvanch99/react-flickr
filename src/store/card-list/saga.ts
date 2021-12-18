import {put, takeLatest } from 'redux-saga/effects'
import {getCards, setCards} from "./actions";
import {DB} from "../../core/axios";

type TDataPayload = {
    cards: []
}

function* getCardsSaga() {
    try {
        const { cards }: TDataPayload = yield DB('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&nojsoncallback=true')
        yield put(setCards(cards))
    } catch (error) {
       console.log('Error')
    }
}

function* cardsSaga() {
    yield takeLatest(getCards.type, getCardsSaga)
}

export default cardsSaga