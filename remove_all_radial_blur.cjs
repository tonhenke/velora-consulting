const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        const lines = content.split('\n');
        let modified = false;
        const newLines = lines.filter(line => {
            const isRadialBlur = 
                line.includes('<div') && 
                line.includes('absolute') && 
                line.includes('rounded-full') && 
                line.includes('blur-') && 
                line.includes('/>') &&
                !line.includes('backdrop-blur');
                
            if (isRadialBlur) {
                console.log(`Removed in ${filePath}: ${line.trim()}`);
                modified = true;
                return false;
            }
            return true;
        });
        
        if (modified) {
            fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
        }
    }
});
