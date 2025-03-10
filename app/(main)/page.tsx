import AnalyticsCharts from "@/components/Dashboard/AnalyticsCharts";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import PostsTable from "@/components/post/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
   <>
   <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
    <DashboardCard title="Posts" count={100} icon={ <Newspaper className="text-slate-500" size={72} />} />
    <DashboardCard title="Categaries" count={12} icon={ <Folder className="text-slate-500" size={72} />} />
    <DashboardCard title="Users" count={750} icon={ <User className="text-slate-500" size={72} />} />
    <DashboardCard title="Comments" count={1200} icon={ <MessageCircle className="text-slate-500" size={72} />} />
   
   </div>
   <AnalyticsCharts />
    <PostsTable title="Latest Posts" limit={5} />
   </>
  );
}
