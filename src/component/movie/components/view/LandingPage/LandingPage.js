import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../../Config";
import GridCards from '../commons/GridCards';
import MainImage from './Section/MainImage';
import {media} from '../../../../../style/media_query'

const LandingPage = () => {

  const [Movies, setMovies] = useState([])
  const [MainMovieImage, setMainMovieImage] = useState(null)
  const [CurrentPage, setCurrentPage] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const SEARCH_API = `${API_URL}search/movie?&api_key=${API_KEY}&query=`
  
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=1`;
    fetchMovies(endpoint)
  }, [])

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setMovies([...Movies, ...response.results])
        setMainMovieImage(response.results[0])
        setCurrentPage(response.page)
      })
  }

  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko&page=${CurrentPage + 1}`;
    fetchMovies(endpoint)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
        fetch(SEARCH_API + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
        setSearchTerm('')
    }
  }

  const handleOnChange = (e) => {
    let { value } = { ...e.target }
    setSearchTerm(value)
  }

  return (
    <MainMovieImageWrap>
      <MainDiv>
        {MainMovieImage &&
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
          />
        }
      </MainDiv>

      <InnerWrap>
        <SearchArea>
          <form onSubmit={ handleOnSubmit }>
            <input 
              type='text' 
              placeholder='search...' 
              name='search'
              value={ searchTerm }
              onChange={ handleOnChange }/>
          </form>
        </SearchArea>

        <GridWrap>
          {Movies && Movies.map((movie, index) => (
              <React.Fragment key={index}>
                  <GridCards
                      landingPage
                      image={movie.poster_path ?
                          `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                      movieId={movie.id}
                      movieName={movie.original_title}
                  />
              </React.Fragment>
          ))}
        </GridWrap>
      </InnerWrap>

      <LeadMore style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={loadMoreItems}>Load More</button>
      </LeadMore>    
    
    </MainMovieImageWrap>
  );
};

export default LandingPage;

const MainMovieImageWrap = styled.div`
  width: 100%;
  margin: 0;
`

const InnerWrap = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  ${media.desktop`
    padding: 0 40px;
  `}
`

const MainDiv = styled.div`
  padding-top: 60px;
`

const SearchArea = styled.div`
  height: 40px;
  width: 100%;
  display: inline-block;
  & input{
    width: 100%;
    height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: transparent;
    border: none;
    color: #fff;
    &::placeholder{
      font-size: 16px;
      color: #858585;
    }
  }
`

const GridWrap = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  border-bottom: 1px solid #858585;
  border-top: 1px solid #858585;
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `}
  ${media.medium`
    grid-template-columns: 1fr 1fr;
  `}
`

const LeadMore = styled.div`
margin-bottom: 20px;
  & button{
    color: #fff;
    width: auto;
    margin: 0 10px;
    font-size: 20px;
  }
  ${media.desktop`
    padding: 0 40px;
  `}
  ${media.mobile`
    width: inherit%;
    height: 60px;
  `}
`