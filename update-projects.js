import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_FILE = path.join(__dirname, 'src', 'data.ts');

async function getDirectories(source) {
  const entries = await fs.readdir(source, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
}

async function getFiles(source, extFilter = null) {
  const entries = await fs.readdir(source, { withFileTypes: true });
  let files = entries
    .filter(entry => entry.isFile())
    .map(entry => entry.name);
  
  if (extFilter) {
    files = files.filter(file => extFilter.includes(path.extname(file).toLowerCase()));
  }
  return files;
}

// Natural sort for strings containing numbers (e.g., "1.pdf", "10.pdf", "2.pdf" -> "1.pdf", "2.pdf", "10.pdf")
function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

async function main() {
  console.log('Сканирование папки public...');
  const projectFolders = await getDirectories(PUBLIC_DIR);
  
  const projects = [];

  for (const folder of projectFolders) {
    const folderPath = path.join(PUBLIC_DIR, folder);
    
    // 1. Find title from a .txt file
    const txtFiles = await getFiles(folderPath, ['.txt']);
    let title = folder;
    if (txtFiles.length > 0) {
      const titleContent = await fs.readFile(path.join(folderPath, txtFiles[0]), 'utf-8');
      title = titleContent.trim() || folder;
    }

    // 2. Find cover image
    const imageFiles = await getFiles(folderPath, ['.jpg', '.jpeg', '.png', '.webp']);
    // Fallback placeholder if no image found
    let coverImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop";
    if (imageFiles.length > 0) {
      coverImage = `${folder}/${imageFiles[0]}`;
    }

    // 3. Find all PDFs for drawings
    let pdfFiles = await getFiles(folderPath, ['.pdf']);
    pdfFiles.sort(naturalSort); // Sort them so sheets are in logical order

    const drawings = pdfFiles.map((pdf, index) => {
      return {
        id: `${folder}-${index + 1}`,
        title: `Лист ${index + 1}`, // Can be improved later if names are needed
        pdfUrl: `${folder}/${pdf}`,
        thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      };
    });

    projects.push({
      id: folder.toLowerCase(),
      title,
      description: "Архитектурные решения",
      coverImage,
      drawings
    });
  }

  // Generate data.ts content
  const dataTsContent = `export interface Drawing {
  id: string;
  title: string;
  pdfUrl: string;
  thumbnailUrl: string; // Since we don't have real thumbnails yet, we'll use a placeholder or the cover
}

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  drawings: Drawing[];
}

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

  await fs.writeFile(DATA_FILE, dataTsContent, 'utf-8');
  console.log('✅ Файл src/data.ts успешно обновлен!');
  console.log(`Найдено проектов: ${projects.length}`);
}

main().catch(err => {
  console.error('Ошибка при обновлении проектов:', err);
});
