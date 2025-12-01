// app/page.tsx
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/your-calendly-link/aws-audit"; // à remplacer
const CONTACT_EMAIL = "contact@escondidacloudadvisors.com"; // à remplacer

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-emerald-500" />
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-amber-300">
                Escondida
              </p>
              <p className="text-xs text-slate-400">Cloud Advisors LLC</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-amber-300">
              Services
            </a>
            <a href="#quickstarts" className="hover:text-amber-300">
              QuickStarts
            </a>
            <a href="#about" className="hover:text-amber-300">
              About
            </a>
            <a href="#contact" className="hover:text-amber-300">
              Contact
            </a>
          </nav>
          <div className="hidden md:block">
            <Link
              href={CALENDLY_URL}
              className="rounded-full border border-amber-400/70 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-amber-400 hover:text-slate-950 transition"
            >
              Book a free audit
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 space-y-24">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 mb-4">
              Cloud. AI. Excellence.
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              AWS Cloud, AI &amp; FinOps consulting
              <span className="block text-2xl md:text-3xl text-slate-300 mt-2">
                for modern, fast-growing companies.
              </span>
            </h1>
            <p className="text-slate-300 max-w-xl mb-6">
              Escondida Cloud Advisors helps U.S. SaaS and enterprise teams
              design, migrate, secure, and optimize their AWS platforms, while
              integrating practical AI systems that deliver real business value.
            </p>
            <ul className="text-sm text-slate-300 space-y-1 mb-8">
              <li>
                • 20–50% AWS cost reduction without rewriting your entire stack
              </li>
              <li>
                • Secure, scalable architectures aligned with AWS best practices
              </li>
              <li>
                • AI &amp; LLM integration (RAG, agents, automation) on top of
                your data
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href={CALENDLY_URL}
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 hover:bg-amber-300 transition"
              >
                Book a free 30-min AWS audit
              </Link>
              <a
                href="#services"
                className="text-sm text-slate-300 hover:text-amber-300"
              >
                View services &rarr;
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Currently operating remotely from Europe – focused on U.S.-based
              clients.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-black/40 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Typical engagement
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li>
                  <span className="font-semibold text-amber-300">Week 1:</span>{" "}
                  AWS cost &amp; architecture review.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">
                    Week 2–3:
                  </span>{" "}
                  Optimization plan, security hardening, and automation.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">Week 4+:</span>{" "}
                  Optional AI/LLM integration and ongoing advisory.
                </li>
              </ul>
              <div className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm">
                <p className="font-semibold text-emerald-300 mb-1">
                  Outcome-focused:
                </p>
                <p className="text-emerald-100">
                  Lower AWS bills, faster deployments, fewer incidents, and a
                  clear roadmap to AI-enabled infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Services
          </h2>
          <p className="text-slate-300 max-w-3xl">
            Escondida Cloud Advisors focuses on a small set of high-impact
            services where deep expertise in AWS, cloud architecture, and AI
            makes a measurable difference.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold mb-2">
                AWS Architecture &amp; Modernization
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Design and modernize your AWS workloads to be secure, scalable,
                and cost-efficient.
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Serverless, containers (ECS/EKS), microservices</li>
                <li>• Well-Architected reviews</li>
                <li>• Observability, logging, tracing</li>
                <li>• Multi-account governance &amp; guardrails</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold mb-2">
                Cloud Migrations (MAP)
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Structured migrations from on-prem or other clouds into AWS,
                aligned with the Migration Acceleration Program (MAP).
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Discovery &amp; assessment</li>
                <li>• Rehost, replatform, refactor</li>
                <li>• CI/CD automation</li>
                <li>• Data &amp; workload migration</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold mb-2">
                AI Engineering &amp; Automation
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Integrate AI where it matters: internal copilots, RAG search,
                and automation around real business workflows.
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Bedrock / OpenAI / Anthropic integration</li>
                <li>• RAG over internal knowledge bases</li>
                <li>• Agents and workflow automation</li>
                <li>• Secure, governed AI architecture</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold mb-2">
                FinOps &amp; Cost Optimization
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Reduce AWS spend by 20–50% without compromising performance or
                stability.
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Right-sizing &amp; workload analysis</li>
                <li>• Savings Plans &amp; Reserved Instances</li>
                <li>• Storage &amp; data transfer optimization</li>
                <li>• Cost dashboards &amp; governance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* QUICKSTARTS */}
        <section id="quickstarts" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            QuickStart Packages
          </h2>
          <p className="text-slate-300 max-w-3xl">
            Fixed-scope, outcome-focused engagements designed to deliver value
            fast. Ideal as a first collaboration before long-term advisory work.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* QS 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">
                AWS Cost Optimization (7 days)
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Identify and capture 20–50% savings on your AWS bill.
              </p>
              <p className="text-sm font-semibold text-amber-300 mb-3">
                3 900 USD – 7 days
              </p>
              <ul className="text-xs text-slate-300 space-y-1 mb-4">
                <li>• Full AWS bill analysis</li>
                <li>• Cost hotspots &amp; quick wins</li>
                <li>• Savings Plans &amp; RI strategy</li>
                <li>• Prioritized action plan</li>
              </ul>
              <div className="mt-auto">
                <Link
                  href={CALENDLY_URL}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200"
                >
                  Book a free pre-assessment call &rarr;
                </Link>
              </div>
            </div>

            {/* QS 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">
                Well-Architected Review (2 weeks)
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Assess your workloads against AWS&apos;s Well-Architected
                Framework.
              </p>
              <p className="text-sm font-semibold text-amber-300 mb-3">
                6 500 USD – 2 weeks
              </p>
              <ul className="text-xs text-slate-300 space-y-1 mb-4">
                <li>• Review across all 6 pillars</li>
                <li>• Risk &amp; issue identification</li>
                <li>• Remediation roadmap</li>
                <li>• Executive summary for leadership</li>
              </ul>
              <div className="mt-auto">
                <Link
                  href={CALENDLY_URL}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200"
                >
                  Discuss your workload &rarr;
                </Link>
              </div>
            </div>

            {/* QS 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">
                AI Readiness Assessment (14 days)
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Clarify where AI and LLMs can create real value in your context.
              </p>
              <p className="text-sm font-semibold text-amber-300 mb-3">
                8 900 USD – 14 days
              </p>
              <ul className="text-xs text-slate-300 space-y-1 mb-4">
                <li>• Use case discovery &amp; prioritization</li>
                <li>• Data &amp; architecture assessment</li>
                <li>• AI roadmap (90 days)</li>
                <li>• Executive workshop</li>
              </ul>
              <div className="mt-auto">
                <Link
                  href={CALENDLY_URL}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200"
                >
                  Explore AI for your org &rarr;
                </Link>
              </div>
            </div>

            {/* QS 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">
                RAG Enterprise Search (21 days)
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Deploy an internal AI search over your documents and knowledge.
              </p>
              <p className="text-sm font-semibold text-amber-300 mb-3">
                14 000 USD – 21 days
              </p>
              <ul className="text-xs text-slate-300 space-y-1 mb-4">
                <li>• Data ingestion &amp; vector store setup</li>
                <li>• RAG pipeline &amp; API</li>
                <li>• Simple internal UI</li>
                <li>• Security &amp; access controls</li>
              </ul>
              <div className="mt-auto">
                <Link
                  href={CALENDLY_URL}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200"
                >
                  Talk about your knowledge base &rarr;
                </Link>
              </div>
            </div>

            {/* QS 5 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">
                Cloud Modernization Starter (30 days)
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Modernize a key workload while putting modern AWS guardrails in
                place.
              </p>
              <p className="text-sm font-semibold text-amber-300 mb-3">
                12 000 USD – 30 days
              </p>
              <ul className="text-xs text-slate-300 space-y-1 mb-4">
                <li>• CI/CD pipeline implementation</li>
                <li>• IAM Zero Trust improvements</li>
                <li>• Containerization or serverless design</li>
                <li>• Observability &amp; runbooks</li>
              </ul>
              <div className="mt-auto">
                <Link
                  href={CALENDLY_URL}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200"
                >
                  See if your workload is a fit &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            About Escondida Cloud Advisors
          </h2>
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
            <div className="space-y-4 text-slate-300 text-sm">
              <p>
                Escondida Cloud Advisors is a boutique consulting firm focused
                on AWS cloud architecture, AI engineering, and FinOps
                optimization for U.S.-based SaaS and enterprise organizations.
              </p>
              <p>
                Founded and led by{" "}
                <span className="font-semibold text-slate-100">Philippe B</span>
                , the firm brings more than a decade of experience working with
                large enterprises on cloud, security, data, and AI
                modernization.
              </p>
              <p>
                The goal is simple: help engineering and product teams move
                faster, with less risk and more visibility, while keeping AWS
                costs under control and leveraging AI where it matters.
              </p>
              <p>
                Escondida operates remotely with a strong focus on the U.S.
                market, and can collaborate as an external architect, project
                lead, or long-term advisor.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Typical outcomes
              </p>
              <ul className="space-y-2">
                <li>• 20–50% reduction in AWS cost</li>
                <li>• Fewer incidents and clearer runbooks</li>
                <li>• Better IAM posture and governance</li>
                <li>• AI pilots that actually reach production</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Contact
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm mb-4">
            Ready to discuss your AWS platform, architecture, or AI plans? Book
            a free 30-minute call or reach out directly.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href={CALENDLY_URL}
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 hover:bg-amber-300 transition"
            >
              Book a free AWS audit
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-slate-300 hover:text-amber-300"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/70 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Escondida Cloud Advisors LLC — Cloud. AI.
        Excellence.
      </footer>
    </div>
  );
}
