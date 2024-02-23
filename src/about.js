export default function about(content) {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
};