import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// TODO: Atualizar com a data real do workshop
const TARGET_DATE = new Date('2026-06-20T08:30:00-03:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: 'dias' },
    { value: timeLeft.hours, label: 'horas' },
    { value: timeLeft.minutes, label: 'min' },
    { value: timeLeft.seconds, label: 'seg' },
  ];

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-black via-[#0a0a0a] to-black border-b border-brand-neon/20">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        <span className="text-xs sm:text-sm font-bold text-brand-neon uppercase tracking-widest">
          Faltam:
        </span>
        <div className="flex items-center gap-2 sm:gap-3">
          {blocks.map((b, i) => (
            <div key={b.label} className="flex items-center gap-2 sm:gap-3">
              <motion.div
                key={b.value}
                initial={{ scale: 1.15, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <span className="text-xl sm:text-2xl font-black text-white tabular-nums min-w-[2ch] text-center">
                  {String(b.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-brand-light/50 uppercase tracking-wider">
                  {b.label}
                </span>
              </motion.div>
              {i < blocks.length - 1 && (
                <span className="text-brand-neon/40 text-lg font-light">|</span>
              )}
            </div>
          ))}
        </div>
        <span className="hidden md:inline text-xs sm:text-sm font-semibold text-brand-light/60 uppercase tracking-wider">
          Para o próximo Workshop Growth Engine
        </span>
      </div>
    </div>
  );
};

export default CountdownBar;
