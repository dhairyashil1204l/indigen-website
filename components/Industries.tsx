import SectionHeading from "./SectionHeading";
import { INDUSTRIES } from "@/lib/data";

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-slate-50 py-20 md:py-24"
    >
      <div className="container-x">

        <SectionHeading
          id="industries-heading"
          title="Industries We Serve"
          lead="Delivering software solutions across multiple industrial sectors with engineering expertise and innovation."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >

              <h3 className="text-xl font-bold text-red-600">
                {industry.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {industry.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}