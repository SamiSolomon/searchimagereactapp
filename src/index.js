import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import searchImages from "./Api.js";

searchImages();

const el=document.getElementById("root");
const root =createRoot(el);
root.render(<App />);
