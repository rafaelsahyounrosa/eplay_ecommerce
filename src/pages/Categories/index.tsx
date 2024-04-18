import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../asets/images/resident.png'
import fifa from '../../asets/images/fifa.png'
import diablo from '../../asets/images/diablo.png'
import starWars from '../../asets/images/star_wars.png'
import streetFifhter from '../../asets/images/street_fighter.png'
import zelda from '../../asets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Esportes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
    title: 'Fifa',
    system: 'Windows',
    infos: ['15%', 'R$ 200,00'],
    image: fifa
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['1%', 'R$ 230,00'],
    image: diablo
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['20%', 'R$ 200,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Luta',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
    title: 'Street Fighter',
    system: 'Windows',
    infos: ['12/08'],
    image: streetFifhter
  },
  {
    id: 6,
    category: 'Luta',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
    title: 'Street Fighter',
    system: 'Nintendo Switch',
    infos: ['12/08'],
    image: streetFifhter
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
    title: 'Zelda',
    system: 'Windows',
    infos: ['18/09'],
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['18/09'],
    image: zelda
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
