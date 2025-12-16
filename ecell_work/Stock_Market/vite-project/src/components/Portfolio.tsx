import Navbar from "../components/Navbar";
import {StatCard}  from "./Statcard";
import  {RankBadge} from './RankBadge';
import { HoldingsTable } from "../components/HoldingTable";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      <div className="px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Portfolio Holdings</h1>
          <RankBadge />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <StatCard title="Total Portfolio Value" value="$38,819.50" />
          <StatCard
            title="Unrealized P/L"
            value="+$1,252.00"
            valueColor="text-success"
          />
          <StatCard title="Total Positions" value="5" subText="4 Long · 1 Short" />
        </div>

        <HoldingsTable />
      </div>
    </div>
  );
}
