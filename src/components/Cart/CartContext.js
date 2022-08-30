import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    //itemInCart es un arreglo de {Item, cantidad}

    const [itemsInCart, setItemsInCart] = useState([]);
    
     // addItem: agrega cierta cantidad de items al carro de compras
    
        const addItem = (item, quantity) => {
        if (itemsInCart.length === 0) {
            setItemsInCart([{ item, quantity }]);
        } else {
            if (isInCart(item.id)) {
                //si ya esta el item en la lista
                const itemInCartCopy = [...itemsInCart];
                const itemCart = itemInCartCopy.find((itemCart) => item.id === itemCart.item.id);
                itemCart.quantity += quantity;
                setItemsInCart([...itemInCartCopy], {
                    id: item.id,
                    img: item.pictureUrl,
                    name: item.name,
                    cost: item.price,
                    
                });
            } else {
                setItemsInCart([...itemsInCart, { item, quantity }]);
            }
        }
    }
    
    //Devuelve el tamaño de la lista de productos
    
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

    const removeList = () => {
        setItemsInCart([]);
    }

    //removeItem: elimina un item segun su id
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
    
    // clear: elimina todos los elementos del carro de compras
    
    const clear = () => {
        setItemsInCart([]);
    }
    
    //isInCart: verifica si el item ya existe en el carrito segun id

    const isInCart = (id) => {
        return itemsInCart.some((itemCant) => itemCant.item.id === id)
    }
    
    //findAllItems devuelve todos los elementos de la lista de items
    
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
    return (
        <CartContext.Provider value={{
            
            itemsInCart, removeList, addItem, removeItem, clear, findAllItems, cartSize, itemSize, totalPlus, totalPlusPrice, increment, decrement
        }}>
            {children}
        </CartContext.Provider>
    )
}