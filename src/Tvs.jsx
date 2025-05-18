import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";
import ItemCard from "./components/ItemCard.jsx";
import ContainerBox from "./components/ContainerBox.jsx";

function ExampleCarouselImage(props) {
    return null;
}

ExampleCarouselImage.propTypes = {text: PropTypes.string};
const Tvs = () => {

    // 1
    const [tvList, setTvList] = useState([])

    // 2
    const getTvList = async () => {
        // 3
        try{
            const url = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NlMjljMjc2MzZmODY0OGM0YzlmNmMyNGQyYTNhOCIsIm5iZiI6MTc0NzU0OTY5Ni41NjMsInN1YiI6IjY4Mjk3ZTAwOWFiODFhZjUwNWY1NTVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TjVbPql5Eg1poQRSZYmAFUyeCkoojguMPja6DCNsTXE'
                }
            };

            const {data, status} =await axios.get(url, options)
            console.log(data)
            console.log(status)
            // 5
            if (status === 200){
                setTvList(data.results)
            }
        }catch (e) {
            console.log(e.message)
        }
    }

    // 4
    useEffect(() => {
        getTvList()
    }, []);




    return (

        <ContainerBox>
                {tvList?.map((tv, index) => (
                    <ItemCard data={tv} key={tv.id}/>
                ))}
        </ContainerBox>
    );
};

export default Tvs;