import Pagination from '@material-ui/lab/Pagination';
import {createTheme, ThemeProvider} from "@material-ui/core/styles";

// creating custom theme for pagination
const darkTheme=createTheme({

    palette: {
        type: "dark",
},
});

const CustomPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };
    return(
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            marginBottom: 60,
            height: "40px",
        }}
        >
            <ThemeProvider theme={darkTheme}>
            <Pagination 
            count={numOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)} 
            />
            </ThemeProvider>
        </div>
    ); 
};

export default CustomPagination;