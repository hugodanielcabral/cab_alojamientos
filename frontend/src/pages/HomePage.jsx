import { useAuth } from "../context/AuthContext";
export const HomePage = () => {
  const data = useAuth();
  console.log(data);
  return <div>HomePage</div>;
};
