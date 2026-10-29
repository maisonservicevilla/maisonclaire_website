/** Places near the villa. Distances are road distances from the property listing. Photos: Wikimedia Commons, CC BY-SA 4.0. */
export type Place = {
  id: string; name: string; km: number; type: 'waterfall' | 'peak' | 'view' | 'cave' | 'lake' | 'bridge';
  effort: string; effortIcon: string; text: string; href?: string;
  img: string; alt: string; pos?: string; credit: { by: string; file: string };
};

export const typeLabel: Record<string, string> = {
  bridge: 'Glass bridge', waterfall: 'Waterfall', peak: 'Peak trek', view: 'Viewpoint', cave: 'Rock carvings', lake: 'Reservoir',
};

export const places: Place[] = [
  { id: 'kandi', name: '900 Kandi glass bridge', km: 9, type: 'bridge', effort: 'Jeep from Meppadi', effortIcon: 'jeep', href: '/900-kandi-glass-bridge/',
    text: 'A forest estate reached by jeep from Meppadi, with off-road tracks and a glass bridge over the trees.',
    img: 'place-kandi', alt: 'Forested hills and mountains seen from 900 Kandi', credit: { by: 'SijiR', file: 'View from 900 kandi IMG20260126154406.jpg' } },
  { id: 'kanthanpara', name: 'Kanthanpara Falls', km: 10, type: 'waterfall', effort: 'Short walk', effortIcon: 'walk', href: '/kanthanpara-waterfalls/',
    text: 'A smaller, quieter waterfall a short walk from the road, with a pool and rocks at its base.',
    img: 'place-kanthanpara', alt: 'Kanthanpara Falls pouring over wide rock shelves into a pool', credit: { by: 'Ingo Mehling', file: 'Wayanad - Kanthanpara Waterfalls - 1.jpg' } },
  { id: 'chembra', name: 'Chembra Peak', km: 12, type: 'peak', effort: 'Full-day trek, guided', effortIcon: 'boot',
    text: 'At 2,100 m, the highest point in the area. Treks start near Meppadi and run with local forest guides, past a heart-shaped lake.',
    img: 'place-chembra', alt: 'The heart-shaped lake on the Chembra Peak trek', credit: { by: 'Ravi Dwivedi', file: 'Chembra Peak Heart Lake.jpg' } },
  { id: 'soochipara', name: 'Soochipara Falls', km: 15, type: 'waterfall', effort: 'Forest path', effortIcon: 'walk',
    text: 'Also called Sentinel Rock Falls, reached by a forest path from the road. Best after the monsoon.',
    img: 'place-soochipara', alt: 'Soochipara Falls dropping down a sheer rock face into the forest', pos: '60% 30%', credit: { by: 'Siyad Saffan Shah', file: 'Soochippara waterfalls,Wayanad,kerala.jpg' } },
  { id: 'lakkidi', name: 'Lakkidi Viewpoint', km: 20, type: 'view', effort: 'Roadside stop', effortIcon: 'car',
    text: 'At the top of the Thamarassery ghat, looking down over the hairpin bends towards Kozhikode.',
    img: 'place-lakkidi', alt: 'The view from Lakkidi over the forested ghat and its hairpin road', credit: { by: 'Vinayaraj', file: 'Lakkidi view point - vinnila2k24 (1).jpg' } },
  { id: 'edakkal', name: 'Edakkal Caves', km: 24, type: 'cave', effort: 'Steep climb', effortIcon: 'boot',
    text: 'Rock shelters with ancient carvings on the walls, up a steep climb near Ambalavayal.',
    img: 'place-edakkal', alt: 'Ancient carvings on the rock walls of Edakkal Caves', credit: { by: 'Ingo Mehling', file: 'Edakkal Caves - Petroglyphs - 4.jpg' } },
  { id: 'karapuzha', name: 'Karapuzha Dam', km: 24, type: 'lake', effort: 'Easy, gardens', effortIcon: 'walk',
    text: 'A reservoir with gardens and open views, good for a slower afternoon.',
    img: 'place-karapuzha', alt: 'Karapuzha reservoir with islands and a mountain beyond', credit: { by: 'Ingo Mehling', file: 'Karapuzha Dam Reservoir.jpg' } },
];

export const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`;
