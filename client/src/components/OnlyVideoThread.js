import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const OnlyVideoThread = (props) => {
	const [loadPost, setLoadPost] = useState(true);
	const [count, setCount] = useState(10);
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.postReducer);

	// display only profil id thread
	const threadContext = props.context;

	const loadMore = () => {
		if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
			setLoadPost(true);
		}
	};

	useEffect(() => {
		if (loadPost) {
			dispatch(getPosts(count));
			setLoadPost(false);
			setCount(count + 5);
		}

		window.addEventListener("scroll", loadMore);
		return () => window.removeEventListener("scroll", loadMore);
	}, [loadPost, count, posts, threadContext, dispatch]);

	return (
		<div className="thread-container">
			<ul>
				{!isEmpty(posts[0]) &&
					posts.map((post) => {
						if (post.video) return <Card post={post} key={post._id} />;
						return true;
					})}
			</ul>
		</div>
	);
};

export default OnlyVideoThread;
