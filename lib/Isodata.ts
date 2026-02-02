
interface IsoLinks {
    sourceforge: string;
    checksum: string;
}

interface IsoData {
    kde: IsoLinks;
    gnome: IsoLinks;
    xfce: IsoLinks;
}

export const themedIso: IsoData = {
    kde: {
        sourceforge:
            "https://sourceforge.net/projects/arch-linux-gui/files/alg-plasma-2025.10-x86_64.iso/download",
        checksum:
            "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    },
    gnome: {
        sourceforge:
            "https://sourceforge.net/projects/arch-linux-gui/files/alg-gnome-2025.10-x86_64.iso/download",
        checksum:
            "a3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b856",
    },
    xfce: {
        sourceforge:
            "https://sourceforge.net/projects/arch-linux-gui/files/alg-xfce-2025.10-x86_64.iso/download",
        checksum:
            "b3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b857",
    },
};
