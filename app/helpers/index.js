exports.pickKeys = (collection, keys) => {
    const result = [];
    collection.forEach((item) => {
        const object = {};
        keys.forEach((key) => {
            const value = item[key];
            if (value) {
                object[key] = value;
            }
        });
        result.push(object);
    });
    return result;
};
