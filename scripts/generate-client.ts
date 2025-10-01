import { createFromRoot } from 'codama'; 
import { rootNodeFromAnchor, type AnchorIdl } from'@codama/nodes-from-anchor';
import { renderVisitor as renderJavaScriptVisitor } from '@codama/renderers-js'; 
import anchorIdl from '../programs/Turbin3_prereq.json'; 
import path from 'path'; 
import fs from 'fs';
import url from 'url';

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const idlPath = path.join(import.meta.dirname, '..', 'programs', 'Turbin3_prereq.json');
// const anchorIdlContent = fs.readFileSync(idlPath, 'utf-8');
// const anchorIdl = JSON.parse(anchorIdlContent); 

const idl = anchorIdl as unknown as AnchorIdl;
const codama = createFromRoot(rootNodeFromAnchor(idl as AnchorIdl)); 
const jsClient = path.join(__dirname, "..", "clients", "js"); 
codama.accept(renderJavaScriptVisitor(path.join(jsClient, "src","generated")));