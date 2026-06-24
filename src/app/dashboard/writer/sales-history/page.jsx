import SalesHistoryTable from "@/components/writer/salesHistoryTable";
import { getSalesHistory } from "@/lib/api/writers";
import { getUserSession } from "@/lib/core/session";

const SalesHistory = async () => {
  const user = await getUserSession();

  const writerId = user?.id;

  const sales = await getSalesHistory(writerId);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <SalesHistoryTable sales={sales} />
      </div>
    </div>
  );
};

export default SalesHistory;
