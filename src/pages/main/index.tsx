import {useEffect} from "react";

import CardList from "../../components/card-list";
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../store/card-list/actions";
import {RootState} from "../../store/store";

const Main = () => {
  const dispatch = useDispatch()
  const {cards} = useSelector((state: RootState) => state.cards)
  console.log(cards)
  useEffect(() => {
    dispatch(getCards())
  }, [])
  return <CardList/>
}

export default Main
