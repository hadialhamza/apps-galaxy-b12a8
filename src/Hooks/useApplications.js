import axios from "axios";
import { useEffect, useState } from "react";

const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../allApplications.json")
      .then((data) => setApplications(data.data))
      .catch((err) => setError(err))
      .finally(() => {
        setTimeout(() => setLoading(false), 1000);
      });
  }, []);

  return { applications, loading, error };
};

export default useApplications;
