import { atom, selector } from "recoil";
import rawData from './Sample.json';

export const userIdState = atom({
    key: "userIdState",
    default: 0,
});

interface User {
    name: string;
    email: string;
    phone: string;
}

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


