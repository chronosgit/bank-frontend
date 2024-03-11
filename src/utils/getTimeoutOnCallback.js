const getTimeoutOnCallback = (time, callback) => {
    return setTimeout(callback, time);
};

export default getTimeoutOnCallback;