import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MetricStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  duration?: number;
}

export const MetricStat = ({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  duration = 2
}: MetricStatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;
      
      const updateCount = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center"
    >
      <div className="mb-2">
        <span className="text-4xl lg:text-5xl font-bold gradient-text">
          {prefix}{count}{suffix}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">
        {label}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};