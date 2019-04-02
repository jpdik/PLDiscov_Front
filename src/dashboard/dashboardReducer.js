const INITIAL_STATE = { value:'', query: '', genre: '', musics: [], number_searchs: 0 }

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'VALUE_CHANGED':
            return { ...state, value: action.payload }
        case 'QUERY_CHANGED':
            return { ...state, query: action.payload }
        case 'GENRE_SELECTED':
            return { ...state, genre: action.payload }
        case 'BILLING_SEARCH_FETCHED':{
            return { ...state, musics: action.payload.musics, number_searchs: action.payload.number_searchs, query: state.value }
        }case 'CLEAR':
            return { ...state, musics: [], query: '' }
        default:
            return state
    }
}