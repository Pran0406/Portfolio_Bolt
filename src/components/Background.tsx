import { useEffect, useRef } from 'react';

export default function Background() {
  const mouse = useRef({ x: 0, y: 0 });
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);

      if (parallaxRef.current) {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        parallaxRef.current.style.setProperty('--px', `${nx}`);
        parallaxRef.current.style.setProperty('--py', `${ny}`);
      }
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />

      {/* 3D perspective scene */}
      <div
        ref={parallaxRef}
        className="absolute inset-0"
        style={{ perspective: '1200px', '--px': '0', '--py': '0' } as React.CSSProperties}
      >
        <div
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: 'translate3d(calc(var(--px) * -12px), calc(var(--py) * -12px), 0)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 3D floating wireframe cube — top left */}
          <div
            className="absolute left-[8%] top-[18%] animate-float-soft"
            style={{
              transform: 'translate3d(calc(var(--px) * 30px), calc(var(--py) * 30px), 0) rotateX(18deg) rotateY(32deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="cube-3d h-24 w-24">
              <div className="cube-face right" />
              <div className="cube-face left" />
              <div className="cube-face top" />
              <div className="cube-face bottom" />
            </div>
          </div>

          {/* 3D floating pyramid — right side */}
          <div
            className="absolute right-[10%] top-[28%] animate-float-y [animation-delay:1.5s]"
            style={{
              transform: 'translate3d(calc(var(--px) * -25px), calc(var(--py) * -25px), 0) rotateX(22deg) rotateY(-28deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="pyramid-3d h-28 w-28" />
          </div>

          {/* 3D floating ring — bottom left */}
          <div
            className="absolute left-[15%] bottom-[18%] animate-float-soft [animation-delay:3s]"
            style={{
              transform: 'translate3d(calc(var(--px) * 20px), calc(var(--py) * 20px), 0) rotateX(60deg) rotateZ(20deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="ring-3d h-32 w-32" />
          </div>

          {/* 3D floating grid plane — bottom right */}
          <div
            className="absolute right-[12%] bottom-[22%] animate-float-y [animation-delay:2s]"
            style={{
              transform: 'translate3d(calc(var(--px) * -18px), calc(var(--py) * -18px), 0) rotateX(55deg) rotateZ(-12deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="grid-plane-3d h-28 w-28" />
          </div>

          {/* small floating sphere — center upper */}
          <div
            className="absolute left-[48%] top-[12%] animate-float-soft [animation-delay:0.8s]"
            style={{
              transform: 'translate3d(calc(var(--px) * 15px), calc(var(--py) * 15px), 0)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="sphere-3d h-16 w-16" />
          </div>
        </div>
      </div>

      {/* nebula blobs */}
      <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-nebula-600/30 blur-[90px] animate-blob-slow animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-aqua-500/20 blur-[100px] animate-blob-slower animate-pulse-glow [animation-delay:1.5s]" />
      <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-magenta-500/15 blur-[90px] animate-blob-slow [animation-delay:3s]" />
      <div className="absolute top-2/3 left-2/3 h-[22rem] w-[22rem] rounded-full bg-nebula-500/15 blur-[80px] animate-blob-slower [animation-delay:2s]" />

      {/* cursor glow */}
      <div
        className="absolute h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nebula-400/10 blur-[120px] transition-transform duration-300"
        style={{ left: 'var(--mx, 50%)', top: 'var(--my, 50%)' }}
      />

      {/* top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
