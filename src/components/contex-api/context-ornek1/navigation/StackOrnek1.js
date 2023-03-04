import { UsersContextProvider } from "../context/UsersContext";
import Router from "./Router";
const StackOrnek1 = () => {
  return (
      <UsersContextProvider>
      <Router />
      </UsersContextProvider>
  )
}

export default StackOrnek1;