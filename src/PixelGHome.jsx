import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PixelGHome() {
  const [language, setLanguage] = useState("de");
  const [walletConnected, setWalletConnected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  const content = {
    de: {
      title: "Willkommen bei PixelG",
      subtitle: "Dein Gaming-Token auf der Binance Smart Chain (BNB)",
      button1: "Jetzt starten",
      button2: "Mehr erfahren",
      connectWallet: "Mit MetaMask verbinden",
      customButton: "Mein PixelG Wallet",
      services: "Unsere Services",
      about: "Über PixelG",
      contact: "Kontakt",
      team: "Unser Team",
      blog: "Neuigkeiten & Blog",
      popupConnected: "Wallet erfolgreich verbunden ✅",
      popupNotConnected: "Bitte verbinden Sie Ihre Wallet mit MetaMask ❌",
      close: "Schließen",
    },
    en: {
      title: "Welcome to PixelG",
      subtitle: "Your gaming token on Binance Smart Chain (BNB)",
      button1: "Get Started",
      button2: "Learn More",
      connectWallet: "Connect MetaMask",
      customButton: "My PixelG Wallet",
      services: "Our Services",
      about: "About PixelG",
      contact: "Contact",
      team: "Our Team",
      blog: "News & Blog",
      popupConnected: "Wallet connected successfully ✅",
      popupNotConnected: "Please connect your wallet with MetaMask ❌",
      close: "Close",
    },
  };

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletConnected(true);
        alert("Wallet verbunden!");
      } catch (err) {
        setWalletConnected(false);
        alert("Fehler beim Verbinden der Wallet.");
      }
    } else {
      setWalletConnected(false);
      alert("MetaMask nicht gefunden. Bitte installieren.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-white flex flex-col bg-no-repeat md:bg-fixed" style={{ backgroundImage: 'url(/06.gif)' }}>
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="PixelG Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold">PixelG</h1>
        </div>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">{content[language].services}</a>
          <a href="#about" className="hover:underline">{content[language].about}</a>
          <a href="#team" className="hover:underline">{content[language].team}</a>
          <a href="#blog" className="hover:underline">{content[language].blog}</a>
          <a href="#contact" className="hover:underline">{content[language].contact}</a>
          <button onClick={toggleLanguage} className="ml-4 text-sm text-blue-600">
            {language === "de" ? "EN" : "DE"}
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="flex flex-col items-center justify-center text-center px-4 py-20">
          <h2 className="text-4xl font-bold mb-4">{content[language].title}</h2>
          <p className="text-lg mb-6 max-w-xl">{content[language].subtitle}</p>
          <div className="space-x-4 mb-4">
            <Button>{content[language].button1}</Button>
            <Button variant="outline">{content[language].button2}</Button>
          </div>
          <div className="space-x-4">
            <Button onClick={connectMetaMask}>{content[language].connectWallet}</Button>
            <Button variant="secondary" onClick={() => setShowPopup(true)}>{content[language].customButton}</Button>
          </div>
        </section>

        <section id="whitepaper" className="px-6 py-16 bg-gray-100 text-center">
          <h3 className="text-3xl font-semibold mb-4">Whitepaper</h3>
          <p className="mb-4">Lies das vollständige PixelG-Whitepaper für mehr Informationen zu unserem Token, der Vision und der Roadmap.</p>
          <a href="/PixelG_Whitepaper_English.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700">
              Whitepaper öffnen (PDF)
            </button>
          </a>
        </section>

        <div className="mt-4 space-x-4 text-center">
          <a href="https://x.com/home" target="_blank" className="text-blue-600 hover:underline">Twitter/X</a>
          <a href="https://bscscan.com/address/0x7C7fdB3013C0786f5C84d51dC05b999AF1759Cd7" target="_blank" className="text-blue-600 hover:underline">Smart Contract</a>
        </div>
      </main>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-xl font-semibold mb-4">PixelG Wallet</h2>
            <p className="mb-6">
              {walletConnected ? content[language].popupConnected : content[language].popupNotConnected}
            </p>
            <Button onClick={() => setShowPopup(false)}>{content[language].close}</Button>
          </div>
        </div>
      )}
    </div>
  );
}