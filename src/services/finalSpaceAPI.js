import axios from 'axios';

const finalSpaceImageApi = axios.create({
  baseURL: 'https://finalspaceapi.com/api/character/avatar',
});

export default finalSpaceImageApi;
