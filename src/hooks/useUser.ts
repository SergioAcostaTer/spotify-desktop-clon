import { getUser } from "../services/getUser";
import { useEffect, useState } from "react";
import { User } from "../types";

const useUser = (id: string): [User | undefined, boolean] => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUser(id).then((res) => {
      setUser(res);
      setLoading(false);
    });
  }, [id]);

  return [user, loading];
};

export default useUser;
