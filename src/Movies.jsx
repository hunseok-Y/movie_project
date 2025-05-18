import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ItemCard from "./components/ItemCard.jsx";
import ContainerBox from "./components/ContainerBox.jsx";


const Movies = () => {
    // state, funtion, variable, etc
    const [movies, setMovies] = useState([])

    // 영화 API를 호출하는 함수
    const getMovies = async() => {
        try{
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NlMjljMjc2MzZmODY0OGM0YzlmNmMyNGQyYTNhOCIsIm5iZiI6MTc0NzU0OTY5Ni41NjMsInN1YiI6IjY4Mjk3ZTAwOWFiODFhZjUwNWY1NTVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TjVbPql5Eg1poQRSZYmAFUyeCkoojguMPja6DCNsTXE'
                }
            };


            const {data, status} = await axios.get(url, options)
            console.log(data)
            console.log(status)
            if (status === 200) {
                setMovies(data.results)
            }
        } catch(e){
            console.log(e.message)
        }


    }

    useEffect(() => {
        getMovies()
    }, []);


    // 화면에 보여지는 부분
    return (

        <ContainerBox >

            {/*<button onClick={() => getMovies()}>영화데이터 불러오기</button>*/}
                {movies?.map((movie, index) => (
                   <ItemCard data={movie} key={movie.id}/>

                ))}

        </ContainerBox>
    );
};

export default Movies;