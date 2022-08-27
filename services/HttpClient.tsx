import axios from 'axios';
import { httpUrl } from '../constants/Constants';

export const postLogin = (email: string, password: string) => {
    const loginForm = {
        email: email,
        password: password
    }

    return new Promise(function (resolve, reject) {
        axios.post(httpUrl + "/auth/login", loginForm)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response)
                } else {
                    reject(response.status)
                }
            }).catch (err => {
                reject(err)
            }
        )
    });
}

export const postNewUser = (username: string, email: string, password: string) => {
    const userData = {
        username: username,
        email: email,
        password: password
    }

    return new Promise(function (resolve, reject) {
        axios.post(httpUrl + "/auth/register", userData)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response)
                } else {
                    reject(response.status)
                }
            }).catch (err => {
                reject(err)
            }
        )
    });
}

export const getPosts = (id: string) => {
    return new Promise(function (resolve, reject) {
        axios.get(httpUrl + "/posts/timeline/" + id)
            .then((response) => {
                if (response.request.status === 200) {
                    resolve([response.data])
                }
            }).catch ((err) => {
                reject([err])
            }
        )
    });
}

export const addOrRemoveLike = (id: string) => {
    return new Promise(function (resolve, reject) {
        axios.put(httpUrl + `/posts/${id}/like`)
            .then((response) => {
                if (response.request.status === 200) {
                    resolve(response)
                }
            }).catch ((err) => {
                reject(err)
            }
        )
    });
}

export const getUserPosts = (username: string) => {
    return new Promise(function (resolve, reject) {
        axios.get(httpUrl + `/posts/profile/${username}`)
            .then((response) => {
                if (response.request.status === 200) {
                    resolve(response)
                }
            }).catch ((err) => {
                reject(err)
            }
        )
    });
}