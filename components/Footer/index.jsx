import Link from 'next/link'
import styles from './Footer.module.css'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h1>
          <Link href='/'>Iron Hand</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link
                href='/notas'
                className={router.pathname == '/notas' ? styles.active : ''}
              >
                Notas
              </Link>
            </li>
            <li>
              <Link
                href='/tareas'
                className={router.pathname == '/tareas' ? styles.active : ''}
              >
                Tareas
              </Link>
            </li>
            <li>
              <Link
                href='/cuerpo'
                className={router.pathname == '/cuerpo' ? styles.active : ''}
              >
                Cuerpo
              </Link>
            </li>
            <li>
              <Link
                href='/cultura'
                className={router.pathname == '/cultura' ? styles.active : ''}
              >
                Cultura
              </Link>
            </li>
            <li>
              <Link
                href='/inventario'
                className={
                  router.pathname == '/inventario' ? styles.active : ''
                }
              >
                Inventario
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
