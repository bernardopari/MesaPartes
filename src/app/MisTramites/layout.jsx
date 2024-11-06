import NavbarTramite from '@/components/componentsPageMain/navbarTramite'
import { Footer } from '@/components/componentsPageMain/HomePage';

const LayoutTramite = ({children})=>{
   return(
    <div className='flex flex-col h-screen' >
    <NavbarTramite/>
    {children}
    <Footer/>
    </div>

   );
}

export default LayoutTramite;