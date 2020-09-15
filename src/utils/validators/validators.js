export const required = (val) => {
    if (val) return undefined;
    return 'field is required';
}

export const maxLength = (maxLen) => (val) => {
    if (val && val.length > maxLen) return `max length ${maxLen}`;
    return undefined;
}