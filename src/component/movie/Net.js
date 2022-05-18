import { useEffect, useState } from "react";
import styled from 'styled-components';
import Banner from "./include/Banner";
import Header from "./include/Header";
import SliderDiv from "./include/Slider";
import Movie from "./Movie";
import { media } from "../../style/media_query";

const Net = () => {
    const [trand, setTrand] = useState([])
    const [popular, setPopular] = useState([])
    const [filtered, setFiltered] = useState([])
    const [rated, setRated] = useState([])
    const [comming, setComming] = useState([])
    const [mainBanner, setMainBanner] = useState([])
    const [activeGenre, setActiveGenre] = useState(0)

    const fetchPopular = async () => {
        const tranding = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=b2fa540dedf947a97be9fdbb2c662548&language=ko')

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=b2fa540dedf947a97be9fdbb2c662548&language=ko')

        const best = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b2fa540dedf947a97be9fdbb2c662548&language=ko')

        const comm = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b2fa540dedf947a97be9fdbb2c662548&language=ko')

        const banner = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=b2fa540dedf947a97be9fdbb2c662548&language=ko')

        const trand = await tranding.json()
        const movies = await data.json()
        const rated = await best.json()
        const comming = await comm.json()
        const mainBanner = await banner.json()

        setPopular(movies.results)
        setFiltered(movies.results)
        setRated(rated.results)
        setComming(comming.results)
        setMainBanner(mainBanner.results)
        setTrand(trand.results)
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

                <MainBanner filtered={filtered}>
                    {
                        mainBanner.map((movie) => {
                            return <Banner
                                key={ movie.id }
                                movie={ movie }>
                            </Banner>
                        })
                    }
                </MainBanner>

                <PopilarMovies>
                    <SliderDiv
                        filtered={filtered}
                        rated={rated}
                        comming={comming}
                        trand={ trand } />
                </PopilarMovies>

            </PopilarWrap>
        </Wrap>
    );
};

export default Net;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
`
const PopilarWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
`

const MainBanner = styled.div`
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
    overflow: hidden;
    & div:nth-child(n+100){
        display: none;
    }
    ${media.medium`
        height: 280px;
    `}
    ${media.mobile`
        height: 200px;
    `}
`

const PopilarMovies = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
`