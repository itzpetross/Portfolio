export function Hero({children}:{children:React.ReactNode}){
    return(
        <div className="relative bg-gradient-to-r from-[#5e72e4] to-[#11cdef] py-[150px] lg:pt-[160px]">
            <div className="container mx-auto px-[10px]">
                {children}
            </div>
        </div>
    );
}