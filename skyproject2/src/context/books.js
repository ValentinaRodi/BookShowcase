import { createContext } from 'react'

export const book = [
    {
      id: 1,
      productName: 'Война и мир - Л.Н.Толстой',
      price: 800,
      quantity: 0,
    },
    {
      id: 2,
      productName: 'Две жизни - К.Е.Антарова',
      price: 700,
      quantity: 0,
    },
    {
      id: 3,
      productName: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
      quantity: 0,
    },
    {
      id: 4,
      productName: 'Хохот Шамана - В.П.Серкин',
      price: 600,
      quantity: 0,
    },
    {
      id: 5,
      productName: 'Хроники Ехо - Макс Фрай',
      price: 400,
      quantity: 0,
    },
]

const UserContext = createContext({book})

export default UserContext