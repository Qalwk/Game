import { LayoutContent } from '../../shared/ui'
import { NavBar } from '../../widgets/NavBar'
import { MainWindowLogin } from '../../widgets/MainWindowLogin'
import { Background } from '../../shared/ui/Background'

export function Authorization() {
  return (
    <>
      <Background/>
      <LayoutContent>
        <NavBar />
        <MainWindowLogin/>
      </LayoutContent>
    </>
  )
}