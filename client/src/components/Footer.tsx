import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vantage Point Editing
            </h3>
            <p className="text-muted-foreground">
              Master video editing and build a location-independent career
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect With Us</h4>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@freedomeditor.com" className="hover:text-primary transition-colors">vantagepointediting@gmail.com
</a>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/job-meijerink-b07249182" 
                className="p-2 rounded-lg bg-card hover-elevate transition-all"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/vantagepointediting/" 
                className="p-2 rounded-lg bg-card hover-elevate transition-all"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2025 Vantage Point Editing. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
}
