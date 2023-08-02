import Image from 'next/image'
import styles from './page.module.css'
import MainBlock from '../components/MainBlock'

export default function Home() {
  return (
    <div className={styles.page}>
      <MainBlock/>
    </div>
  )
}
