
import { Carousel } from "react-responsive-carousel"
import * as AiIcons from 'react-icons/ai';


const Slider = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false}
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                    <div className="absolute top-1/2 right-12 cursor-pointer">
                        <div className="rounded-full p-6 bg-yellow-100 w-6 h-6 relative inline-block opacity-50" onClick={clickHandler}>
                            <AiIcons.AiOutlineArrowRight className="w-6 h-6 absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                )}
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                    <div className="absolute top-1/2 left-12 cursor-pointer z-10">
                        <div className="rounded-full p-6 bg-yellow-100 w-6 h-6 relative inline-block opacity-50" onClick={clickHandler}>
                            <AiIcons.AiOutlineArrowLeft className="w-6 h-6 absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                )}
        >
            <div className="h-screen">
                <img src="https://th.bing.com/th/id/AMMS_cd052778ac6e170a4135099a17db6acd?pid=ImgDet&rs=1"/>
                <div className="opacity-70 rounded-md bg-black w-1/3 h-1/4 mt-10 absolute top-1/3 left-1/3 bottom-1/3 text-white content-center">
                    <div className="relative m-auto -top-2 bg-gray-800 w-24 h-6 rounded shadow-xl">
                        <h5 className="text-xs p-1 tracking-wider">PEINTURE</h5>
                    </div>
                    <h1 className="text-3xl px-6">Découvrez les oeuvres des artistes les plus en vue aujourd'hui, dans plus de 8O pays.</h1>
                    <button className="relative -bottom-10 px-8 py-2 bg-yellow-200 rounded text-lg text-black">Voir</button>
                </div>
            </div>
            <div className="h-screen">
                <img src="https://th.bing.com/th/id/AMMS_cd052778ac6e170a4135099a17db6acd?pid=ImgDet&rs=1"/>
                <div className="opacity-70 rounded-md bg-black w-1/3 h-90 mt-10 absolute top-1/3 left-1/3 bottom-1/3 text-white content-center">
                    <div className="relative m-auto -top-2 bg-gray-800 w-24 h-6 rounded shadow-xl">
                        <h5 className="text-xs p-1 tracking-wider">EVÈNEMENTS</h5>
                    </div>
                    <h1 className="text-3xl px-6">Parcourez notre section live et prenez part à nos ventes aux enchères, ventes flash et ventes exclusives</h1>
                    <button className="relative -bottom-6 px-8 py-2 bg-yellow-200 rounded text-lg text-black">Explorer</button>
                </div>
            </div>
            <div className="h-screen">
                <img src="https://th.bing.com/th/id/AMMS_cd052778ac6e170a4135099a17db6acd?pid=ImgDet&rs=1"/>
                <div className="opacity-90 rounded-md bg-black w-1/3 h-1/4 mt-10 absolute top-1/3 left-1/3 bottom-1/3 text-white content-center">
                    <div className="relative m-auto -top-2 bg-gray-800 w-24 h-6 rounded shadow-xl">
                        <h5 className="text-xs p-1 tracking-wider">SCULPTURE</h5>
                    </div>
                    <h1 className="text-3xl px-6 pt-2">Donnez du volume à votre intérieur avec notre sélection de sculptures</h1>
                    <button className="relative -bottom-6 px-8 py-2 bg-yellow-200 rounded text-lg text-black">Découvrire</button>
                </div>
            </div>
        </Carousel>
    );
}

export default Slider;
