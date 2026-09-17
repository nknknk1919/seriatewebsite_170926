import { Navbar } from '@/components/seriate/navbar'
import { Hero } from '@/components/seriate/hero'
import { ProblemSolution } from '@/components/seriate/problem-solution'
import { Advantages } from '@/components/seriate/advantages'
import { HowItWorks } from '@/components/seriate/how-it-works'
import { Applications } from '@/components/seriate/applications'
import { Team } from '@/components/seriate/team'
import { Faq } from '@/components/seriate/faq'
import { Contact } from '@/components/seriate/contact'
import { Footer } from '@/components/seriate/footer'
import { EditorMode } from '@/components/editor/EditorMode'

type PageProps = { searchParams: Promise<{ edit?: string }> }

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  if (params.edit === 'true') return <EditorMode />

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <HowItWorks />
        <ProblemSolution />
        <Applications />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
