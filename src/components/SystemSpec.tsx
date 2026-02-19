import { Cpu, Server, Shield } from "lucide-react"

const specs = [
    {
        category: "System Resources",
        icon: Cpu,
        items: [
            { label: "RAM (Minimum)", value: "4GB" },
            { label: "RAM (Recommended)", value: "8GB+" },
            { label: "Processor", value: "x64 / ARM64" },
        ],
    },
    {
        category: "Security Core",
        icon: Shield,
        items: [
            { label: "Encryption", value: "AES-256 Local" },
            { label: "Runtime Integrity", value: "SHA-256 Hash" },
            { label: "Code Signing", value: "EV Certificate" },
        ],
    },
    {
        category: "Lifecycle",
        icon: Server,
        items: [
            { label: "Updates", value: "Silent / Delta" },
            { label: "Crash Recovery", value: "Auto-Snapshot" },
            { label: "Offline Mode", value: "Full Support" },
        ],
    },
]

export default function SystemSpec() {
    return (
        <section id="titan-viz" className="container px-6 py-24 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {specs.map((spec) => (
                    <div key={spec.category} className="space-y-6">
                        <h3 className="flex items-center gap-3 text-xl font-semibold">
                            <spec.icon className="text-primary h-5 w-5" />
                            {spec.category}
                        </h3>
                        <div className="space-y-4">
                            {spec.items.map((item) => (
                                <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-muted-foreground">{item.label}</span>
                                    <span className="font-mono text-sm bg-white/5 px-2 py-1 rounded text-accent">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10 flex gap-4">
                <div className="shrink-0 text-primary">
                    <Shield className="h-6 w-6" />
                </div>
                <div>
                    <h4 className="font-medium mb-1">Hardware-Bound Licensing</h4>
                    <p className="text-sm text-muted-foreground">
                        MYTH employs a strict hardware-bound licensing model. Your activation key is tied to your device's
                        unique hardware fingerprint. All local data is encrypted with keys derived from your hardware signature.
                    </p>
                </div>
            </div>
        </section>
    )
}
