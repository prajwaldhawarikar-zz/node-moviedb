exports.pickKeys = (collection, keyMapping) => {
    const keyMappingObj = keyMapping;
    const result = [];
    if (!Array.isArray(collection)) {
        const typeError = new TypeError('Not an valid array');
        throw typeError;
    }
    collection.forEach((item) => {
        const object = {};
        Object.keys(keyMapping).forEach((key) => {
            const value = item[key];
            if (value) {
                object[keyMappingObj[key]] = value;
            }
        });
        if (Object.keys(object).length) {
            result.push(object);
        }
    });
    return result;
};
