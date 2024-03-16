const getEmptyArrayIfNotExist = (originalArr) => {
    return Array.isArray(originalArr) ? originalArr : [];
};

export default getEmptyArrayIfNotExist;