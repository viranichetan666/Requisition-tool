import { useMutation } from "@tanstack/react-query";
import { createItemRequest } from "services/item";

const useRequestItem = () => useMutation(createItemRequest);

export default useRequestItem;
