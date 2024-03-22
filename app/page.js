import Image from "next/image";
import { Button } from "@/stories/Button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-end p-52 bg-red-300">
      <div>
        <Button primary label="button" size="small" />
        <Button primary label="button" size="medium" />
        <Button primary label="button" size="small" />
        <Button secondary label="button" size="medium" />
        Hello
        <p className="text-yellow-800">This is a new P to test</p>
      </div>
    </main>
  );
}
