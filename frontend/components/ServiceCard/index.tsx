import { BriefcaseIcon } from "@heroicons/react/20/solid";

interface ServiceCardType {
  name: string;
  onClick?: () => void
}

const ServiceCard = ({ name, onClick }: ServiceCardType) => {
  return (
    <div className="shadow-larger p-3 rounded-lg mr-5 text-center cursor-pointer" onClick={onClick}>
      <BriefcaseIcon className="text-primary-main w-[50px] m-auto" />
      <div className="mt-5">Request Something ?</div>
      <div>{name}</div>
    </div>
  );
};

export default ServiceCard;
