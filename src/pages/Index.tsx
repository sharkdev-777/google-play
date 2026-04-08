import Header from "@/components/Header";
import AppInfo from "@/components/AppInfo";
import Screenshots from "@/components/Screenshots";
import AboutSection from "@/components/AboutSection";
import DataSafety from "@/components/DataSafety";
import RatingsSection from "@/components/RatingsSection";
import Sidebar from "@/components/Sidebar";
import WhatsNew from "@/components/WhatsNew";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex flex-col gap-10">
          <div className="flex-1 min-w-0 space-y-8">
            <AppInfo />
            <Screenshots />
            <AboutSection />
            <DataSafety />
            <RatingsSection />
            <WhatsNew />
          </div>
          <div className="w-full flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
