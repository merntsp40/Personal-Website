import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import MoreProjects from '@/components/sections/MoreProjects';
import Process from '@/components/sections/Process';
import GitHubStats from '@/components/sections/GitHubStats';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <FeaturedProjects />
      <MoreProjects />
      <Process />
      <GitHubStats />
      <Contact />
    </main>
  );
}
