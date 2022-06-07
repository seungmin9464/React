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
        <img src={"http://image.tmdb.org/t/p/original" + detail?.backdrop_path} alt={detail?.title}/>
        <H3>{detail?.title}</H3>
        <H3>{detail?.name}</H3>
      </Bg>
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
  height: 100vh;
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

const H3 = styled.h3`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: 0;
  margin: 10px;
`