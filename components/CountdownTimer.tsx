'use client';

import { useState, useEffect } from 'react';
import { WEDDING_CONFIG } from '@/lib/config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(`${WEDDING_CONFIG.date}T00:00:00`).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 py-10 px-4 max-w-lg mx-auto">
      <div className="flex grow basis-0 flex-col items-stretch gap-4 text-center">
        <div className="flex h-20 grow items-center justify-center rounded-lg bg-accent dark:bg-accent-dark">
          <p className="text-text-light dark:text-text-dark text-3xl font-bold font-heading">{timeLeft.days}</p>
        </div>
        <div>
          <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">Days</p>
        </div>
      </div>
      <div className="flex grow basis-0 flex-col items-stretch gap-4 text-center">
        <div className="flex h-20 grow items-center justify-center rounded-lg bg-accent dark:bg-accent-dark">
          <p className="text-text-light dark:text-text-dark text-3xl font-bold font-heading">{timeLeft.hours}</p>
        </div>
        <div>
          <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">Hours</p>
        </div>
      </div>
      <div className="flex grow basis-0 flex-col items-stretch gap-4 text-center">
        <div className="flex h-20 grow items-center justify-center rounded-lg bg-accent dark:bg-accent-dark">
          <p className="text-text-light dark:text-text-dark text-3xl font-bold font-heading">{timeLeft.minutes}</p>
        </div>
        <div>
          <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">Minutes</p>
        </div>
      </div>
      <div className="flex grow basis-0 flex-col items-stretch gap-4 text-center">
        <div className="flex h-20 grow items-center justify-center rounded-lg bg-accent dark:bg-accent-dark">
          <p className="text-text-light dark:text-text-dark text-3xl font-bold font-heading">{timeLeft.seconds}</p>
        </div>
        <div>
          <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">Seconds</p>
        </div>
      </div>
    </div>
  );
}
