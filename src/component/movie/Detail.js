import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API_KEY, API_URL } from './Config';

const Detail = () => {

  let { id } = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=ko`)
      .then((res) => setDetail(res.data))

    axios.get(`${API_URL}tv/${id}?api_key=${API_KEY}&language=ko`)
      .then((res) => setDetail(res.data))
  },[])

  return (
    <DetailWRap>
      <Bg>
        <Gradiant></Gradiant>
        <img src={"http://image.tmdb.org/t/p/w1920_and_h600_multi_faces" + detail?.backdrop_path} alt={ detail?.name }/>
        <MovieContents>
          <Card>
            <img src={ "http://image.tmdb.org/t/p/w500" + detail?.poster_path }/>
          </Card>

          <MovieTextWrap>
            <H1>{ detail?.title }</H1>
            <H1>{ detail?.name }</H1>
            <H3>{ detail?.original_title }</H3>
            <H3>{ detail?.original_title }</H3>
          </MovieTextWrap>
        </MovieContents>
      </Bg>



        {/* <H3>{detail?.title}</H3> */}
        {/* <H3>{detail?.name}</H3> */}
    </DetailWRap>
  );
};

export default Detail;

const DetailWRap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  background-color: #000;
`

const Bg = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  position: relative;
  top: 0;
  & img{
    width: 100%;
  }
`

const Gradiant = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(to left, transparent , rgba(0, 0, 0, 1));
`

const MovieContents = styled.div`
    min-width: 1200px;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    display: flex;
`

const Card = styled.div`
  width: 250px;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-items: center;
`

const MovieTextWrap = styled.div`
  width: calc(100% - 250px);
  height: 100%;
  display: flex;
  padding: 50px 20px;
  box-sizing: border-box;
  flex-direction: column;
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: #fff;
`

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 900;
  color: #989898;
`

const BtnWrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  & li{

  }
`




