import axios from "axios";

const API = axios.create({
  baseURL: "https://bloggy-api.herokuapp.com",
});

export const fetchData = async (endpoint) => {
  const response = await API.get(endpoint);
  const { data } = response;
  return data;
};

export const createPost = async (endpoint, obj) => {
  const response = await API.post(endpoint, obj);
  return response;
};

export const updatePost = async (endpoint, obj) => {
  const response = await API.put(endpoint, obj);
  return response;
};

export const deletePost = async (endpoint) => {
  const response = await API.delete(endpoint);
  return response;
};

export const createComment = async (endpoint, obj) => {
  const response = await API.post(endpoint, obj);
  return response;
};
