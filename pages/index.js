import Sidebar from "@/components/Sidebar";
import Sidebar from "@/components/Header";


export default function Home() {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1 min-h-screen bg-gray-50">
          <Header />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
