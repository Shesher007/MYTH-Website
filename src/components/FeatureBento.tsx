import { Box, Lock, ShieldCheck, Swords, Zap, Activity } from "lucide-react"
import TiltCard from "./ui/TiltCard"

const features = [
    {
        title: "672+ Tactical Tools Orchestrated",
        description: "MYTH doesn't just run tools. It reasons about them. The autonomous engine chains findings from Nmap, Nuclei, and Metasploit into single, coherent mission reports.",
        icon: Swords,
        className: "md:col-span-2",
        bg: "bg-gradient-to-br from-primary/10 to-transparent"
    },
    {
        title: "Zero-Knowledge Architecture",
        description: "Your intel is your business. All operations happen in a hardened, RAM-only local sandbox.",
        icon: ShieldCheck,
        className: "",
        bg: "bg-background/40"
    },
    {
        title: "Ultra-Sovereign Proxying",
        description: "Built-in traffic rotation across 50,000+ nodes to ensure your agent remains ghost-like.",
        icon: Zap,
        className: "",
        bg: "bg-background/40"
    },
    {
        title: "Sidecar Packaging",
        description: "The entire Python environment is bundled into a native, standalone binary. Zero global dependencies, 100% isolation.",
        icon: Box,
        className: "md:col-span-2",
        bg: "bg-background/40"
    },
    {
        title: "Hardware Encryption",
        description: "Findings are sealed with AES-256-GCM tied directly to your CPU's hardware fingerprint.",
        icon: Lock,
        className: "",
        bg: "bg-background/40"
    },
    {
        title: "Live Mission Telemetry",
        description: "Watch the agent think. Real-time visualization of decision trees and tool execution paths.",
        icon: Activity,
        className: "",
        bg: "bg-background/40"
    }
]

export default function FeatureBento() {
    return (
        <section id="capabilities" className="py-24 container px-6 relative z-10">
            <div className="mb-16">
                <span className="text-accent font-medium tracking-wider uppercase text-sm">Architecture</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">
                    Engineered for <span className="text-gradient">Titan Scale</span>
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <TiltCard
                        key={i}
                        className={`${feature.className} glass-panel p-8 rounded-xl border border-white/5 hover:border-accent/40 group overflow-hidden`}
                    >
                        <div className={`absolute inset-0 ${feature.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                                <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed flex-grow">
                                {feature.description}
                            </p>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </section>
    )
}
