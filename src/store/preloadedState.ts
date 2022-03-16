import {Post} from "../types/post.type";
import {User} from "../types/user.type";
import {Album} from "../types/album.type";
import {Photo} from "../types/photo.type";

export type RootState = {
    posts: {
        data: Post[],
        loading: boolean
    },
    users: {
        data: User[],
        loading: boolean
    },
    albums: {
        data: Album[],
        loading: boolean,
    },
    photos: {
        data: Photo[],
        loading: boolean
    },

}

export const preloadedState: RootState = {
    posts: {
        loading: false,
        data: [],
    },
    users: {
        loading: false,
        data: [],
    },
    albums: {
        loading: false,
        data: [],
    },
    photos: {
        loading: false,
        data: [],
    },
};
