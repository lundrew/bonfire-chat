import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function GetCurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jsonCurrentUser = Cookies.get("current_user");
    const user =
      jsonCurrentUser !== undefined ? JSON.parse(jsonCurrentUser) : null;
    setUser(user);
  }, []);

  return user;
}
