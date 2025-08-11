import React, { useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import PartnersAPI from "../services/partnersAPI";
import MembersAPI from "../services/MembersAPI";
<<<<<<< HEAD
import backgroundsAPI from "../services/BackgroundAPI";
import Loader from "../components/common/Loader"; // يمكنك إنشاء لودر بسيط كمكون
import FounderSection from "../components/home/FounderSection";

// Lazy load components
const HeroSection = lazy(() => import("../components/home/HeroSection"));
const PartnersSection = lazy(() => import("../components/home/PartnersSection"));
const VisionSection = lazy(() => import("../components/home/VisionSection"));
const GoalsSection = lazy(() => import("../components/home/GoalsSection"));
const MembersSection = lazy(() => import("../components/home/MembersSection"));

=======
import backgroundsAPI from "../services/backgroundAPI";
>>>>>>> 188e74f1209066fa08c0f2bfcc627d0605395a38
const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [allPartners, setAllPartners] = useState(null);
  const [members, setMembers] = useState(null);
  const [platformUrl, setPlatformUrl] = useState(null);
  const [institutionWordUrl, setInstitutionWordUrl] = useState(null);
  const [golesUrl, setGolesUrl] = useState(null);

  useEffect(() => {
    async function fetchAllData() {
      try {
        const [partnersRes, membersRes, backgroundRes] = await Promise.all([
          PartnersAPI.getAllPartners(),
          MembersAPI.getAllMember(),
          backgroundsAPI.getSection({ sections: ["platform", "institutionWord", "goles"] }),
        ]);

        setAllPartners(partnersRes.data);
        setMembers(membersRes.data);

        backgroundRes.data.data.forEach((bac) => {
          if (bac.section === "platform") setPlatformUrl(bac.url);
          if (bac.section === "institutionWord") setInstitutionWordUrl(bac.url);
          if (bac.section === "goles") setGolesUrl(bac.url);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchAllData();
  }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection platformUrl={platformUrl} currentLang={currentLang} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <PartnersSection allPartners={allPartners} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <VisionSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FounderSection institutionWordUrl={institutionWordUrl} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <GoalsSection golesUrl={golesUrl} currentLang={currentLang} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <MembersSection members={members} currentLang={currentLang} />
      </Suspense>
    </>
  );
};

export default Home;
