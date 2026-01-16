"use client";

import { useState, useCallback, useEffect } from "react";
import { useMyEvents } from "@/hooks/my-events";
import { Navbar } from "@/components/ui/navbar";
import {
    MyEventsHeader,
    MyEventsFilters,
    MyEventsGrid,
    MyEventsEmpty,
    MyEventsPagination,
} from "@/components/my-events";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { OrganizeTypeCards, IndividualFormDialog, OrganizationFormDialog } from "@/components/organize";

export default function MyEventsPage() {
    const {
        user,
        events,
        filteredEvents,
        paginatedEvents,
        isLoading,
        isPageLoading,
        eventType,
        changeEventType,
        activeFilter,
        changeFilter,
        searchQuery,
        setSearchQuery,
        joinedCount,
        organizedCount,
        currentPage,
        totalPages,
        goToPage,
        goToNextPage,
        goToPrevPage,
        shouldOpenOrganizeModal,
        clearOpenOrganizeModal,
        hasRejectedOrgs,
        rejectedOrganizations,
        pendingOrganizations,
        dismissAllRejectedOrgs,
    } = useMyEvents();
    
    const [isOrganizeModalOpen, setIsOrganizeModalOpen] = useState(false);
    const [isIndividualFormOpen, setIsIndividualFormOpen] = useState(false);
    const [isOrganizationFormOpen, setIsOrganizationFormOpen] = useState(false);
    
    const handleOpenOrganizeModal = useCallback(() => {
        setIsOrganizeModalOpen(true);
    }, []);
    
    // Open modal when shouldOpenOrganizeModal is true
    useEffect(() => {
        if (shouldOpenOrganizeModal) {
            // Use setTimeout to avoid synchronous state update warning
            const timeoutId = setTimeout(() => {
                setIsOrganizeModalOpen(true);
                clearOpenOrganizeModal();
            }, 0);
            return () => clearTimeout(timeoutId);
        }
    }, [shouldOpenOrganizeModal, clearOpenOrganizeModal]);

    if (!user) {
        return null;
    }

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
                    <MyEventsHeader 
                        eventsCount={filteredEvents.length}
                        eventType={eventType}
                        onEventTypeChange={changeEventType}
                        isLoading={isPageLoading}
                        joinedCount={joinedCount}
                        organizedCount={organizedCount}
                        shouldOpenOrganizeModal={shouldOpenOrganizeModal}
                        onOrganizeModalOpenChange={clearOpenOrganizeModal}
                        isOrganizeModalOpen={isOrganizeModalOpen}
                        onOrganizeModalOpenChangeInternal={setIsOrganizeModalOpen}
                        hasRejectedOrgs={hasRejectedOrgs}
                        hasPendingOrgs={pendingOrganizations.length > 0}
                    />

                    <MyEventsFilters
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
                                    <MyEventsGrid events={paginatedEvents} />
                                </div>
                                {totalPages > 1 && (
                                    <MyEventsPagination
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
                            <MyEventsEmpty
                                hasEvents={events.length > 0}
                                searchQuery={searchQuery}
                                eventType={eventType}
                                onOrganizeClick={handleOpenOrganizeModal}
                            />
                        )}
                    </div>
                </div>
            </main>
            
            {/* Organize Modal Dialog - Moved from header */}
            <Dialog open={isOrganizeModalOpen} onOpenChange={setIsOrganizeModalOpen}>
                <DialogContent
                    className="max-w-2xl w-full p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800"
                    onClose={() => setIsOrganizeModalOpen(false)}
                >
                    <div className="w-full">
                        <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 text-center">
                            How do you want to organize your event?
                        </h2>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 text-center">
                            Choose the option that best fits your needs
                        </p>
                        <OrganizeTypeCards
                            onTypeSelect={(type: "individual" | "organization") => {
                                if (type === "individual") {
                                    setIsOrganizeModalOpen(false);
                                    setIsIndividualFormOpen(true);
                                } else {
                                    setIsOrganizeModalOpen(false);
                                    setIsOrganizationFormOpen(true);
                                }
                            }}
                            rejectedOrganizations={rejectedOrganizations}
                            pendingOrganizations={pendingOrganizations}
                            onDismissRejected={dismissAllRejectedOrgs}
                        />
                    </div>
                </DialogContent>
            </Dialog>

            {/* Individual Form Dialog */}
            <IndividualFormDialog
                open={isIndividualFormOpen}
                onOpenChange={setIsIndividualFormOpen}
            />

            {/* Organization Form Dialog */}
            <OrganizationFormDialog
                open={isOrganizationFormOpen}
                onOpenChange={setIsOrganizationFormOpen}
            />
        </div>
    );
}
