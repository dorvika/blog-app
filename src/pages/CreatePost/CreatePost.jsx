import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components";
import { createPost } from "../../utils/api";

const CreatePost = () => {
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({ title: "", body: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const newPost = {
      ...postInfo,
      [name]: event.target.value,
    };
    setPostInfo(newPost);
  };

  const createPostData = () => {
    createPost("/posts", postInfo).then(() => {
      navigate("/");
    });
  };

  const postCheck = !!postInfo.title && !!postInfo.body;

  return (
    <Container>
      <Stack height="400px" justifyContent="center" alignItems="center">
        <Typography variant="h2" mb="20px">
          Fill in the fields below to create a post:
        </Typography>
        <Stack width="70%">
          <TextInput
            label="Post title"
            onChange={handleChange}
            name="title"
            value={postInfo.title}
          />
          <TextInput
            label="Post body"
            onChange={handleChange}
            name="body"
            value={postInfo.body}
          />
          <Button
            variant="contained"
            onClick={createPostData}
            disabled={!postCheck}
          >
            Create Post
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CreatePost;
