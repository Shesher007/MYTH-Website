import { Helmet } from "react-helmet-async"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeatureBento from "./components/FeatureBento"
import SystemSpec from "./components/SystemSpec"
import DownloadDock from "./components/DownloadDock"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
      <Helmet>
        <title>MYTH - Autonomous Sovereign Agent | Industrial Security Core</title>
        <meta name="description" content="The professional-grade autonomous AI agent for offensive and defensive security. 672+ tactical tools orchestrated locally. 100% Offline. Zero Cloud Dependencies." />
        <meta name="keywords" content="cybersecurity, autonomous agent, offensive security, red team, soc, ai, local llm, myth, titan" />
        <meta property="og:title" content="MYTH - Autonomous Sovereign Agent" />
        <meta property="og:description" content="Deploy the Titan Edition. 672+ tactical tools orchestrated by a sovereign local AI. No cloud. No leaks." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#7c3aed" />
      </Helmet>
      <Navbar />
      <Hero />
      <FeatureBento />
      <SystemSpec />
      <DownloadDock />

      <footer className="py-24 border-t border-white/5 text-center">
        <div className="container px-6">
          <div className="text-2xl font-bold tracking-tighter mb-8 flex items-center justify-center gap-2">
            <span className="text-cyan-400">⌬</span>
            <span>MYTH</span>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12 text-lg">
            Professional Grade Tactical Sovereignty. Strike first, Strike hard, Remain sovereign. 🛡️🛰️🦾
          </p>
          <div className="text-xs text-white/20 tracking-[0.2em] font-mono">
            &copy; 2026 MYTH TOOLS GLOBAL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
