import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks";

const Appliances = () => {
  useDocumentTitle("Appliances | The Ledges Links");

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="text-center">Appliances</h1>
        <div className="py-1">
          <h2 className="h5 mb-2">Back Kitchen</h2>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <a
                href="https://docs.google.com/document/d/1zHwM5Mjj3d5iH7rrKZhuvNMbyzx5hAkr-S18BhwVdF4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Heater
              </a>
            </li>
          </ul>
          <h2 className="h5 mb-2">Kitchen</h2>
          <ul className="list-group list-group-flush">
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
        </div>
        <div className="text-center mt-3">
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appliances;
