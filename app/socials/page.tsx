import Link from 'next/link'

export default function SocialsPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Socials</h1>
      <ul className="flex flex-col gap-3">
        <li>
          <Link href="https://www.linkedin.com/in/aidan-toomey/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white text-xl"
            >
              🔗 LinkedIn
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/AidanToomey" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white text-xl"
            >
              💻 GitHub
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}