import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 w-full p-6">
        <h1 className="text-2xl font-semibold">Swimlane Dashboard</h1>
      </main>
    </div>
  );
}
