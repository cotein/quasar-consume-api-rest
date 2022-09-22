import { useStore } from "vuex";

export const useAuth = () => {

    const store = useStore();

    const createUser = async (user) => {

        const newUser = await store.dispatch('auth/registerUser', user);
        console.log("🚀 ~ file: useAuth.js ~ line 10 ~ createUser ~ newUser", newUser)

        return newUser;
    }
    
    return {
        createUser
    }
}