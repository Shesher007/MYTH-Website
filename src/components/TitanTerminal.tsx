import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Terminal as TerminalIcon, Minimize2 } from "lucide-react"

interface TerminalProps {
    isOpen: boolean
    onClose: () => void
}

export default function TitanTerminal({ isOpen, onClose }: TerminalProps) {
    const [input, setInput] = useState("")
    const [history, setHistory] = useState<string[]>([
        "TitanOS v1.1.3 Shell",
        "Type 'help' for available commands.",
        "--------------------------------"
    ])
    const bottomRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isOpen && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" })
            inputRef.current?.focus()
        }
    }, [history, isOpen])

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase()
        let response = ""

        switch (trimmed) {
            case "help":
                response = "Available commands: help, status, scan, download, connect, clear, exit"
                break
            case "status":
                response = "System Operational. All systems nominal. CPU: 12% | RAM: 4GB | Network: Secure"
                break
            case "scan":
                response = "Initiating heuristic scan... [||||||||||] 100% - No threats detected."
                break
            case "download":
                window.location.href = "#downloads"
                response = "Navigating to download sector..."
                break
            case "connect":
                window.location.href = "#titan-viz" // Redirect to dashboard anchor
                response = "Establishing connection to local dashboard..."
                break
            case "clear":
                setHistory([])
                return
            case "exit":
                onClose()
                return
            case "":
                return
            default:
                response = `Command not found: ${trimmed}`
        }

        setHistory(prev => [...prev, `> ${cmd}`, response])
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCommand(input)
            setInput("")
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                >
                    <div className="w-full max-w-3xl bg-black/90 border border-primary/30 rounded-lg shadow-[0_0_50px_rgba(124,58,237,0.2)] overflow-hidden flex flex-col h-[60vh] font-mono text-sm">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                            <div className="flex items-center gap-2 text-primary">
                                <TerminalIcon className="w-4 h-4" />
                                <span>Titan Terminal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={onClose} className="hover:text-white text-muted-foreground transition-colors">
                                    <Minimize2 className="w-4 h-4" />
                                </button>
                                <button onClick={onClose} className="hover:text-red-500 text-muted-foreground transition-colors">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Output */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-green-400/90 custom-scrollbar">
                            {history.map((line, i) => (
                                <div key={i} className="break-words">{line}</div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-2 text-green-400">
                            <span>$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder-green-800"
                                placeholder="Enter command..."
                                autoFocus
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
