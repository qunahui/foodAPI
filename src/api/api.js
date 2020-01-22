import axios from 'axios';

const food_app_id = '9936983d'
const food_app_key = 'b9da1e7afbf131966fbcff26f1c756c0'

const recipe_app_id = '5d116f68'
const recipe_app_key = 'aa8298fef9dea9991aa921247b9ed1e6'

export const axiosGET = (params) => {
    let res = axios({
        method: 'GET',
        url: 'https://api.edamam.com/search',
        params: {
            app_id: recipe_app_id,
            app_key: recipe_app_key,
            q: params["query"],
            ...params
        }
    })
    return res;
}