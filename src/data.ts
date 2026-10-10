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
    "id": "gp2-nikolaev",
    "title": "Строительство двухэтажного жилого дома г. Николаев",
    "description": "Архитектурные решения",
    "coverImage": "gp2-nikolaev/oblogka_Nik.JPG",
    "drawings": [
      {
        "id": "gp2-nikolaev-1",
        "title": "Лист 1",
        "pdfUrl": "gp2-nikolaev/GR2-АР[53]a3.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "gp2-nikolaev-2",
        "title": "Лист 2",
        "pdfUrl": "gp2-nikolaev/GR2-АР[54]a3.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "gp2-nikolaev-3",
        "title": "Лист 3",
        "pdfUrl": "gp2-nikolaev/GR2-АР[55]a3.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "gp2-nikolaev-4",
        "title": "Лист 4",
        "pdfUrl": "gp2-nikolaev/GR2-АР[56]a3.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "istra",
    "title": "Istra",
    "description": "Архитектурные решения",
    "coverImage": "Istra/obl6.JPG",
    "drawings": [
      {
        "id": "Istra-1",
        "title": "Лист 1",
        "pdfUrl": "Istra/ARP 24.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-2",
        "title": "Лист 2",
        "pdfUrl": "Istra/ARP 25.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "pos_razan_doo",
    "title": "Детский сад (ДОО) на 275 мест г. Москва, пос. Рязановское",
    "description": "Архитектурные решения",
    "coverImage": "pos_Razan_DOO/obl6.JPG",
    "drawings": [
      {
        "id": "pos_Razan_DOO-1",
        "title": "Лист 1",
        "pdfUrl": "pos_Razan_DOO/3 СА-84-19_19-АР_Изм3 23.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "primorskaya",
    "title": "Гостиница \"приморская\" г. Сочи",
    "description": "Архитектурные решения",
    "coverImage": "Primorskaya/Vid1.JPG",
    "drawings": [
      {
        "id": "Primorskaya-1",
        "title": "Лист 1",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 73.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-2",
        "title": "Лист 2",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 74.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-3",
        "title": "Лист 3",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 75.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-4",
        "title": "Лист 4",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 76.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-5",
        "title": "Лист 5",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 77.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-6",
        "title": "Лист 6",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 78.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "toib",
    "title": "Театр Оперы и Балета г. Севастополь",
    "description": "Архитектурные решения",
    "coverImage": "TOiB/photo_2026-09-30_20-51-09.jpg",
    "drawings": [
      {
        "id": "TOiB-1",
        "title": "Лист 1",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 4.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-2",
        "title": "Лист 2",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 16.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-3",
        "title": "Лист 3",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 17.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-4",
        "title": "Лист 4",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 18.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-5",
        "title": "Лист 5",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 19.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-6",
        "title": "Лист 6",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 20.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "vozdvigenka1",
    "title": "\"Библиотека им. Ленина\" г. Москва, Воздвиженка 1",
    "description": "Архитектурные решения",
    "coverImage": "Vozdvigenka1/Vozdvigenka1.jpg",
    "drawings": [
      {
        "id": "Vozdvigenka1-1",
        "title": "Лист 1",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 63.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-2",
        "title": "Лист 2",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 64.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-3",
        "title": "Лист 3",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 65.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-4",
        "title": "Лист 4",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 66.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-5",
        "title": "Лист 5",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 67.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-6",
        "title": "Лист 6",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 68.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-7",
        "title": "Лист 7",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 69.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-8",
        "title": "Лист 8",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 70.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-9",
        "title": "Лист 9",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 71.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-10",
        "title": "Лист 10",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 72.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-11",
        "title": "Лист 11",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 73.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-12",
        "title": "Лист 12",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 74.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-13",
        "title": "Лист 13",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 75.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-14",
        "title": "Лист 14",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 76.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-15",
        "title": "Лист 15",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 77.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-16",
        "title": "Лист 16",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 78.pdf",
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  }
];
