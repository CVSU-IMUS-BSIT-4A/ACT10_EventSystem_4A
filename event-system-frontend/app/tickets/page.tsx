"use client";

import { useMyTickets } from "@/hooks/my-tickets";
import { Navbar } from "@/components/ui/navbar";
import {
    MyTicketsHeader,
    MyTicketCard,
    MyTicketsEmpty,
    MyTicketsLoading,
} from "@/components/my-tickets";

export default function MyTicketsPage() {
    const { user, tickets, isLoading, error, formatDate, formatTime } =
        useMyTickets();

    const userName = user
        ? `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.email
        : "Guest";

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">

            <Navbar showCenterNav={false} />

            <main className="px-4 pb-12 pt-8 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-6xl">
                    <MyTicketsHeader />

                    {isLoading ? (
                        <MyTicketsLoading />
                    ) : error ? (
                        <div className="text-center py-16">
                            <p className="text-red-500 dark:text-red-400">
                                {error}
                            </p>
                        </div>
                    ) : tickets.length === 0 ? (
                        <MyTicketsEmpty />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tickets.map((ticket, index) => (
                                <MyTicketCard
                                    key={ticket.ticketCode}
                                    ticket={ticket}
                                    index={index}
                                    formatDate={formatDate}
                                    formatTime={formatTime}
                                    userName={userName}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

