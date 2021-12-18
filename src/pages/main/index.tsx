import {useEffect} from "react";

import CardList from "../../components/card-list";
import {DB} from "../../core/axios";

const Main = () => {
  useEffect(() => {
    DB('https://api.flickr.com/services/feeds/photos_public.gne?&format=json&nojsoncallback=true').then((data: any) => {
      console.log(data.data)
    })
  }, [])
  return <CardList/>
}

export default Main
