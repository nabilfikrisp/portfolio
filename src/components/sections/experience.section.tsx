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
            Account
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="text-my-white data-[state=active]:bg-my-accent-orange"
          >
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <WorkExperienceList />
        </TabsContent>
        <TabsContent value="password">Password</TabsContent>
      </Tabs>
    </section>
  );
}
