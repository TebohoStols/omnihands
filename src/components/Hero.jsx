import styles from '../style'
import { discount, robot, heroimg, imageforhero} from '../assets'
import GetStarted from './GetStarted'

const Hero = () =>(
    <section id='home' className= {`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className= {`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src= {discount} alt="discount" className='w-[32px] h-[32px]'/>
          
          {/**Text on top of the h1 */}
          <p className= {`${styles.paragraph} ml-2`} >
            <span className='text-white'> 100% 
            </span> Streamline your {" "}
            <span className='text-white'>
            office
            </span> and amplify your {" "}
            <span className='text-white'>
            success!
            </span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full pt-0'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]
                        text-white ss:leading-[100px] leading-[75px]'>
              Seamless <br className='sm:block hidden' /> {" "}
              <span className='text-gradient'>
              Workplace
              </span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px]
                      text-white ss:leading-[100px] leading-[75px] w-full'> Operations. 
        </h1>
        <p className= {`${styles.paragraph} max-w-[470px] mt-5`}>
        OmniHands simplifies office support, ensuring businesses 
        focus on growth while we handle everyday essentials with trust, innovation, and efficiency.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src= {imageforhero} alt="hero section image" 
        className='w-[100%] h-[100%] overflow-x-auto relative z-[5]'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>

      </div>

      <div className= {`ss:hidden ${styles.flexCenter}`} >
        <GetStarted/>
      </div>
    </section>
)

export default Hero