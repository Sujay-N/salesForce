
import uuid from "uuid-random";

import {
    ADD_STAFF,
    VIEW_STAFF,
    DELETE_STAFF,
    EDIT_STAFF,
    SORT_SAL_DEC,
    SORT_SAL_INC,
    SET_CURR_PAGE,
    SET_PER_PAGE,
    CHANGE_PAGE_NO

} from "./actionTypes"




const initialState = {

    staffData : [
        { name: "alpha", email: "abc@gmail.com", mob: 9876543210, sales: 1000, key: uuid() },
        { name: "bravo", email: "bcd@gmail.com", mob: 9876543210, sales: 1100, key: uuid() },
        { name: "charlie", email: "c@gmail.com", mob: 9876543210, sales: 1200, key: uuid() },
        { name: "delta", email: "d@gmail.com", mob: 9876543210, sales: 1300, key: uuid() },
        { name: "gamma", email: "g@gmail.com", mob: 9876543210, sales: 1400, key: uuid() },
        { name: "Elisa", email: "el@gmail.com", mob: 9876543210, sales: 1500, key: uuid() },
        { name: "Farooq", email: "f@gmail.com", mob: 9876543210, sales: 1600, key: uuid() },
        { name: "Hitler", email: "h@gmail.com", mob: 9876543210, sales: 1700, key: uuid() },
        { name: "Gary", email: "g@gmail.com", mob: 9876543210, sales: 1800, key: uuid() },
        { name: "Isha", email: "i@gmail.com", mob: 9876543210, sales: 1900, key: uuid() },
        { name: "Jeff", email: "j@gmail.com", mob: 9876543210, sales: 2000, key: uuid() },
        { name: "Karan", email: "k@gmail.com", mob: 9876543210, sales: 2100, key: uuid() },
        { name: "Loanne", email: "l@gmail.com", mob: 9876543210, sales: 2300, key: uuid() },
        { name: "Manisha", email: "m@gmail.com", mob: 9876543210, sales: 2400, key: uuid() },
        { name: "Naome", email: "n@gmail.com", mob: 9876543210, sales: 2500, key: uuid() },
        { name: "Oscar", email: "o@gmail.com", mob: 9876543210, sales: 2600, key: uuid() },
        { name: "Papa", email: "p@gmail.com", mob: 9876543210, sales: 2200, key: uuid() },
        { name: "Quebec", email: "q@gmail.com", mob: 9876543210, sales: 2800, key: uuid() },
        { name: "Romeo", email: "r@gmail.com", mob: 9876543210, sales: 2700, key: uuid() },
        { name: "Sierra", email: "s@gmail.com", mob: 9876543210, sales: 2900, key: uuid() },
        { name: "Tejaswini", email: "t@gmail.com", mob: 9876543210, sales: 6000, key: uuid() },
        { name: "Ujwal", email: "u@gmail.com", mob: 9876543210, sales: 5000, key: uuid() },
        { name: "Whiskey", email: "w@gmail.com", mob: 9876543210, sales: 4000, key: uuid() },
        { name: "Victor", email: "v@gmail.com", mob: 9876543210, sales: 7000, key: uuid() },
        { name: "Yankee", email: "y@gmail.com", mob: 9876543210, sales: 8000, key: uuid() },
        { name: "Zeus", email: "z@gmail.com", mob: 9876543210, sales: 9000, key: uuid() },
    ],
  
    currentPage: 1,
    perPage: 5


}

export default (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        
    case ADD_STAFF:
        return { ...state, 
            staffData: [...state.staffData, action.payload]
        }

      
        case DELETE_STAFF:
            return {
                ...state,
                staffData: state.staffData.filter((ele) => ele.key !== action.payload)
            }

    

        case SET_PER_PAGE:
            return {
                ...state,
                perPage: action.payload
            }
        case SET_CURR_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }


       



    default:
        return state
    }
}
