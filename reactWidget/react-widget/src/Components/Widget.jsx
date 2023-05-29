import { useState } from "react";
import "./style.css";

const buttons = ["Details", "Metrics", "Orders", "Insights"];

export default function Widget() {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => setActiveBlock(index);

  return (
    <article className="card">
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div className="content" style={{ transform: `translateY(calc(0px - var(--menu-height) * ${activeBlock}))` }}>
          <div className="block">
            <h2>Details</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Metrics</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Orders</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Insights</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie. 
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
