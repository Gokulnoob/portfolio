"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as ReRadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export interface SkillDatum {
  subject: string;
  value: number;
}

const defaultData: SkillDatum[] = [
  { subject: "React/Next.js", value: 90 },
  { subject: "Flutter/Dart", value: 88 },
  { subject: "Python/AI", value: 80 },
  { subject: "TypeScript", value: 80 },
  { subject: "UI/UX Design", value: 85 },
  { subject: "Backend APIs", value: 75 },
];

export default function SkillsRadar({
  data = defaultData,
}: {
  data?: SkillDatum[];
}) {
  return (
    <div className="h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-4">
      <ResponsiveContainer>
        <ReRadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="rgba(148, 163, 184, 0.35)" />
          <PolarAngleAxis
            dataKey="subject"
            stroke="rgba(226, 232, 240, 0.8)"
            tick={{ fill: "rgba(226, 232, 240, 0.8)", fontSize: 12 }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
          <Radar
            name="Skill"
            dataKey="value"
            stroke="#34d399"
            fill="#34d399"
            fillOpacity={0.25}
          />
          <Tooltip
            contentStyle={{
              background: "rgba(15, 23, 42, 0.85)",
              borderRadius: "0.75rem",
              border: "1px solid rgba(148, 163, 184, 0.2)",
            }}
            labelStyle={{ color: "#a7f3d0" }}
            formatter={(value: number) => [`${value}%`, "Proficiency"]}
          />
        </ReRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
