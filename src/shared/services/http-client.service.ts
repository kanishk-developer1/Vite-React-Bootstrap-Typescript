import axios, { AxiosRequestConfig } from 'axios';

// post data to save
const save = <T>(url: string, payload: AxiosRequestConfig<T>) => {
    return new Promise((resolve, reject) => {
        axios.post(url, payload).then((response: any) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

// post data to update
const update = <T>(url: string, payload: AxiosRequestConfig<T>) => {
    return new Promise((resolve, reject) => {
        axios.put(url, payload).then((response: any) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

// post data to patch
const patch = <T>(url: string, payload: AxiosRequestConfig<T>) => {
    return new Promise((resolve, reject) => {
        axios.patch(url, payload).then((response: any) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

// send request to get data
const get = <T>(url: string, queryParams: AxiosRequestConfig<T>) => {
    return new Promise((resolve, reject) => {
        axios.get(url, queryParams).then((response: any) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

// send request to delete data
const remove = <T>(url: string, queryParams: AxiosRequestConfig<T>) => {
    return new Promise((resolve, reject) => {
        axios.delete(url, queryParams).then((response: any) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

// post form data to save
const saveFormRequest = <T>(url: string, payload: AxiosRequestConfig<T>) => {

    const formData = new FormData();
    Object.entries(payload).map(([key, value]) => {
        formData.append(key, value);
    })

    return new Promise((resolve, reject) => {
        axios.postForm(url, formData).then((response: any) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

// post form data to update
const updateFormRequest = <T>(url: string, payload: AxiosRequestConfig<T>) => {

    const formData = new FormData();
    Object.entries(payload).map(([key, value]) => {
        formData.append(key, value);
    })

    return new Promise((resolve, reject) => {
        axios.putForm(url, formData).then((response: any) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

// post form data to patch
const patchFormRequest = <T>(url: string, payload: AxiosRequestConfig<T>) => {

    const formData = new FormData();
    Object.entries(payload).map(([key, value]) => {
        formData.append(key, value);
    })

    return new Promise((resolve, reject) => {
        axios.patchForm(url, formData).then((response: any) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

const HTTPClientService = {
    save,
    update,
    patch,
    get,
    remove,
    saveFormRequest,
    updateFormRequest,
    patchFormRequest
}

export default HTTPClientService