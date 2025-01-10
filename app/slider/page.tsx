"use client";
import ContentSlider from "@/components/Slider/ContextSlder";

export default function Slider() {
  return (
    <main className="bg-black overflow-x-hidden relative">
      <ContentSlider>
        <div className="bg-red-800 flex items-center justify-center h-96">
          First Slider
        </div>
        <div className="bg-sky-800 flex items-center justify-center h-96">
          Second Slider
        </div>
        <div className="bg-yellow-800 flex items-center justify-center h-96">
          Third Slider
        </div>
      </ContentSlider>
    </main>
  );
}
