import { data } from "../fakeData/data.js";
export const getAllService = (req, res) => {
  const allService = data.options;
  res.status(200).send(allService);
};

export const doctorsWithProfession = (req, res) => {
  const { profession } = req.body;
  if (!profession) {
    res.status(400).send("Profession not provided");
    return;
  }
  const getDoctors = data.doctors.filter((doctor) => {
    const professions = doctor.profession.toLowerCase().split("/");
    return professions.includes(profession.toLowerCase());
  });

  if (doctorsWithProfession.length === 0) {
    res.status(404).send("No doctors found with this profession");
  }
  res.status(200).send(getDoctors);
};
