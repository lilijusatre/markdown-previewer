import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export function App() {
  return (
    <div className="screen">
      <section className="editor content">
        <div className="toolbar">
          <i>
            <FontAwesomeIcon icon={faPenToSquare} />
          </i>
          <p>Editor</p>
        </div>
        <textarea id="editor"></textarea>
      </section>
      <section className="viewer content" id="preview">
        <div className="toolbar">
          <i>
            <FontAwesomeIcon icon={faEye} />
          </i>
          <p>Previewer</p>
        </div>
      </section>
    </div>
  );
}
