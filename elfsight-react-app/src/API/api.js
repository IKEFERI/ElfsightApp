import * as axios from "axios";
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const galleryAPI = {
    getUsers() {
        return instance.get(`/users`).then(response => response.data);
    },
    getUserAlbums(id) {
        return instance.get(`users/${id}/albums`).then(response => response.data);
    },
    getCoverAlbum(id) {
        return instance.get(`/albums/${id}/photos`).then(response => response.data[0]);
    },
    getAlbumPhotos(id) {
        return instance.get(`albums/${id}/photos`).then(response => response.data);
    },
    getPhotos() {
        return instance.get(`/photos`).then(response => response.data);
    },
}