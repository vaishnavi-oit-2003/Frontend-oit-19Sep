import './StatsCard.css';

export default function StatsCard({ label, value, loading }) {
  if (loading) {
    return (
      <div className="stats-card stats-card-loading">
        <div className="skeleton skeleton-label" />
        <div className="skeleton skeleton-value" />
      </div>
    );
  }

  return (
    <div className="stats-card">
      <span className="stats-label">{label}</span>
      <span className="stats-value">{value}</span>
    </div>
  );
}
