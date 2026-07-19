import Image from "next/image";
import { TRACK_MAP } from "@/data/tracks";
import type { SectionId } from "@/data/navigation";
import EqualizerBars from "./EqualizerBars";
import cassetteImg from "@/public/assets/images/cassette.png";

type NowPlayingProps = {
  activeSection: SectionId;
};

export default function NowPlaying({ activeSection }: NowPlayingProps) {
  return (
    <div className="now-playing" aria-label="Now playing widget">
      <p className="now-playing-label">NOW PLAYING</p>
      <p className="now-playing-title" id="track-title">
        {TRACK_MAP[activeSection]}
      </p>
      {/* Stays "HOME" on every section — the vanilla site never updated it. */}
      <p className="now-playing-sub">HOME</p>
      <div className="cassette" aria-hidden="true">
        <Image
          src={cassetteImg}
          alt=""
          className="cassette-img"
          sizes="240px"
        />
      </div>
      <EqualizerBars />
    </div>
  );
}
