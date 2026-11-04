import {parse} from '@babel/parser';
import generateImport from '@babel/generator';
import fs from 'node:fs';
const generate=generateImport.default||generateImport;
const files=['site.tsx','quiz-page.tsx','booking-page.tsx','proof-section.tsx','redesign.tsx','team-image.tsx','video-gallery.tsx','community.tsx'];
function visit(node){if(!node||typeof node!=='object')return;if(['StringLiteral','JSXText'].includes(node.type)&&node.value.includes(',')){node.value=node.value.replaceAll(',','');delete node.extra;}for(const [key,value] of Object.entries(node)){if(key==='extra')continue;if(Array.isArray(value))value.forEach(visit);else if(value&&typeof value==='object')visit(value);}}
for(const file of files){const path='src/'+file;const ast=parse(fs.readFileSync(path,'utf8'),{sourceType:'module',plugins:['typescript','jsx']});visit(ast);fs.writeFileSync(path,generate(ast,{}).code+'\n');}
const path='src/brief-content.ts';const raw=fs.readFileSync(path,'utf8');const data=JSON.parse(raw.split(' = ')[1].split(' as const')[0]);const clean=value=>typeof value==='string'?value.replaceAll(',',''):Array.isArray(value)?value.map(clean):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).map(([k,v])=>[k,clean(v)])):value;fs.writeFileSync(path,'export const brief = '+JSON.stringify(clean(data),null,2)+' as const\n');
