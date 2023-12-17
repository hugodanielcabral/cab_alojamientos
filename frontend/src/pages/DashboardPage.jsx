import { DashboardCard } from "../components/Dashboard/Card/DashboardCard";
export const DashboardPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return <DashboardCard user={user} />;
};
