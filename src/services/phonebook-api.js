import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}
export async function registerUser(credentials) {
  const { data } = await axios.post("/users/signup", credentials);
  return data;
}
export async function loginUser(credentials) {
  const { data } = await axios.post("/users/login", credentials);
  return data;
}

export async function logoutUser() {
  const { data } = await axios.post("/users/logout");
  return data;
}

export async function getCurrentUser(persistedToken) {
  const { data } = await axios.get("/users/current", persistedToken);
  return data;
}
