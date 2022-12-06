import Head from 'next/head'
import useDarkMode from '../utils/useDarkmode'

export default function Home() {
  const [theme, setTheme] = useDarkMode()

  return (
    <>
      <Head>
        <title>Iron Hand</title>
        <meta name='description' content='Gestor de tareas' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='container'>
          <h1>HOME</h1>
          {theme === 'light' ? (
            <button onClick={() => setTheme('light')}>Claro</button>
          ) : (
            <button onClick={() => setTheme('dark')}>Oscuro</button>
          )}
        </div>
      </main>
    </>
  )
}
