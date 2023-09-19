import { scrollToSection } from "@/services/functions";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function useScrollToSectionId() {
        const searchParams = useSearchParams();

        useEffect(() => {
          const section = searchParams.get("section");

          console.log(section);
          if (section) {
            scrollToSection(section); // Use the section identifier from the query
            }
        }, [searchParams]);
    
    return null;
}

export default useScrollToSectionId;