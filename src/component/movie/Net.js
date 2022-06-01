import { useEffect, useState } from "react";
import styled from 'styled-components';
import Banner from "./include/Banner";
import Header from "./include/Header";
import SliderDiv from "./include/Slider";
import { media } from "../../style/media_query";
import { API_KEY, API_URL } from "./Config";
import Footer from "../main/include/Footer";

const Net = () => {
    const [trand, setTrand] = useState([])
    const [popular, setPopular] = useState([])
    const [filtered, setFiltered] = useState([])
    const [rated, setRated] = useState([])
    const [comming, setComming] = useState([])
    const [mainBanner, setMainBanner] = useState([])
    const [activeGenre, setActiveGenre] = useState(0)

    const fetchPopular = async () => {
        const tranding = await fetch(`${API_URL}trending/all/day?api_key=${API_KEY}&language=ko`)

        const data = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=ko`)

        const best = await fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=ko`)

        const comm = await fetch(`${API_URL}movie/upcoming?api_key=${API_KEY}&language=ko`)

        const banner = await fetch(`${API_URL}trending/all/day?api_key=${API_KEY}&language=ko`)

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
        <NetWrap>
            <Header
                popular={popular}
                setFiltered={setFiltered}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre} />

            <MainBanner filtered={filtered}>
                {
                    mainBanner.map((movie) => {
                        return <Banner
                            key={movie.id}
                            movie={movie}>
                        </Banner>
                    })
                }
            </MainBanner>

            <PopilarMovies>
                <SliderDiv
                    filtered={filtered}
                    rated={rated}
                    comming={comming}
                    trand={trand} />
            </PopilarMovies>
            <Footer/>
        </NetWrap>
    );
};

export default Net;

const NetWrap = styled.section`
    background-color: #000;
    .sc-ezWOiH{
        background-color: #171717;
        border-top: none;
        & a{ color: #a2a2a2; }
        & p{ color: #a2a2a2; }
    }
`

const MainBanner = styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 20px;
    padding-top: 80px;
    overflow: hidden;
    & div:nth-child(n+100){
        display: none;
    }
    ${media.pc`
        height: 70vh;
    `}
    ${media.tablet`
        height: 60vh;
    `}
    ${media.medium`
        height: 40vh;
    `}
`

const PopilarMovies = styled.div`
    width: 100%;
    padding-bottom: 40px;
`