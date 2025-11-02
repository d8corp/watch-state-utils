function isTemplateStringsArray(arr) {
    return Array.isArray(arr) && 'raw' in arr;
}

export { isTemplateStringsArray };
