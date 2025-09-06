"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { EducationHistoryList } from "./education-history-list";
import { WorkExperienceList } from "./work-experience-list";

export function ExpereienceTabs() {
  const [tab, setTab] = useState("work");

  function onTabChange(value: string) {
    setTab(value);
  }
  return (
    <Tabs
      value={tab}
      onValueChange={onTabChange}
    >
      <TabsList className="bg-my-accent-green relative w-full rounded-lg">
        {/* Sliding background (this is magic) */}
        <span
          className={cn(
            "bg-my-accent-orange absolute inset-0 my-1 w-[calc(50%-4px)] rounded-md shadow-md transition-all duration-300 ease-out",
            tab === "work" ? "ml-1 translate-x-0" : "ml-1 translate-x-full",
          )}
        />

        <TabsTrigger
          value="work"
          className={cn(
            "text-my-white relative z-10 flex-1 text-center",
            // disable background and shadow for active tab
            "data-[state=active]:bg-transparent data-[state=active]:shadow-none",
          )}
        >
          Work
        </TabsTrigger>
        <TabsTrigger
          value="education"
          className={cn(
            "text-my-white relative z-10 flex-1 text-center",
            // disable background and shadow for active tab
            "data-[state=active]:bg-transparent data-[state=active]:shadow-none",
          )}
        >
          Education
        </TabsTrigger>
      </TabsList>

      <TabsContent value="work">
        <WorkExperienceList className="animate-spring-left" />
      </TabsContent>
      <TabsContent value="education">
        <EducationHistoryList className="animate-spring-right" />
      </TabsContent>
    </Tabs>
  );
}
