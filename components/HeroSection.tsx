"use client"; // This is a client component for Next.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

// Typing effect hook
const useTypingEffect = (
  text: string, // The text to type
  duration: number, // Typing duration
  delay: number = 0 // Delay before typing starts
) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let typingInterval: NodeJS.Timeout | null = null;

    const typeText = () => {
      typingInterval = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText((prev) => prev + text[charIndex]);
          charIndex++;
        } else {
          clearInterval(typingInterval!); // Stop typing when complete
        }
      }, duration / text.length);
    };

    const initialDelay = setTimeout(() => {
      setDisplayedText(""); // Clear text before starting
      typeText();
    }, delay); // Initial delay before typing starts

    return () => {
      clearInterval(typingInterval!);
      clearTimeout(initialDelay);
    }; // Cleanup
  }, [text, duration, delay]);

};

const HeroSection = () => {
  const [isFirstPhrase, setIsFirstPhrase] = useState(true); // Toggle between phrases

  // Switch between the two phrases every 6 seconds
  useEffect(() => {
    const switchInterval = setInterval(() => {
      setIsFirstPhrase((prev) => !prev);
    }, 6000); // 3 seconds to type + 3 seconds pause

    return () => clearInterval(switchInterval); // Cleanup
  }, []);

  const firstPhraseText = useTypingEffect("Innovation in Every Line of Code", 3000, 0);
  const secondPhraseText = useTypingEffect("akusuka", 3000, 0);

  // Determine the current phrase
  const displayedPhrase = isFirstPhrase ? firstPhraseText : secondPhraseText;

  // Copy functionality for pip command
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const pipCommand = "pip install djangofusion-dot";
    navigator.clipboard.writeText(pipCommand).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <>
      {/* Inline CSS for blinking effect */}
      <style jsx>{`
        .blinking-exclamation {
          animation: blink 2s steps(2, start) infinite;
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>

      <section id="home">
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/django_logo.PNG"
              alt="DjangoFusion Logo"
              width={325}
              height={325}
              className="rounded-full shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
              DjangoFusion
              <span className="blinking-exclamation">!</span>
            </h1>

            {/* Conditional rendering for subtitle */}
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              <span className="font-semibold text-teal-600">{displayedPhrase}</span>
              <br />
              <br />
              <span id="pip-command" className="flex items-center space-x-2">
                <code className="bg-gray-800 rounded-md p-2 text-sm md:text-base md:p-4 text-white whitespace-nowrap">
                  pip install djangofusion-dot
                </code>
                <button
                  onClick={handleCopy}
                  className="text-teal-600 bg-gray-800 rounded-md p-2 text-sm md:text-base md:p-4 hover:bg-gray-700 flex items-center"
                >
                  <i className="fa fa-copy" aria-hidden="true"></i>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </span>
            </p>

            {/* Links Section */}
            <div className="flex flex-col space-y-4">
              {/* Top Item */}
              <Link
                to="projects"
                style={{ width: "530px", height: "50px", fontSize: "25px" }}
                className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Docs
              </Link>

              {/* Bottom Row */}
              <div className="flex flex-row justify-center space-x-4">
                <Link
                  to="execute"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Execute Query
                </Link>
                <Link
                  to="insert_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Insert Data
                </Link>
                <Link
                  to="get_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Get Data
                </Link>
                <Link
                  to="update_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Update Data
                </Link>
              </div>


              <div className="flex flex-row justify-center space-x-4">
                <Link
                  to="delete_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Delete Data
                </Link>
                <Link
                  to="insert_and_get_id_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Insert and Get ID Data
                </Link>
                <Link
                  to="first_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  First Data
                </Link>
                <Link
                  to="Count_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Count Data
                </Link>
                </div>
                <div className="flex flex-row justify-center space-x-4">
                <Link
                  to="Pluck_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Pluck Data
                </Link>
                <Link
                  to="distinct_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Distinct Data
                </Link>
                <Link
                  to="order_by_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Order by Data
                </Link>
                <Link
                  to="exists_data"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Exists Data
                </Link>
                </div>
                <div className="flex flex-row justify-center space-x-4">
                <Link
                  to="fetch_records_with_condition"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Fetch Records With Condition
                </Link>
                <Link
                  to="get_a_single_value_from_a_table"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Get a Single Value From a Table
                </Link>
                <Link
                  to="save_an_uploaded_file_to_a_specific_directory"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Save an Uploaded File to a Specific Directory
                </Link>
                <Link
                  to="sum_data_from_a_column_in_a_table"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Sum Data from a Column in a Table
                </Link>
                </div>
                <div className="flex flex-row justify-center space-x-4">
                <Link
                  to="get_the_last_row_of_data_from_a_table"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Get the Last Row of Data from a Table
                </Link>
                <Link
                  to="convert_uuid_to_user_id_from_jwt"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Convert UUID to User ID from JWT
                </Link>
                <Link
                  to="validate_request_json_from_frontend"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Validate Request JSON from Frontend
                </Link>
                <Link
                  to="validate_http_method"
                  style={{ width: "120px", height: "50px", fontSize: "15px" }}
                  className="text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 flex items-center justify-center"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Validate HTTP Method
                </Link>
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;