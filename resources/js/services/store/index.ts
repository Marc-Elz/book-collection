import { ref, computed } from 'vue';
import { getRequest } from '../http';

export const storeModuleFactory = (moduleName: any) => {
    const state = ref<any>({});

    const getters = {
        all: computed(() => state.value)
    }

    const setters = {
        setAll: (items:any) => {
            for (const item of items) state.value[item.id] = Object.freeze(item);
        }
    };

    const actions = {
        getAll: async () => {
            const { data } = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        }
    };

    return { getters, setters, actions };
}

