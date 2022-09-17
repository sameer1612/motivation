import axios from "axios";
import { Motivation } from "../components/home";

const BASE_URL = "http://localhost:3000";

export async function getMotivations() {
  const response = await axios.get(BASE_URL + "/motivations");
  return response.data as Motivation[];
}
