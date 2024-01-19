import { useEffect } from "react";

const useFetch = (dispatch) => {
  useEffect(() => {
    async function getQuestions() {
      try {
        const data = await fetch("http://localhost:9000/questions");
        const res = await data.json();
        if (res) {
          dispatch({ type: "dataRecieved", payload: res });
        }
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    getQuestions();
  }, [dispatch]);
};

export default useFetch;
