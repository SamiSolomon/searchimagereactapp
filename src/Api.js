import axios from "axios";


const searchImages= async (term)=> {
    const response = await axios.get('https:api.unsplash.com/search/photos',{
        headers:{
 Authorization:'Client-ID 5mKChCdtjbaZqY_Pp9W82DjGdqKHwPJfU3s19xq3VCA',
        },

        params: {
            query:term,
        }
    });
    return response.data.results;
};

export default searchImages;