import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {

        // Extract data from API (use axios to fetch the data)
        const {data} = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`  // usage of .env file using $(.env file is used here to store teh api key so that we can keep it in gitignore and not push our API key to github as well)
        );

        setContent(data.results);
    };


    // Changes to fetch the trending everytime {page} changes 
    useEffect(() => {

        window.scroll(0,0);
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

    return(
        <div>
            <div className="pageTitle">TRENDING TODAY</div>
            <div className="trending">
                {
                    // when content is available
                    content && content.map((c) => 
                    <SingleContent 
                    key={c.id}          // reqd(unique for all) 
                    id={c.id} 
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type={c.media_type}
                    vote_average={c.vote_average}
                    />)
                }

            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    );
};  

export default Trending;

