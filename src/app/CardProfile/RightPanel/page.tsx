// components/RightPanel.jsx

"use client";
import { useState } from "react";
import Image from "next/image";
import WeeklyNudges from "./WeeklyNudges";
import Link from "next/link";
const RightPanel = () => {
  const [activeTab, setActiveTab] = useState<"weekly" | "local">("weekly");
  return (
    <div className="rounded-xl bg-[#F4F8FF] p-5">
      {/* Header Section */}
      <div className="flex items-center gap-2">
        <div className="bg-[#6B8BBA] h-12 w-12 rounded-full flex items-center justify-center " >
            <Image
                            src={'/images/icons/headphone.svg'}
                            alt={'icon'}
                            width={20}
                            height={20}
                            className="w-8 h-8"
                            />
        </div>
        <div className="flex flex-col gap-2" >
            <span className="bg-[#D9ECFF]  text-base px-2 py-1 rounded-md font-medium w-fit">
            Pitch Adherence
            </span>
            <span className="text-base text-[#556E94]">
            Structured (3) • Un-Structured(2)
            </span>
        </div>
      </div>

      <div className="border-[#CDDAED] border-b mb-9 mt-6" ></div>

      {/* User Name */}
      <div className="mb-4">

        <div className="flex items-center gap-2.5 mb-11">
          <Image
          src={'/images/icons/user.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <h3 className="text-lg font-medium text-[#03070D]">User Name</h3>
        </div>

        <div className="flex items-center gap-2.5 mb-2.5">
          <Image
          src={'/images/icons/prompt.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Prompt</span>
        </div>

        <div className="">
          <p className="text-lg text-[#03070D] leading-relaxed">
            Please provide the detailed analytics for the video uploaded by
            Ameer Sheikh, including the video file, transcript and relevant
            indexes
          </p>

          {/* Meta */}
          <div className="flex gap-7 items-center mt-5 mb-7">

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">1k</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">5m</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/star.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-[#556E94]">2 days ago</span>
            </div>
          </div>

          
          {/* Actions */}
          <div className="flex items-center gap-3 mt-3">
            <button className="cursor-pointer bg-[#6243F0] text-white px-4 py-1 rounded text-lg hover:bg-purple-700 flex h-10 flex-1 w-full justify-center items-center gap-2">
              <Image
          src={'/images/icons/prompt2.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-4 h-4"
          />
              Use Prompt
            </button>
            <button className="p-2 hover:outline-1 outline-[#8EA1BD] rounded-xl border border-[#8EA1BD] cursor-pointer">
              <Image
              src={'/images/icons/copy.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
            </button>
          </div>



        </div>
      </div>

      {/* Structured Data */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-6 mt-11">
          <Image
          src={'/images/icons/table.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Structured Data (3)</span>
        </div>
        <div className="space-y-2">
          {structuredData.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between  p-1"
            >
              <div className="flex items-center gap-2.5">
              <Image
              src={'/images/icons/column.svg'}
              alt={'icon'}
              width={20}
              height={20}
              className="w-5 h-5"
              />
              <span className="text-base font-normal ">{item.title}</span>
            </div>
              <span className="text-sm text-[#556E94]">
                ROWS (20) COLUMN (10)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Unstructured Data */}
      <div>
        <div className="flex items-center gap-2.5 mb-6 mt-11">
          <Image
          src={'/images/icons/format.svg'}
          alt={'icon'}
          width={20}
          height={20}
          className="w-7 h-7"
          />
          <span className="text-lg font-medium text-[#03070D]">Unstructured Data (2)</span>
        </div>
        <div className="space-y-2">
          {unstructuredData.map((item) => (
            <Link key={item.title} href={item.url} target="blank" className="flex items-center  p-1" >
              <div>
                <div className="flex items-center gap-2.5">
                <Image
                src={'/images/icons/file.svg'}
                alt={'icon'}
                width={20}
                height={20}
                className="w-5 h-5"
                />
                <span className="text-base font-normal ">{item.title}</span>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-10 mb-6 mt-11 bg-white w-[calc(100%_+_2.5rem)] ml-[-1.25rem] px-5 py-1">
          {/* <Image
            src={"/images/icons/format.svg"}
            alt={"icon"}
            width={20}
            height={20}
            className="w-7 h-7"
          /> */}
          <button
            onClick={() => setActiveTab("weekly")}
            className={`text-lg font-medium cursor-pointer py-2.5 ${
              activeTab === "weekly" ? "border-b-2 border-[#6243F0]" : "text-[#03070D]"
            }`}
          >
            Weekly Nudges
          </button>
          {/* <span className="text-lg font-medium text-[#03070D]">/</span> */}
          <button
            onClick={() => setActiveTab("local")}
            className={`text-lg font-medium cursor-pointer py-2.5 ${
              activeTab === "local" ? "border-b-2 border-[#6243F0]" : "text-[#03070D]"
            }`}
          >
            வாராந்திர நட்ஜ்கள்
          </button>
        </div>

        {activeTab === "weekly" && (
          <div className="space-y-2">
            <WeeklyNudges nudges={nudges} />
          </div>
        )}

        {activeTab === "local" && (
          <div className="space-y-2">
            <WeeklyNudges nudges={LocalNudges} />
          </div>
        )}
    </div>



    </div>
  );
};

const nudges = [
  { id: 1, title: "", description: "Hi Valarmathi, the way you brought energy to the '4-in-1 convertible option' explanation around [00:37] was engaging and fun to watch. For this week, try easing up on the quicker parts with a brief pause, like when you introduce 'Nano Sheet Technology' at [02:32]. It will pair so well with your enthusiasm—looking forward to the next one! ⚡" },
  { id: 2, title: "", description: "Valarmathi, connecting features to everyday needs, like the vacation power-saving mode around [01:01], is one of your strengths—really helpful for customers. A small tip: Keep your hands more open during explanations to match that confident feel, avoiding moments where they are clasped, like at [01:07]. You're making solid connections already! 🙌" },

];

const LocalNudges = [
  { id: 1, title: "", description: "வணக்கம் வளர்மதி, வாக்கில் '4-இன்-1 கன்வெர்டிபிள்' ಆಯ್வை நீங்கள் ஆற்றலுடன் விளக்கிய விதம், பார்ப்பதற்கு மிகவும் ஈர்ப்பாகவும் சுவாரசியமாகவும் இருந்தது. இந்த வாரம், வாக்கில் 'நானோ ஷீட் டெக்னாலஜி' பற்றி அறிமுகப்படுத்தும் போது, வேகமாகப் பேசும் இடங்களில் ஒரு சிறிய இடைவெளி விட்டுப் பேச முயற்சி செய்யுங்கள். இது உங்கள் ஆர்வத்திற்கு மேலும் வலு சேர்க்கும். அடுத்த விளக்கக்காட்சியை ஆவலுடன் எதிர்பார்க்கிறேன்! ⚡" },
  { id: 2, title: "", description: "வளர்மதி, வாக்கில் 'வெக்கேஷன் பவர்-சேவிங் மோட்' போன்ற அம்சங்களை அன்றாடத் தேவைகளுடன் இணைப்பது உங்கள் பலங்களில் ஒன்று—இது வாடிக்கையாளர்களுக்கு மிகவும் உதவியாக இருக்கும். ஒரு சிறிய குறிப்பு: விளக்கங்களின் போது, வாக்கில் கைகளைக் கட்டிக்கொள்வது போன்ற தருணங்களைத் தவிர்த்து, உங்கள் கைகளைத் திறந்து வைத்துப் பேசுங்கள். அது உங்கள் நம்பிக்கையை மேலும் வெளிப்படுத்தும். நீங்கள் ஏற்கனவே வாடிக்கையாளர்களுடன் வலுவான தொடர்புகளை உருவாக்குகிறீர்கள்! 🙌" },
];

const structuredData = [
  {
    title: "Employees Table",
    url: "/data/structured/employees.csv", // replace with actual path or URL
  },
  {
    title: "Presentations Table",
    url: "/data/structured/presentations.csv", // replace with actual path or URL
  },
  {
    title: "Performance_KPIs Table",
    url: "/data/structured/performance_kpis.csv", // replace with actual path or URL
  },
];

const unstructuredData = [
  {
    title: "Video Link URL",
    url: "/videos/tamil.mp4", // replace with actual video URL
  },
  {
    title: "Translation.txt",
    url: "/tamil_readable_transcript.txt", // optional
  },
];

export default RightPanel;
