import StateCard from "@/components/StateCard";
import Table from "@/components/Table";
import Tage from "@/components/ui/Tage";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 flex-wrap">
        <StateCard
          title="All Projects"
          count={14}
          status="Stable"
          description="longevity"
        ></StateCard>
        <StateCard
          title="All Projects"
          count={14}
          status="Stable"
          description="longevity"
        ></StateCard>
        <StateCard
          title="All Projects"
          count={14}
          status="Stable"
          description="longevity"
        ></StateCard>
        <StateCard
          title="All Projects"
          count={14}
          status="Stable"
          description="longevity"
        ></StateCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        <div className="lg:col-span-4">
          <Table
            header={
              <>
                <div className="text-left w-full sm:text-xl font-bold">
                  Upcoming Deliverables
                </div>
                <div className="text-right w-full">
                  <Link
                    href={ROUTES.CALENDAR}
                    className="text-primary sm:text-xl font-semibold"
                  >
                    View Calendar
                  </Link>
                </div>
              </>
            }
          >
            <tr>
              <td className="p-0">
                <div className="flex flex-row justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 md:gap-0">
                  <div className="text-left w-full ">
                    <p className=" sm:text-xl text-left w-full font-medium">
                      Project name
                    </p>
                    <p className="text-text-secondary text-sm md:text-base">
                      Client name • Task name
                    </p>
                  </div>
                  <div className=" w-full flex flex-col items-end gap-2">
                    <Tage title="Oct 26" />
                    <span className="bg-border  rounded-2xl h-2 w-full md:w-[40%] block">
                      <span className="bg-primary-gradient rounded-2xl h-2 w-3/4 block"></span>
                    </span>
                    <span className="text-text-secondary font-medium text-sm">
                      75% Complete
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-0">
                <div className="flex flex-row justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 md:gap-0">
                  <div className="text-left w-full ">
                    <p className=" sm:text-xl text-left w-full font-medium">
                      Project name
                    </p>
                    <p className="text-text-secondary text-sm md:text-base">
                      Client name • Task name
                    </p>
                  </div>
                  <div className=" w-full flex flex-col items-end gap-2">
                    <Tage title="Oct 26" />
                    <span className="bg-border  rounded-2xl h-2 w-full md:w-[40%] block">
                      <span className="bg-primary-gradient rounded-2xl h-2 w-3/4 block"></span>
                    </span>
                    <span className="text-text-secondary font-medium text-sm">
                      75% Complete
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </Table>
        </div>

        <div className="lg:col-span-2">
          <Table
            header={
              <>
                <div className="text-left w-full sm:text-xl font-bold">
                  Tasks for Today
                </div>
              </>
            }
          >
            <tr>
              <td className="p-0">
                <div className="flex flex-row justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 md:gap-0">
                  <p className=" sm:text-xl text-left w-full font-medium">
                    Task name
                  </p>
                  <div className=" w-full flex flex-col items-center md:items-end gap-2">
                    <p className="text-text-secondary text-right w-full font-medium text-sm md:text-base">
                      Project name
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-0">
                <div className="flex flex-row justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 md:gap-0">
                  <p className=" sm:text-xl text-left w-full font-medium">
                    Task name
                  </p>
                  <div className=" w-full flex flex-col items-center md:items-end gap-2">
                    <p className="text-text-secondary text-right w-full font-medium text-sm md:text-base">
                      Project name
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-0">
                <div className="flex flex-row justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 md:gap-0">
                  <p className=" sm:text-xl text-left w-full font-medium">
                    Task name
                  </p>
                  <div className=" w-full flex flex-col items-center md:items-end gap-2">
                    <p className="text-text-secondary text-right w-full font-medium text-sm md:text-base">
                      Project name
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </Table>
        </div>
      </div>

      <div>
        <Table
          header={
            <>
              <div className="text-left w-full sm:text-xl font-bold">
                Last Logs
              </div>
              <div className="text-right w-full">
                <Link
                  href={ROUTES.ACTIVITYLOG}
                  className="text-primary sm:text-xl font-semibold"
                >
                  View Activity Log
                </Link>
              </div>
            </>
          }
        >
          <tr>
            <td className="p-0">
              <div className="flex flex-row justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 md:gap-0">
                <p className=" sm:text-xl text-left w-full font-medium">
                  Log title
                </p>
                <div className=" w-full flex flex-col items-center md:items-end gap-2">
                  <p className="text-text-secondary text-right w-full font-medium text-sm md:text-base">
                    2026/1/1 1:12pm
                  </p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="p-0">
              <div className="flex flex-row justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 md:gap-0">
                <p className=" sm:text-xl text-left w-full font-medium">
                  Log title
                </p>
                <div className=" w-full flex flex-col items-center md:items-end gap-2">
                  <p className="text-text-secondary text-right w-full font-medium text-sm md:text-base">
                    2026/1/1 1:12pm
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </Table>
      </div>
    </div>
  );
}
