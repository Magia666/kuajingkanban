import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir);
files.forEach(file => {
    if (file.endsWith('.tsx')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/position: \['bottomRight'\]/g, "placement: ['bottomRight']");
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent);
        }
    }
});
