/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";

export default function Home() {

  return (
    <div className="flex flex-col h-screen items-center p-32 gap-32 bg-neutral-900 text-neutral-100">
      <Navbar />
    </div>
  );
}
