import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-ab249.cloudfunctions.net/api",

  //(LOCAL URL)//
  // baseURL: 'http://127.0.0.1:5001/clone-ab249/us-central1/api'
  // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
