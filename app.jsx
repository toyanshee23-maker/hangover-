import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import StatsCard from "./StatsCard";
import QuickActions from "./QuickActions";

import CustomerForm from "./CustomerForm";
import AIAnalysis from "./AIAnalysis";

import SalesChart from "./SalesChart";
import TopSellingChart from "./TopSellingChart";
import HourlyOrdersChart from "./HourlyOrdersChart";

import InventoryStatus from "./InventoryStatus";
import AIInsights from "./AIInsights";

import KitchenQueue from "./KitchenQueue";
import DemandPrediction from "./DemandPrediction";

import CustomerHistory from "./CustomerHistory";
import RecentOrders from "./RecentOrders";

function App() {
  const [customer, setCustomer] = useState(null);
 
  return (
  <div>
    <Sidebar />
    <Header/>

     <StatsCard
      title="Today's Orders"
      value="143"
      change="+12%"
    />
     <QuickActions />
     <CustomerForm onAnalyze={setCustomer} />
     <AIAnalysis customer={customer} />
     <SalesChart />
     <TopSellingChart />
     <HourlyOrdersChart />
     <InventoryStatus />
     <AIInsights />
     <KitchenQueue />
     <DemandPrediction />
     <CustomerHistory />
     <RecentOrders />
  </div>
);
  
}

export default App;