import axios from "axios";

const apiFilmes = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmQwYzgzOWVlNzZiZmExNTQ1MzQyOWEyYzgxYzI1NSIsInN1YiI6IjY0MzQ5MzEzMDZmOTg0MDExMDhhOGJiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lbPYq-oIK_98F57Rp2MFoybbu0Z0ccyum55LtIJ4fe0'
    }
})

export default apiFilmes