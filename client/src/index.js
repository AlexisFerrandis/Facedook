import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { getUsers } from "./actions/users.actions";
// import { getPosts } from "./actions/post.actions";

import reportWebVitals from "./reportWebVitals";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getUsers());
// store.dispatch(getPosts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		{/* <React.StrictMode> */}
			<App />
		{/* </React.StrictMode> */}
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// UNSPLASH
// https://unsplash.com/photos/mEZ3PoFGs_k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/mEZ3PoFGs_k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sLGYaQ_stMM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sLGYaQ_stMM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/2BJwlRZaR5M?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/2BJwlRZaR5M?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/eSjmZW97cH8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sRcKPJc81xw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/UT8LMo-wlyk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/0fN7Fxv1eWA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/5psJeebVp9o?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sf_1ZDA1YFw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

// https://unsplash.com/photos/8Pbw0KxmSKA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/8Pbw0KxmSKA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/vUXKqp1_XqY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/vUXKqp1_XqY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/D72ZlQ6mu-E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/D72ZlQ6mu-E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/9XngoIpxcEo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/R5A_YlcSJwA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/R5A_YlcSJwA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/OYzbqk2y26c?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/sf_1ZDA1YFw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/QYBVbwJYxNA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/QYBVbwJYxNA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
// https://unsplash.com/photos/pMsvOrnIF3Y?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
