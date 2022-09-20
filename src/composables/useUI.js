import { computed } from 'vue';
import { useStore } from 'vuex';

export const useUI = () => {

    const store = useStore();

    return {
        
        sideMenuOpen: computed({

            get(){
                return store.getters['ui/IsSideMenuOpen'];
            },
            set(_){
                store.commit('ui/toogleSideMenu');
            }
        } ),

        toogleSideMenu() { store.commit('ui/toogleSideMenu') }
    }
}