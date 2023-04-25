import ReactDOM from "react-dom/client";
import App from "./App";

const el: HTMLElement | null = document.getElementById("root");

const root: ReactDOM.Root = ReactDOM.createRoot(el!);

root.render(<App />);
