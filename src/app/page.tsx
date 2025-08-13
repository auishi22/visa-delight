import Advantages from "@/components/Advantages";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import ImmigrationInfo from "@/components/ImmigrationInfo";
import Support from "@/components/Support";
import Trusted from "@/components/Trusted";



export default function Home() {
  return (
    <div>
     <Banner/>

     {/* Category */}
     
      <Category/>
     <ImmigrationInfo/>
      <Advantages/>
      <Trusted/>
      <Support/>
      
    </div>
  );
}
