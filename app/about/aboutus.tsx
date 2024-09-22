"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";

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
              `https://api.github.com/users/${member.github.split("/").pop()}`
            );
            const data = await response.json();
            return { ...member, image: data.avatar_url, name: data.login };
          } catch (error) {
            console.error(
              `Error fetching GitHub profile for ${member.name}:`,
              error
            );
            return member;
          }
        })
      );
      setTeamMembers(updatedMembers);
    };

    fetchGitHubProfiles();
  }, [teamMembers]);

  return (
    <div className="min-h-screen bg-[#09090B] text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 mt-[6rem]">
          <h1 className="text-6xl font-bold mb-6">About Us</h1>
          <p className="text-2xl font-bold text-gray-300 max-w-3xl mx-auto">
            Welcome to Arka Linux GUI, formerly known as Arch Linux GUI.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We provide a fast, offline Arch installer with a graphical user
            interface.
          </p>
        </div>

        <div className="lg:flex lg:space-x-12 items-start mb-16">
          <div className="flex-1 mb-12 lg:mb-0">
            <div className="flex justify-center items-center h-full">
              <Image
                src="/alg-logo.png"
                alt="Arka Linux GUI Logo"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex-1 text-gray-300">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                At Arka Linux GUI, our mission is to simplify the installation
                process of Arch Linux by providing a user-friendly graphical
                interface. We aim to make Arch Linux accessible to everyone,
                from beginners to advanced users.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our History</h2>
              <p className="leading-relaxed">
                Originally launched as Arch Linux GUI, we have rebranded to Arka
                Linux GUI to better reflect our vision and goals. Over the
                years, we have evolved to provide a robust, offline installer
                that caters to the needs of our diverse user base.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
              <p className="leading-relaxed">
                We are a dedicated team of developers, designers, and
                open-source enthusiasts who are passionate about creating a
                seamless and efficient installation experience for Arch Linux
                users. Our commitment to quality and user satisfaction drives us
                to continually improve and innovate.
              </p>
            </div>
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
            >
              <div className="bg-[#131315] rounded-lg shadow-lg p-8 text-center hover:bg-[#232324] cursor-pointer transition-colors duration-300 h-full">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <Image
                      src={member.image || "/alg-logo.png"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-semibold mb-2">
                      {member.name || "---------"}
                    </h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                  <p className="text-gray-400 mt-2">{member.description}</p>
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
