import { useState, useEffect } from "react"
import { ArrowRight, Download, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import BackgroundGrid from "./ui/BackgroundGrid"
import GlitchText from "./ui/GlitchText"
import TextDecode from "./ui/TextDecode"
import ParticleConstellation from "./ui/ParticleConstellation"
import MagneticButton from "./ui/MagneticButton"

export default function Hero() {
    const [osName, setOsName] = useState("Windows")

    useEffect(() => {
        const platform = window.navigator.platform.toLowerCase()
        if (platform.includes("mac")) setOsName("macOS")
        else if (platform.includes("linux")) setOsName("Linux")
        else setOsName("Windows")
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <BackgroundGrid />
            <ParticleConstellation />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-accent/30"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="text-sm font-medium text-accent tracking-widest uppercase">
                        <TextDecode text="Titan Edition — v1.1.3 Online" />
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    <GlitchText text="Autonomous" className="text-white" /> <br />
                    <span className="text-gradient">Sovereign Agent</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    The professional-grade tactical core. Powered by an <span className="text-white font-medium">autonomous reasoning engine</span> controlling 672+ industrial tools.
                    <br />
                    <span className="text-accent/80 font-mono text-sm mt-2 block">100% Local. 0% Cloud. Pure Persistence.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <MagneticButton strength={40}>
                        <a
                            href="#downloads"
                            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_var(--primary)]"
                        >
                            <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                            <span>Download for {osName}</span>
                            <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]" />
                        </a>
                    </MagneticButton>

                    <MagneticButton strength={40}>
                        <a
                            href="#titan-viz"
                            className="group inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 px-8 font-medium shadow-sm transition-colors hover:bg-accent/10 hover:text-accent hover:border-accent/50 backdrop-blur-sm"
                        >
                            <Terminal className="mr-2 h-5 w-5" />
                            <span>Connect Local Agent</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    )
}
