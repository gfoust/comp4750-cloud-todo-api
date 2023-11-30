import { fileURLToPath } from 'url';
import path from 'path';

export const projectDir = fileURLToPath(import.meta.url);

export function projectPath(p) {
  console.log(path.join(projectDir, p));
  return path.join(projectDir, p);
}

export var httpPort = 8000;

export var logLevel = 'dev';
