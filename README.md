# MYTH

**High-Performance Offensive Intelligence Engine**

[![Release](https://img.shields.io/github/v/release/?style=flat-square&color=#7c3aed)](https://github.com/shesher010/MYTH/releases/download/v1.1.6)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](https://github.com/shesher010/MYTH/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1234567890?label=discord&style=flat-square&color=5865F2)](https://discord.gg/myth-tools)

Industrial-Grade Sovereign Security Agent

## 🚀 Features

- **Autonomous Agent**: Operates independently to execute complex security tasks.
- **Titan Terminal**: Interactive command-line interface for direct control.
- **Live Telemetry**: Real-time dashboard for monitoring system status and operations.
- **Multi-Platform**: Native binaries for Windows, Linux, and macOS.
- **Secure**: Industrial-grade encryption and operational security built-in.

---

## 📥 Installation

### Windows
Download the latest installer or portable executable:
- [**Installer (.msi)**](https://github.com/shesher010/MYTH/releases/download/v1.1.6/MYTH_1.1.6_x64_en-US.msi)
- [**Portable (.exe)**](https://github.com/shesher010/MYTH/releases/download/v1.1.6/MYTH_1.1.6_x64-setup.exe)

> **Note**: Windows SmartScreen might flag the installer as unrecognized. Click "More info" > "Run anyway" to proceed.

### Linux
We support major Linux distributions.

**Debian / Ubuntu / Kali**
```bash
wget https://github.com/shesher010/MYTH/releases/download/v1.1.6/myth_1.1.6_amd64.deb
sudo dpkg -i myth_1.1.6_amd64.deb
```

**Fedora / RHEL / CentOS**
```bash
wget https://github.com/shesher010/MYTH/releases/download/v1.1.6/myth-1.1.6-1.x86_64.rpm
sudo rpm -i myth-1.1.6-1.x86_64.rpm
```

**Universal AppImage**
```bash
wget https://github.com/shesher010/MYTH/releases/download/v1.1.6/MYTH_1.1.6_amd64.AppImage
chmod +x MYTH_1.1.6_amd64.AppImage
./MYTH_1.1.6_amd64.AppImage
```

### macOS
Download the universal disk image:
- [**Universal (.dmg)**](https://github.com/shesher010/MYTH/releases/download/v1.1.6/MYTH_1.1.6_universal.dmg)

Open the `.dmg` file and drag **MYTH** to your Applications folder.

---

## ⚡ Quick Start

After installation, run **MYTH** from your application menu or terminal:

```bash
myth
```

To access the Titan Terminal, press `Ctrl+T` (or `Cmd+T` on macOS) within the application.

## 🛠️ Troubleshooting

### Common Issues

**Permission Denied (Linux/macOS)**
Ensure the binary is executable:
```bash
chmod +x /path/to/myth
```

**Port Conflict**
The application uses port `8890` by default. Ensure this port is free or configure a different port in `settings.json`.

**Missing Dependencies**
On some minimal Linux installs, you might need:
```bash
sudo apt install libwebkit2gtk-4.0-37 libappindicator3-1
```

## 📚 Documentation

For full documentation, tutorials, and API reference, visit:
[**https://docs.myth-tools.com**](https://docs.myth-tools.com)

## 🛡️ License

Protected under **MIT**. Pro-Elite.
Copyright © 2024-2026 MYTH.
