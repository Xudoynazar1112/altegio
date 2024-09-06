import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faFaceLaughBeam } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Price = ({ id, icon, title, desc }) => {
  return (
    <a href="/contract" className="shadow p-5 hover:shadow-xl" key={id}>
      <FontAwesomeIcon icon={icon} className="bg-yellow-400 rounded-full text-gray-600 p-2" />
      <p className="font-semibold pt-3 pb-1">{title}</p>
      <p className="truncate">{desc}</p>
    </a>
  );
};

const Pricing = () => {
  return (
    <>
      <p className="text-2xl text-center py-5">
        Biznes faoliyat turingizni tanlang
      </p>
      <section className="p-5 grid grid-cols-4 gap-10">
        <Price
          id={1}
          icon={faScissors}
          title="Go'zallik"
          desc="Xullas go'zallik salonidayam ko'p ishlani qilish mumkin-da."
        />
        <Price
          id={2}
          icon={faDumbbell}
          title="Go'zallik"
          desc="Xullas go'zallik salonidayam ko'p ishlani qilish mumkin-da."
        />
        <Price
          id={3}
          icon={faHeartPulse}
          title="Go'zallik"
          desc="Xullas go'zallik salonidayam ko'p ishlani qilish mumkin-da."
        />
        <Price
          id={4}
          icon={faGraduationCap}
          title="Go'zallik"
          desc="Xullas go'zallik salonidayam ko'p ishlani qilish mumkin-da."
        />
        <Price
          id={5}
          icon={faHeadset}
          title="Go'zallik"
          desc="Xullas go'zallik salonidayam ko'p ishlani qilish mumkin-da."
        />
        <Price
          id={6}
          icon={faCar}
          title="Go'zallik"
          desc="Xullas go'zallik salonidayam ko'p ishlani qilish mumkin-da."
        />
        <Price
          id={7}
          icon={faFaceLaughBeam}
          title="Go'zallik"
          desc="Xullas go'zallik salonidayam ko'p ishlani qilish mumkin-da."
        />
        <Price
          id={8}
          icon={faBagShopping}
          title="Go'zallik"
          desc="Xullas go'zallik salonidayam ko'p ishlani qilish mumkin-da."
        />
      </section>
      <div className="bg-gray-100 w-full p-8 m-5 rounded flex justify-between items-center">
        <div>
          <p className="font-semibold text-xl pb-2">Didn't find the right type of business?</p>
          <p className="w-2/3 text-sm">
            The Altegio digital platform is suitable for any service business.
            Register your branch for free and wait for a call from a consultant
            to choose the best plan.
          </p>
        </div>
        <a href="#" className="bg-yellow-400 rounded-xl font-semibold px-14 pt-4 h-14">Try it for free</a>
      </div>
    </>
  );
};

export default Pricing;
