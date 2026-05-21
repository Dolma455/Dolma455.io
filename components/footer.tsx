import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">© 2026 Dolma Lama. All rights reserved.</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-end">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Crafted with <span className="text-destructive">❤</span> by <span className="font-semibold text-foreground">Dolma Lama</span>
            </p>
            
            <nav className="flex flex-row flex-wrap justify-center items-center gap-6">
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                Get In Touch
              </Link>
              <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                View Projects
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
