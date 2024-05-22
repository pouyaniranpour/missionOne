import styles from './Header.module.css'
import Navbar from './Navbar'

function Header() {
  return (
    <>
      <div className={styles.header}>
          <ul className={styles.topLinks}>
          <li>Cars</li>
          <li style={{ padding: '0px', marginLeft: '0px' }}>|</li>
          <li>Turners Subscription</li>
          <li style={{ padding: '0px' }}>|</li>
          <li>Trucks & Machinery</li>
          <li style={{ padding: '0px' }}>|</li>
          <li>Damaged & End of Life</li>
          <li style={{ padding: '0px' }}>|</li>
          <li>Motorcycles</li>
          <li style={{ padding: '0px' }}>|</li>
          <li>General Goods</li>
          <li style={{ padding: '0px' }}>|</li>
            <li>Buses, Caravans and Motorhomes</li>
        </ul>
        <img className={styles.contactInfo}  src='/contactInfo.png' />
      <img className={styles.turnersLogo} src='/turnerscars.png' alt="" />
      {/* <img className='navImage' src='/navImage.png' alt="" /> */}
      
      </div>
      <Navbar />
    </>
  )
}
export default Header