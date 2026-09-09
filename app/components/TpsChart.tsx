/**
 * Aircast's per-hour TPS budget on one SMPP account, as a bar chart: OTA
 * roll-outs take the budget at night, marketing and transactional traffic
 * during the day, and budget the high-priority campaign does not use is
 * offered to lower-priority ones (spec: docs/aircast concepts).
 */
export default function TpsChart() {
  const ota = "#8353F2";
  const day = "#50E2AA";
  // [x, otaHeight, dayHeight, reuseHeight] over a 134px scale.
  const bars: [number, number, number, number][] = [
    [40, 134, 0, 0], [59, 134, 0, 0], [78, 134, 0, 0], [97, 130, 0, 0], [116, 122, 0, 0], [135, 90, 0, 0],
    [154, 0, 48, 14], [173, 0, 60, 8], [192, 0, 68, 0], [211, 0, 72, 0], [230, 0, 76, 0], [249, 0, 78, 0],
    [268, 0, 74, 0], [287, 0, 70, 0], [306, 0, 76, 0], [325, 0, 80, 0], [344, 0, 82, 0], [363, 0, 78, 0],
    [382, 0, 70, 0], [401, 0, 56, 16], [420, 0, 48, 32], [439, 100, 0, 0], [458, 126, 0, 0], [477, 134, 0, 0], [496, 134, 0, 0],
  ];
  return (
    <div className="panel" aria-label="Aircast throughput budget over 24 hours">
      <div className="panel-head">
        <b>TPS budget · SMPP account 1</b>
        <span className="eyebrow">24 h · Aircast</span>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Bar chart: high OTA throughput at night, marketing traffic in the day, unused budget reused">
        <g stroke="var(--rule)" strokeWidth="1">
          <line x1="36" y1="20" x2="510" y2="20" /><line x1="36" y1="60" x2="510" y2="60" /><line x1="36" y1="100" x2="510" y2="100" /><line x1="36" y1="140" x2="510" y2="140" />
        </g>
        <g fontFamily="var(--font-mono), monospace" fontSize="10" fill="var(--muted)">
          <text x="4" y="24">800</text><text x="4" y="64">600</text><text x="4" y="104">400</text><text x="4" y="144">200</text>
          <text x="36" y="182">00h</text><text x="150" y="182">06h</text><text x="268" y="182">12h</text><text x="386" y="182">18h</text><text x="486" y="182">23h</text>
        </g>
        <g>
          {bars.map(([x, o, d, r]) => (
            <g key={x}>
              {o > 0 && <rect x={x} y={160 - o} width="14" height={o} fill={ota} />}
              {d > 0 && <rect x={x} y={160 - d} width="14" height={d} fill={day} />}
              {r > 0 && <rect x={x} y={160 - d - r} width="14" height={r} fill={ota} opacity=".45" />}
            </g>
          ))}
        </g>
      </svg>
      <div className="legend">
        <span><i style={{ background: ota }} />OTA roll-out, night</span>
        <span><i style={{ background: day }} />Marketing and transactional, day</span>
        <span><i style={{ background: ota, opacity: 0.45 }} />Unused budget reused</span>
      </div>
    </div>
  );
}
