import ReactDOM from "react-dom/client";
import "./css/style.css";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import MainBody from "./mainbody";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "silver", color: "black"}}>
    <Header />
    <div className="px-4">
    <MainBody />
    </div>    
    <Footer />
  </div>
);
