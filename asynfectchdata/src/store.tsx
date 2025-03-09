import { atom, selector, selectorFamily } from "recoil";
import rawData from './Sample.json';
import axios from "axios";
interface User {
    name: string;
    email: string;
    phone: string;
}
export const userIdState = atom({
    key: "userIdState",
    default: 0,
});

export const fetchData = selector({
    key: "fetchData",
    get: ({ get }) => {
        const userData: User[] = rawData;  // Type Assertion
        const getID = get(userIdState);
        console.log(getID);

        if (!userData || userData.length === 0) {
            return { name: "No Data", email: "No Data", phone: "No Data" };
        }

        if (getID < 0 || getID >= userData.length) {
            return { error: "NO ENTRY FOR THE NEXT USERS" };
        }
        try {

            const responce: User =
            {
                name: userData[getID].name,
                email: userData[getID].email,
                phone: userData[getID].phone
            };

            return responce;

        } catch (error: any) {
            return { error: error.message }
        }
    }
})


export const userID = atom({
    key: "userID",
    default: 1
})


export const fetchUserDetails = selector({
    key: "fetchUserDetails",
    get: async ({ get }) => {
        const userId = get(userID);

        try {
            const response = await axios.get<User>(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            return response.data;
        } catch (error: any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                return { error: `HTTP ${error.response.status}: ${error.response.data}`, loading: false };
            } else if (error.request) {
                // The request was made but no response was received
                return { error: 'Network error', loading: false };
            } else {
                // Something happened in setting up the request that triggered an Error
                return { error: error.message, loading: false };
            }
        }
    }
})


// Create a selectorFamily for fetching user details based on userID
// export const fetchUserDetails1 = selectorFamily({
//     key: 'fetchUserDetailsFamily',
//     get: (userId) => async () => {
//         try {
//             const response = await axios.get(
//                 `https://jsonplaceholder.typicode.com/users/${userId}`
//             );
//             return response.data;
//         } catch (error: any) {
//             return { error: error.message };
//         }
//     },
// });
