const BurstPattern = ({ className = '' }: { className?: string }) => {
  const cols = 12;
  const rows = 9;
  const spacing = 32;
  const lineLength = 12;

  const lines = [];

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Skip the very top-left origin to match the image style if desired, 
      // but the image shows a gap at the origin.
      if (i === 0 && j === 0) continue;

      const cx = i * spacing;
      const cy = j * spacing;
      
      // Calculate angle from origin (0,0) to this point
      const angle = Math.atan2(cy, cx);
      
      const dx = (Math.cos(angle) * lineLength) / 2;
      const dy = (Math.sin(angle) * lineLength) / 2;

      lines.push(
        <line
          key={`${i}-${j}`}
          x1={cx - dx}
          y1={cy - dy}
          x2={cx + dx}
          y2={cy + dy}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      );
    }
  }

  return (
    <svg 
      className={className} 
      viewBox={`-20 -20 ${cols * spacing + 20} ${rows * spacing + 20}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines}
    </svg>
  );
};

export default BurstPattern;
