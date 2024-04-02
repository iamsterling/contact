/**
 * Serializes the content of a contenteditable container.
 * 
 * @param {HTMLElement} element - The contenteditable container to serialize.
 * @returns {string} - The serialized HTML content or text content of the container.
 */
const serialize = (element) => {
    if (!element || !element.isContentEditable) {
        console.error('Element is not contenteditable or does not exist');
        return '';
    }

    // Choose innerHTML or innerText based on your need to preserve HTML formatting
    return element.innerText; // Use .innerText if formatting is not needed
};
