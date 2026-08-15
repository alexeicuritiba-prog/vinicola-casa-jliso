export type WineMotif =
  | 'cowboy'
  | 'don-venna'
  | 'j-alberto'
  | 'dom-venna'
  | 'quatro-maos'

export type WineFact = {
  label: string
  value: string
}

export type Wine = {
  id: string
  name: string
  motif: WineMotif
  facts: WineFact[]
}

export const WINES: Wine[] = [
  {
    id: 'syrah-gran-reserva-2024',
    name: 'Casa J Liso Syrah Gran Reserva',
    motif: 'cowboy',
    facts: [
      { label: 'Safra', value: '2024' },
      { label: 'Vinhedo', value: 'Girassol' },
      { label: 'Teor alcoólico', value: '12,5% vol' },
    ],
  },
  {
    id: 'don-venna-reserva-syrah',
    name: 'Don Venna Reserva Syrah',
    motif: 'don-venna',
    facts: [{ label: 'Estilo', value: 'Reserva · Syrah' }],
  },
  {
    id: 'j-alberto-reserva-syrah',
    name: 'J. Alberto Reserva Syrah',
    motif: 'j-alberto',
    facts: [{ label: 'Estilo', value: 'Reserva · Syrah' }],
  },
  {
    id: 'dom-venna-syrah-2023',
    name: 'Dom Venna Syrah',
    motif: 'dom-venna',
    facts: [
      { label: 'Safra', value: '2023' },
      { label: 'Tipo', value: 'Vinho fino tinto seco' },
      { label: 'Origem', value: 'Mirassol-SP' },
      { label: 'Marca', value: 'Primeira Safra' },
    ],
  },
  {
    id: 'a-quatro-maos-2024',
    name: 'A Quatro Mãos — Ferracini Liso',
    motif: 'quatro-maos',
    facts: [
      { label: 'Safra', value: '2024' },
      { label: 'Tipo', value: 'Vinho tinto fino seco · Syrah' },
      { label: 'Teor alcoólico', value: '13%' },
      { label: 'Volume', value: '750 ml' },
      { label: 'Colaboração', value: 'Vinícola Ferracini, São Paulo/SP' },
    ],
  },
]
