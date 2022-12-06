import SubmenuNotes from '../../components/submenus/Notes'
import AddButton from '../../components/AddButton'

export default function Notas() {
  return (
    <main>
      <div className='container'>
        <div className='submenu-bar'>
          <SubmenuNotes />
          <AddButton />
        </div>
        <h1>Notas</h1>
      </div>
    </main>
  )
}
