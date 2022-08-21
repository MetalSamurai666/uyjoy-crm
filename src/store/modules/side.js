const side = {
    state: ()=> ({
        menu:[
            {
                link: '/',
                text: 'Управление домами'
            },
            {
                link: '/rooms',
                text: 'Комнаты в доме'
            },
            {
                link: '/sale',
                text: 'Продажа номеров'
            },
            {
                link: '/users',
                text: 'Управление пользователями'
            },
            {
                link: '/transictions',
                text: 'Поступления и Расходы'
            },
            {
                link: '/salaries',
                text: 'Зарплаты'
            },
        ]
    }),
    getters: {
        getSide(state){
            return state.menu
        }
    },
    mutations: {
        allSide(state, payload){
            state.menu = payload
        }
    },
    actions: {
    },
    modules: {
        
    }
}

export default side