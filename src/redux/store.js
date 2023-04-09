import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"


import { contactsReducer } from "./contacstSlice"
import { filterReducer } from "./filterSlice";





const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,

})


 export const store =configureStore({
    reducer: persistedReducer
 },
 )
 
