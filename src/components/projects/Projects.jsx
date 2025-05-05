import React from 'react';
import { ExternalLink } from 'lucide-react'; // Importing link icon
import image_1 from '../../assets/work-1.png';
import image_2 from '../../assets/work-2.png';
import image_3 from '../../assets/work-3.png'

const Projects = () => {
    return (
        <section id='projects' className='mb-10'>
            <div class="mt-10 text-center mb-8 sm:mb-12" data-aos="fade-up">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-indigo-600 mb-4"><u>Projects</u></h2>
            </div>

            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-6'>


                {/* First Card with Hover Effect */}
                <a data-aos="flip-left" data-aos-duration="2300" className="block max-w-sm group relative overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center justify-center">
                    <img src={image_1} alt="Project 1" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />

                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 p-4">
                        <h3 className="text-white text-xl font-bold mb-2">Digit Internship</h3>
                        <p className="text-gray-300 mb-4">The webpage is designed for educational purposes and is fully responsive.</p>

                        <a href="https://resilient-blini-46d933.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-center justify-center">
                            View Project <ExternalLink size={20} />
                        </a>
                    </div>
                </a>



                {/* Second Card with Hover Effect */}
                <a data-aos="flip-left" data-aos-duration="2300" className="block max-w-sm group relative overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center justify-center">
                    <img src={image_2} alt="Project 2" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />

                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 p-4">
                        <h3 className="text-white text-xl font-bold mb-2">Zoblix Dashboard</h3>
                        <p className="text-gray-300 mb-4">The webpage is designed by the personal dashboard purpose
                        it has 100% responsiviness in this webpage.</p>

                        <a href="https://dainty-brioche-5ceec0.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-center justify-center">
                            View Project <ExternalLink size={20} />
                        </a>
                    </div>
                </a>



               {/* Third Card with Hover Effect */}
               <a data-aos="flip-left" data-aos-duration="2300" className="block max-w-sm group relative overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center justify-center">
                    <img src={image_3} alt="Project 3" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />

                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 p-4">
                        <h3 className="text-white text-xl font-bold mb-2">Try Book Ai Website</h3>
                        <p className="text-gray-300 mb-4">The webpage is designed for the Testing of my Skill in frontend purpose
                        it has 100% responsiviness in this web page.</p>

                        <a href="https://lucent-marigold-5edcde.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-center justify-center">
                            View Project <ExternalLink size={20} />
                        </a>
                    </div>
                </a>


            </div>
        </section>
    )
}

export default Projects