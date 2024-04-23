import { useState } from 'react'
import ImgGaleria from '../../asets/images/galeria_hp.png'
import ImgGaleria2 from '../../asets/images/banner_hp.png'
import LutaHp from '../../asets/images/luta_hp.png'
import fechar from '../../asets/images/close.png'
import play from '../../asets/images/botao-play 1.png'
import zoom from '../../asets/images/mais-zoom 1.png'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import Section from '../Section'
import { GalleryItem } from '../../pages/Home'
const mock: GalleryItem[] = [
  {
    type: 'image',
    url: ImgGaleria
  },
  {
    type: 'image',
    url: ImgGaleria2
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=u7dqssgc5VDCLSpt'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Imagem ${index + 1} do Jogo ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Imagem de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="Imagem do jogo" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}>
          {' '}
        </div>
      </Modal>
    </>
  )
}
export default Gallery
