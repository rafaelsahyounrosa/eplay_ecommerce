import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
//     title: 'Resident Evil 4',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 2,
//     category: 'Esportes',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
//     title: 'Fifa',
//     system: 'Windows',
//     infos: ['15%', 'R$ 200,00'],
//     image: fifa
//   },
//   {
//     id: 3,
//     category: 'Ação',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
//     title: 'Diablo IV',
//     system: 'Windows',
//     infos: ['1%', 'R$ 230,00'],
//     image: diablo
//   },
//   {
//     id: 4,
//     category: 'Ação',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
//     title: 'Star Wars',
//     system: 'Windows',
//     infos: ['20%', 'R$ 200,00'],
//     image: starWars
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'Luta',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
//     title: 'Street Fighter',
//     system: 'Windows',
//     infos: ['12/08'],
//     image: streetFifhter
//   },
//   {
//     id: 6,
//     category: 'Luta',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
//     title: 'Street Fighter',
//     system: 'Nintendo Switch',
//     infos: ['12/08'],
//     image: streetFifhter
//   },
//   {
//     id: 7,
//     category: 'RPG',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
//     title: 'Zelda',
//     system: 'Windows',
//     infos: ['18/09'],
//     image: zelda
//   },
//   {
//     id: 8,
//     category: 'RPG',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore',
//     title: 'Zelda',
//     system: 'Nintendo Switch',
//     infos: ['18/09'],
//     image: zelda
//   }
// ]

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
