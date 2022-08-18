import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    //itemInCart es un arreglo de {Item, cantidad}

    const [itemsInCart, setItemsInCart] = useState([]);

    const addItem = (item, quantity) => {
        if (itemsInCart.length === 0) {
            setItemsInCart([{ item, quantity }]);
        } else {
            if (isInCart(item.id)) {
                //si ya esta el item en la lista
                const itemInCartCopy = [...itemsInCart];
                const itemCart = itemInCartCopy.find((itemCart) => item.id === itemCart.item.id);
                itemCart.quantity += quantity;
                setItemsInCart([...itemInCartCopy]);
            } else {
                setItemsInCart([...itemsInCart, { item, quantity }]);

            }
        }
    }
    /**
     * 
     * @returns devuelve el tamaño de la lista de productos
     */
    const cartSize = () => {
        return itemsInCart.length;
    }
    const itemSize = (id) => {
        let cant = 0;
        if (isInCart(id)) {
            cant = itemsInCart.find(itemCart => itemCart.item.id === id).quantity;
        }
        return cant;
    }

    const removeItem = (itemId) => {
        if (isInCart(itemId)) {
            let itemInCartCopy = [...itemsInCart];
            let itemCart = itemInCartCopy.find((itemCart) => (
                itemCart.item.id === itemId
            ))
            itemInCartCopy.splice(itemInCartCopy.indexOf(itemCart), 1);
            setItemsInCart(itemInCartCopy);
        }
    }
    /**
    * clear: elimina todos los elementos del carro de compras
    */
    const clear = () => {
        setItemsInCart([]);
    }

    const isInCart = (id) => {
        return itemsInCart.some((itemCant) => itemCant.item.id === id)
    }
    
    const findAllItems = () => {
        return itemsInCart;
    }

    const decrement = (id) => {
        const itemsInCartCopy = [...itemsInCart];
        if (isInCart(id)) {
            const itemCant = itemsInCartCopy.find(itemCant => itemCant.item.id === id);
            itemCant.quantity -= 1;
            setItemsInCart(itemsInCartCopy);
        }
    }
    const increment = (id) => {
        const itemsInCartCopy = [...itemsInCart];
        if (isInCart(id)) {
            const itemCant = itemsInCartCopy.find(itemCant => itemCant.item.id === id);
            itemCant.quantity += 1;
            setItemsInCart(itemsInCartCopy);

        }
    }
    const totalPlus = () => {
        let plus = 0;
        itemsInCart.forEach(itemCant => {
            plus += itemCant.quantity;
        });
        return plus;
    }
    const totalPlusPrice = () => {
        let plus = 0;
        itemsInCart.forEach(itemCant => {
            plus += itemCant.quantity * itemCant.item.price;
        });
        return plus;
    }
    const updateQuantity = (id) => {
        //TODO actualiza la cantidad de un producto

    }
    return (
        <CartContext.Provider value={{
            /* funciones a compratir*/
            addItem, removeItem, clear, findAllItems, cartSize, itemSize, totalPlus, totalPlusPrice, increment, decrement
        }}>
            {children}
        </CartContext.Provider>
    )
}