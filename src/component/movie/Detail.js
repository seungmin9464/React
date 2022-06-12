import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API_KEY, API_URL } from './Config';
import { media } from '../../style/media_query';

const Detail = () => {

  let { id } = useParams()
  const [detail, setDetail] = useState()


  useEffect(() => {
    axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=ko`)
      .then((res) => setDetail(res.data))

    axios.get(`${API_URL}tv/${id}?api_key=${API_KEY}&language=ko`)
      .then((res) => setDetail(res.data))
  }, [])

  return (
    <Wrap>
      <Bg>
        <BgWrap>
          <Gradiant></Gradiant>
          <img src={"http://image.tmdb.org/t/p/original" + detail?.backdrop_path} alt={detail?.title} />
        </BgWrap>


        <MovieContents>
          <Card>
            <img src={"http://image.tmdb.org/t/p/w500" + detail?.poster_path} />
          </Card>

          <MovieTextWrap>
            {/*  제목 */}
            <MovieTitle>
              {/* 타이틀 */}
              <H1>{detail?.title || detail?.name}</H1>

              {/* 날짜 */}
              <span>{detail?.release_date || detail?.last_air_date}</span>
            </MovieTitle>
            <SubTile>{detail?.original_title || detail?.name}</SubTile>

            <MovieWrap>
              <MovieKeyword>
                {
                  detail?.genres.map((item) => <li key={item.id}>
                    {item.name}
                  </li>)
                }
              </MovieKeyword>
              <p>{detail?.overview}</p>
            </MovieWrap>
          </MovieTextWrap>
        </MovieContents>
      </Bg>

      <div>
        <Contents>
          {/* <p>출연진</p> */}

        </Contents>
      </div>
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  background-color: #000;
`

const Bg = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
  top: 0;
  & img{
    max-width: 100%;
    height: auto;
  }
  ${media.desktop`
    height: 450px;
    & img{
      width: 100%;
      height: auto;
    }
  `}
  ${media.tablet`
    overflow: inherit;
    height: 850px;
  `}
  ${media.mobile`
    overflow: inherit;
    height: 600px;
  `}
`

const BgWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  & img{}
  ${media.desktop`
    height: 850px;
    & img{
      width: auto;
      height: 850px;
      max-width: inherit;
    }
  `}
  ${media.mobile`
    height: 600px;
    & img{
      height: 600px;
    }
  `}
`

const Gradiant = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(to left, transparent , rgba(0, 0, 0, 1));
  ${media.tablet`
    height: 850px;
  `}
`

const MovieContents = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  padding: 0 30px;
  ${media.desktop`
    width: 100%;
    max-width: fit-content;
    margin: 0;
  `}
  ${media.tablet`
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box;
  `}
`

const Card = styled.div`
  width: 400px;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-items: center;
  ${media.desktop`
    width: 280px;
  `}
  ${media.tablet`
    overflow: inherit;
  `}
  ${media.mobile`
    width: 150px;
    height: auto;
  `}
`

const MovieTextWrap = styled.div`
  width: calc(100% - 250px);
  height: 100%;
  display: flex;
  padding: 50px 20px;
  box-sizing: border-box;
  flex-direction: column;
  ${media.tablet`
    width: 100%;
    padding: 30px 20px;
  `}
  ${media.mobile`
    padding: 20px 0;
  `}
`

const MovieTitle = styled.div`
  display: flex;
  align-items: flex-end;
  & span{
    color: #ddd;
    margin-bottom: 10px;
    font-weight: 600;
    margin: 0 10px 10px;
  }
  ${media.mobile`
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    span{
      margin: 0;
      font-size: 14px;
    }
  `}
`

const SubTile = styled.p`
  font-size: 18px;
  color: #9d9d9d;
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: #fff;
  ${media.mobile`
    font-size: 24px;
  `}
`

const MovieWrap = styled.div`
  padding: 20px;
  box-sizing: border-box;
  & p{
    margin-top: 20px;
    font-size: 20px;
    color: #ddd;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  ${media.tablet`
    padding: 20px 0;
  `}
  ${media.mobile`
    & p{
      font-size: 18px;
    }
  `}
`
const MovieKeyword = styled.ul`
  display: flex;
  
  & li{
    background-color: #666;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 5px;
    color: #ddd;
    font-weight: 500; 
  }
`

const Contents = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding: 50px 0;
`