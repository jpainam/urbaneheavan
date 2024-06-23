import { useEffect, useState } from "react";
//fetch data
import useGetData from "../../hooks/useGetData";

const SelectOption = () => {
  const [select, setSelect] = useState("");
  const [openselect, setOpenSelect] = useState(false);
  const options = useGetData([], "./data/options.json"); // initialValue, link

  useEffect(() => {
    if (options?.length > 0) setSelect(options[0]?.option);
  }, [options]);
  return (
    <div
      className={`nice-select ${openselect ? "open" : ""} `}
      onClick={() => setOpenSelect((p) => !p)}
    >
      <span className="current">{select}</span>
      <ul className="list">
        {options?.length > 0 &&
          options?.map((opt) => (
            <li
              key={opt?.id}
              onClick={() => setSelect(opt?.option)}
              className={`option ${opt?.id === "op1" ? "selected focus" : ""}`}
            >
              {opt?.option}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SelectOption;
