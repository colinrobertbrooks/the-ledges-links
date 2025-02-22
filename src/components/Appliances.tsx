import { Link } from "react-router-dom";

const Appliances = () => (
  <div className="card">
    <div className="card-body">
      <h1 className="text-center">Appliances</h1>
      <ul className="list-group list-group-flush py-1">
        <li className="list-group-item">
          <a
            href="https://na2.electroluxmedia.com/Original/Electrolux/Electrolux%20Assets/Document/Quick%20Start%20Guide/English/A22474813.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Induction range quick start guide
          </a>
        </li>
        <li className="list-group-item">
          <a
            href="https://na2.electroluxmedia.com/Original/Electrolux/Electrolux%20Assets/Document/Complete%20Owners%20Guide/English/A23936701en.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Induction range use & care
          </a>
        </li>
      </ul>
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  </div>
);

export default Appliances;
