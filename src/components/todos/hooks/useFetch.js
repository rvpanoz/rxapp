import { useEffect } from "react";

const useFetch = (fetch, opts = {}) => {
  useEffect(() => fetch(opts));
};

export default useFetch;
