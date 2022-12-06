import Button from '../Button'

export default function SubmenuNotes() {
  return (
    <div className='submenu'>
      <Button screen='/notas/notas' href='/notas/notas' title='Notas' />
      <Button screen='/notas/frases' href='/notas/frases' title='Frases' />
      <Button screen='/notas/recetas' href='/notas/recetas' title='Recetas' />
    </div>
  )
}
