import { useEffect } from "react";
import axios from "axios";
import {Chip, createTheme, ThemeProvider} from "@material-ui/core";

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) => {

    const darkTheme = createTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#fff",
          },
        },
      });

    const handleAdd=(genre)=>{
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g)=>g.id!==genre.id));
        setPage(1);
    };

    const handleRemove=(genre)=>{
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    };

    const fetchGenres = async() => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`   // gets the genres
        );

        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});   // unmounts the genres after changing pages 
        };
        

        // eslint-disable-next-line
    }, []);

    return (
        <ThemeProvider  theme={darkTheme}>
        <div style={{padding: "6px 0"}}>

            {selectedGenres && selectedGenres.map((genre) => (
                <Chip 
                    label={genre.name}
                    style={{margin: 2, fontWeight: "bold"}}
                    size="small"
                    key={genre.id}
                    clickable
                    onDelete={()=>handleRemove(genre)}
                    />
                    ))}

            {genres && genres.map((genre) => (
                <Chip 
                label={genre.name}
                style={{margin: 2, fontWeight: "bold"}}
                size="small"
                color="primary"
                    key={genre.id}
                    clickable
                    onClick={()=>handleAdd(genre)}
                />
            ))}
        </div>
        </ThemeProvider>
    );
};

export default Genres;