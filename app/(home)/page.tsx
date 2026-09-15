import ContributionGraph from "@/components/ContributionGraph";
import HeroSvg from "@/components/HeroSvg";
import JobList from "@/components/JobList";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto mt-20 max-w-7xl px-6 md:px-16">
      <section className="mb-16 flex flex-col items-start justify-between gap-x-12 xl:flex-row xl:items-center xl:justify-center">
        <div className="max-w-2xl">
          <h1 className="mb-6 min-w-full font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:min-w-[700px] lg:leading-[3.7rem]">
            {profile.headline}
          </h1>
          <p className="text-base leading-relaxed text-muted">{profile.intro}</p>
          <SocialLinks />
        </div>

        <HeroSvg />
      </section>

      <ContributionGraph />
      <JobList />
    </main>
  );
}
