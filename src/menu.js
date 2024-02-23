export default function menu(content) {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
};