import { useState, useRef, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';

function App() {
  const [page, setPage] = useState(0);
  const [noBtnStyle, setNoBtnStyle] = useState<React.CSSProperties>({});
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Memoize mobile breakpoint check
  const isMobile = useMemo(() => window.innerWidth < 768, []);

  // Memoize handleNoMove to prevent recreation on every render
  const handleNoMove = useCallback(() => {
    if (!noButtonRef.current) return;
    
    if (isMobile) {
      // On mobile: move button to a random position within viewport
      const x = Math.random() * (window.innerWidth - 120);
      const y = Math.random() * (window.innerHeight - 120);
      
      setNoBtnStyle({
        position: 'fixed',
        left: `${Math.max(10, x)}px`,
        top: `${Math.max(100, y)}px`,
        transition: 'all 0.2s ease',
        zIndex: 50
      });
    } else {
      // On desktop: move button around the screen more dramatically
      const x = Math.random() * (window.innerWidth - 150);
      const y = Math.random() * (window.innerHeight - 100);
      
      setNoBtnStyle({
        position: 'fixed',
        left: `${Math.max(20, x)}px`,
        top: `${Math.max(20, y)}px`,
        transition: 'all 0.2s ease',
        zIndex: 50
      });
    }
  }, [isMobile]);

  // Memoize handleYesClick and add cleanup for animation frames
  const handleYesClick = useCallback(() => {
    setPage(1);
    
    // Cancel any previous animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff69b4', '#ff1493', '#ffb6c1']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff69b4', '#ff1493', '#ffb6c1']
      });

      if (Date.now() < end) {
        animationFrameRef.current = requestAnimationFrame(frame);
      } else {
        animationFrameRef.current = null;
      }
    };
    frame();
  }, []);

  // Memoize image error handler
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/bear.png";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7dce9] font-['Poppins'] p-4 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center relative z-10">
        
        {page === 0 ? (
          <div className="flex flex-col items-center gap-6">
            <img 
              src="/images/bear.png" 
              alt="Cute Bear" 
              className="h-48 object-contain hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              Hey, will you be my Valentine?
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 w-full mt-4">
              <button
                onClick={handleYesClick}
                className="bg-[#ff69b4] hover:bg-[#ff1493] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-110 text-lg z-20"
              >
                Yes 💖
              </button>
              
              <button
                ref={noButtonRef}
                onMouseEnter={handleNoMove}
                onTouchStart={handleNoMove}
                onClick={handleNoMove}
                style={noBtnStyle}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-8 rounded-full shadow-lg transition-colors text-lg whitespace-nowrap z-30"
              >
                No 💔
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 animate-fade-in">
             <div className="relative">
                {/* Use the GIF if available, otherwise fallback to bear and extra confetti */}
                <img 
                  src="/images/celebration.gif" 
                  onError={handleImageError}
                  alt="Celebration" 
                  className="h-48 object-contain"
                />
             </div>
            <h1 className="text-3xl font-bold text-[#ff1493] leading-tight">
              Thanks for being a part of me! <br/>
              <span className="text-4xl mt-2 block">YAY! 🎉</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Best decision ever! 💖
            </p>
          </div>
        )}
      </div>
      
      {/* Footer / Credit */}
      <div className="fixed bottom-4 text-gray-500 text-sm">
        Made with ❤️
      </div>
    </div>
  );
}

export default App;
