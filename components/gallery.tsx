import { DialogBasicImage } from "./ui/imageviewer";
import Marquee from "./ui/marquee";

const images = [
  { img: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/pure/gnome.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/gnome.png?raw=true?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/xfce-themed.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/pure/xfce-pure.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/plasma.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/pure/plasma-pure.png?raw=true" },
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

export function Gallery() {
  return (
    <div className="relative mb-5 flex h-[500px] lg:h-[850px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <p className="mt-5 mb-5 p-5 text-3xl md:text-6xl font-bold text-center text-orange-600 dark:text-orange-400">
        Gallery
      </p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((item) => (
          <DialogBasicImage key={item.img} img={item.img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((item) => (
          <DialogBasicImage key={item.img} img={item.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
    </div>
  );
}
