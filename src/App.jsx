import React, {useEffect, useState} from 'react';

const data = [
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
]

const App = () => {


    // String
    const [name, setName] = useState("Mr. yang");

    //array
    const [movies, setMovies] = useState([])

    console.log(1)
    const changeName = ()=> {
        setName("Mr. hoonseok")
        setMovies(data)
        console.log(2)
    }

    useEffect(() => {
        changeName()
        console.log(3)
    }, []);

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


            <button onClick={changeName}>버튼</button>
        </div>
    );
};

export default App;