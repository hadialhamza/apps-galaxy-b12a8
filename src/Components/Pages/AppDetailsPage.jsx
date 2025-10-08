import React from "react";
import appImage from "../../assets/demo-app (1).webp";
import downloadImage from "../../assets/icon-downloads.png";
import starImage from "../../assets/icon-ratings.png";
import reviewImage from "../../assets/icon-review.png";

const AppDetailsPage = () => {
  return (
    <div>
      <div className="container mx-auto w-[95%] md:w-[98%] my-12 md:my-20">
        <div className="flex items-center gap-10 pb-10 mb-10 border-b border-gray-300">
          <div className="w-[380px] overflow-hidden ">
            <img src={appImage} alt="" className="w-full object-cover" />
          </div>
          <div className="flex flex-col justify-between w-full ">
            <h2 className="text-3xl font-bold mb-1">
              SmPlan:ToDo List with Reminder
            </h2>
            <p className="text-gray-400 text-xl font-normal pb-4 mb-4 border-b border-gray-300">
              Developed by <span className="text-[#632EE3]">productive.io</span>
            </p>
            <div className="flex items-center gap-24 mb-6">
              <div className="flex flex-col gap-2">
                <img src={downloadImage} alt="" className="w-10" />
                <p className="text-gray-400">Downloads</p>
                <p className="text-4xl font-extrabold">8M</p>
              </div>
              <div className="flex flex-col gap-2">
                <img src={starImage} alt="" className="w-10" />
                <p className="text-gray-400">Average Ratings</p>
                <p className="text-4xl font-extrabold">4.9</p>
              </div>
              <div className="flex flex-col gap-2">
                <img src={reviewImage} alt="" className="w-10" />
                <p className="text-gray-400">Total Reviews</p>
                <p className="text-4xl font-extrabold">54K</p>
              </div>
            </div>
            <div>
              <button className="btn text-white bg-[#00D390] rounded px-6 py-6 text-base font-semibold border-none">
                Install Now (291 MB)
              </button>
            </div>
          </div>
        </div>

        {/* Rechart Section */}
        <div className="h-[400px]"></div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Description</h2>
          <p className="text-xl font-normal text-gray-500">
            This focus app takes the proven Pomodoro technique and makes it even
            more practical for modern lifestyles. Instead of just setting a
            timer, it builds a complete environment for deep work, minimizing
            distractions and maximizing concentration. Users can create custom
            work and break intervals, track how many sessions they complete each
            day, and review detailed statistics about their focus habits over
            time. The design is minimal and calming, reducing cognitive load so
            you can focus entirely on the task at hand. Notifications gently let
            you know when to pause and when to resume, helping you maintain a
            healthy rhythm between work and rest.
            <br />
            <br />
            <br />
            A unique feature of this app is the integration of task lists with
            timers. You can assign each task to a specific Pomodoro session,
            making your schedule more structured. The built-in analytics show
            not only how much time you’ve worked but also which tasks consumed
            the most energy. This allows you to reflect on your efficiency and
            adjust your workflow accordingly. The app also includes optional
            background sounds such as white noise, nature sounds, or
            instrumental music to create a distraction-free atmosphere.
            <br />
            <br />
            <br />
            For people who struggle with procrastination, the app provides
            motivational streaks and achievements. Completing multiple Pomodoro
            sessions unlocks milestones, giving a sense of accomplishment. This
            gamified approach makes focusing more engaging and less like a
            chore. Whether you’re studying for exams, coding, writing, or
            handling office work, the app adapts to your routine. By combining
            focus tracking, task management, and motivational tools, this
            Pomodoro app ensures that you not only work harder but also smarter.
            It is a personal trainer for your brain, keeping you disciplined,
            refreshed, and productive throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
