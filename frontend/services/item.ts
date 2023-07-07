import { apiRoutes } from "services";
import axiosClient from "./config/axiosClient";

interface itemRequestPayload {
  supplier_name: string;
  product_information: string;
  category: string;
  quantity: number;
  timeline: string;
  location: string;
  required_for: string;
}

export const createItemRequest = (payload: itemRequestPayload) =>
  axiosClient.post(apiRoutes.item, payload);
