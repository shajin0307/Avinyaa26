import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import collegeVideo from '../../assets/college video.mp4';

const MissionVideoWrapper = () => {
    const videoRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: videoRef,
        offset: ['start start', 'end end'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ['0px', '40px']);

    return (
        <>
            {/* VIDEO SECTION */}
            <section
                ref={videoRef}
                className="relative h-[130vh] bg-white dark:bg-black"
            >
                <div className="sticky top-0 h-screen flex items-center justify-center">
                    <motion.div
                        style={{ scale, borderRadius }}
                        className="w-full h-full overflow-hidden shadow-2xl"
                    >
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={collegeVideo} type="video/mp4" />
                        </video>
                    </motion.div>
                </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="relative pt-8 pb-32 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Quote className="w-12 h-12 text-rose-500 mx-auto mb-4 opacity-80" />

                    <h2 className="text-4xl md:text-6xl font-black 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-gray-900 via-rose-800 to-gray-900 
            dark:from-white dark:via-rose-500 dark:to-white 
            mb-4 leading-tight">
                        "The best way to predict the future is to{' '}
                        <span className="text-rose-600">create it</span>."
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 uppercase">
                        — Abraham Lincoln
                    </p>
                </div>
            </section>
        </>
    );
};
export default MissionVideoWrapper;
