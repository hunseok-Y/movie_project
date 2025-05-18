import React, { useState} from 'react';

const App = () => {


    // String
    const [name, setName] = useState("Mr. yang");
    //number
    const [age, setAge] = useState(0)
    // object
    const [movieData, setMovieData] = useState({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    })

    //array
    const [movies, setMovies] = useState([
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
    ])

    const changeName = ()=> {
        setName("Mr. hoonseok")
        setAge(30)
    }

    return (
        <div>
            <h1>hello world</h1>
            <h2>{name}</h2>
            <h3>{movies.length}</h3>
            {movies?.map((movie, index)=> (
                <div key={index}>
                    <h1>{movie.title}</h1>
                    <h2>{movie.completed ? "완료" : "완료되지 않음"}</h2>
                </div>
            ))}

            <h1>{movieData.completed.toString()}</h1>

            <button onClick={changeName}>버튼</button>
        </div>
    );
};

export default App;