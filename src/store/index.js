const saveStatePlugin = store => {
    store.subscribe((mutation, state) => {
        localStorage.setItem('app-state', JSON.stringify(state));
    });
};

const findIndex = (arr, compare) => arr.findIndex((el) => el.id == compare);

export default {
    strict: true,
    state: {
        articles: [],
        user: {
            isAuthorized: false
        },
        modals: {
            add: { isOpen: false },
            edit: { isOpen: false, current: {} },
            remove: { isOpen: false, current: {} }
        }
    },
    getters: {
        user: state => ({...state.user}),
        articles: state => {
            return [...state.articles].sort((a, b) => b.date - a.date);
        },
        modals: state => ({...state.modals})
    },
    mutations: {
        authorizeUser(state) {
            state.user.isAuthorized = true;
        },
        logOut(state) {
            state.user.isAuthorized = false;
        },
        restoreState(state, payload) {
            state = {...payload};
        },
        setArticles(state, payload) {
            state.articles = [...payload];
        },
        addArticle(state, payload) {
            let articles = state.articles;
            articles.push({
                id: (articles.length ? parseInt(articles[articles.length - 1].id, 10) + 1 : 1),
                date: new Date().getTime(),
                header: payload.header,
                text: payload.text
            });
        },
        editArticle(state, payload) {
            state.articles[payload.index].date = new Date().getTime();
            state.articles[payload.index].header = payload.header;
            state.articles[payload.index].text = payload.text;
        },
        removeArticle(state, payload) {
            state.articles.splice(payload.index, 1);
        },
        openModal(state, payload) {
            for (let name in state.modals) {
                state.modals[name].isOpen = (name === payload.name ? true : false);
            }
            state.modals[payload.name].current = {...payload.current};
        },
        closeModal(state, payload) {
            state.modals[payload.name].isOpen = false;
            state.modals[payload.name].current = {};
        }
    },
    actions: {
        addArticle({ commit }, payload) {
            return new Promise((resolve, reject) => {
                if (!payload.header || !payload.text) {
                    reject();
                }
                commit('addArticle', payload);
                resolve();
            }) 
        },
        editArticle({ commit, state }, payload) {
            return new Promise((resolve, reject) => {
                const index = findIndex(state.articles, payload.id);
                if (index === -1) {
                    reject();
                }
                commit('editArticle', { index, ...payload });
                resolve();
            })
        },
        removeArticle({ commit, state }, payload) {
            return new Promise((resolve, reject) => {
                const index = findIndex(state.articles, payload.id);
                if (index === -1) {
                    reject();
                }
                commit('removeArticle', { index });
                resolve();
            })
        },
    },
    plugins: [saveStatePlugin]
}
