import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const Thread = (props) => {
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
	}, [loadPost, dispatch, count, threadContext, posts.length]);

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
		</div>
	);
};

export default Thread;
