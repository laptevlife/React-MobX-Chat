import React from 'react'

import {createStore} from './store'
import {useLocalStore} from 'mobx-react'

const Context = React.createContext(null)

export const AppProvider  = ({children})=>{
    const store = useLocalStore( createStore) 
    return (
        <Context.Provider value = {store}>
            {children}
        </Context.Provider>
    )
}

export const  useStore  = ()=> React.useContext( Context)