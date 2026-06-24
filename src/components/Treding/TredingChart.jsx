import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#fff", padding: 10, borderRadius: 8 }}>
        <p>{label}</p>
        <strong>₹{payload[0].value}/sq.ft</strong>
      </div>
    );
  }
  return null;
};

export default function TrendingChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: "green", strokeWidth: 1 }} // vertical line
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="green"
          strokeWidth={1}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
