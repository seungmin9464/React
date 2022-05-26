import styled from 'styled-components';
import { async } from 'q';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { media } from '../../style/media_query';
import './style.css'
import { API_KEY, API_URL, IMAGE_BASE_URL } from './api/Api';
import Slider from './include/Slider';
import SliderDiv from './include/Slider';

const FEATURED_API = `${API_URL}discover/movie?api_key=${API_KEY}&language=ko&sort_by=popularity.desc`

const SEARCH_API = `${API_URL}search/movie?&api_key=${API_KEY}&query=`

const Net = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selide, setSlide] = useState([])

    useEffect(() => {
        fetch(FEATURED_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results)
            })
    }, [])

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
        // setSearchTerm(e.target.value)
        let { value } = { ...e.target }
        setSearchTerm(value)
    }

    const handleOnLogo = (e) => {
        fetch(FEATURED_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                 setMovies(data.results)
             })
    }

    return (
        <>
            <Header>
                <button onClick={ handleOnLogo }><Logo>BEAKFLIX</Logo></button>
                <form onSubmit={ handleOnSubmit }>
                    <input 
                        type='text' 
                        placeholder='search...' 
                        name='search'
                        value={ searchTerm }
                        onChange={ handleOnChange }/>
                </form>
            </Header>

            <MovieContainer>
                {
                    movies.length > 0 &&
                    movies.map((movie) =>
                        <Movie key={movie.id} {...movie} />)
                }
            </MovieContainer>
        </>
    );
};

export default Net;

const MovieContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ${media.desktop`
        grid-template-columns: 1fr 1fr;
    `}
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    & input{
        border-radius: 50px;
        border: 1px solid #787878;
        width: 250px;
        height: 40px;
        display: inline-block;
        padding: 10px;
    }
    ${media.medium`
        & input{
            width: 150px;
            height: 25px;
        }
    `}
`

const Logo = styled.div`
    font-size: 40px;
    font-weight: 900;
    color: #e50914;
    letter-spacing: -2px;
    ${media.medium`
        font-size: 25px;
    `}
`