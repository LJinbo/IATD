import axios from 'axios';
import qs from 'qs';

const httpUrl = 'http://139.196.169.49:5005'
const fetch = function (url) {
    return new Promise ( (resolve, reject) => {
        axios.get(httpUrl+url).then( res => {
            resolve(res.data)
        }).catch ( error => {
            if(error.response){
                reject(error.response)
            }
        })
    })
}
const post = function (url,data) {
    let params = qs.stringify(data);
    let Url = httpUrl + url;
    return new Promise ( (resolve, reject) => {
        axios({
            method: 'post',
            url: Url,
            data: params
        }).then( res => {
            resolve(res.data)
        }).catch ( error => {
            if(error.response){
                reject(error.response)
            }
        })
    })
}
export {fetch,post,httpUrl}