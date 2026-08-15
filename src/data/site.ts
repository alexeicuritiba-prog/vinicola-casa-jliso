export const SITE_URL = 'https://vinicolacasajliso.com.br'
export const INSTAGRAM_URL = 'https://www.instagram.com/vinicolacasaj.liso/'
export const INSTAGRAM_HANDLE = '@vinicolacasaj.liso'
export const BRAND_NAME = 'Casa J Liso'
export const WINERY_NAME = 'Vinícola Casa J Liso'
export const CITY = 'Mirassol'
export const STATE = 'São Paulo'
export const REGION = 'Mirassol/SP'
export const STREET_ADDRESS =
  'Rodovia SP-310 Feliciano Salles Cunha, km 456, zona rural, Mirassol/SP'
export const MAP_LAT = -20.802204
export const MAP_LNG = -49.547401
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=15&output=embed`
export const WAZE_URL = `https://www.waze.com/ul?ll=${MAP_LAT},${MAP_LNG}&navigate=yes`

export const NAV_ITEMS = [
  { href: '#inicio', id: 'inicio', label: 'Início' },
  { href: '#vinicola', id: 'vinicola', label: 'A vinícola' },
  { href: '#vinhos', id: 'vinhos', label: 'Vinhos' },
  { href: '#visite', id: 'visite', label: 'Visite' },
] as const
