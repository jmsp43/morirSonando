import axios from "axios";
const baseURL = "https://morirsonando.onrender.com";

//show all foods
export const getFoods = async () => {
  const URL = `${baseURL}/menu`;
  const response = await axios.get(URL);
  return response;
};

//show all orders
export const getOrders = async () => {
  const URL = `${baseURL}/receipt`;
  const response = await axios.get(URL);
  return response;
};

//show one food
export const getItem = async (name) => {
  const URL = `${baseURL}/menu/${name}`;
  const response = await axios.get(URL);
  return response;
};

//Edit an order
export const editItem = async (id, updatedItem) => {
  const URL = `${baseURL}/${id}`;
  console.log(updatedItem)
  const response = await axios.put(URL, updatedItem);
  return response;
};

//Create an order
export  const createOrder = async (order) => {
  const URL = `${baseURL}/newOrder`;
  console.log(order)
  const response = await axios.post(URL, order);
  return response;
};

// Delete an item from your order
export const deleteOrder = async (id) => {
  const URL = `${baseURL}/${id}`;
  const response = await axios.delete(URL);
  return response;
};
