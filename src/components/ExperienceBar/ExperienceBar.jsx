import { useState } from "react";

function ExperienceBar() {
  const [bar, setBar] = useState(0);
  return (
    <div className="md:mt-10 mt-3 max-w-[180px]">
      <span className="font-bold">{bar > 10 ? "Any" : bar}</span>
      <input
        className="w-full"
        type="range"
        min="0"
        step={1}
        max="11"
        value={bar}
        onChange={(e) => {
          setBar(e.target.value);
          console.log(bar);
        }}
      />
      <div className="flex justify-between text-slate-500">
        <span>0 Years</span>
        <span>Any</span>
      </div>
    </div>
  );
}
export default ExperienceBar;
