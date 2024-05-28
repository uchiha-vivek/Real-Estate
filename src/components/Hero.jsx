
import estate from '../assets/estate.mp4'


function Hero (){

    return(
        <>
        <div className="flex-col flex  mt-6 items-center lg:mt-20 " >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide " >
            Designing Tomorrow Together
            </h1>
            <p className="mt-10 text-lg text-center max-w-4xl text-neutral-500">
            “The house you looked at today and wanted to think about until tomorrow may be the same house someone looked at yesterday and will buy today.”
-- Koki Adasi, Koki & Associates, Inc.
            </p>
            <div className="my-8 justify-center flex rounded-md " >
                <a className="rounded-md border px-4 py-4 bg-orange-400 ">
                        Explore More
                </a>
            </div>
            <div className="justify-center mt-10 flex " >
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-500 shadow-orange-400 mx-2 my-4   " >
                 <source src={estate} type='video/mp4'/>
                </video>

            </div>

        </div>
        </>
    )
}
export default Hero