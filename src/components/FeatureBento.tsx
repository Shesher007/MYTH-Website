import { Box, Lock, ShieldCheck, Swords, Zap } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        title: "672+ Tactical Tools Orchestrated",
        description: "MYTH doesn't just run tools. It reasons about them. The autonomous engine chains findings from Nmap, Nuclei, and Metasploit into single, coherent mission reports.",
        icon: Swords,
        className: "md:col-span-2",
    },
    {
        title: "Zero-Knowledge Architecture",
        description: "Your intel is your business. All operations happen in a hardened, RAM-only local sandbox.",
        icon: ShieldCheck,
        className: "",
    },
    {
        title: "Ultra-Sovereign Proxying",
        description: "Built-in traffic rotation across 50,000+ nodes to ensure your agent remains ghost-like.",
        icon: Zap,
        className: "",
    },
    {
        title: "Sidecar Packaging",
        description: "The entire Python environment is bundled into a native, standalone binary. Zero global dependencies, 100% isolation.",
        icon: Box,
        className: "md:col-span-2",
    },
    {
        title: "Hardware Encryption",
        description: "Findings are sealed with AES-256-GCM tied directly to your CPU's hardware fingerprint.",
        icon: Lock,
        className: "",
    },
]

export default function FeatureBento() {
    return (
        <section id="capabilities" className="py-24 container px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <span className="text-accent font-medium tracking-wider uppercase text-sm">Architecture</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">
                    Engineered for <span className="text-primary">Titan</span> Scale
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`glass-panel p-8 rounded-2xl hover:border-primary/30 transition-colors group ${feature.className}`}
                    >
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                            <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
