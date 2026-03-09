import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  TrendingUp,
  Activity,
  CreditCard,
  Users,
  ArrowRight,
  BarChart3,
  Bot,
  Globe,
  Phone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_NUMBER = "2348035208600";

const plans = [
  {
    name: "Starter",
    price: "$50",
    period: "/month",
    description: "Good for traders starting with one account.",
    features: [
      "1 trading account",
      "Forex + Gold support",
      "Client portal access",
      "Basic performance reporting",
    ],
  },
  {
    name: "Pro",
    price: "$100",
    period: "/month",
    description: "Best for serious traders who want broader market access.",
    featured: true,
    features: [
      "Forex + Deriv",
      "Priority onboarding",
      "Live runtime monitoring",
      "Trade history dashboard",
      "Manual support assistance",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-account setups and business partnerships.",
    features: [
      "Multi-account deployment",
      "Custom risk settings",
      "Advanced reporting",
      "Dedicated onboarding",
    ],
  },
];

const testimonials = [
  {
    name: "Forex Client",
    role: "Swing & intraday trader",
    text: "The portal made everything feel professional. I could see my trade history and account status without asking for updates.",
  },
  {
    name: "Deriv Client",
    role: "Synthetic indices trader",
    text: "The setup was clear, support was quick, and I liked that the system handled my account with clear rules and monitoring.",
  },
  {
    name: "Crypto Client",
    role: "Multi-market trader",
    text: "What sold me was the structured onboarding and the ability to support different market types under one service.",
  },
];

const faqs = [
  {
    q: "How does onboarding work?",
    a: "You choose a plan, submit the signup form, send your trading account details, and receive activation plus portal access after payment confirmation.",
  },
  {
    q: "Which markets are supported?",
    a: "The service is built to support Forex, Crypto, and Deriv synthetic indices, depending on your plan and broker setup.",
  },
  {
    q: "Do I need to keep my PC on?",
    a: "No. The goal of this SaaS model is managed deployment and account monitoring, so clients use the portal while the service handles the operational layer.",
  },
  {
    q: "How do payments work?",
    a: "You can currently handle payments manually and activate clients from the admin dashboard after confirmation.",
  },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl space-y-3">
      <Badge
        variant="secondary"
        className="rounded-full px-4 py-1 text-xs font-medium"
      >
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="text-sm leading-6 text-slate-600 md:text-base">{text}</p>
    </div>
  );
}

