import { useStore } from "vuex";

export const useAuth = () => {

    const store = useStore();

    const createUser = async (user) => {

        const newUser = await store.dispatch('auth/registerUser', user);

        return newUser;
    }
    return {
        createUser
    }
}