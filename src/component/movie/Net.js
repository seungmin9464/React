import { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "./include/Header";
import SliderDiv from "./include/Slider";

const Net = () => {

    const [popular, setPopular] = useState([])
    const [filtered, setFiltered] = useState([])
    const [rated, setRated] = useState([])
    const [comming, setComming] = useState([])
    const [activeGenre, setActiveGenre] = useState(0)

    const fetchPopular = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b2fa540dedf947a97be9fdbb2c662548&language=ko&page=1')

        const best = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b2fa540dedf947a97be9fdbb2c662548&language=ko&page=1')

        const comm = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b2fa540dedf947a97be9fdbb2c662548&language=ko&page=1')

        const movies = await data.json()
        const rated = await best.json()
        const comming = await comm.json()

        setPopular(movies.results)
        setFiltered(movies.results)
        setRated(rated.results)
        setComming(comming.results)
    }

    useEffect(() => {
        fetchPopular()
    }, [])

    return (
        <Wrap>
            <PopilarWrap>
                <Header
                    popular={popular}
                    setFiltered={setFiltered}
                    activeGenre={activeGenre}
                    setActiveGenre={setActiveGenre} />

                <PopilarMovies>
                    <SliderDiv
                        filtered={filtered}
                        rated={rated}
                        comming={comming} />
                </PopilarMovies>

            </PopilarWrap>
        </Wrap>
    );
};

export default Net;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bgColor};
`
const PopilarWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
`
const PopilarMovies = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
`