export default function Mt5SaasLandingPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    market: "Forex + Crypto + Deriv",
    plan: "Pro",
    capital: "",
    broker: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const completion = useMemo(() => {
    const fields = [
      form.fullName,
      form.email,
      form.whatsapp,
      form.market,
      form.plan,
    ];
    const done = fields.filter(Boolean).length;
    return Math.round((done / fields.length) * 100);
  }, [form]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function openWhatsapp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = `Hello Samuel, I want to sign up for your MT5 SaaS trading service.

Full Name: ${form.fullName}
Email: ${form.email}
WhatsApp: ${form.whatsapp}
Preferred Plan: ${form.plan}
Market Interest: ${form.market}
Broker / Exchange: ${form.broker}
Estimated Capital: ${form.capital}
Notes: ${form.notes}`;

    setSubmitted(true);
    openWhatsapp(message);
  }

  function handleQuickWhatsapp() {
    const message =
      "Hello Samuel, I want to learn more about your MT5 SaaS trading service and how to get started.";
    openWhatsapp(message);
  }

  function scrollToSignup() {
    document.getElementById("signup-funnel")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollToPricing() {
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">MT5 SaaS Automation</p>
              <p className="text-xs text-slate-500">
                Managed multi-market trading service
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How it works
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-2xl"
              onClick={scrollToSignup}
            >
              Client Signup
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="rounded-full bg-slate-900 px-4 py-1 text-white hover:bg-slate-900">
                Forex + Crypto + Deriv Automation
              </Badge>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Managed trading SaaS with a professional client portal and
                onboarding funnel.
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                Offer clients a structured trading service with account
                monitoring, trade visibility, subscription management, and
                controlled onboarding across Forex, Crypto, and Deriv synthetic
                markets.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-2xl px-6"
                onClick={scrollToSignup}
              >
                Start Signup Funnel <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-6"
                onClick={scrollToPricing}
              >
                View Pricing
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Markets", value: "3" },
                { label: "Client Portal", value: "Live" },
                { label: "Onboarding", value: "Structured" },
              ].map((item) => (
                <Card
                  key={item.label}
                  className="rounded-2xl border-slate-200 shadow-sm"
                >
                  <CardContent className="p-5">
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="text-sm text-slate-500">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="overflow-hidden rounded-3xl border-slate-200 shadow-xl shadow-slate-200/60">
              <CardHeader className="border-b border-slate-100 bg-slate-900 text-white">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BarChart3 className="h-5 w-5" /> Service Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: Activity,
                      title: "Runtime visibility",
                      text: "Clients can view account status, floating PnL, and active positions.",
                    },
                    {
                      icon: Shield,
                      title: "Admin control",
                      text: "Manage activation, expiry, portal access, and subscription details.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Trade history",
                      text: "Track open and closed trades in a structured client portal.",
                    },
                    {
                      icon: Globe,
                      title: "Scalable service",
                      text: "Built for a managed SaaS model instead of one-off manual handling.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <item.icon className="mb-3 h-5 w-5" />
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900">
                  <p className="font-semibold">Ideal sales angle</p>
                  <p className="mt-1 leading-6">
                    Sell this as a managed automation service with transparent
                    onboarding, subscription structure, and client access—not
                    just as raw bot files.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionTitle
            eyebrow="Core features"
            title="Everything needed to look like a real trading SaaS business"
            text="Position your service as a structured product with onboarding, account monitoring, client access, and managed subscription control."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Bot,
                title: "Multi-market support",
                text: "Run and market the service for Forex, Crypto, and Deriv synthetic indices under one offer.",
              },
              {
                icon: Users,
                title: "Client portal",
                text: "Each client gets a login to view their subscription, account runtime, and trade history.",
              },
              {
                icon: CreditCard,
                title: "Manual onboarding ready",
                text: "Receive payment manually, then activate the client from the admin dashboard with clear workflow.",
              },
              {
                icon: Shield,
                title: "Operational control",
                text: "Enable, disable, expire, and manage access while keeping service delivery organized.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
              >
                <Card className="h-full rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-y border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
            <SectionTitle
              eyebrow="How it works"
              title="A simple funnel that turns interest into onboarded clients"
              text="This signup process helps you collect the details you need, qualify leads, and move people into paid onboarding quickly."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                "Visitor lands on your page and chooses a plan.",
                "They fill the signup form with market, broker, and contact details.",
                "You review the lead, confirm payment manually, and create the client.",
                "You issue portal access and start the managed service.",
              ].map((step, idx) => (
                <Card
                  key={step}
                  className="rounded-3xl border-slate-200 shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      {idx + 1}
                    </div>
                    <p className="text-sm leading-6 text-slate-700">{step}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionTitle
            eyebrow="Pricing"
            title="Simple pricing that is easy to explain to prospects"
            text="Use these plans as a starting point. You can adjust based on account size, support level, or market coverage."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`rounded-3xl border-slate-200 shadow-sm ${
                  plan.featured ? "border-slate-900 shadow-lg" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.featured ? (
                      <Badge className="rounded-full bg-slate-900 text-white">
                        Popular
                      </Badge>
                    ) : null}
                  </div>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-sm text-slate-700">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full rounded-2xl"
                    onClick={scrollToSignup}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="signup-funnel"
          className="mx-auto max-w-7xl px-4 py-16 md:px-6"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Signup funnel</CardTitle>
                <p className="text-sm text-slate-600">
                  Collect the details you need before onboarding a paying client.
                </p>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Full name
                      </label>
                      <Input
                        value={form.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="name@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        WhatsApp
                      </label>
                      <Input
                        value={form.whatsapp}
                        onChange={(e) => updateField("whatsapp", e.target.value)}
                        placeholder="+234..."
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Preferred plan
                      </label>
                      <Input
                        value={form.plan}
                        onChange={(e) => updateField("plan", e.target.value)}
                        placeholder="Pro"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Market interest
                      </label>
                      <Input
                        value={form.market}
                        onChange={(e) => updateField("market", e.target.value)}
                        placeholder="Forex / Crypto / Deriv"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Broker / exchange
                      </label>
                      <Input
                        value={form.broker}
                        onChange={(e) => updateField("broker", e.target.value)}
                        placeholder="Exness / Deriv / Binance"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium">
                        Estimated capital
                      </label>
                      <Input
                        value={form.capital}
                        onChange={(e) => updateField("capital", e.target.value)}
                        placeholder="$500, $2,000, ₦ equivalent..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium">
                        Notes
                      </label>
                      <Textarea
                        value={form.notes}
                        onChange={(e) => updateField("notes", e.target.value)}
                        placeholder="Tell us your goals, preferred markets, or account setup."
                        rows={5}
                      />
                    </div>

                    <div className="md:col-span-2 flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
                      <div>
                        <p className="text-sm font-medium">Form completion</p>
                        <p className="text-xs text-slate-500">
                          Complete the key fields so you can be contacted
                          quickly.
                        </p>
                      </div>
                      <div className="min-w-[110px] text-right">
                        <p className="text-lg font-bold">{completion}%</p>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                      <Button type="submit" className="rounded-2xl px-6">
                        Continue on WhatsApp
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-2xl px-6"
                        onClick={handleQuickWhatsapp}
                      >
                        Talk on WhatsApp
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                    <h3 className="text-xl font-semibold text-emerald-900">
                      Signup captured
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-emerald-900/80">
                      Your details have been prepared and sent to WhatsApp for
                      direct follow-up.
                    </p>
                    <div className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                      <div>
                        <strong>Name:</strong> {form.fullName}
                      </div>
                      <div>
                        <strong>Email:</strong> {form.email}
                      </div>
                      <div>
                        <strong>Plan:</strong> {form.plan}
                      </div>
                      <div>
                        <strong>Market:</strong> {form.market}
                      </div>
                    </div>
                    <Button
                      className="mt-6 rounded-2xl"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit another lead
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle>Why prospects convert</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-700">
                  <div className="flex gap-3">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>
                      They see a structured business, not just a random bot
                      offer.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Users className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>
                      They understand the onboarding process before paying.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CreditCard className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>
                      Pricing and expectations are clear from the start.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle>Direct contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4" />
                    <span>WhatsApp onboarding support</span>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 text-slate-600">
                    Use WhatsApp for faster onboarding, direct questions, and
                    manual payment confirmation.
                  </div>
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl"
                    onClick={handleQuickWhatsapp}
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <SectionTitle
            eyebrow="Testimonials"
            title="Add trust signals that make your service easier to buy"
            text="Use real client reviews, screenshots, runtime updates, and proof of consistent support to strengthen conversions."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card
                key={item.name}
                className="rounded-3xl border-slate-200 shadow-sm"
              >
                <CardContent className="p-6">
                  <p className="text-sm leading-7 text-slate-700">
                    “{item.text}”
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
            <SectionTitle
              eyebrow="FAQ"
              title="Common questions before a client signs up"
              text="Handle objections early so the person knows what to expect before the first conversation."
            />

            <div className="mt-10 grid gap-4">
              {faqs.map((item) => (
                <Card
                  key={item.q}
                  className="rounded-3xl border-slate-200 shadow-sm"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{item.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="font-semibold">MT5 SaaS Automation</p>
            <p className="text-sm text-slate-400">
              Managed trading service for Forex, Crypto, and Deriv.
            </p>
          </div>
          <div className="text-sm text-slate-400">
            Built to convert leads into paying managed-service clients.
          </div>
        </div>
      </footer>
    </div>
  );
}