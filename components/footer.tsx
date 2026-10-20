import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Adeel Hashmi</h3>
            <p className="text-sm text-muted-foreground">
              Frontend Developer specializing in React.js, Next.js, and TypeScript. Building scalable web applications
              with modern technologies.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Frontend Development</li>
              <li className="text-muted-foreground">React.js Applications</li>
              <li className="text-muted-foreground">Next.js Websites</li>
              <li className="text-muted-foreground">UI/UX Implementation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Status</h3>
            <div className="space-y-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Available for Work
              </Badge>
              <Badge variant="outline">🌍 Open to Relocation</Badge>
              <div className="flex space-x-2 pt-2">
                <Image
                  width={100}
                  height={20}
                  src="https://img.shields.io/github/actions/workflow/status/username/repo/ci.yml?branch=main&label=Build&style=flat-square"
                  alt="Build Status"
                  className="h-5"
                />
                <Image
                  width={130}
                  height={20}
                  src="https://img.shields.io/badge/Lighthouse-95%2B-brightgreen?style=flat-square"
                  alt="Lighthouse Score"
                  className="h-5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Adeel Hashmi. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 sm:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for the web
          </p>
        </div>
      </div>
    </footer>
  )
}
