import { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { Teacher } from "./components/teacher";
import 'bootstrap/dist/css/bootstrap.css'
// import Counter from "./components/counter";
// import LoadImages from "./components/api";
// import Image from "./components/gallery";


function App() {
  // const data = LoadImages();
  //   console.log (data);

  const [data, setData] = useState ([]);
  const [query, setQuery] = useState ([]);
  const [page, setpage] = useState ([]);

  const client_id = "Drsmg0zwRR074bHnf_AxtytP2Ygi4PJ11RzicwBkSj8";
  const fetchUrl = `https://api.unsplash.com/photos?client_id=${client_id}&query=${query}&page=${page}`

  const fetchImages = () => {
    axios
    .get(fetchUrl, {headers:{},})
    .then((response) => {
      setData([...data, ...response.data.results]);
    }).catch((error) => {console.log(error);});
    setpage(page+1)
  };

  useEffect (() => {
    fetchImages();
  }, [query]);
  

  return (
    <div className="App">

        <div className='form'>
          <input type="text" className='p-2 m-2' placeholder='Search for pics'></input>
        </div>


        <InfiniteScroll
  dataLength={data.length} //This is important field to render the next data
  next={fetchImages}
  hasMore = {true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>
  
  <div className=''>
  {data.map((data, key) => (
    <div className='' key={key}>
      <img src={data.urls.small} className='' alt={data.alt_description} />
      <h4>Photo by {data.user.name}</h4>
    </div>
  ))}
</div>
</InfiniteScroll>

      {/* {data.map((img) => (

      <Image key={img.id} src = {img.urls.thumb} />
      
      ))}
      <Counter /> */}

    </div>
  );
}

export default App;
