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
                console.log(response)
                if (response.request.status === 200) {
                    resolve(true)
                }
                resolve(false)
            }).catch (err => {
                reject(err)
            }
        )
    });
}