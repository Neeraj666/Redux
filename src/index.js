import React from "react-dom/client";
import App from "./App";

import Reducer from "./Reducer";
import {legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(Reducer);

const root = React.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);