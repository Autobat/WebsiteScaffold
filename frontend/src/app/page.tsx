import { LayoutBlock } from "@/components/blocks/PageLayoutBlock";
import RichText from "@/components/RichText";
import { getHomePage } from "@/lib/content";
import { Page as PageProps } from "@/payload-types";

export default async function Home() {
  
  console.log({
    message: 'home page requested',
    mode: {},
  });

  const homePageData = await getHomePage() as PageProps;

  
  return (
    <div id="contentPanel" 
          className=" flex
                      flex-row
                      h-full ">
      
     
      {/* The content on the page */}
      <main id="contentBlock" 
            className=" flex-1
                        p-4 ">
        <article 
          className=" flex
                      flex-col
                      px-1
                      h-full">
            {
              <h1>{homePageData.title}</h1>
            }
            {
              homePageData.hero.richText && 
              <RichText className="Standard" data={homePageData.hero.richText}/>
            }
            {
              homePageData.layout &&
              <LayoutBlock data={homePageData.layout}/>
            }
        </article>
      </main>
    </div>
  );
}
