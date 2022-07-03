import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPosts } from "../actions/post.actions";
import { UIdContext } from "./AppContext";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const Thread = (props) => {
	const uid = useContext(UIdContext);

	const [loadPost, setLoadPost] = useState(true);
	const [count, setCount] = useState(5);
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.postReducer);

	const [userPosts, setUserPosts] = useState([]);

	// display only profil id thread
	const threadContext = props.context;

	const loadMore = () => {
		if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
			setLoadPost(true);
		}
	};

	useEffect(() => {
		if (threadContext) {
			let array = [];
			dispatch(getPosts(40 + count));
			for (let i = 0; i < posts.length; i++) {
				if (posts[i].posterId === threadContext) {
					array.push(posts[i]);
				}
			}
			setUserPosts(array);
			setLoadPost(false);
		} else if (loadPost) {
			dispatch(getPosts(count));
			setLoadPost(false);
			setCount(count + 5);
		}

		window.addEventListener("scroll", loadMore);
		return () => window.removeEventListener("scroll", loadMore);
	}, [loadPost, count, posts, threadContext, dispatch]);

	return (
		<div className="thread-container">
			{threadContext && (
				<ul>
					{!isEmpty(posts[0]) &&
						userPosts.map((post) => {
							return <Card post={post} key={post._id} />;
						})}
				</ul>
			)}
			{!threadContext && (
				<ul>
					{!isEmpty(posts[0]) &&
						posts.map((post) => {
							return <Card post={post} key={post._id} />;
						})}
				</ul>
			)}
			{threadContext && userPosts.length === 0 && (
				<div className="window-container empty-post">
					<h4>Il n'y a pas encore de publication à afficher</h4>

					{uid === threadContext && (
						<NavLink to="/">
							<button className="submit-btn">Publier du contenu</button>
						</NavLink>
					)}
				</div>
			)}
		</div>
	);
};

export default Thread;
