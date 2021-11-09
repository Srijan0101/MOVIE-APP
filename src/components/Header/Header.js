import "./Header.css"

const Header = () =>{
    return (
    <div className="header">
    <span onClick={()=>window.scroll(0, 0)} className="heading">Movie Flixx</span>
    <button className="btn">Login</button>
    </div>
    )
};

export default Header;