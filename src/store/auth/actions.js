import { api } from "src/boot/axios";

export const login = async(_, {email, password}) => {

    try {
        const response = await api.post('/api/auth/login', {
            email,
            password
        });

        return response;
    } catch (error) {
    console.log("🚀 ~ file: actions.js ~ line 13 ~ login ~ error", error)
    }
}

export const setAuthUser = ({commit}, value) => commit('SET_AUTH_USER', value);

export const setAuthToken = ({commit}, value) => commit('SET_AUTH_TOKEN', value);