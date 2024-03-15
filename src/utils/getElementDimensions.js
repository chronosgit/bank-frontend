const getElementDimensions = (el) => {
    if(!el || !(el instanceof HTMLElement)) return {};

    const width = el.offsetWidth;
    const height = el.offsetHeight;

    return {width, height};
};

export default getElementDimensions;