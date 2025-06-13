import { ProjectPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Aidan Toomey
      </h1>
      <p className="mb-4">
        I'm a Computer Science student at Auburn University, accepted into the accelerated Bachelor's/Master's program in Cybersecurity Engineering. I’m passionate about cybersecurity, software development, and using technology to solve real-world problems. This site showcases my work, projects, and growth as an engineer.
      </p>
      <p className="mb-4">
        Take a look around and check out what I've been building — and feel free to connect with me!
      </p>
      <div className="my-8">
        <ProjectPosts />
      </div>
    </section>
  )
}
