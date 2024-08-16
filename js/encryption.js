export function encrypt(text) {
    if (!/^[a-z\s]+$/.test(text)) {
        alert("El texto debe contener solo letras minúsculas y espacios.");
        return "";
    }
    return text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

export function decrypt(text) {
    if (!/^[a-z\s]+$/.test(text)) {
        alert("El texto debe contener solo letras minúsculas y espacios.");
        return "";
    }
    return text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


