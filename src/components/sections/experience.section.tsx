import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn-io/tabs";
import { EducationHistoryList } from "../education-history-list";
import { WorkExperienceList } from "../work-experience-list";

export function ExperienceSection() {
  return (
    <section
      id="experience-section"
      className="my-max-width w-full space-y-4"
    >
      <h1 className="text-my-headline text-3xl font-semibold">Experience</h1>
      <Tabs defaultValue="work">
        <TabsList
          className="bg-my-accent-green w-full"
          activeClassName="bg-my-accent-orange"
        >
          <TabsTrigger
            value="work"
            className="text-my-white data-[state=active]:text-my-white data-[state=active]:bg-my-accent-orange"
          >
            Work
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="text-my-white data-[state=active]:text-my-white data-[state=active]:bg-my-accent-orange"
          >
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContents>
          <TabsContent value="work">
            <WorkExperienceList />
          </TabsContent>
          <TabsContent value="education">
            <EducationHistoryList />
          </TabsContent>
        </TabsContents>
      </Tabs>
    </section>
  );
}
