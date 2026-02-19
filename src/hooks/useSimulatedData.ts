import { useState, useEffect } from 'react'

export interface SystemData {
    cpu: number[]
    ram: number[]
    networkIn: number
    networkOut: number
    activeThreats: number
    scanProgress: number
    logs: string[]
}

const LOG_MESSAGES = [
    "Scanning port 443...",
    "Packet intercepted from 192.168.1.x",
    "Analyzing heurisitic patterns...",
    "Update check: Titan v1.1.3 is current",
    "Encryption keys rotated",
    "Sandbox integrity verified",
    "Neural engine optimizing...",
    "Threat index: Low",
    "Ping: 12ms",
    "Allocating ram for analysis...",
]

export function useSimulatedData() {
    const [data, setData] = useState<SystemData>({
        cpu: Array(20).fill(0),
        ram: Array(20).fill(0),
        networkIn: 0,
        networkOut: 0,
        activeThreats: 0,
        scanProgress: 0,
        logs: ["System initialized"]
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => {
                const newCpu = [...prev.cpu.slice(1), Math.floor(Math.random() * 40) + 10]
                const newRam = [...prev.ram.slice(1), Math.floor(Math.random() * 30) + 20]

                // Randomly add a log message
                const newLogs = [...prev.logs]
                if (Math.random() > 0.7) {
                    newLogs.push(LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)])
                    if (newLogs.length > 8) newLogs.shift()
                }

                return {
                    cpu: newCpu,
                    ram: newRam,
                    networkIn: Math.floor(Math.random() * 500) + 100, // KB/s
                    networkOut: Math.floor(Math.random() * 200) + 50, // KB/s
                    activeThreats: Math.floor(Math.random() * 3),
                    scanProgress: (prev.scanProgress + 1) % 100,
                    logs: newLogs
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return data
}
