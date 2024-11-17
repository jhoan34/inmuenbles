import { AnimatePresence, motion } from "framer-motion";

export function TransitionPage() {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div 
                    className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-secondary"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                >
                </motion.div>
                <motion.div 
                    className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-secondary/70 opacity-5 "
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
                >
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

const transitionVariantsPage = {
    initial: { // Cambié "initial" a "hidden" para que coincida con "initial" en el motion div
        x: "100%",
        width: "100%", // Cambié "with" a "width"
    },
    animate: {
        x: "0%",
        width: "0%", // Cambié "with" a "width"
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"], // Cambié "with" a "width"
    }
};
