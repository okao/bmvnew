import Image from "next/image"


const AdBanner = () => {
    return (
        <div className="container mx-auto py-4 px-4 md:px-6">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-500 p-6 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-xl">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Best Deal</h1>
                        <p className="text-base lg:text-xl text-gray-800 mt-2">
                            Save upto <span className="font-bold">50%</span>
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        {/* <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" /> */}
                    </div>
                </div>
                {/* <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-500 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Game Console</h1>
                        <p className="text-base lg:text-xl text-gray-800">
                            Save Upto <span className="font-bold">30%</span>
                        </p>
                    </div>
                    <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <Image
                        src="https://image.tmdb.org/t/p/original/ta17TltHGdZ5PZz6oUD3N5BRurb.jpg"
            width={100}
            height={60}
            layout="responsive"
            objectFit="cover"
            quality={90}
            alt="The Ledge poster"
                        
                        />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default AdBanner;
