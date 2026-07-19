"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TRACK_MAP } from "@/data/tracks";
import { ARTIST, PLAYLIST } from "@/data/playlist";
import type { SectionId } from "@/data/navigation";
import EqualizerBars from "./EqualizerBars";
import cassetteImg from "@/public/assets/images/cassette.png";

type NowPlayingProps = {
  activeSection: SectionId;
};

/**
 * The cassette widget is a real music player: play/pause/next/back over a
 * four-track Nihilore playlist. While playing, the title shows the actual
 * track; paused, it returns to the section-based "fake" titles the site
 * has always shown. Playback only ever starts from a click (browser
 * autoplay policies require that anyway).
 */
export default function NowPlaying({ activeSection }: NowPlayingProps) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // When the track changes mid-playback (next/back/auto-advance), keep
  // playing: the src swap resets the element, so kick it off again.
  useEffect(() => {
    if (playing) void audioRef.current?.play();
  }, [trackIndex, playing]);

  const togglePlay = () => {
    if (playing) {
      audioRef.current?.pause();
      setPlaying(false);
    } else {
      void audioRef.current?.play();
      setPlaying(true);
    }
  };

  const next = () => setTrackIndex((i) => (i + 1) % PLAYLIST.length);
  const prev = () =>
    setTrackIndex((i) => (i - 1 + PLAYLIST.length) % PLAYLIST.length);

  const track = PLAYLIST[trackIndex];

  return (
    <div className="now-playing" aria-label="Now playing widget">
      <p className="now-playing-label">NOW PLAYING</p>
      <p className="now-playing-title" id="track-title">
        {playing ? track.title : TRACK_MAP[activeSection]}
      </p>
      <p className="now-playing-sub">
        {playing ? (
          <a
            href={ARTIST.url}
            target="_blank"
            rel="noopener noreferrer"
            className="np-artist-link"
          >
            {ARTIST.name}
          </a>
        ) : (
          "HOME"
        )}
      </p>
      <div className="cassette" aria-hidden="true">
        <Image
          src={cassetteImg}
          alt=""
          className="cassette-img"
          sizes="240px"
        />
      </div>
      <div className="np-controls">
        <button
          type="button"
          className="np-btn"
          onClick={prev}
          aria-label="Previous track"
        >
          ⏮
        </button>
        <button
          type="button"
          className="np-btn np-btn-play"
          onClick={togglePlay}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? "❚❚" : "▶"}
        </button>
        <button
          type="button"
          className="np-btn"
          onClick={next}
          aria-label="Next track"
        >
          ⏭
        </button>
      </div>
      <EqualizerBars active={playing} />
      {/* CC BY 4.0 attribution — always visible, not only during playback */}
      <p className="np-credit">
        MUSIC:{" "}
        <a href={ARTIST.url} target="_blank" rel="noopener noreferrer">
          {ARTIST.name}
        </a>{" "}
        ·{" "}
        <a
          href={ARTIST.licenseUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ARTIST.license}
        </a>
      </p>
      <audio
        ref={audioRef}
        src={track.src}
        preload="none"
        onEnded={next}
      />
    </div>
  );
}
