import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Input, Select, DatePicker, Image, Form, message } from "antd";
import moment from "moment";
import { formatPrice } from "../utills/helpers";
import Hero from "../components/Hero";
import Background from "../asset/pascal-muller-WDBM22JVApk-unsplash.jpg";
const { Option } = Select;

export const DetailPackage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    package: "",
    person: 0,
    price: "",
    pax: "",
    date: "",
    country: "--Select One--",
  });

  const disabledDate = (current) => {
    return current && current < moment().endOf("day");
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    let newPrice = form.price;
    // Prevent negative values for "person"
    if (name === "person" && parseInt(value) < 0) {
      return;
    }
    if (name === "person") {
      const additionalPrice = value
        ? selectedPackage.added * parseInt(value)
        : 0;
      newPrice = formatPrice(parseInt(selectedPackage.price) + additionalPrice);
    }
    setForm({
      ...form,
      [name]: value,
      price: newPrice,
    });
  };

  const priceString = form.price.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  const price = parseInt(priceString); // Parse the numeric string to an integer
  const downPayment = (30 / 100) * price;
  console.log("downPayment", downPayment);
  const onChange = (date, dateString) => {
    setForm({
      ...form,
      date: dateString,
    });
  };

  const handleBookingNow = () => {
    const {
      name,
      phone,
      package: packageName,
      person,
      price,
      date,
      country,
    } = form;

    // Validasi bahwa semua bidang formulir telah diisi
    if (
      !name ||
      !phone ||
      !packageName ||
      !person ||
      !price ||
      !date ||
      !country
    ) {
      message.info("Please fill in all fields before booking.");
      return;
    }

    if (country === "--Select One--") {
      message.info("Please select the country");
      return;
    }

    const whatsappMessage = `*AWIX DOLPHIN TOUR*%0A%0ABooking%20Details%0A${t(
      "form.name"
    )}%3A%20${name}%0A${t("form.phone")}%3A%20${phone}%0A${t(
      "form.package"
    )}%3A%20${packageName}%0A${t("form.pax")}%3A%20${person}%0A${t(
      "form.price"
    )}%3A%20${price}%0A${t("form.date")}%3A%20${date}%0A${t(
      "form.country"
    )}%3A%20${country}%0A%0A${"*Note*"}%0A${t("payment.text")}%0ABank%3A%20${t(
      "payment.bank"
    )}%0A${t("payment.acc")}%3A%20${t("payment.rek")}%0A${t(
      "payment.nama"
    )}%3A%20${t("payment.name")}%0A${t("payment.dp")}%3A%20${formatPrice(
      downPayment
    )}`;
    const whatsappURL = `https://wa.me/+6281238068638/?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          i18n.language === "en"
            ? require("../locales/en.json")
            : require("../locales/id.json");
        const packageFound = data.data.find((pkg) => pkg.id === parseInt(id));
        setSelectedPackage(packageFound);

        if (packageFound) {
          setForm((prevForm) => ({
            ...prevForm,
            package: packageFound.name.title,
            pax: packageFound.pax,
            price: formatPrice(packageFound.price),
          }));
        }
      } catch (error) {
        console.error("Error fetching package data: ", error);
      }
    };

    fetchData();
  }, [id, i18n.language]);

  if (!selectedPackage) {
    return <p>{t("packageNotFound")}</p>;
  }
  console.log(form.pax);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Hero
        header={t(selectedPackage.name.title)}
        style={
          "font-semibold text-lg md:text-2xl tracking-[5px] md:tracking-[10px]"
        }
        image={Background}
      />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="max-w-3xl p-4 md:p-8 bg-white shadow-lg rounded-lg col-span-8 md:col-span-8">
            <h2 className="text-xl font-bold mb-4 md:text-3xl text-center">
              {t(selectedPackage.name.title)} {t(selectedPackage.name.desc)}
            </h2>
            <Image
              src={require(`../${selectedPackage.img[0]}`)}
              alt={selectedPackage.name}
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-3 gap-4">
              {selectedPackage.img.slice(1, 4).map((img, index) => (
                <div key={index}>
                  <Image
                    src={require(`../${img}`)}
                    alt={selectedPackage.name}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-justify">
              {t(selectedPackage.description)}
            </p>
            <p className="mt-2 text-justify">
              <strong>{t(selectedPackage.personAndAdditional?.tittle)}</strong>{" "}
              <span>{t(selectedPackage.personAndAdditional?.person)}</span>
            </p>
            <p className="mt-2 text-justify">
              <strong>{t(selectedPackage.duration?.title)}</strong>{" "}
              <span>{t(selectedPackage.duration?.desc)}</span>
            </p>
            <p className="mt-2 font-bold">{t(selectedPackage.fas)}:</p>
            <ul className="list-disc pl-6 mt-2">
              {selectedPackage.facility.map((item, index) => (
                <li key={index} className="text-justify">
                  <strong>{t(item.title)} :</strong> {t(item.description)}
                </li>
              ))}
            </ul>
          </div>
          {/* Form booking */}
          <div className="max-w-md col-span-8 md:col-span-4">
            <div className="p-4 bg-white shadow-lg rounded-lg sticky top-28">
              <h2 className="text-3xl font-bold mb-4">Booking Form</h2>
              <Form className="space-y-6 md:space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-1 space-y-6 md:space-y-0">
                  <label className="block">
                    <span className="text-gray-700">{t("form.name")}</span>
                    <Input
                      required
                      type="text"
                      name="name"
                      className=" block w-full"
                      value={form.name}
                      onChange={handleChangeForm}
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">{t("form.phone")}</span>
                    <Input
                      required
                      type="number"
                      name="phone"
                      className=" block w-full"
                      value={form.phone}
                      onChange={handleChangeForm}
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-gray-700">Tour Package</span>
                  <Input
                    required
                    disabled
                    type="text"
                    name="package"
                    className=" block w-full"
                    value={`${form.package} / ${form.pax}`}
                    onChange={handleChangeForm}
                  />
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-1 space-y-6 md:space-y-0">
                  <label className="block">
                    <span className="text-gray-700">{t("form.pax")}</span>
                    <Input
                      required
                      type="number"
                      name="person"
                      className=" block w-full"
                      value={form.person}
                      onChange={handleChangeForm}
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">{t("form.price")}</span>
                    <Input
                      disabled
                      required
                      type="text"
                      id="price"
                      className=" block w-full"
                      value={form.price}
                      onChange={handleChangeForm}
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-gray-700">{t("form.date")}</span>
                  <Form.Item>
                    <DatePicker
                      required
                      name="date"
                      className=" block w-full"
                      disabledDate={disabledDate} // Menonaktifkan tanggal sebelum hari ini
                      format="DD MMMM YYYY" // Format tanggal
                      onChange={onChange}
                    />
                  </Form.Item>
                </label>
                <label className="block">
                  <span className="text-gray-700">{t("form.country")}</span>
                  <Form.Item name={"country"}>
                    <Select
                      id="country"
                      required
                      defaultValue={form.country}
                      className="block w-full"
                      onChange={(value) => setForm({ ...form, country: value })}
                    >
                      <Select.Option value="Indonesia">
                        Indonesian
                      </Select.Option>
                      <Select.Option value={"Overseas"}>Overseas</Select.Option>
                    </Select>
                  </Form.Item>
                </label>
                <div className="flex justify-end items-end py-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleBookingNow} // Menangani klik tombol "Booking Now"
                  >
                    Booking Now
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
