import ReactDOM from "react-dom/client";
import "./css/style.css";
import Header from "./Layout/header";
import Footer from "./Layout/footer";
import MainBody from "./mainbody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="">
    <Header />
    <MainBody />
    <Footer />
  </div>
);
