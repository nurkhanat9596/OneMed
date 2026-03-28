import React, { useState } from 'react';
import { Volume2, Loader2 } from 'lucide-react';
import { generateSpeech, playPCM } from '../services/ttsService';
import { cn } from '../lib/utils';

interface TTSButtonProps {
  text: string;
  className?: string;
}

export const TTSButton: React.FC<TTSButtonProps> = ({ text, className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const audioBytes = await generateSpeech(text);
      if (audioBytes) {
        await playPCM(audioBytes);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isLoading}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-sm font-medium",
        className
      )}
      title="Listen to this section"
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
      <span>Listen</span>
    </button>
  );
};
