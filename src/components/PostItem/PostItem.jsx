import { ArrowRightAlt, Close } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../../store/posts/actions";
import { CustomLink } from "../../styles";
import { deletePost } from "../../utils/api";

const PostItem = ({ title, body, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const removePost = () => {
    deletePost(`/posts/${id}`).then(() => {
      dispatch(fetchPosts());
      navigate("/");
    });
  };

  return (
    <Paper
      sx={{ width: "30%", minHeight: "300px", mt: "10px" }}
      variant="outlined"
    >
      <Card sx={{ mx: "5px", height: "100%" }}>
        <Stack justifyContent="space-between" height="100%">
          <Close
            color="primary"
            onClick={removePost}
            sx={{
              alignSelf: "flex-end",
              p: "5px",
              border: "1px solid transparent",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#e28743",
                border: "1px solid #e28743",
              },
            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h2" textAlign="center" my="10px">
              {title}
            </Typography>
            <Typography>
              {body.length > 300 ? `${body.substring(0, 300)}...` : body}
            </Typography>
          </CardContent>
          <CardActions>
            <Stack
              direction="row"
              gap="10px"
              width="100%"
              justifyContent="flex-end"
            >
              <CustomLink to={`/post/${id}`}>Read More</CustomLink>
              <ArrowRightAlt color="primary" />
            </Stack>
          </CardActions>
        </Stack>
      </Card>
    </Paper>
  );
};

export default PostItem;
