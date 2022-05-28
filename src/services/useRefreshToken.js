import axios from "../http-common";
import authService from "./useAuth";

const useRefreshToken = () => {
    const { setAuth } = authService();

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth( prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {...prev, accessToken: response.data.accessToken}
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;