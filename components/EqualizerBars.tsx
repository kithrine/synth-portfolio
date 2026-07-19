const BAR_COUNT = 20;

/* 20 dancing bars; each gets its own rhythm from the :nth-child CSS rules.
   They only dance while music is actually playing — idle bars sit at rest. */
export default function EqualizerBars({ active }: { active: boolean }) {
  return (
    <div className={`eq-bars${active ? "" : " eq-idle"}`} aria-hidden="true">
      {Array.from({ length: BAR_COUNT }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
