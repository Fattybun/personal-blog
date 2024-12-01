import React, { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, Volume2, Volume1, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { playlist } from "@/configs/playlist";

type MusicPlayerProps = {
  styling?: string;
};

const CompactMusicPlayer: React.FC<MusicPlayerProps> = ({ styling = "" }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.15);
  const [progress, setProgress] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      setProgress(progressPercent);
    };

    const handleSongEnd = () => {
      const nextIndex = (currentTrackIndex + 1) % playlist.length;
      setCurrentTrackIndex(nextIndex);
      if (isPlaying) audio.play();
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleSongEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, [currentTrackIndex, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed", error);
      });
    }
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const manualChange = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = (manualChange / 100) * audio.duration;
    setProgress(manualChange);
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX />;
    if (volume < 0.5) return <Volume1 />;
    return <Volume2 />;
  };

  return (
    <div
      className={cn(
        "flex items-center bg-gray-100 rounded-full transition-all duration-300 ease-in-out",
        styling,
        isExpanded ? "w-64 px-2 space-x-3" : "px-2 justify-center"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {isExpanded && (
        <button
          onClick={togglePlay}
          className="hover:bg-gray-200 ps-2 rounded-full transition"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      )}

      {isExpanded && (
        <>
          <div className="flex items-center space-x-2">
            {getVolumeIcon()}
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-gray-300 rounded-full appearance-none cursor-pointer"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1 bg-gray-300 rounded-full appearance-none cursor-pointer"
            />
          </div>
        </>
      )}

      <Music
        size={18}
        className={cn({ hidden: isExpanded })}
        onClick={togglePlay}
      />

      <audio ref={audioRef} src={playlist[currentTrackIndex]} />
    </div>
  );
};

export default CompactMusicPlayer;
