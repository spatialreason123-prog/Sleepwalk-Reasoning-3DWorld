import { useState, useEffect, useRef } from "react";

const TYPING_TEXT = "Walk to the sofa.";
const TYPING_SPEED = 80;
const PAUSE_AFTER_TYPING = 500;

const models = [
  { id: "gemini", name: "Gemini Robotics ER-1.5" },
  { id: "gpt", name: "GPT-5-mini" },
  { id: "qwen", name: "Qwen3-VL" },
];

export function TypingDemo() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < TYPING_TEXT.length) {
        setDisplayText(TYPING_TEXT.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextChar, TYPING_SPEED);
      } else {
        setIsTypingComplete(true);
        setTimeout(() => {
          setShowCursor(false);
          setShowVideos(true);
        }, PAUSE_AFTER_TYPING);
      }
    };

    const startDelay = setTimeout(typeNextChar, 1000);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (showVideos) {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.play().catch(() => {
            // Autoplay might be blocked
          });
        }
      });
    }
  }, [showVideos]);

  return (
    <div className="demo-container">
      {/* Chat-like input */}
      <div className="bg-background rounded-lg border border-border p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div className="flex-1 min-h-[28px] flex items-center">
            <span className="text-foreground">{displayText}</span>
            {showCursor && (
              <span className="inline-block w-0.5 h-5 bg-foreground ml-0.5 cursor-blink" />
            )}
          </div>
          <div className={`transition-opacity duration-300 ${isTypingComplete ? 'opacity-100' : 'opacity-30'}`}>
            <kbd className="px-2 py-1 text-xs bg-muted rounded border border-border text-muted-foreground">
              Enter ↵
            </kbd>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500 ${showVideos ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
        {models.map((model, index) => (
          <div key={model.id} className="space-y-2">
            <div className="video-placeholder relative overflow-hidden">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                id={`video-${model.id}`}
                className="w-full h-full object-cover absolute inset-0"
                loop
                muted
                playsInline
                poster={`https://via.placeholder.com/400x225/f1f5f9/64748b?text=${encodeURIComponent(model.name)}`}
              >
                {/* Replace src with actual video files */}
                <source src={`/videos/${model.id}-demo.mp4`} type="video/mp4" />
              </video>
              {!showVideos && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center">
                    <svg className="w-6 h-6 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm font-medium text-center text-muted-foreground">
              {model.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
