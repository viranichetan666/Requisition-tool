import { useState } from "react";
import Input from "components/Input";
import Layout from "components/Layout";
import ServiceCard from "components/ServiceCard";
import { useRouter } from "next/router";

const MainPage = () => {
  const services = [
    {
      id: "software",
      name: "Software",
    },
    {
      id: "laptop",
      name: "Laptop",
    },
    {
      id: "supplier",
      name: "New Supplier",
    },
    {
      id: "item",
      name: "New Item",
    },
  ];
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const onServiceClickHandler = (service: { id: string; name: string }) => {
    if (service.id === "item") {
      router.push("/item/request");
    }
  };
  return (
    <Layout>
      <div>Welcome to the Service Desk Portal</div>
      <div>
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="How we can help ?"
          className="mt-2"
        ></Input>
      </div>
      <div className="flex mt-5">
        {services.map((service) => {
          return (
            <ServiceCard
              name={service.name}
              key={service.id}
              onClick={() => onServiceClickHandler(service)}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default MainPage;
