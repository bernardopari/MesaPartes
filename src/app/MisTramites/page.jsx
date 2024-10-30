'use client'
import { useState } from 'react';
import ContenidoMisTramites from '@/components/componentesMisTramites/ContentMistramites';
import ContenidoBandejaEntrada from '@/components/componentesMisTramites/contentBandejaEntrada';
import { Footer } from '@/components/componentsPageMain/HomePage';
import NavbarTramite from '@/components/componentsPageMain/navbarTramite'
import PaginaTramites from '@/components/componentesMisTramites/paginaTramites';


const MisTramites = ()=>{
    const [opcion, setOpcion] = useState(1);
    function CambiarOpcion(opc){
        setOpcion(opc);
    }

    return(
        <div className='flex flex-col h-screen' >
        <NavbarTramite  cambiar={CambiarOpcion}/>
        {
            opcion == 0 ? (<ContenidoMisTramites />): opcion == 1 ?(<ContenidoBandejaEntrada />):( <PaginaTramites/>)
        }
        
        <Footer/>
        </div>
    )
}

export default MisTramites;