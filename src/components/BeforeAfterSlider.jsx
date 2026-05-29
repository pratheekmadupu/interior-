import { useState, useRef } from 'react';

export function BeforeAfterSlider({ beforeImage, afterImage, title }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pct);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[350px] overflow-hidden rounded-sm cursor-ew-resize select-none border border-primary/5 shadow-inner"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* AFTER IMAGE (Background) */}
      <img
        src={afterImage}
        alt={`${title} After`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute bottom-4 right-4 bg-seafoam text-primary text-[0.6rem] font-bold tracking-widest px-3 py-1 uppercase rounded-sm z-20 font-sans shadow-md">
        After
      </div>

      {/* BEFORE IMAGE (Clipped overlay) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt={`${title} Before`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute bottom-4 left-4 bg-primary text-white text-[0.6rem] font-bold tracking-widest px-3 py-1 uppercase rounded-sm font-sans shadow-md">
          Before
        </div>
      </div>

      {/* SLIDER HANDLE LINE */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gold z-20 pointer-events-none shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-2xl pointer-events-none z-30">
          <span className="text-[0.6rem] text-gold font-bold">&harr;</span>
        </div>
      </div>
    </div>
  );
}
