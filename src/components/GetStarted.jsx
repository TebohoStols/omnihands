import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <a href="/home#clients" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt="arrowup" className='w-[23px] h-[23px] object-contain'/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
</a>
)

export default GetStarted
