// app/page.tsx
import React from "react";

export default function Home() {
  const quantity = 10;
  const images = Array.from({ length: quantity }, (_, i) => `/images/${i + 1}.jpg`);

  // helper to create style with CSS custom props, typed as React.CSSProperties
  const sliderStyle = { ["--quantity" as any]: String(quantity) } as React.CSSProperties;

  return (
    <div className="banner">
      {/* Slider */}
      <div className="slider" style={sliderStyle}>
        {images.map((src, index) => {
          const itemStyle = { ["--position" as any]: String(index + 1) } as React.CSSProperties;
          return (
            <div key={index} className="item" style={itemStyle}>
              <img src={src} alt={`image-${index + 1}`} />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="content">
        <h1>Next Thing</h1>

        <div className="author">
          <h2>Sahiba Ansari</h2>
          <p><b>Web Design</b></p>
        </div>
      </div>
    </div>
  );
}
