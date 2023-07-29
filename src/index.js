import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1>React Course</h1>;
}

function SubHeader() {
  return <h2>This will be an exciting course</h2>;
}

function Header() {
  return(
    <div>
    <MainHeader/>
    <SubHeader/>
    </div>
    
  )
}

function Footer() {
  return <p style={{color:"gray",backgroundColor:"black"}}>Happy coding</p>;
}
function MainBody() {
  return (
    <div>
      <p>Learn React</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
    </div>
  );
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
