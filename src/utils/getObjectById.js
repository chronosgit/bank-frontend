const getObjectById = (id, objects) => {
    let object = {};

    for(let obj of objects) {
        if(obj.id && obj.id == id) {
            object = obj;
            break;
        }
    }

    return object;
};

export default getObjectById;