import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Brooklyn, NY</p>
            <p className="text-sm text-muted-foreground">foretfilmmaker@gmail.com</p>
          </div>
          
          {/* Right Section */}
          <div className="space-y-2 md:text-right">
            <Link 
              href="https://www.facebook.com/dustin.foret"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-primary"
            >
              Facebook
            </Link>
            <Link 
              href="https://www.imdb.com/name/nm8940440/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-primary"
            >
              IMDb
            </Link>
            <Link 
              href="https://www.instagram.com/4a_filmmaker/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-primary"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 