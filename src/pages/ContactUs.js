import React from "react";
import Hero from "../components/Hero";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  // Fungsi untuk membuka WhatsApp di halaman baru dengan nomor dan pesan yang ditentukan
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281998348555"; // Nomor WhatsApp
    const message = "Halo, Saya ingin booking tour!"; // Pesan yang ingin dikirim
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  const handleFindUsClick = () => {
    window.open("https://maps.app.goo.gl/eQLYyWQPfBnStjf29");
  };
  const { t } = useTranslation();
  return (
    <div>
      <Hero
        header={t("contact.headerContactUs")}
        text={t("contact.textContact")}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
      />
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-0">
            <div>
              <MapContainer
                center={[-8.1619, 115.0298]} // Koordinat Lovina, Bali
                zoom={13}
                style={{
                  height: "400px",
                  width: "100%",
                  borderRadius: "10px",
                  zIndex: 0,
                }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[-8.1619, 115.0298]}>
                  <Popup>Lovina, Bali</Popup>
                </Marker>
              </MapContainer>
              {/* Tombol "Find Us" */}
            </div>
            <div className="flex flex-col ">
              <p className="text-lg leading-relaxed text-justify">
                {t("contact.paragContact")}
              </p>
              <button
                className="text-lg  mb-4 mt-4 text-start underline"
                onClick={handleWhatsAppClick}
              >
                <FaPhone className="inline-block mr-4 text-2xl" />
                +6281998348555
              </button>
              <p className="text-lg leading-relaxed mb-4">
                <FaEnvelope className="inline-block mr-4 text-2xl" />
                awixrock@gmail.com
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <FaMapMarkerAlt className="inline-block mr-4 text-2xl" />
                Jalan Lovina, Buleleng, Bali
              </p>
              <div className="text-center mt-4">
                <button
                  onClick={handleFindUsClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  {t("contact.buttonContact")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
