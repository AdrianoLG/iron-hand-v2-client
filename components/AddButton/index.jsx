import styles from './AddButton.module.css'

export default function AddButton({}) {
  return (
    <button className={styles.addButton}>
      <svg
        className={styles.svg}
        viewBox='0 0 33 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M16.0429 1V31.0859V1ZM1 16.0429H31.0859H1Z' fill='#FAF8F3' />
        <path
          d='M16.0429 1V31.0859M1 16.0429H31.0859'
          stroke='#555555'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
  )
}
