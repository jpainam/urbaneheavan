import useGetData from "../../hooks/useGetData";
import ServiceLine from "./ServiceLine";
const AllServices = () => {
  const services = useGetData([], "./data/services.json");
  return (
    <div className="col-xl-12">
      {services?.length > 0 &&
        services?.map((sr, i) => (
          <div
            key={sr?.id}
            className={`single-service-item ${i === 0 ? "mt-30" : ""}`}
          >
            <ServiceLine service={sr} i={i + 1} className={"service-two"} />
          </div>
        ))}
    </div>
  );
};

export default AllServices;
