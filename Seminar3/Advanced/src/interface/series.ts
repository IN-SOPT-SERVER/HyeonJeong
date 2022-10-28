
export interface Series {
    [key: string]: SeriesInterface
}

interface SeriesInterface {
    seriesId: number;
    title: string;
    toMyList: boolean;
    timeInfo: {
        runningTime: number;
        watchTime: number;
    },
    workInfo: {
        actor: string[];
        genre: string[];
        characteristic: string[];
        isLiked: boolean;
        isBookMark: boolean;
    },
    addInfo: {
        year: number;
        ageLimit: number;
        episodeNum: number;
    },
    episodeInfo: {
        episodeNumber: number;
        contents: string;
    }

}