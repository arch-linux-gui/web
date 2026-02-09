
interface IsoLinks {
    sourceforge: string;
    checksum: string;
}

interface IsoData {
    kde: IsoLinks;
    gnome: IsoLinks;
    xfce: IsoLinks;
}

interface ReleaseData {
    releaseVer: string;
    releaseDate: string
}

export const releaseData: ReleaseData = {
    releaseVer: "v2025.10",
    releaseDate: "October 2025"
}

export const themedIso: IsoData = {
    kde: {
        sourceforge:
            "https://sourceforge.net/projects/arch-linux-gui/files/alg-plasma-2025.10-x86_64.iso/download",
        checksum:
            "13664efdb1dfe03c98de9d4f020b9ca2547f32eb",
    },
    gnome: {
        sourceforge:
            "https://sourceforge.net/projects/arch-linux-gui/files/alg-gnome-2025.10-x86_64.iso/download",
        checksum:
            "9ab46ec682f30b1ea5d1d499676aded294b39953",
    },
    xfce: {
        sourceforge:
            "https://sourceforge.net/projects/arch-linux-gui/files/alg-xfce-2025.10-x86_64.iso/download",
        checksum:
            "5ffd125d9bf67ca133278f33db8175c695aa12e9",
    },
};
