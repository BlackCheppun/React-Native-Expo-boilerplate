import { AxiosClient, setAxiosToken } from "../config/Axios";
import { setUser } from "../redux/slices/UserSlice";
import { store } from "../redux/store";


export class AuthentificationService{

    static async login(email: string, password: string){
        try {
                const response = await AxiosClient.post("/login", {
                    email: email,
                    password: password
                });
                if(response.status ==200){
                    // set the token for the AxiosClient and MultiPartAxiosClient
                    setAxiosToken(response.data.token);
                    // update the redux store and the user state (it depends on your data, and implementation of the redux store)
                    store.dispatch(setUser(response.data.user));
                }
        } catch (error) {
            console.log(error); // you can add interceptor to handle error globally (do so in the config file of axios)
        }
    }
}