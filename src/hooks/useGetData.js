import { useEffect, useState } from "react";

const useGetData = (initialValue, link) => {
  const [data, setData] = useState(initialValue || null);
  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const req = await fetch(link);
        const res = await req.json();
        if (isMounted) {
          setData(res);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, []);
  return data;
};

export default useGetData;
