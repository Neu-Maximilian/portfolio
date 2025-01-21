import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaGithub, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { HiMail, HiPhone, HiUser } from "react-icons/hi";
import { BsChatTextFill, BsTelephone } from "react-icons/bs";
import Footer from "../components/Footer";
import { Modal } from "antd";
import {
  DETAILS,
  CONTACTS,
  SOCIAL_LINKS,
  SOCIAL_PROFILES,
  CONTACTS_ACTIONS,
} from "../constants/constants";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Informations de contact</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Pays:</span>
                <span className="text-LightGray md:text-sm">
                  {DETAILS.Pays}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Ville:</span>
                <span className="text-LightGray md:text-sm">
                  {DETAILS.Ville}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Entreprise:</span>
                <span className="text-LightGray md:text-sm">
                  {DETAILS.Entreprise}
                </span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">{CONTACTS.EMAIL}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="text-LightGray text-sm">
                  {SOCIAL_PROFILES.LINKEDIN}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Téléphone:</span>
                <span className="text-LightGray text-sm">{CONTACTS.PHONE}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={CONTACTS_ACTIONS.EMAIL}
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={CONTACTS_ACTIONS.PHONE}
            target="_blank"
            rel="noreferrer"
          >
            <HiPhone />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Entrer en contact</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <form
              action="https://formspree.io/f/mleyzwoq"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
            >
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    name="name"
                    placeholder="Nom"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    type="email"
                    className="input_stylings"
                    name="_replyto"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                  >
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    className="input_stylings"
                    name="message"
                    placeholder="Message"
                  />
                </div>
              </div>

              <div className="my-4">
                <button type="submit" className="button">
                  {" "}
                  ENVOYER LE MESSAGE{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* modal de succès */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        centered
        open={isOpen}
        footer={null}
        closable={true}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">
            Message envoyé avec succès!
          </h1>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
