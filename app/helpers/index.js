exports.pickKeys = (collection, keyMapping) => {
    const keyMappingObj = keyMapping;
    const result = [];
    collection.forEach((item) => {
        const object = {};
        Object.keys(keyMapping).forEach((key) => {
            const value = item[key];
            if (value) {
                object[keyMappingObj[key]] = value;
            }
        });
        result.push(object);
    });
    return result;
};
