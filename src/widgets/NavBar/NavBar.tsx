import "./NavBar.css"
import { ButtonDefault } from '../../shared/ui/ButtonDefault'

export function NavBar() {
  return (
    <div className='NavBar'>
      <h2>Authorization</h2>
      <ButtonDefault variant='primary' color='White' message='Language'></ButtonDefault>
    </div>
  )
}
