"use client";

import Link from "next/link";
import { CalendarCheck, QrCode, ShieldCheck, Ticket } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <Navbar />
            <main>
                <section id="overview" className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)]" />
                    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-24">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                                Activity 10
                                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                                Event Registration & QR Check-in
                            </div>
                            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                                A clean, modern system for event registration and fast QR entry.
                            </h1>
                            <p className="text-base text-white/70 sm:text-lg">
                                Organizers publish events in minutes. Attendees register online and receive unique QR tickets.
                                At the venue, staff scan codes to verify entry instantly.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/events"
                                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-900 transition hover:bg-neutral-100"
                                >
                                    Browse events
                                </Link>
                                <Link
                                    href="/my-events"
                                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
                                >
                                    Organizer console
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-6 text-sm text-white/60">
                                <span className="flex items-center gap-2">
                                    <CalendarCheck className="h-4 w-4 text-emerald-400" />
                                    Fast event setup
                                </span>
                                <span className="flex items-center gap-2">
                                    <Ticket className="h-4 w-4 text-emerald-400" />
                                    Auto-issued tickets
                                </span>
                                <span className="flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                                    Secure validation
                                </span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
                                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Upcoming</p>
                                        <h3 className="mt-2 text-lg font-semibold">City Tech Expo</h3>
                                        <p className="text-sm text-white/60">Sat · 10:00 AM · Hall B</p>
                                    </div>
                                    <div className="grid gap-3 md:grid-cols-2">
                                        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                                            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Registrations</p>
                                            <p className="mt-2 text-2xl font-semibold">128</p>
                                            <p className="text-xs text-white/50">Verified tickets</p>
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
                                            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Check-in</p>
                                            <p className="mt-2 text-2xl font-semibold">Live</p>
                                            <p className="text-xs text-white/50">QR scanner ready</p>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-purple-500/20 p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-2xl bg-white/10 p-2">
                                                <QrCode className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold">Scan & verify</p>
                                                <p className="text-xs text-white/60">
                                                    Instant validation at entry points.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="bg-white py-20 text-neutral-900">
                    <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                                Core workflow
                            </p>
                            <h2 className="text-3xl font-semibold sm:text-4xl">
                                Everything needed for registration, tickets, and entry control.
                            </h2>
                            <p className="text-neutral-600">
                                A focused experience for event organizers and attendees, built around QR ticketing.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: "Create events",
                                    description:
                                        "Publish events with schedules, locations, and attendee caps in minutes.",
                                    icon: <CalendarCheck className="h-6 w-6 text-emerald-600" />,
                                },
                                {
                                    title: "Register online",
                                    description:
                                        "Attendees register on any device and receive a unique QR code ticket.",
                                    icon: <Ticket className="h-6 w-6 text-emerald-600" />,
                                },
                                {
                                    title: "Scan at entry",
                                    description:
                                        "Verify tickets at the gate using the built-in QR scanner or manual code.",
                                    icon: <QrCode className="h-6 w-6 text-emerald-600" />,
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="checkin" className="bg-neutral-950 py-20 text-white">
                    <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                                Check-in flow
                            </p>
                            <h2 className="text-3xl font-semibold sm:text-4xl">
                                Simple flow from registration to verified entry.
                            </h2>
                            <p className="text-white/70">
                                Keep the queue moving with rapid ticket validation and clean attendee status updates.
                            </p>
                            <Link
                                href="/events"
                                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-900"
                            >
                                View events
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Attendee registers online and receives QR ticket.",
                                "Organizer opens the scanner and validates each entry.",
                                "Status updates instantly for secure, trackable admission.",
                            ].map((step, index) => (
                                <div
                                    key={step}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold">
                                            {index + 1}
                                        </span>
                                        <p className="text-sm text-white/80">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="organizers" className="bg-white py-20 text-neutral-900">
                    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-xl space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                                Organizers
                            </p>
                            <h2 className="text-2xl font-semibold sm:text-3xl">
                                Ready to publish your next event?
                            </h2>
                            <p className="text-sm text-neutral-600">
                                Build your event, manage registrations, and monitor ticket scanning from one place.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/my-events"
                                className="rounded-full bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white"
                            >
                                Open organizer console
                            </Link>
                            <Link
                                href="/signin"
                                className="rounded-full border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-700"
                            >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
