import { Background } from '../../shared/ui/Background'
import { LayoutContent } from '../../shared/ui'
import { NavBar } from '../../widgets/NavBar'
import { MainWindow } from '../../widgets/MainWindow'

export function Accounts() {
  return (
    <>
        <Background/>
        <LayoutContent>
            <NavBar />
            <MainWindow/>
        </LayoutContent>
    </>
  )
}

