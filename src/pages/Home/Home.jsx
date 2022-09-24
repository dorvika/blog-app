import { useEffect } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/posts/actions";
import { PostsList } from "../../components";
import { ColorRing } from "react-loader-spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, hasError } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && (
        <Stack height="400px" alignItems="center" justifyContent="center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e28743", "#eab676", "#Eac79a", "#Efd5b4", " #Efdbc2"]}
          />
        </Stack>
      )}
      {hasError && (
        <Stack height="400px" alignItems="center" justifyContent="center">
          <Typography variant="h2">Oops, something went wrong :(</Typography>
        </Stack>
      )}
      <PostsList />
    </Container>
  );
};

export default Home;
