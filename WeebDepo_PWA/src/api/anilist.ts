import { Genres, SortFilters } from "../application/customTypes";

const url = 'https://graphql.anilist.co';

const queryOptions = (query: any, variables: any) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    }
};

const mediaMini = `
    id,
    title {
        english,
        native,
        romaji
    },
    episodes,
    averageScore,
    popularity,
    format,
    status,
    coverImage {
        extraLarge,
        large,
        medium,
        color
    }
`;

const pagination = `
    total,
    currentPage,
    lastPage,
    hasNextPage,
    perPage
`;

export function specificListQuery (animeIdList: number[]) {
    const listQuery = `
    query($id_in: [Int]) {
        Page(page: 1, perPage: 20) {
            pageInfo {
                ${pagination}
            }   
            media(type: ANIME, id_in: $id_in) {
                ${mediaMini}
            }
        }
    }`;

    const variables = {
        id_in: animeIdList
    };

    return aniListQuery(
        url,
        queryOptions(listQuery, variables)
    );
};

export function recommendationsQuery (animeId: number, page: number) {
    const recommendationsListQuery = `
    query ($id: Int, $page: Int) {
        Media(id: $id, type: ANIME) {
            title {
                english,
                native,
                romaji
            },
            recommendations(sort: [RATING_DESC], perPage: 3, page: $page) {
                pageInfo {
                    ${pagination}
                },
                edges {
                    node {
                        mediaRecommendation {
                            ${mediaMini}
                        }
                    }
                }
            }
        }
    }`;

    const variables = {
        id: animeId,
        page: page
    };

    return aniListQuery(
        url,
        queryOptions(recommendationsListQuery, variables)
    );
};

export function singleQuery (animeId: number) {
    const singleAnimeQuery = `
    query ($id: Int) {
        Media (id: $id, type: ANIME) {
            id
            title {
                english,
                native,
                romaji
            }
            episodes,
            duration,
            averageScore,
            popularity,
            startDate {
                year
            },
            type,
            format,
            genres,
            status,
            nextAiringEpisode {
                episode
            },
            description(asHtml: false),
            trailer {
                id,
                site,
                thumbnail
            },
            coverImage {
                extraLarge
                large
                medium
                color
            },
            relations {
                edges {
                    relationType,
                    node {
                        id
                    }
                }
            },
            studios {
                edges {
                    isMain,
                    node {
                        name
                    }
                }
            }
        }
    }`;

    const variables = {
        id: animeId
    };

    return aniListQuery(
        url,
        queryOptions(singleAnimeQuery, variables)
    );
};

export function genreListQuery (page: number, perPage: number, genres: Genres[], sort: SortFilters[], isAdult: boolean) {
    const listQuery = `query${isAdult ? `($page: Int, $perPage: Int, $genres: [String], $sort: [MediaSort])` : `($page: Int, $perPage: Int, $genres: [String], $sort: [MediaSort], $isAdult: Boolean)`} {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                ${pagination}
            }
            media${isAdult ? `(type: ANIME, genre_in: $genres, sort: $sort)` : `(type: ANIME, genre_in: $genres, sort: $sort, isAdult: $isAdult)`} {
                ${mediaMini}
            }
        }
    }`;

    const variables = {
        page: page,
        perPage: perPage,
        genres: genres,
        sort: sort,
        isAdult: isAdult
    };

    return aniListQuery(
        url,
        queryOptions(listQuery, variables)
    );
};

export function searchQuery (page: number, perPage: number, search: string, isAdult: boolean) {
    const searchQuery = `query${isAdult ? `($page: Int, $perPage: Int, $search: String)` : `($page: Int, $perPage: Int, $search: String, $isAdult: Boolean)`} {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                ${pagination}
            }
            media${isAdult ? `(type: ANIME, search: $search, sort: [SCORE_DESC, SEARCH_MATCH])` : `(type: ANIME, search: $search, sort: [SCORE_DESC, SEARCH_MATCH], isAdult: $isAdult)`} {
                ${mediaMini}
            }
        }
    }`;

    const variables = {
        page: page,
        perPage: perPage,
        search: search,
        isAdult: isAdult
    };

    return aniListQuery(
        url,
        queryOptions(searchQuery, variables)
    );
};

export function topQuery (page: number, perPage: number, isAdult: boolean) {
    const topListQuery = 
    `query${isAdult ? `($page: Int, $perPage: Int)` :`($page: Int, $perPage: Int, $isAdult: Boolean)`} {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                ${pagination}
            }
            media${isAdult ? `(type: ANIME, sort: [SCORE_DESC, POPULARITY_DESC])` : `(type: ANIME, sort: [SCORE_DESC, POPULARITY_DESC], isAdult: $isAdult)`} {
                ${mediaMini}
            }
        }
    }`;

    const variables = {
        page: page,
        perPage: perPage,
        isAdult: isAdult
    };

    return aniListQuery(
        url,
        queryOptions(topListQuery, variables)
    );
};

export function popularQuery (page: number, perPage: number, isAdult: boolean) {
    const popularListQuery = 
    `query${isAdult ? `($page: Int, $perPage: Int)` :`($page: Int, $perPage: Int, $isAdult: Boolean)`} {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                ${pagination}
            }
            media${isAdult ? `(type: ANIME, sort: [POPULARITY_DESC])` : `(type: ANIME, sort: [POPULARITY_DESC], isAdult: $isAdult)`} {
                ${mediaMini}
            }
        }
    }`;

    const variables = {
        page: page,
        perPage: perPage,
        isAdult: isAdult
    };

    return aniListQuery(
        url,
        queryOptions(popularListQuery, variables)
    );
};

export function airingQuery (page: number, perPage: number) {
    const airingListQuery = `
    query($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                ${pagination}
            }
            media(type: ANIME, status: RELEASING, isAdult: false, sort: [POPULARITY_DESC]) {
                ${mediaMini}
            }
        }
    }`;

    const variables = {
        page: page,
        perPage: perPage
    };

    return aniListQuery(
        url,
        queryOptions(airingListQuery, variables)
    );
};

export function obscureQuery (page: number, perPage: number) {
    const obscureListQuery = `
    query($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                ${pagination}
            }
            media(type: ANIME, sort: [SCORE_DESC], popularity_lesser: 20000, popularity_greater: 2000, format_in: [TV, MOVIE, ONA, OVA]) {
                ${mediaMini}
            }
        }
    }`;

    const variables = {
        page: page,
        perPage: perPage
    };

    return aniListQuery(
        url,
        queryOptions(obscureListQuery, variables)
    );
};

async function aniListQuery(url: string, options: object) {
    
    const anime = fetch(url, options)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

    return anime;
};

function handleResponse(res: any) {
    return res.json().then((resJSON: any) => {
        return res.ok ? resJSON : Promise.reject(resJSON)
    });
};

function handleData(data: any) {
    return data;
};

function handleError(err: any) {
    console.log(err);
};