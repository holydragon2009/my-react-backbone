import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import InsightApp from "./containers/InsightApp";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./services/redux/reducers";

const middleware = [thunk]
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const Insight = props => (
  <div>
    <Provider store={store}>
      <LocaleProvider locale={enUS}>
        <InsightApp />
      </LocaleProvider>
    </Provider>
  </div>
);

ReactDOM.render(<Insight />, document.getElementById("root"));
registerServiceWorker();
