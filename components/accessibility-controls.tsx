"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Volume2,
  Type,
  Sun,
  Maximize,
  Minimize,
  ChevronDown,
  MousePointer,
  Palette,
  Sparkles,
  Pause,
  Play,
  Keyboard,
  Eye,
  Headphones,
  Languages,
  ZoomIn,
  Hand,
  FileText,
  Braces,
  Underline,
  AlignLeft,
  Scan,
  Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [contrast, setContrast] = useState(false)
  const [textToSpeech, setTextToSpeech] = useState(false)
  const [cursorSize, setCursorSize] = useState(16)
  const [animations, setAnimations] = useState(true)
  const [dyslexicFont, setDyslexicFont] = useState(false)
  const [colorBlindMode, setColorBlindMode] = useState("none")
  const [keyboardNavigation, setKeyboardNavigation] = useState(false)
  const [language, setLanguage] = useState("uz")
  const [lineHeight, setLineHeight] = useState(1.5)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [wordSpacing, setWordSpacing] = useState(0)
  const [focusHighlight, setFocusHighlight] = useState(false)
  const [signLanguage, setSignLanguage] = useState(false)
  const [simplifiedInterface, setSimplifiedInterface] = useState(false)
  const [textAlign, setTextAlign] = useState("left")
  const [imageDescriptions, setImageDescriptions] = useState(false)
  const [readingGuide, setReadingGuide] = useState(false)
  const [readingGuidePosition, setReadingGuidePosition] = useState({ x: 0, y: 0 })
  const [readingGuideVisible, setReadingGuideVisible] = useState(false)

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  // Apply high contrast mode
  useEffect(() => {
    if (contrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [contrast])

  // Apply cursor size
  useEffect(() => {
    if (cursorSize > 16) {
      document.body.classList.add("large-cursor")
      document.documentElement.style.setProperty("--cursor-size", `${cursorSize}px`)
    } else {
      document.body.classList.remove("large-cursor")
    }
  }, [cursorSize])

  // Apply animations toggle
  useEffect(() => {
    if (!animations) {
      document.documentElement.classList.add("reduce-motion")
    } else {
      document.documentElement.classList.remove("reduce-motion")
    }
  }, [animations])

  // Apply dyslexic font
  useEffect(() => {
    if (dyslexicFont) {
      document.documentElement.classList.add("dyslexic-font")
    } else {
      document.documentElement.classList.remove("dyslexic-font")
    }
  }, [dyslexicFont])

  // Apply color blind mode
  useEffect(() => {
    // Remove all color blind modes first
    document.documentElement.classList.remove("protanopia", "deuteranopia", "tritanopia", "achromatopsia")

    // Apply selected mode if not "none"
    if (colorBlindMode !== "none") {
      document.documentElement.classList.add(colorBlindMode)
    }
  }, [colorBlindMode])

  // Apply keyboard navigation
  useEffect(() => {
    if (keyboardNavigation) {
      document.documentElement.classList.add("keyboard-navigation")
    } else {
      document.documentElement.classList.remove("keyboard-navigation")
    }
  }, [keyboardNavigation])

  // Apply line height
  useEffect(() => {
    document.documentElement.style.setProperty("--line-height", lineHeight.toString())
    if (lineHeight !== 1.5) {
      document.documentElement.classList.add("custom-line-height")
    } else {
      document.documentElement.classList.remove("custom-line-height")
    }
  }, [lineHeight])

  // Apply letter spacing
  useEffect(() => {
    document.documentElement.style.setProperty("--letter-spacing", `${letterSpacing}px`)
    if (letterSpacing !== 0) {
      document.documentElement.classList.add("custom-letter-spacing")
    } else {
      document.documentElement.classList.remove("custom-letter-spacing")
    }
  }, [letterSpacing])

  // Apply word spacing
  useEffect(() => {
    document.documentElement.style.setProperty("--word-spacing", `${wordSpacing}px`)
    if (wordSpacing !== 0) {
      document.documentElement.classList.add("custom-word-spacing")
    } else {
      document.documentElement.classList.remove("custom-word-spacing")
    }
  }, [wordSpacing])

  // Apply focus highlight
  useEffect(() => {
    if (focusHighlight) {
      document.documentElement.classList.add("focus-highlight")
    } else {
      document.documentElement.classList.remove("focus-highlight")
    }
  }, [focusHighlight])

  // Apply sign language
  useEffect(() => {
    if (signLanguage) {
      document.documentElement.classList.add("sign-language")
    } else {
      document.documentElement.classList.remove("sign-language")
    }
  }, [signLanguage])

  // Apply simplified interface
  useEffect(() => {
    if (simplifiedInterface) {
      document.documentElement.classList.add("simplified-interface")
    } else {
      document.documentElement.classList.remove("simplified-interface")
    }
  }, [simplifiedInterface])

  // Apply text align
  useEffect(() => {
    document.documentElement.style.setProperty("--text-align", textAlign)
    if (textAlign !== "left") {
      document.documentElement.classList.add("custom-text-align")
    } else {
      document.documentElement.classList.remove("custom-text-align")
    }
  }, [textAlign])

  // Apply image descriptions
  useEffect(() => {
    if (imageDescriptions) {
      document.documentElement.classList.add("show-image-descriptions")
    } else {
      document.documentElement.classList.remove("show-image-descriptions")
    }
  }, [imageDescriptions])

  // Reading guide mouse tracking
  useEffect(() => {
    if (readingGuide) {
      const handleMouseMove = (e: MouseEvent) => {
        setReadingGuidePosition({ x: e.clientX, y: e.clientY })
        setReadingGuideVisible(true)
      }

      const handleMouseLeave = () => {
        setReadingGuideVisible(false)
      }

      window.addEventListener("mousemove", handleMouseMove)
      document.body.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        document.body.removeEventListener("mouseleave", handleMouseLeave)
      }
    } else {
      setReadingGuideVisible(false)
    }
  }, [readingGuide])

  // Text to speech functionality
  useEffect(() => {
    if (textToSpeech) {
      // Add click event to paragraphs for text-to-speech
      const paragraphs = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a, button")

      const handleClick = (e: Event) => {
        const target = e.target as HTMLElement
        const text = target.textContent || ""

        if ("speechSynthesis" in window) {
          // Cancel any ongoing speech
          window.speechSynthesis.cancel()

          const utterance = new SpeechSynthesisUtterance(text)
          utterance.lang = language === "uz" ? "uz-UZ" : language === "ru" ? "ru-RU" : "en-US"
          window.speechSynthesis.speak(utterance)
        }
      }

      paragraphs.forEach((p) => {
        p.addEventListener("click", handleClick)
      })

      return () => {
        paragraphs.forEach((p) => {
          p.removeEventListener("click", handleClick)
        })
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel()
        }
      }
    }
  }, [textToSpeech, language])

  return (
    <>
      {/* Floating button to toggle panel */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 rounded-full w-14 h-14 p-0 flex items-center justify-center shadow-lg"
        aria-label={isOpen ? "Maxsus imkoniyatlar panelini yopish" : "Maxsus imkoniyatlar panelini ochish"}
      >
        <Sparkles className={cn("h-6 w-6", isOpen && "hidden")} />
        <ChevronDown className={cn("h-6 w-6", !isOpen && "hidden")} />
      </Button>

      {/* Reading guide */}
      {readingGuideVisible && (
        <div
          className="fixed z-40 pointer-events-none"
          style={{
            left: `${readingGuidePosition.x - 100}px`,
            top: `${readingGuidePosition.y}px`,
            width: "200px",
            height: "30px",
            backgroundColor: "rgba(255, 255, 0, 0.2)",
            border: "1px solid rgba(255, 255, 0, 0.5)",
            borderRadius: "4px",
            transform: "translateY(-50%)",
          }}
        ></div>
      )}

      {/* Accessibility panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 z-50 bg-white dark:bg-slate-900 rounded-lg shadow-lg w-80 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <h2 className="font-bold text-lg mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Maxsus imkoniyatlar
              </h2>

              <Tabs defaultValue="display">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="display">
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="sr-only sm:not-sr-only sm:inline-block">Ko'rinish</span>
                  </TabsTrigger>
                  <TabsTrigger value="motion">
                    <MousePointer className="h-4 w-4 mr-1" />
                    <span className="sr-only sm:not-sr-only sm:inline-block">Harakat</span>
                  </TabsTrigger>
                  <TabsTrigger value="text">
                    <FileText className="h-4 w-4 mr-1" />
                    <span className="sr-only sm:not-sr-only sm:inline-block">Matn</span>
                  </TabsTrigger>
                  <TabsTrigger value="audio">
                    <Headphones className="h-4 w-4 mr-1" />
                    <span className="sr-only sm:not-sr-only sm:inline-block">Audio</span>
                  </TabsTrigger>
                </TabsList>

                {/* Display Tab */}
                <TabsContent value="display" className="space-y-6">
                  {/* Font size control */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium">
                        <Type className="h-4 w-4 mr-2" />
                        Shrift o'lchami
                      </label>
                      <span className="text-xs">{fontSize}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                        aria-label="Shrift o'lchamini kichiklashtirish"
                      >
                        <Minimize className="h-4 w-4" />
                      </Button>
                      <Slider
                        value={[fontSize]}
                        min={80}
                        max={200}
                        step={10}
                        onValueChange={(value) => setFontSize(value[0])}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setFontSize(Math.min(200, fontSize + 10))}
                        aria-label="Shrift o'lchamini kattalashtirish"
                      >
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* High contrast mode */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <Sun className="h-4 w-4 mr-2" />
                      Yuqori kontrast
                    </label>
                    <Switch
                      checked={contrast}
                      onCheckedChange={setContrast}
                      aria-label="Yuqori kontrast rejimini yoqish"
                    />
                  </div>

                  {/* Dyslexic font */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <Type className="h-4 w-4 mr-2" />
                      Disleksiya uchun shrift
                    </label>
                    <Switch
                      checked={dyslexicFont}
                      onCheckedChange={setDyslexicFont}
                      aria-label="Disleksiya uchun shriftni yoqish"
                    />
                  </div>

                  {/* Color blind mode */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium">
                      <Palette className="h-4 w-4 mr-2" />
                      Rang ko'rish rejimi
                    </label>
                    <select
                      value={colorBlindMode}
                      onChange={(e) => setColorBlindMode(e.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="none">Normal</option>
                      <option value="protanopia">Protanopiya (qizil rangni ko'rmaslik)</option>
                      <option value="deuteranopia">Deuteranopiya (yashil rangni ko'rmaslik)</option>
                      <option value="tritanopia">Tritanopiya (ko'k rangni ko'rmaslik)</option>
                      <option value="achromatopsia">Axromatopsiya (rangsiz ko'rish)</option>
                    </select>
                  </div>

                  {/* Simplified interface */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <Layers className="h-4 w-4 mr-2" />
                      Soddalashtirilgan interfeys
                    </label>
                    <Switch
                      checked={simplifiedInterface}
                      onCheckedChange={setSimplifiedInterface}
                      aria-label="Soddalashtirilgan interfeys"
                    />
                  </div>

                  {/* Image descriptions */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <FileText className="h-4 w-4 mr-2" />
                      Rasm tavsifi
                    </label>
                    <Switch
                      checked={imageDescriptions}
                      onCheckedChange={setImageDescriptions}
                      aria-label="Rasm tavsifini ko'rsatish"
                    />
                  </div>
                </TabsContent>

                {/* Motion Tab */}
                <TabsContent value="motion" className="space-y-6">
                  {/* Cursor size */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium">
                        <MousePointer className="h-4 w-4 mr-2" />
                        Kursor o'lchami
                      </label>
                      <span className="text-xs">{cursorSize}px</span>
                    </div>
                    <Slider
                      value={[cursorSize]}
                      min={16}
                      max={64}
                      step={4}
                      onValueChange={(value) => setCursorSize(value[0])}
                      className="flex-1"
                    />
                  </div>

                  {/* Animations toggle */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      {animations ? <Play className="h-4 w-4 mr-2" /> : <Pause className="h-4 w-4 mr-2" />}
                      Animatsiyalar
                    </label>
                    <Switch checked={animations} onCheckedChange={setAnimations} aria-label="Animatsiyalarni yoqish" />
                  </div>

                  {/* Keyboard navigation */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <Keyboard className="h-4 w-4 mr-2" />
                      Klaviatura navigatsiyasi
                    </label>
                    <Switch
                      checked={keyboardNavigation}
                      onCheckedChange={setKeyboardNavigation}
                      aria-label="Klaviatura navigatsiyasini yoqish"
                    />
                  </div>

                  {/* Focus highlight */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <ZoomIn className="h-4 w-4 mr-2" />
                      Fokus ajratish
                    </label>
                    <Switch
                      checked={focusHighlight}
                      onCheckedChange={setFocusHighlight}
                      aria-label="Fokus ajratishni yoqish"
                    />
                  </div>

                  {/* Reading guide */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <Scan className="h-4 w-4 mr-2" />
                      O'qish yo'riqnomasi
                    </label>
                    <Switch
                      checked={readingGuide}
                      onCheckedChange={setReadingGuide}
                      aria-label="O'qish yo'riqnomasini yoqish"
                    />
                  </div>
                </TabsContent>

                {/* Text Tab */}
                <TabsContent value="text" className="space-y-6">
                  {/* Line height */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium">
                        <AlignLeft className="h-4 w-4 mr-2" />
                        Qator balandligi
                      </label>
                      <span className="text-xs">{lineHeight.toFixed(1)}</span>
                    </div>
                    <Slider
                      value={[lineHeight * 10]}
                      min={10}
                      max={30}
                      step={1}
                      onValueChange={(value) => setLineHeight(value[0] / 10)}
                      className="flex-1"
                    />
                  </div>

                  {/* Letter spacing */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium">
                        <Braces className="h-4 w-4 mr-2" />
                        Harf oralig'i
                      </label>
                      <span className="text-xs">{letterSpacing}px</span>
                    </div>
                    <Slider
                      value={[letterSpacing]}
                      min={0}
                      max={10}
                      step={0.5}
                      onValueChange={(value) => setLetterSpacing(value[0])}
                      className="flex-1"
                    />
                  </div>

                  {/* Word spacing */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center text-sm font-medium">
                        <Underline className="h-4 w-4 mr-2" />
                        So'z oralig'i
                      </label>
                      <span className="text-xs">{wordSpacing}px</span>
                    </div>
                    <Slider
                      value={[wordSpacing]}
                      min={0}
                      max={10}
                      step={0.5}
                      onValueChange={(value) => setWordSpacing(value[0])}
                      className="flex-1"
                    />
                  </div>

                  {/* Text align */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium">
                      <AlignLeft className="h-4 w-4 mr-2" />
                      Matn tekislash
                    </label>
                    <select
                      value={textAlign}
                      onChange={(e) => setTextAlign(e.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="left">Chap</option>
                      <option value="center">Markaz</option>
                      <option value="right">O'ng</option>
                      <option value="justify">Tekislash</option>
                    </select>
                  </div>
                </TabsContent>

                {/* Audio Tab */}
                <TabsContent value="audio" className="space-y-6">
                  {/* Text to speech */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <Volume2 className="h-4 w-4 mr-2" />
                      Matnni o'qib berish
                    </label>
                    <Switch
                      checked={textToSpeech}
                      onCheckedChange={setTextToSpeech}
                      aria-label="Matnni o'qib berish funksiyasini yoqish"
                    />
                  </div>

                  {/* Sign language */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm font-medium">
                      <Hand className="h-4 w-4 mr-2" />
                      Imo-ishora tili
                    </label>
                    <Switch
                      checked={signLanguage}
                      onCheckedChange={setSignLanguage}
                      aria-label="Imo-ishora tilini yoqish"
                    />
                  </div>

                  {/* Language selection */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium">
                      <Languages className="h-4 w-4 mr-2" />
                      Til
                    </label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="uz">O'zbek</option>
                      <option value="ru">Русский</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full" onClick={() => setIsOpen(false)}>
                  Yopish
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global styles for accessibility features */}
      <style jsx global>{`
        /* High contrast mode */
        .high-contrast {
          --primary: #0000ff;
          --background: #ffffff;
          --foreground: #000000;
        }
        
        .high-contrast body {
          background: #ffffff;
          color: #000000;
        }
        
        .high-contrast a, 
        .high-contrast button {
          outline: 2px solid transparent;
        }
        
        .high-contrast a:focus, 
        .high-contrast button:focus {
          outline: 2px solid #0000ff;
        }

        
        .high-contrast button:focus {
          outline: 2px solid #0000ff;
        }

        /* Large cursor */
        .large-cursor,
        .large-cursor * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='var(--cursor-size)' height='var(--cursor-size)' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z'/%3E%3Cpath d='m13 13 6 6'/%3E%3C/svg%3E") var(--cursor-size) var(--cursor-size), auto !important;
        }

        /* Reduce motion */
        .reduce-motion * {
          animation-duration: 0.001ms !important;
          transition-duration: 0.001ms !important;
        }

        /* Dyslexic font */
        .dyslexic-font * {
          font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif !important;
          letter-spacing: 0.35px;
          word-spacing: 1.2px;
          line-height: 1.4;
        }

        /* Color blind modes */
        .protanopia {
          filter: url('#protanopia-filter');
        }
        .deuteranopia {
          filter: url('#deuteranopia-filter');
        }
        .tritanopia {
          filter: url('#tritanopia-filter');
        }
        .achromatopsia {
          filter: grayscale(100%);
        }

        /* Keyboard navigation */
        .keyboard-navigation a:focus,
        .keyboard-navigation button:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation select:focus,
        .keyboard-navigation textarea:focus {
          outline: 3px solid #6366f1 !important;
          outline-offset: 2px !important;
        }

        /* Custom line height */
        .custom-line-height p,
        .custom-line-height li,
        .custom-line-height h1,
        .custom-line-height h2,
        .custom-line-height h3,
        .custom-line-height h4,
        .custom-line-height h5,
        .custom-line-height h6 {
          line-height: var(--line-height) !important;
        }

        /* Custom letter spacing */
        .custom-letter-spacing * {
          letter-spacing: var(--letter-spacing) !important;
        }

        /* Custom word spacing */
        .custom-word-spacing * {
          word-spacing: var(--word-spacing) !important;
        }

        /* Focus highlight */
        .focus-highlight a:hover,
        .focus-highlight button:hover,
        .focus-highlight input:hover,
        .focus-highlight select:hover,
        .focus-highlight textarea:hover {
          outline: 3px solid rgba(99, 102, 241, 0.5) !important;
          outline-offset: 2px !important;
        }

        /* Sign language */
        .sign-language .sign-language-icon {
          display: inline-block !important;
        }

        /* Simplified interface */
        .simplified-interface .simplified-hide {
          display: none !important;
        }

        .simplified-interface .container {
          max-width: 800px !important;
        }

        .simplified-interface p,
        .simplified-interface li {
          font-size: 1.1rem !important;
        }

        /* Custom text align */
        .custom-text-align p,
        .custom-text-align li,
        .custom-text-align h1,
        .custom-text-align h2,
        .custom-text-align h3,
        .custom-text-align h4,
        .custom-text-align h5,
        .custom-text-align h6 {
          text-align: var(--text-align) !important;
        }

        /* Show image descriptions */
        .show-image-descriptions img {
          position: relative;
        }

        .show-image-descriptions img::after {
          content: attr(alt);
          position: absolute;
          bottom: -30px;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px;
          font-size: 12px;
          text-align: center;
          border-radius: 0 0 4px 4px;
        }
      `}</style>

      {/* SVG filters for color blindness simulation */}
      <svg className="absolute" style={{ height: 0, width: 0, position: "absolute" }}>
        <defs>
          <filter id="protanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.567, 0.433, 0, 0, 0
                      0.558, 0.442, 0, 0, 0
                      0, 0.242, 0.758, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="deuteranopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.625, 0.375, 0, 0, 0
                      0.7, 0.3, 0, 0, 0
                      0, 0.3, 0.7, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="tritanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.95, 0.05, 0, 0, 0
                      0, 0.433, 0.567, 0, 0
                      0, 0.475, 0.525, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
        </defs>
      </svg>
    </>
  )
}
