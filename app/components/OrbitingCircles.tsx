"use client";

import { useMemo, type CSSProperties } from "react";

export default function OrbitingCircles({
  nodes = ["React", "UI", "APIs"],
}: {
  nodes?: string[];
}) {
  const positionedNodes = useMemo(() => {
    const count = nodes.length;
    const radius = 96;
    return nodes.map((label, index) => {
      const angle = (index / count) * 2 * Math.PI;
      const x = Number((Math.cos(angle) * radius).toFixed(2));
      const y = Number((Math.sin(angle) * radius).toFixed(2));
      return { label, x, y };
    });
  }, [nodes]);

  return (
    <div className="relative h-64 w-64">
      <div className="orbit-center">You</div>
      {positionedNodes.map((node) => (
        <div
          key={node.label}
          className="orbit-node"
          style={
            {
              "--orbit-x": `${node.x}px`,
              "--orbit-y": `${node.y}px`,
            } as CSSProperties
          }
        >
          <span>{node.label}</span>
        </div>
      ))}
    </div>
  );
}
