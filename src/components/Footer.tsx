'use client'

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Joshua Sendzul. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="mailto:you@example.com" className="hover:underline">
          Email
        </a>
      </div>
    </footer>
  )
}
