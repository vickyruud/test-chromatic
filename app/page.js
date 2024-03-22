import Image from "next/image";
import { Button } from "@/stories/Button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-52 bg-red-500">
      <div>
        <Button primary label="button" size="large" />
        Hello
      </div>
    </main>
  );
}
