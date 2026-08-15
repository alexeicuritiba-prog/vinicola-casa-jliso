export type WineMotif =
  | 'cowboy'
  | 'don-venna'
  | 'j-alberto'
  | 'dom-venna'
  | 'quatro-maos'

export type Wine = {
  id: string
  name: string
  motif: WineMotif
}

export const WINES: Wine[] = [
  {
    id: 'syrah-gran-reserva-2024',
    name: 'Casa J Liso Syrah Gran Reserva',
    motif: 'cowboy',
  },
  {
    id: 'don-venna-reserva-syrah',
    name: 'Don Venna Reserva Syrah',
    motif: 'don-venna',
  },
  {
    id: 'j-alberto-reserva-syrah',
    name: 'J. Alberto Reserva Syrah',
    motif: 'j-alberto',
  },
  {
    id: 'dom-venna-syrah-2023',
    name: 'Dom Venna Syrah',
    motif: 'dom-venna',
  },
  {
    id: 'a-quatro-maos-2024',
    name: 'A Quatro Mãos — Ferracini Liso',
    motif: 'quatro-maos',
  },
]
