 import Navbar from '@/components/componentsPageMain/navbar'
 import ContenidoPrincipal from '@/components/componentsPageMain/contentMain'
 const Dashboard = ()=>{
     

    return(
        <div  className="w-full flex flex-col h-screen" >
        <Navbar />
        <ContenidoPrincipal/>
        
        </div>
    );
}

export default Dashboard;