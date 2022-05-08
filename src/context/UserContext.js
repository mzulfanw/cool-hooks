import { createContext } from 'react'

export const userInfo = {
    user: {
        nama: 'mzulfanw',
        hobbi: 'mancing'
    }
}


export const UserContext = createContext(userInfo.user)