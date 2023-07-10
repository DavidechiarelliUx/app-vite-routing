import { Link } from "react-router-dom";
import "../routes/styles/routes/error.css";


export default function Error() {
  return (
  

    <div className="container">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p>
          mi dispiace ma questa pagina non esiste, invece di spaccare tutto torna alla home
        </p>
        <Link to="/" className="Link_404">Go to Home</Link>
      </div>
    </div>
   
  );
}