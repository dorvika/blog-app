import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { PostItem } from "..";

const PostsList = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <>
      {!posts.length && (
        <Stack height="400px" justifyContent="center">
          <Typography textAlign="center" variant="h2">
            Posts list is empty :(
          </Typography>
        </Stack>
      )}
      <Stack direction="row" flexWrap="wrap" my="20px" gap="20px">
        {posts.length > 0 &&
          posts.map(({ id, title, body }) => (
            <PostItem key={id} title={title} body={body} id={id} />
          ))}
      </Stack>
    </>
  );
};

export default PostsList;
