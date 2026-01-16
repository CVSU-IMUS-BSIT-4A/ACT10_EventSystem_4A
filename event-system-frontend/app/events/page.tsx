"use client";

import { useEvents } from "@/hooks/events/use-events";
import { Navbar } from "@/components/ui/navbar";
import {
    EventsHeader,
    EventsFilters,
    EventsGrid,
    EventsEmpty,
    EventsPagination,
} from "@/components/events";

export default function EventsPage() {
    const {
        events,
        filteredEvents,
        paginatedEvents,
        isLoading,
        isPageLoading,
        activeFilter,
        changeFilter,
        searchQuery,
        setSearchQuery,
        currentPage,
        totalPages,
        goToPage,
        goToNextPage,
        goToPrevPage,
    } = useEvents();

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">

            {/* Full page loader for async pagination */}
            {isPageLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50/70 backdrop-blur-sm dark:bg-neutral-950/70">
                    <div className="flex flex-col items-center gap-3 rounded-3xl border border-neutral-200 bg-white px-8 py-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900 dark:border-neutral-700 dark:border-t-white" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Loading events...
                        </span>
                    </div>
                </div>
            )}

            <Navbar showCenterNav={false} />

            <main className="px-4 pb-12 pt-8 sm:px-6 lg:px-8">
                <div className="mx-auto flex w-full max-w-6xl flex-col">
                    <EventsHeader 
                        eventsCount={filteredEvents.length}
                        isLoading={isPageLoading}
                    />

                    <EventsFilters
                        activeFilter={activeFilter}
                        onFilterChange={changeFilter}
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        isLoading={isPageLoading}
                    />

                    <div className="flex flex-col">
                        {isLoading ? (
                            <div className="flex min-h-[200px] items-center justify-center">
                                <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900 dark:border-neutral-700 dark:border-t-white" />
                            </div>
                        ) : filteredEvents.length > 0 ? (
                            <>
                                <div className="flex-1">
                                    <EventsGrid events={paginatedEvents} />
                                </div>
                                {totalPages > 1 && (
                                    <EventsPagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={goToPage}
                                        onPrevPage={goToPrevPage}
                                        onNextPage={goToNextPage}
                                        isLoading={isPageLoading}
                                    />
                                )}
                            </>
                        ) : (
                            <EventsEmpty
                                hasEvents={events.length > 0}
                                searchQuery={searchQuery}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

