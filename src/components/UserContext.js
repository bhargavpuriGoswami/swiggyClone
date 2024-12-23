import { createContext } from "react";

const UserContext = createContext(
    {
        LoggedInUser: "Guest"
    }
);

export default UserContext