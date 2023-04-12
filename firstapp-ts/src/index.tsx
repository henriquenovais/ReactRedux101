import ReactDOM from "react-dom/client";
import App from "./App";

const htmlRoot = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(htmlRoot);

root.render(<App />);
