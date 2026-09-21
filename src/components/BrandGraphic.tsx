import { motion } from 'framer-motion';

const BrandGraphic = ({ className = '' }: { className?: string }) => {
  const cols = 9;
  const rows = 8;
  const spacing = 40;
  
  // Center of the radial pattern
  const centerX = 2.5; 
  const centerY = 1.5;

  const elements = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Calculate angle from center
      const dx = c - centerX;
      const dy = r - centerY;
      
      // Angle in degrees
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      
      // Only render if not exactly at center
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        elements.push(
          <motion.rect
            key={`${r}-${c}`}
            x={c * spacing}
            y={r * spacing}
            width="12"
            height="3"
            fill="currentColor"
            rx="1.5"
            style={{ transformOrigin: `${c * spacing + 6}px ${r * spacing + 1.5}px` }}
            initial={{ opacity: 0, rotate: angle - 90 }}
            animate={{ opacity: 1, rotate: angle }}
            transition={{ duration: 1, delay: (c + r) * 0.05 }}
          />
        );
      }
    }
  }

  return (
    <div className={`relative ${className}`}>
      <svg 
        width={cols * spacing} 
        height={rows * spacing} 
        viewBox={`0 0 ${cols * spacing} ${rows * spacing}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {elements}
      </svg>
    </div>
  );
};

export default BrandGraphic;
