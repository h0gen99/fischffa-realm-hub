import { Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import Home from "@/pages/Home";
import Gamemodes from "@/pages/Gamemodes";
import Beitreten from "@/pages/Beitreten";
import Regeln from "@/pages/Regeln";
import Support from "@/pages/Support";
import UeberUns from "@/pages/UeberUns";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gamemodes" element={<Gamemodes />} />
        <Route path="/beitreten" element={<Beitreten />} />
        <Route path="/regeln" element={<Regeln />} />
        <Route path="/support" element={<Support />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
