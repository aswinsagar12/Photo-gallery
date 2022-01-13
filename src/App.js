import React, { useEffect, useState } from "react";
import { Heading } from "./components/Heading";
import { Imgloader } from "./components/Imgloader";
import { Wallimage } from "./components/Wallimage";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

//style

const GlobalStyle = createGlobalStyle`
*{
  margin=0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family:sans-serif;
}
`;
const WrapperImage = styled.section`
  max-width: 70rem;
  border-radius:5px;
  margin:  auto;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
`;

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
   fetchImages();
  });

  const fetchImages =()=>{
    const apiRoot = "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0";

    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]));

  }
  return (
    <div>
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Imgloader />}
      >
        <WrapperImage>
          {images.map((image) => (
            <Wallimage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  );
};

export default App;
