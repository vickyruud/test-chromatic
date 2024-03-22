import Image from "next/image";
import { Button } from "@/stories/Button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-52 bg-green-300">
      <div>
        <Button primary backgroundColor="red" label="button" size="small" />
        <Button primary label="button" size="medium" />
        <Button primary label="button" size="large" />
        <Button secondary label="button" size="large" />
        Hello
      </div>
    </main>
  );
}
