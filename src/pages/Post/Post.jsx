import { AddComment, Delete, Edit, ModeComment } from "@mui/icons-material";
import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextInput } from "../../components";
import {
  createComment,
  deletePost,
  fetchData,
  updatePost,
} from "../../utils/api";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({});
  const { title, body, comments } = postInfo;
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({
    title: "",
    body: "",
  });
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchData(
      `https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`
    ).then((result) => setPostInfo(result));
  }, [comment]);

  const handlePostChange = (event) => {
    const name = event.target.name;
    const newPost = {
      ...updatedPost,
      [name]: event.target.value,
    };
    if (!newPost.title) newPost.title = title;
    if (!newPost.body) newPost.body = body;
    setUpdatedPost(newPost);
  };

  const addComment = () => {
    const newComment = {
      postId: Number(id),
      body: comment,
    };
    createComment("/comments", newComment).then(() => {
      setComment("");
    });
  };

  const updatePostInfo = () => {
    updatePost(`/posts/${id}`, updatedPost).then(() => {
      fetchData(
        `https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`
      ).then((result) => setPostInfo(result));
    });
    setShowUpdateForm(false);
  };

  const removePost = () => {
    deletePost(`/posts/${id}`).then(() => {
      navigate("/");
    });
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const commentCheck = !!comment;

  return (
    <Container sx={{ my: "20px" }}>
      <Stack direction="row" gap="20px" justifyContent="flex-end" mb="20px">
        <Button
          variant="contained"
          onClick={() => setShowUpdateForm((prev) => !prev)}
          startIcon={<Edit />}
        >
          {!showUpdateForm ? "Edit Post" : "Show Post"}
        </Button>
        <Button variant="contained" onClick={removePost} startIcon={<Delete />}>
          Delete Post
        </Button>
      </Stack>
      {!showUpdateForm ? (
        <Stack>
          <Typography variant="h2" textAlign="center" my="20px">
            {title}
          </Typography>
          <Typography variant="h3" mb="20px">
            {body}
          </Typography>
          <Divider />
          {comments && comments.length ? (
            comments.map(({ id, body }) => (
              <Stack direction="row" gap="10px" my="10px" key={id}>
                <ModeComment color="primary" />
                <Typography key={id}>{body}</Typography>
              </Stack>
            ))
          ) : (
            <Typography my="20px" textAlign="center" variant="h3">
              Comments list is empty :(
            </Typography>
          )}
          <TextInput
            label="Comment"
            name="comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <Button
            variant="contained"
            onClick={addComment}
            disabled={!commentCheck}
            startIcon={<AddComment />}
          >
            Add comment
          </Button>
        </Stack>
      ) : (
        <Stack>
          <TextInput
            label="Title"
            name="title"
            value={updatedPost.title || title}
            onChange={handlePostChange}
          />
          <TextInput
            label="Body"
            name="body"
            value={updatedPost.body || body}
            onChange={handlePostChange}
          />
          <Button variant="contained" onClick={updatePostInfo}>
            Edit Post
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default Post;
