////////// Shared //////////

export type Answer = {
    text: string,
    link: number
}

export type QuestionT = {
    question: string,
    isEndpoint: boolean,
    answers: Array<Answer>
}

type Title = {
    english: string | null,
    native: string | null,
    romaji?: string
}

type CoverImage = {
    extraLarge: string,
    large: string,
    medium: string,
    color: string | null
}

// enum MediaFormat {
//     TV = 'TV',
//     TV_SHORT = 'TV Short',
//     MOVIE = 'Movie',
//     SPECIAL = 'Special',
//     OVA = 'OVA',
//     ONA = 'ONA',
//     MUSIC = 'Music Video'
// }

////////// Anime List //////////

export type Pagination = {
    total: number,
    currentPage: number,
    lastPage: number,
    hasNextPage: boolean,
    perPage: number
}

export type MediaMini = {
    id: number,
    title: Title,
    episodes: number,
    averageScore: number,
    popularity: number,
    format: string,
    status: string,
    coverImage: CoverImage
}

export type AnimeList = {
    pageInfo: Pagination,
    media: Array<MediaMini>
}

////////// Single Anime /////////

export type Anime = {
    id: number,
    title: Title,
    episodes: number,
    duration: number,
    averageScore: number,
    popularity: number,
    startDate: { year: number },
    type: string,
    format: string,
    genres: string[],
    status: string,
    nextAiringEpisode: null | {
        episode: number
    },
    description: string,
    trailer: null | {
        id: string,
        site: string,
        thumbnail: string
    }
    coverImage: CoverImage,
    relations: any,
    studios: {
        edges: [{
            isMain: boolean,
            node: {
                name: string
            }
        }]
    }
}

////////// Enums //////////

export enum Genres {
    ACTION = 'Action',
    ADVENTURE = 'Adventure',
    COMEDY = 'Comedy',
    DRAMA = 'Drama',
    ECCHI = 'Ecchi',
    FATANSY = 'Fantasy',
    HORROR = 'Horror',
    MAHOU_SHOUJO = 'Mahou Shoujo',
    MECHA = 'Mecha',
    MUSIC = 'Music',
    MYSTERY = 'Mystery',
    PSYCHOLOGICAL = 'Psychological',
    ROMANCE = 'Romance',
    SCIFI = 'Sci-Fi',
    SLICE_OF_LIFE = 'Slice of Life',
    SPORTS = 'Sports',
    SUPERNATURAL = 'Supernatural',
    THRILLER = 'Thriller'
}

export enum SortFilters {
    SCORE = "SCORE",
    SCORE_DESC = "SCORE_DESC",
    POPULARIY = "POPULARITY",
    POPULARITY_DESC = "POPULARITY_DESC"
}

export enum GridType {
    Top,
    Popular,
    Airing,
    Genre,
    Search
}