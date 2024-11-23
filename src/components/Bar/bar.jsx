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
    <div className="flex justify-center text-3xl font-semibold">
      Views: {number}
    </div>
  );
}
