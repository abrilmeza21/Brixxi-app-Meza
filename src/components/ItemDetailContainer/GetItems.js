
const getItems = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (task) {
                    resolve(task);
                } else {
                    reject("El producto no existe");
                }
            }, time)
    });
} 

export default getItems