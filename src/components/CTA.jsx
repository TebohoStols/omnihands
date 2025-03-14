import styles from '../style'
import Button from './Button'

const CTA = () =>  (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470] mt-5`}>
      Experience the ease of a well-managed office with OmniHands. Let us handle the essentials while you focus on what matters most. 
      Get in touch today and see the difference for yourself!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <a
      href="/contact#clients"
      style={{
        display: 'inline-block',
        textDecoration: 'none',
        color: 'inherit',
        }}
      >
        <Button id='' />
    </a>
    </div>
  </section>
)

export default CTA
