export interface Drawing {
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

export const projects: Project[] = [
  {
    id: "gr2-ar",
    title: "Объект GR2-АР",
    description: "Архитектурные решения",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    drawings: [
      { id: "gr2-53", title: "Чертеж [53]", pdfUrl: "/GR2-АР[53]a3.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "gr2-54", title: "Чертеж [54]", pdfUrl: "/GR2-АР[54]a3.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "gr2-55", title: "Чертеж [55]", pdfUrl: "/GR2-АР[55]a3.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "gr2-56", title: "Чертеж [56]", pdfUrl: "/GR2-АР[56]a3.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
    ]
  },
  {
    id: "mp-1535",
    title: "Проект MP_1535",
    description: "Рабочая документация",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    drawings: [
      { id: "mp-73", title: "Лист 73", pdfUrl: "/MP_1535_03_1 73.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "mp-74", title: "Лист 74", pdfUrl: "/MP_1535_03_1 74.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "mp-75", title: "Лист 75", pdfUrl: "/MP_1535_03_1 75.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "mp-76", title: "Лист 76", pdfUrl: "/MP_1535_03_1 76.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "mp-77", title: "Лист 77", pdfUrl: "/MP_1535_03_1 77.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "mp-78", title: "Лист 78", pdfUrl: "/MP_1535_03_1 78.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
    ]
  },
  {
    id: "pd-3",
    title: "Раздел ПД №3",
    description: "Проектная документация, изм. 18",
    coverImage: "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=800&auto=format&fit=crop",
    drawings: [
      { id: "pd-4", title: "Лист 4", pdfUrl: "/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 4.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "pd-16", title: "Лист 16", pdfUrl: "/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 16.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "pd-17", title: "Лист 17", pdfUrl: "/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 17.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "pd-18", title: "Лист 18", pdfUrl: "/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 18.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "pd-19", title: "Лист 19", pdfUrl: "/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 19.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "pd-20", title: "Лист 20", pdfUrl: "/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 20.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
    ]
  },
  {
    id: "ca-84",
    title: "Объект 3 СА-84-19",
    description: "Разное",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    drawings: [
      { id: "ca-23", title: "Лист 23", pdfUrl: "/3 СА-84-19_19-АР_Изм3 23.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
    ]
  },
  {
    id: "06-0048",
    title: "Объект 06-0048-20",
    description: "Архитектурные решения",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    drawings: [
      { id: "06-63", title: "Лист 63", pdfUrl: "/06-0048-20 АРизм4000 63.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-64", title: "Лист 64", pdfUrl: "/06-0048-20 АРизм4000 64.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-65", title: "Лист 65", pdfUrl: "/06-0048-20 АРизм4000 65.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-66", title: "Лист 66", pdfUrl: "/06-0048-20 АРизм4000 66.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-67", title: "Лист 67", pdfUrl: "/06-0048-20 АРизм4000 67.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-68", title: "Лист 68", pdfUrl: "/06-0048-20 АРизм4000 68.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-69", title: "Лист 69", pdfUrl: "/06-0048-20 АРизм4000 69.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-70", title: "Лист 70", pdfUrl: "/06-0048-20 АРизм4000 70.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-71", title: "Лист 71", pdfUrl: "/06-0048-20 АРизм4000 71.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-72", title: "Лист 72", pdfUrl: "/06-0048-20 АРизм4000 72.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-73", title: "Лист 73", pdfUrl: "/06-0048-20 АРизм4000 73.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-74", title: "Лист 74", pdfUrl: "/06-0048-20 АРизм4000 74.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-75", title: "Лист 75", pdfUrl: "/06-0048-20 АРизм4000 75.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-76", title: "Лист 76", pdfUrl: "/06-0048-20 АРизм4000 76.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-77", title: "Лист 77", pdfUrl: "/06-0048-20 АРизм4000 77.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
      { id: "06-78", title: "Лист 78", pdfUrl: "/06-0048-20 АРизм4000 78.pdf", thumbnailUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop" },
    ]
  }
];
