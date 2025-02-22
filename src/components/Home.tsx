import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks";

const Home = () => {
  useDocumentTitle("The Ledges Links");

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="text-center">The Ledges Links</h1>
        <ul className="list-group list-group-flush py-1">
          <li className="list-group-item">
            <Link to="/appliances">Appliances</Link>
          </li>
          <li className="list-group-item">
            <a
              href="https://docs.google.com/document/d/1R7h_T9FEZaYBATL90xgo9sre8rtkAL6XasGbgYok3Jc/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Internet
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
