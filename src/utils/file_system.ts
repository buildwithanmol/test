import {promises as fs } from 'fs';


export const get_file_data = async (category: string, component: string) => {
    try {
        const file = await fs.readFile(process.cwd() + `/public/usage-components/${category}/${component}-usage.tsx`, 'utf8');
        return file;

    } catch (error) {
        console.log(error)
        return null
    }
}