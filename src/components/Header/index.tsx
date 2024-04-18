import { Link } from 'react-router-dom'
// import {* as S} from './styles'
import { HeaderBar, Links, LinksItem, LinkCart } from './styles'
import logo from '../../asets/images/logo.svg'
import carrinho from '../../asets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY Logo" />
      </Link>
      <nav>
        <Links>
          <LinksItem>
            <Link to="/categories">Categorias</Link>
          </LinksItem>
          <LinksItem>
            <a href="#">Novidades</a>
          </LinksItem>
          <LinksItem>
            <a href="#">Promoções</a>
          </LinksItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - Produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
