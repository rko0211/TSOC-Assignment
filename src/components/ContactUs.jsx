import React from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "emailjs-com";
// Country List Array
const countries = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
];

const HiringRequestForm = () => {
  const { handleSubmit, control, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const userName = data.contactName;
    const userEmail = data.email;

    // Email to the user
    const userParams = {
      to_name: userName,
      user_email: userEmail,
      message: "Thank you for filling out the form! We will get back to you soon.",
    };

    // Email to the owner
    const ownerParams = {
      from_name: userName,
      user_email: userEmail,
      form_details: `The user ${userName} (${userEmail}) has filled out the form. Check the admin dashboard for more details.`,
    };

    // Send email to user
    emailjs
      .send("service_sj8o50p", "template_vmn7kn8", userParams, "QIJVal9LcHCwz9bc1")
      .then(
        (response) => {
          console.log("User email sent successfully!", response.status, response.text);
        },
        (error) => {
          console.error("Failed to send user email:", error);
        }
      );

    // Send email to owner
    emailjs
      .send("service_sj8o50p", "template_i55l5gu", ownerParams, "QIJVal9LcHCwz9bc1")
      .then(
        (response) => {
          console.log("Owner email sent successfully!", response.status, response.text);
        },
        (error) => {
          console.error("Failed to send owner email:", error);
        }
      );

    alert("Form has been submitted successfully!");
  };


  return (
    <div className="flex flex-col lg:flex-row justify-between items-start max-w-7xl mx-auto p-6 lg:p-12 ">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hiring Request</h1>
        <p className="text-gray-600 mb-6">
          Unlock the potential of your business with top-tier professionals. We
          provide custom hiring solutions for every industry, ensuring you find
          the perfect fit.
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="bg-[#EEF8FF] p-5">
        <div className="w-full  bg-white shadow-lg p-6  rounded-md">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Contact Name & Company */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Contact Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("contactName", { required: true })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Company Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="ABC Pvt Ltd"
                  {...register("companyName", { required: true })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Email Address<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  {...register("email", { required: true })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Phone Number<span className="text-red-600">*</span>
                </label>
                <div className="flex">
                  <Controller
                    name="country"
                    control={control}
                    defaultValue={countries[0].name}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="p-2 bg-gray-100 border-r rounded-l focus:outline-none"
                      >
                        {countries.map((country) => (
                          <option key={country.name} value={country.name}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  <input
                    type="tel"
                    placeholder="000-000-0000"
                    {...register("phone", { required: true })}
                    className="w-full p-2 border rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Country & City */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Country you're based in<span className="text-red-600">*</span>
                </label>
                <select
                  {...register("baseCountry", { required: true })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>New Zealand</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">
                  City you're operating from<span className="text-red-600">*</span>
                </label>
                <select
                  {...register("city", { required: true })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Select City</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Kolkata</option>
                </select>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Role you are looking to hire<span className="text-red-600">*</span>
              </label>
              <select
                {...register("role", { required: true })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Role</option>
                <option>Fullstack Developer</option>
                <option>Android Developer</option>
                <option>Machine Learning Engineer</option>
              </select>
            </div>

            {/* Employment Type */}
            <div className="flex flex-wrap justify-between items-center gap-5">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Employment type you're offering?<span className="text-red-600">*</span>
                </label>
                <div className="flex flex-col gap-6">
                  {[
                    "Full-time",
                    "Part-time",
                    "Internship",
                  ].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-[#292929]">
                      <input type="checkbox" {...register("employmentType")} />
                      {type}
                    </label>
                  ))}
                </div>

              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Skill Level<span className="text-red-600">*</span>
                </label>
                <div className="flex flex-col gap-6">
                  {[
                    "Intermediate Level",
                    "Junior Level",
                    "Senior Level",
                  ].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-[#292929]">
                      <input type="checkbox" {...register("skillLevel")} />
                      {type}
                    </label>
                  ))}
                </div>

              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Are these position onsite or Remote<span className="text-red-600">*</span>
                </label>
                <div className="flex flex-col gap-6">
                  {["Onsite", "Remote"].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-[#292929]">
                      <input type="checkbox" {...register("positionType")} />
                      {type}
                    </label>
                  ))}
                </div>

              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Budget (INR)<span className="text-red-600">*</span>
              </label>
              <input
                {...register("budget", { required: "Budget is required" })}
                type="number"
                placeholder="Enter budget"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {/* {errors.budget && <span className="text-red-500 text-sm">{errors.budget.message}</span>} */}
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Additional Information<span className="text-red-600">*</span>
              </label>
              <input

                placeholder="Type Message"
                {...register("AdditionalInfo", { required: "Info is required" })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required

              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className=" bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-all"
            >
              Submit Request
            </button>
          </form >
        </div >
      </div >
    </div>
  );
};

export default HiringRequestForm;
