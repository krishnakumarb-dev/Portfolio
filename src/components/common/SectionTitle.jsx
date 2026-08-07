function SectionTitle({
  badge,
  title,
  subtitle,
}) {
  return (
    <div className="section-header">
      {badge && (
        <span className="section-badge">
          {badge}
        </span>
      )}

      <h2 className="section-title">
        {title}
      </h2>

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;