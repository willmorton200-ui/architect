export interface Drawing {
  id: string;
  title: string;
  pdfUrl: string;
  pageNumber?: number;
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
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "gp2-nikolaev-2",
        "title": "Лист 2",
        "pdfUrl": "gp2-nikolaev/GR2-АР[54]a3.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "gp2-nikolaev-3",
        "title": "Лист 3",
        "pdfUrl": "gp2-nikolaev/GR2-АР[55]a3.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "gp2-nikolaev-4",
        "title": "Лист 4",
        "pdfUrl": "gp2-nikolaev/GR2-АР[56]a3.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "istra",
    "title": "Индивидуальный 2х этажный жилой дом. Московская область, коттеджный поселок Истра",
    "description": "Архитектурные решения",
    "coverImage": "Istra/obl6.JPG",
    "drawings": [
      {
        "id": "Istra-1",
        "title": "Лист 1",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-2",
        "title": "Лист 2",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 2,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-3",
        "title": "Лист 3",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 3,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-4",
        "title": "Лист 4",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 4,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-5",
        "title": "Лист 5",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 5,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-6",
        "title": "Лист 6",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 6,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-7",
        "title": "Лист 7",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 7,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-8",
        "title": "Лист 8",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 8,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-9",
        "title": "Лист 9",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 9,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-10",
        "title": "Лист 10",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 10,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-11",
        "title": "Лист 11",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 11,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-12",
        "title": "Лист 12",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 12,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-13",
        "title": "Лист 13",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 13,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-14",
        "title": "Лист 14",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 14,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-15",
        "title": "Лист 15",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 15,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-16",
        "title": "Лист 16",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 16,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-17",
        "title": "Лист 17",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 17,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-18",
        "title": "Лист 18",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 18,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-19",
        "title": "Лист 19",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 19,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-20",
        "title": "Лист 20",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 20,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-21",
        "title": "Лист 21",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 21,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-22",
        "title": "Лист 22",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 22,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-23",
        "title": "Лист 23",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 23,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-24",
        "title": "Лист 24",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 24,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-25",
        "title": "Лист 25",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 25,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-26",
        "title": "Лист 26",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 26,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-27",
        "title": "Лист 27",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 27,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-28",
        "title": "Лист 28",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 28,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-29",
        "title": "Лист 29",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 29,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-30",
        "title": "Лист 30",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 30,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-31",
        "title": "Лист 31",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 31,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-32",
        "title": "Лист 32",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 32,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-33",
        "title": "Лист 33",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 33,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-34",
        "title": "Лист 34",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 34,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-35",
        "title": "Лист 35",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 35,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-36",
        "title": "Лист 36",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 36,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-37",
        "title": "Лист 37",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 37,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-38",
        "title": "Лист 38",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 38,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-39",
        "title": "Лист 39",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 39,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-40",
        "title": "Лист 40",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 40,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-41",
        "title": "Лист 41",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 41,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Istra-42",
        "title": "Лист 42",
        "pdfUrl": "Istra/ARP.pdf",
        "pageNumber": 42,
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
        "pageNumber": 1,
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
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-2",
        "title": "Лист 2",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 74.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-3",
        "title": "Лист 3",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 75.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-4",
        "title": "Лист 4",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 76.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-5",
        "title": "Лист 5",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 77.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Primorskaya-6",
        "title": "Лист 6",
        "pdfUrl": "Primorskaya/MP_1535_03_��1 78.pdf",
        "pageNumber": 1,
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
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-2",
        "title": "Лист 2",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 16.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-3",
        "title": "Лист 3",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 17.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-4",
        "title": "Лист 4",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 18.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-5",
        "title": "Лист 5",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 19.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "TOiB-6",
        "title": "Лист 6",
        "pdfUrl": "TOiB/Раздел_ПД_№3_Подраздел_ПД_№1_2_изм_18 (2) 20.pdf",
        "pageNumber": 1,
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
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-2",
        "title": "Лист 2",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 64.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-3",
        "title": "Лист 3",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 65.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-4",
        "title": "Лист 4",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 66.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-5",
        "title": "Лист 5",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 67.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-6",
        "title": "Лист 6",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 68.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-7",
        "title": "Лист 7",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 69.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-8",
        "title": "Лист 8",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 70.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-9",
        "title": "Лист 9",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 71.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-10",
        "title": "Лист 10",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 72.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-11",
        "title": "Лист 11",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 73.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-12",
        "title": "Лист 12",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 74.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-13",
        "title": "Лист 13",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 75.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-14",
        "title": "Лист 14",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 76.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-15",
        "title": "Лист 15",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 77.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      },
      {
        "id": "Vozdvigenka1-16",
        "title": "Лист 16",
        "pdfUrl": "Vozdvigenka1/06-0048-20 АРизм4000 78.pdf",
        "pageNumber": 1,
        "thumbnailUrl": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&auto=format&fit=crop"
      }
    ]
  }
];
