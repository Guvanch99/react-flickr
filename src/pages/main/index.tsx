import {useEffect} from "react";

import {CardList,Loader} from "../../components";

import {DB} from "../../core/axios";

import {IItems} from "../../models/typings";

const Main = () => {

  useEffect(() => {
    DB.get<{items:IItems[]}>('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&nojsoncallback=true').then(({data}) => {
      console.log(data.items)
    })
  }, [])

  return (
    <>
      {Card?<CardList/>:<Loader/>}
    </>
  )
}

export default Main
