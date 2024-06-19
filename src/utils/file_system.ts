import {promises as fs } from 'fs';
import { join } from 'path';


export const get_file_data = async (category: string, component: string) => {
    try {
        const component_dir = join(process.cwd(), '/public/usage-components')
        const file_path = join(component_dir, `${category}/${component}-usage.tsx`);
        const file = await fs.readFile(file_path, 'utf8');
        return file; 
    } catch (error) {
        console.log(error)
        return null
    }
}