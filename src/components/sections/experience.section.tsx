import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkExperienceList } from "../work-experience-list";

export function ExperienceSection() {
  return (
    <section
      id="experience-section"
      className="my-max-width w-full"
    >
      <Tabs defaultValue="work">
        <TabsList className="bg-my-accent-green w-full">
          <TabsTrigger
            value="work"
            className="text-my-white data-[state=active]:bg-my-accent-orange"
          >
            Work
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="text-my-white data-[state=active]:bg-my-accent-orange"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <WorkExperienceList />
        </TabsContent>
        <TabsContent value="education">Educaiton</TabsContent>
      </Tabs>
    </section>
  );
}
