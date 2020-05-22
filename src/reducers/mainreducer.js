import {
    ADD_TAB,
    REMOVE_TAB
} from '../actions/index'

const intialState = {
    sideNavBarList : [
        {
            id : 1,
            url : "/",
            name : "Document1",
            content : "This is a document 1",
            isOpen : true,
            isActivated : true
        },
        {
            id : 2,
            url : "/document2",
            name : "Document2",
            content : "This is a document 2",
            isOpen : false,
            isActivated : false
        },
        {
            id : 3,
            url : "/document3",
            name : "Document3",
            content : "This is a document 3",
            isOpen : false,
            isActivated : false
        },
        {
            id : 4,
            url : "/document4",
            name : "Document4",
            content : "This is a document 4",
            isOpen : false,
            isActivated : false
        },
        {
            id : 5,
            url : "/document5",
            name : "Document5",
            content : "This is a document 5",
            isOpen : false,
            isActivated : false
        }
    ]
}

const mainreducer = (prevState = intialState ,action) => {
    switch (action.type) {
        case ADD_TAB :
            console.log(action.text,action.id)
            return {
                ...prevState,
                sideNavBarList : prevState.sideNavBarList.map(todo => todo.id === action.id ? {...todo , isOpen : true , isActivated : true} : {...todo , isActivated : false })
            }
        case REMOVE_TAB : 
            return {
                ...prevState,
                sideNavBarList : prevState.sideNavBarList.map(todo => todo.id === action.id ? {...todo , isOpen : false} : {...todo , isActivated : false })
            }
        default:
           return prevState
    }
}

export default mainreducer