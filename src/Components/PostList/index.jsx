import "./style.css";
import { Collapse } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postActions";
import { Tag } from "antd";
import CommentPost from "./CommentPost";
import CommentsLength from "./CommentsLength";
import { fetchUsers } from "../../redux/actions/userAction";

function PostList(params) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="post-list">
        {posts?.map((post) => (
          <div key={post.id}>
            <div className="post-list_title">
              <p>{post.title}</p>
            </div>
            <div className="post-list_author">
              <div>
                <p>Author: {users[post.userId - 1].name}</p>
                <p>CreateAt: Sep 18,2022</p>
              </div>
              <div className="post-list_author_hashtag">
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
              </div>
            </div>
            <div className="post-list_content">
              <p>{post.body}</p>
            </div>
            <div className="post-list_comment">
              <Collapse
                items={[
                  {
                    label: (
                      <div>
                        {`${
                          CommentsLength({ postId: post.id }).commentsLength
                        } replies`}
                      </div>
                    ),
                    children: (
                      <div>
                        <CommentPost postId={post.id} />
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default PostList;
