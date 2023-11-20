import { Button } from "antd";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      Dashboard
      <Button className="bg-blue-500" type="primary">
        Logout
      </Button>
    </main>
  );
}
