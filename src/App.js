import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MobilePage from "./stores/pages/MobilePage";
import AcPage from "./stores/pages/AcPage";
import LandingPage from "./stores/pages/LandingPage";
import BooksPage from "./stores/pages/BooksPage";
import ComputersPage from "./stores/pages/ComputersPage";
import FridgePage from "./stores/pages/FridgePage";
import FurniturePage from "./stores/pages/FurniturePage";
import KitchenPage from "./stores/pages/KitchenPage";
import MensPage from "./stores/pages/MensPage";
import SpeakerPage from "./stores/pages/SpeakerPage";
import TvPage from "./stores/pages/TvPage";
import WatchPage from "./stores/pages/WatchPage";
import WomeanPage from "./stores/pages/WomanPage";
import MobileSingle from "./singles/MobileSingle";
import AcSingle from "./singles/AcSingle";
import BooksSingle from "./singles/BooksSingle";
import ComputersSingle from "./singles/ComputersSingle";
import FridgeSingle from "./singles/FridgeSingle";
import FurnitureSingle from "./singles/FurnitureSingle";
import KitchensSingle from "./singles/KitchensSingle";
import MensSingle from "./singles/MensSingle";
import SpeakersSingle from "./singles/SpeakersSingle";
import TvSingle from "./singles/TvSingle";
import WatchesSingle from "./singles/WatchesSingle";
import WomansSingle from "./singles/WomansSingle";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/computers" element={<ComputersPage />} />
        <Route path="/fridges" element={<FridgePage />} />
        <Route path="/furnitures" element={<FurniturePage />} />
        <Route path="/kitchens" element={<KitchenPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/speakers" element={<SpeakerPage />} />
        <Route path="/tvs" element={<TvPage />} />
        <Route path="/watches" element={<WatchPage />} />
        <Route path="/womans" element={<WomeanPage />} />
        <Route path="/womans/:id" element={<WomansSingle />} />
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/ac/:id" element={<AcSingle />} />
        <Route path="/books/:id" element={<BooksSingle />} />
        <Route path="/furnitures/:id" element={<FurnitureSingle />} />
        <Route path="/computers/:id" element={<ComputersSingle />} />
        <Route path="/kitchens/:id" element={<KitchensSingle />} />
        <Route path="/fridges/:id" element={<FridgeSingle />} />
        <Route path="/mens/:id" element={<MensSingle />} />
        <Route path="/tvs:/id" element={<TvSingle />} />
        <Route path="/speakers/:id" element={<SpeakersSingle />} />
        <Route path="/watches/:id" element={<WatchesSingle />} />
      </Routes>
    </div>
  );
};

export default App;
