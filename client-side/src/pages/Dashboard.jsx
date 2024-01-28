import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserSidebar from "../components/UserSidebar";
import UserProfile from "../components/UserProfile";
import UserPosts from "../components/UserPosts";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <UserSidebar />
      </div>
      {tab === "profile" && <UserProfile />}
      {tab === 'posts' && <UserPosts />}
    </div>
  );
}
