'use client'
import { useState } from 'react';

import ContenidoMisTramites from '@/components/componentesMisTramites/ContentMistramites';
import ContenidoBandejaEntrada from '@/components/componentesMisTramites/contentBandejaEntrada';
import { Footer } from '@/components/componentsPageMain/HomePage';
import NavbarTramite from '@/components/componentsPageMain/navbarTramite'
import PaginaTramites from '@/components/componentesMisTramites/paginaTramites';
import { ListaMisTramites, Line, Header } from '@/components/componentesMisTramites/ContentMistramites';

const MisTramites = ()=>{
    const [opcion, setOpcion] = useState(1);
    //funcion para cambiar de componente
    function CambiarOpcion(opc){
        setOpcion(opc);
    }

    return(
        <div className='flex flex-col h-screen' >
        
        {/**  {
            opcion == 0 ? (<ContenidoMisTramites />): opcion == 1 ?(<ContenidoBandejaEntrada />):( <PaginaTramites/>)
        }*/}
       
        <div className="flex-1 flex flex-col items-center space-y-10 w-[90%] mx-auto " >
        <Header titulo = "Mis trámites" />
        <Line/>
        <ListaMisTramites/>
        </div>
        
        </div>
    )
}

export default MisTramites;