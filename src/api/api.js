import axios from 'axios';
import qs from 'qs'

const food_app_id = '9936983d'
const food_app_key = 'b9da1e7afbf131966fbcff26f1c756c0'

const recipe_app_id = '5d116f68'
const recipe_app_key = 'aa8298fef9dea9991aa921247b9ed1e6'

const nfacts_app_id = 'd50171be'
const nfacts_app_key = '53c28982b84d913b5fde8597963f5e89'

export const axiosRecipeGET = (params) => {
    try {
        let res = axios({
            method: 'GET',
            url: 'https://api.edamam.com/search',
            params: {
                app_id: recipe_app_id,
                app_key: recipe_app_key,
                q: params["query"],
                ...params
            },
            paramsSerializer: params => {
                return qs.stringify(params, { arrayFormat: 'repeat' }) // a[] = b > a = b
            }
        })

        return res;
    }
    catch (err) {
        throw new Error(err);
    }
}

export const axiosFoodGET = (params) => {
    let res = axios({
        method: 'GET',
        url: 'https://api.edamam.com/api/food-database/parser',
        params: {
            app_id: food_app_id,
            app_key: food_app_key,
            ingr: params["ingr"],
            ...params
        }
    })
    return res;
}

export const axiosNFactsGET = (params) => {
    let datas = {
        ...params
    }

    datas = JSON.stringify(datas);

    console.log('Sending data: \n', datas)

    let res = axios({
        method: 'POST',
        url: `https://api.edamam.com/api/nutrition-details?app_id=${nfacts_app_id}&app_key=${nfacts_app_key}`,
        data: datas,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res;
}

// export const axiosNFactsPOST = (params) => {
//     let res = axios({
//         method: 'POST',
//         url: 'https://api.edamam.com/api/nutrition-details',
//         params: {
//             app_id: nfacts_app_id,
//             app_key: nfacts_app_key,
//             ...params
//         },
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     return res;
// }






