import { indicators } from "@/data/data";
import DiagramCard from "@/components/DiagrapCard";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.mainBlock}>
      <h1>📊 Financial statistic</h1>

      <div className={styles.wrapper}>
        <div>
          <DiagramCard
            key={indicators[2].id}
            label={indicators[2].name}
            value={indicators[2].value}
            id={indicators[2].id}
          />
        </div>
        <div className={styles.bottomBlocks}>
          <div>
            <DiagramCard
              key={indicators[0].id}
              label={indicators[0].name}
              value={indicators[0].value}
              id={indicators[0].id}
            />
          </div>
          <div>
            <DiagramCard
              key={indicators[1].id}
              label={indicators[1].name}
              value={indicators[1].value}
              id={indicators[1].id}
            />
          </div>
        </div>

        <svg>
          <line
            x1="50%"
            y1="100px"
            x2="28%"
            y2="200px"
            stroke="#000"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <line
            x1="50%"
            y1="100px"
            x2="72%"
            y2="200px"
            stroke="#000"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#000" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}
