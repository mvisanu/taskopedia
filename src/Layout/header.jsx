import logo from "../images/react.png"

function MainHeader() {
  return (
    <div className="pt-2 py-2 pl-2" style={{ backgroundColor: "black"}}>
    <img src={logo} alt="logo" style={{ height: "35px", verticalAlign: "top"}}></img>
    <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundcolor: "lightgrey",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course</p>;
}

function Header() {
  return(
    <div>
    <MainHeader/>
    <SubHeader/>
    </div>
    
  );
}

export default Header;