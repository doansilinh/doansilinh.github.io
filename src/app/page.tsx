import { SocialLink } from "@/components/SocialLink";
import { Twitter, Instagram, Github, Linkedin, Facebook, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const links = [
    {
      label: "gmail",
      href: "mailto:doansilinh04@gmail.com",
      icon: <Mail size={28} />,
      hoverColor: "#ea4335",
    },
    {
      label: "github",
      href: "https://github.com/doansilinh",
      icon: <Github size={28} />,
      hoverColor: "#a1a1a1",
    },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/doansilinh04",
      icon: <Linkedin size={28} />,
      hoverColor: "#0077b5",
    },
    {
      label: "facebook",
      href: "https://www.facebook.com/doansilinh",
      icon: <Facebook size={28} />,
      hoverColor: "#1877f2",
    },
    {
      label: "twitter",
      href: "https://x.com/doansilinh",
      icon: <Twitter size={28} />,
      hoverColor: "#a687ca",
    },
    {
      label: "instagram",
      href: "https://www.instagram.com/doansilinh",
      icon: <Instagram size={28} />,
      hoverColor: "#7cced7",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-white">
      <div className="flex flex-col items-center max-w-[520px] w-full">
        {/* Profile Section */}
        <div className="relative w-[138px] h-[138px] mb-4 overflow-hidden rounded-full border-2 border-white/10">
          <Image
            src="/avatar.jpg"
            alt="Profile Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <h1 className="text-2xl font-bold mb-1 text-white uppercase tracking-tight">Doan Si Linh</h1>
        <p className="text-white font-bold text-lg mb-8">Data Engineer | AI Engineer</p>

        {/* Links Section */}
        <div className="flex flex-col w-full">
          {links.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </div>

      </div>
    </main>
  );
}
