import { useEffect, useState } from "react";

export default function Bar() {
  const [number, setNumber] = useState(0);
  const targetNumber = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber < targetNumber) {
          return prevNumber + 10;
        } else {
          clearInterval(interval);
          return prevNumber;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between text-3xl bg-slate-500 font-bold pt-52 h-16 mb-7 mt-7 ">
      <div>15+ Clients</div>
      <div>100+ Videos</div>
      <div>5M+ Views</div>
    </div>
  );
}
