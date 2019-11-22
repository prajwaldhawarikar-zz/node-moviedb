/**
 *  Map collection with only specified fields and renames the keys
 * i.e. select fields in which are keys in keyMapping
 * and map them value in keyMapping names for each object item in the collection
 * @param {Object[]} collection
 * @param {Object} keyMapping
 * @returns {Object[]} mapped collection
 */
exports.pickKeys = (collection, keyMapping) => {
    const keyMappingObj = keyMapping;
    const result = [];
    if (!Array.isArray(collection)) {
        // if collection is not an array
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
