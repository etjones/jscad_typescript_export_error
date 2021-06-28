import jscad from '@jscad/modeling';
import * as fs from 'fs';

export async function main() {
    console.log(`in main()`);
    demo_file_write();
}

function demo_file_write() {
    const out_path = 'test.txt';
    fs.writeFileSync(out_path, 'test text');
    console.log(`wrote file: ${out_path}`);
}

main();
