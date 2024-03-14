import * as fs from 'node:fs/promises';

export const accessFileFromURL = async (filename) => {
    const content = [];
    try {
        const data = await fs.readFile(`./public${filename}`, "utf-8");
        content.push(data);
    } catch (err) {
        console.error("Erro ao ler o arquivo:", err.message);
    }
    return content
};