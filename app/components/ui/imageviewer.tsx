import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
  DialogContainer,
} from "./dialog";
import { XIcon } from "lucide-react";

export function DialogBasicImage({ img }: { img: string }) {
  return (
    <Dialog
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <DialogTrigger>
        <DialogImage
          src={img}
          alt="Sony Style Store in the Sony Center complex - Berlin, Germany (2000)"
          className="max-w-xs lg:max-w-xl rounded-[4px] hover:cursor-zoom-in"
        />
      </DialogTrigger>
      <DialogContainer>
        <DialogContent className="relative">
          <DialogImage
            src={img}
            alt="Sony Style Store in the Sony Center complex - Berlin, Germany (2000)"
            className="h-auto w-full max-w-[100vw] rounded-[4px] object-cover lg:h-[100vh]"
          />
        </DialogContent>
        <DialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </DialogClose>
      </DialogContainer>
    </Dialog>
  );
}
