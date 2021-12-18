import {useEffect} from "react";

import CardList from "../../components/card-list";
import {DB} from "../../core/axios";
import {IItems, IResponse} from "../../models/typings";

const Main = () => {

  useEffect(() => {
    DB.get<IResponse>('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&nojsoncallback=true').then(({data}) => {
      console.log(data.data.items)
    })
  }, [])

  return <CardList/>
}

export default Main
