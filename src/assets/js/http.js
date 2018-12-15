import axios from 'axios';

const apiMethods = {
    apiGet(url, data) {
        return new Promise((resolve, reject) => {
            axios.get(url, data).then((response) => {
                resolve(response.data)
            }, (response) => {
                reject(response);
            })
        })
    },
    apiPost(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then((response) => {
                resolve(response.data)
            }).catch((response) => {
                console.log('f', response);
                reject(response);
            })
        })
    },
    apiFile(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data, {
                method: 'post',
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then((response) => {
                resolve(response.data)
            }).catch((response) => {
                reject(response);
            })
        })
    },
    apiDelete(url, id) {
        return new Promise((resolve, reject) => {
            axios.delete(url + id).then((response) => {
                resolve(response.data)
            }, (response) => {
                reject(response);
            })
        })
    },
    apiPut(url, id, obj) {
        return new Promise((resolve, reject) => {
            axios.put(url + id, obj).then((response) => {
                resolve(response.data)
            }, (response) => {
                reject(response)
            })
        })
    },
    handleResponse(res, cb, errCb) {
        if (res.code == 1) {
            if (typeof cb == 'function') {
                cb(res.data)
            }
        } else {
            if (typeof errCb == 'function') {
                errCb()
            } else {
                this.handleError(res);
            }
        }
    },
    handleError(res) {
        if (res.code) {
        } else {
        }
    },
    reAjax(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then((response) => {
                resolve(response.data)
            }, (response) => {
                reject(response)
            })
        })
    }
};
export default apiMethods;
