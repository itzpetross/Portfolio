export default function Footer(){
    const year = new Date().getFullYear();
    
    return(
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mb-[2px]"><path fill="#121212" fillOpacity="1" d="M0,224L60,240C120,256,240,288,360,298.7C480,309,600,299,720,288C840,277,960,267,1080,266.7C1200,267,1320,277,1380,282.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            
            <footer className="bg-[#121212] py-9">
                <p className="text-center text-white text-[18px] mb-[5px]">&copy; Petr <span className="text-theme">Valeška</span> - {year}</p>
                <p className="text-center text-white">Všechna práva vyhrazena.</p>
            </footer>
        </>
    );
}