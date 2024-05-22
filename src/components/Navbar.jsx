import styles from './Header.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navLeft}>
        <li><img className={styles.searchIcon} src="/search.png" alt="" /> Find a Car</li>
        <li>How to Buy <img className={styles.downArrow} src='/downArrow.png' /></li>
        <li>Sell your Car <img className={styles.downArrow} src='/downArrow.png' /></li>
        <li>Finance & Insurance <img className={styles.downArrow} src='/downArrow.png' /></li>
        <li>Turners Subscription <img className={styles.downArrow} src='/downArrow.png' /></li>
        
        <li style={{marginLeft: '250px'}}>Auctions <img className={styles.downArrow} src='/downArrow.png' /></li>
        <li>Services & Info <img className={styles.downArrow} src='/downArrow.png' /></li>

      </ul>
        
      
    </div>
  )
}
export default Navbar