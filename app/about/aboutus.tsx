"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "",
      role: "Founder and Core Team - Developer",
      image: "",
      github: "https://github.com/demonkillerr",
      description:
        "DemonKiller is the original creator and lead developer of Arka Linux GUI. He started the project in late 2020 with goal to make Arch Linux more accessible to users around the world.",
    },
    {
      name: "",
      role: "Core Team - Developer",
      image: "",
      github: "https://github.com/Akash6222",
      description:
        "A dedicated developer focused on improving the user experience and functionality.",
    },
    {
      name: "",
      role: "Core Team - Developer",
      image: "",
      github: "https://github.com/harshau007",
      description:
        "A dedicated developer focused on improving the user experience and functionality.",
    },
  ]);

  useEffect(() => {
    const fetchGitHubProfiles = async () => {
      const updatedMembers = await Promise.all(
        teamMembers.map(async (member) => {
          try {
            const response = await fetch(
              `https://api.github.com/users/${member.github.split("/").pop()}`,
            );
            const data = await response.json();
            return { ...member, image: data.avatar_url, name: data.login };
          } catch (error) {
            console.error(
              `Error fetching GitHub profile for ${member.name}:`,
              error,
            );
            return member;
          }
        }),
      );
      setTeamMembers(updatedMembers);
    };

    fetchGitHubProfiles();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 mt-[6rem]">
          <h1 className="text-6xl font-bold mb-6">About Us</h1>
          <p className="text-2xl font-bold max-w-3xl mx-auto">
            Welcome to Arka Linux GUI, formerly known as Arch Linux GUI.
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            We provide a simple Arch Linux distribution with a focus towards simplicity.
          </p>
          <p>
            The project has been known as ALG, it's abbreviation, since the project's inception.
          </p>
        </div>

        <div className="lg:flex lg:space-x-12 items-start mb-16">
          <div className="flex-1 mb-12 lg:mb-0">
            <div className="flex justify-center items-center h-full">
              <Image
                src="https://github.com/arch-linux-gui/artwork/blob/dev/logo.png?raw=true"
                alt="Arka Linux GUI Logo"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                Our mission is to simplify the installation
                and use of Arch Linux. We want to provide users with an amazing
                experience of using an Arch Based Distribution.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our History</h2>
              <p className="leading-relaxed">
                While we originally started as a installer for Arch Linux, we
                have deviated enough from that idea, to be considered a full
                distribution. We are very proud to be based on Arch Linux, without which,
                this project would not have existed.
              </p>
            </div>
            {/* <div>
              <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
              <p className="leading-relaxed">
                We are a dedicated team of developers, designers, and
                open-source enthusiasts who are passionate about creating a
                seamless and efficient installation experience for Arch Linux
                users. Our commitment to quality and user satisfaction drives us
                to continually improve and innovate.
              </p>
            </div> */}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <Link
              href={member.github}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] rounded-lg shadow-lg p-8 text-center cursor-pointer transition-all duration-300 h-full hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200 dark:hover:from-[#0f0f15] dark:hover:to-[#0d0d10]">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <Image
                      src={member.image || "https://github.com/arch-linux-gui/artwork/blob/dev/logo.png?raw=true"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4 transition-transform duration-300 hover:scale-110"
                    />
                    <h3 className="text-2xl font-semibold mb-2">
                      {member.name || "---------"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.role}
                    </p>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-200">
                    {member.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
