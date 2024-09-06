import ManageBusiness from "./ManageBusiness";
import Services from "./Services";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="p-5">
      <p className="text-lg">
        Bizning ushbu xizmatimizdan foydalanib, siz o'z biznesingizda kuch va
        vqtdan yutihingiz mumkin bo'ladi.
      </p>
      <p className="font-black text-3xl text-center py-5 mt-5">
        Altegio uchrashuvga asoslangan biznesga muvaffaqiyatli xizmat qiladi
      </p>
      <div className="grid grid-cols-5 gap-4">
        <Services img="/images/beauty-salon.webp" def="Go'zallik saloni" />
        <Services img="/images/hair-salon.webp" def="Sartaroshxona" />
        <Services img="/images/barbershop.webp" def="Go'zallik saloni" />
        <Services img="/images/nail-salon.webp" def="Go'zallik saloni" />
        <Services img="/images/wellness-studio.webp" def="Go'zallik saloni" />
        <Services img="/images/tattoo-shop.webp" def="Go'zallik saloni" />
        <Services img="/images/piercing-studio.webp" def="Go'zallik saloni" />
        <Services img="/images/massage-salon.webp" def="Go'zallik saloni" />
        <Services img="/images/wax-bar.webp" def="Go'zallik saloni" />
        <Services img="/images/and-more.webp" def="Go'zallik saloni" />
      </div>
      <p className="font-black text-3xl text-center py-5 mt-5">
        Manage your business with an all-in-one platform
      </p>
      <p className="text-center w-1/2 pb-5 m-auto">
        Automate your routine with powerful tools for online booking,
        scheduling, client relationship management, analytics and more.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <ManageBusiness
          id={1}
          icon={faCalendarCheck}
          title="Online booking and payments"
          desc="Receive appointments 24/7 via your booking URL and get paid securely online."
        />
        <ManageBusiness
          id={2}
          icon={faCalendar}
          title="Online booking and payments"
          desc="Receive appointments 24/7 via your booking URL and get paid securely online."
        />
        <ManageBusiness
          id={3} 
          icon={faWallet}
          title="Online booking and payments"
          desc="Receive appointments 24/7 via your booking URL and get paid securely online."
        />
        <ManageBusiness
          id={4}
          icon={faBuilding}
          title="Online booking and payments"
          desc="Receive appointments 24/7 via your booking URL and get paid securely online."
        />
        <ManageBusiness
          id={5}
          icon={faMessage}
          title="Online booking and payments"
          desc="Receive appointments 24/7 via your booking URL and get paid securely online."
        />
        <ManageBusiness
          id={6}
          icon={faBookOpen}
          title="Online booking and payments"
          desc="Receive appointments 24/7 via your booking URL and get paid securely online."
        />
      </div>
    </div>
  );
};

export default HomePage;
