import Layout from "components/Layout";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import Select from "components/Select";
import Datepicker from "components/Datepicker";
import useRequestItem from "helpers/hooks/useRequestItem";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

interface IFormInput {
  supplier_name: string;
  product_information: string;
  required_for: string;
  category: string;
  location: string;
  quantity: number;
  timeline: string;
}

const RequestItem = () => {
  const createItemRequest = useRequestItem();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    createItemRequest.mutate(data, {
      onSuccess: () => {
        reset();
        toast.success("New Item request created!")
      },
    });
  };

  return (
    <Layout>
      <h5 className="text-h5 text-center">Apply For New Item</h5>
      <div className="min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[50%] m-auto mt-6"
        >
          <div>
            <Input
              labelName="Name of Supplier"
              {...register("supplier_name", {
                required: { value: true, message: "Supplier name is required" },
              })}
              errorMessage={errors.supplier_name?.message}
            />
          </div>
          <div>
            <Input
              labelName="Product Information"
              {...register("product_information", {
                required: {
                  value: true,
                  message: "Product information is required",
                },
              })}
              errorMessage={errors.product_information?.message}
            />
          </div>
          <div>
            <Select
              labelName="Category"
              {...register("category")}
              options={[
                { label: "Software", value: "software" },
                { label: "Other", value: "other" },
              ]}
            />
          </div>
          <div>
            <Select
              labelName="Quantity"
              {...register("quantity")}
              options={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
              ]}
            />
          </div>
          <div>
            <Datepicker
              labelName="Timeline"
              {...register("timeline", {
                required: {
                  value: true,
                  message: "Timeline is required",
                },
              })}
            />
          </div>
          <div>
            <Select
              labelName="Location"
              {...register("location")}
              options={[
                { label: "A", value: "a" },
                { label: "B", value: "b" },
              ]}
            />
          </div>
          <div>
            <Input labelName="Required For" {...register("required_for")} />
          </div>
          <div className="mt-6 text-center">
            <Button
              variant="outline"
              className="px-[40px] mr-5"
              onClick={() => router.push("/")}
            >
              Cancel
            </Button>
            <Button
              isLoading={createItemRequest.isLoading}
              type="submit"
              className="px-[40px]"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default RequestItem;
