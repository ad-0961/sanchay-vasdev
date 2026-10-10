"use client";

import Image from "next/image";
import { useState } from "react";
import { Stethoscope } from "lucide-react";

export default function Flipcard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="md:flex-1 perspective-distant cursor-pointer w-[100%] h-[60vh] md:w-[60vw] max-h-[600px] max-w-[600px] min-w-[300px]">
      <div className="absolute right-0 top-0 rounded-full p-2 z-50 border border-2 border-gray-400 bg-gray-100 dark:bg-gray-800 shadow-lg dark:border-white">
        <Stethoscope size={48} />
      </div>
      <div
        className={`relative duration-300 transform-3d ${flipped ? "rotate-y-180" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="rounded-full overflow-hidden shadow-lg absolute inset-0 h-[60vh] max-h-[600px] backface-hidden">
          <Image
            src="/intro-image.jpg"
            alt="Doctor"
            fill
            loading="eager"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`rounded-full overflow-hidden shadow-lg absolute inset-0 h-[60vh] max-h-[600px] backface-hidden rotate-y-180`}
        >
          <Image
            src="/pediatrician.jpg"
            alt="Doctor"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
