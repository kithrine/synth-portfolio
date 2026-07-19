const BAR_COUNT = 20;

/* 20 dancing bars; each gets its own rhythm from the :nth-child CSS rules. */
export default function EqualizerBars() {
  return (
    <div className="eq-bars" aria-hidden="true">
      {Array.from({ length: BAR_COUNT }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
