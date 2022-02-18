
const initialState = [
    {
        id:0,
        name:"Johan Doe",
        number:+92311111111,
        email:"johandoe@gmail.com"
    },
    {
        id:1,
        name:"Babar Azam",
        number:+923000000000,
        email:"Babarazam@gmail.com"
    }
]

const changeNumber = (state= initialState, action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state, action.payload];
            return state;
        case "UPDATE-CONTACT":
        const updateState = state.map(contact => contact.id == action.payload.id ? action.paylaod :contact);
        state = updateState;
        return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact=> contact.id !== action.payload && contact);
            state=filterContacts;
            return state;
        default:
            return state;
    }
}

export default changeNumber;