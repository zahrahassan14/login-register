
const App = () => {
    return (
        <>
            {/* Header */}
            <header className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/beautiful-ancient-mountains-sunset-evening-sunlight-fog_158863-5182.jpg?w=900')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">MATYN</h1>
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-yellow-500">Equipment</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Tips</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Articles</a></li>
                    </ul>
                    <button className="text-sm border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-navy-700 transition">
                        Sign Up
                    </button>
                </nav>
                <div className="container mx-auto flex flex-col justify-center h-full px-4">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="mb-8 bg-yellow-500 text-white px-4 py-2 inline-block rounded-lg">
                            <span className="text-sm uppercase">Hiking Starter Guide</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                            Be Prepared For The <br /> Mountains And Beyond!
                        </h2>
                        <p className="text-lg text-gray-300">
                            Discover breathtaking vistas and unlock your adventurous spirit with our curated hiking tips.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-16 bg-navy">
                <div className="container mx-auto px-4 space-y-16">
                    {/* Article 1 */}
                    <div className="relative-container flex flex-col lg:flex-row lg:space-x-8 items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
                            <img src="https://i.pinimg.com/564x/52/d4/af/52d4affaf980954da669e9a2ccb77f76.jpg"
                                alt="Hiking level" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2">
                            <div className="absolute font-size-10rem font-weight-800 text-white opacity-10 top-[-15%] left-0 transform -translate-y-1/2">01</div>
                            <h3 className="text-yellow-500 text-lg font-semibold mb-2">Step by Step Guide</h3>
                            <h2 className="text-2xl font-bold mb-4">What level of hiker are you?</h2>
                            <p className="text-gray-300">
                                Determining your hiking experience level is important for planning the right trails and ensuring a safe adventure.
                            </p>
                            <a href="#" className="text-yellow-500 mt-4 inline-block">Learn more →</a>
                        </div>
                    </div>

                    {/* Article 2 */}
                    <div className="relative-container flex flex-col lg:flex-row-reverse lg:space-x-8 items-center">
                        <div className="absolute font-size-10rem font-weight-800 text-white opacity-10 top-35% left-0 transform -translate-y-1/2">02</div>
                        <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
                            <img src="https://i.pinimg.com/474x/ab/e4/47/abe447aa3711493b99944e792c69edca.jpg"
                                alt="Hiking gear" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2">
                            <h3 className="text-yellow-500 text-lg font-semibold mb-2">Gear Essentials</h3>
                            <h2 className="text-2xl font-bold mb-4">Picking the right Hiking Gear!</h2>
                            <p className="text-gray-300">
                                Equip yourself with the best gear to ensure comfort and safety during your hiking adventures. Start your journey with us today and enjoy.
                            </p>
                            <a href="#" className="text-yellow-500 mt-4 inline-block">Learn more →</a>
                        </div>
                    </div>

                    {/* Article 3 */}
                    <div className="relative-container flex flex-col lg:flex-row lg:space-x-8 items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
                            <img src="https://i.pinimg.com/564x/91/b6/be/91b6be753cdfe36bdb41fe9700a00675.jpg"
                                alt="Map and Timing" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2">
                            <div className="absolute font-size-10rem font-weight-800 text-white opacity-10 top-35% left-0 transform -translate-y-1/2">03</div>
                            <h3 className="text-yellow-500 text-lg font-semibold mb-2">How to Plan Your Hike</h3>
                            <h2 className="text-2xl font-bold mb-4">Understand Your Map & Timing</h2>
                            <p className="text-gray-300">
                                Navigating trails with the right map reading skills ensures you stay on track and safe during your hikes.
                            </p>
                            <a href="#" className="text-yellow-500 mt-4 inline-block">Learn more →</a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-navy py-8">
                <div className="container mx-auto px-4 text-gray-400">
                    <div className="flex justify-between items-center">
                        <span className="text-sm">&copy; 2024 MATYN. All rights reserved.</span>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default App;
