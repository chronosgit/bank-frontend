const allExist = (...values) => {
    return values.every(v => {
        if(v === undefined || v === null) {
            return false;
        }

        return true;
    });
};

export default allExist;