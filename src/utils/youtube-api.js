<<<<<<< HEAD
// import axios from 'axios';

// class YOUTUBE {
//     axiosInstance = null;
//     constructor() {
//         const axiosInstance = axios.create({
//             baseURL: '',
//             timeout: 15000,
//             headers: {},
//         });

//     };
// };
// export default new YOUTUBE();
=======
import axios from 'axios';

const api_key = "";
class YOUTUBE {
    axiosInstance = null;
    
    constructor() {
        const axiosInstance = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            timeout: 15000,
            headers: {},
        });

    };
};
export default new YOUTUBE();
>>>>>>> chip-branch
