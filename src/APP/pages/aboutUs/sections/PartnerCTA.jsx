import AaronAbubakar from "../../../../assets/images/aboutPage/creativeTeam/aaron-abubakar.png";
import PamelaOwino from "../../../../assets/images/aboutPage/creativeTeam/pamela-owino.png";
import EmmyAkinyi from "../../../../assets/images/aboutPage/creativeTeam/emmy-akinyi.png";
import TempPic from "../../../../assets/images/aboutPage/leadership/james-otieno.png";
import {
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../../../../assets/images/socials";
import Caroussel from "../../../components/Caroussel";

const CreativeTeamData = [
  {
    name: "Emmy Akinyi",
    title: "UX Team Lead",
    image: EmmyAkinyi,
  },
  {
    name: "Pamela Owino",
    title: "Lead Product Designer",
    image: PamelaOwino,
  },
  {
    name: "Aaron Abubakar",
    title: "Product Designer",
    image: AaronAbubakar,
  },
  {
    name: "Robert Okusi",
    title: "Product Designer",
    image: TempPic,
  },
  {
    name: "Temitayo",
    title: "Product Designer",
    image: TempPic,
  },
];

function PartnerCTA() {
  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font text-[#323433] text-center">
        The Creative Team
      </h1>

      <Caroussel CarousselData={CreativeTeamData}/>
      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-28">
        <div className="space-y-4 mb-8 sm:mb-0">
          <h3 className="font-semibold text-md sm:text-xl">Our Reports</h3>
          <p><a href="/" className="text-[#009975] text-sm sm:text-base">Annual SpaceYaTech  Report - 2022</a></p>
          <p><a href="/" className="text-[#009975] text-sm sm:text-base">Mentorlst Leadership and Growth</a></p>
        </div>
        <div>
          <h3 className="font-semibold">Follow us on social media </h3>
          <div className="flex items-center w-1/2 justify-between sm:justify-between py-4">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" className="w-7 h7" />
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" className="w-7 h7" />
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" className="w-7 h7" />
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="w-7 h7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerCTA;
