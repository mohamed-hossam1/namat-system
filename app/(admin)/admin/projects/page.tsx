import Table from "@/components/Table";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Table
        header={
          <div className="grid grid-cols-6 gap-3 w-full">
            <div className="text-left w-full sm:text-xl font-bold">
              Project Name
            </div>
            <div className="text-left w-full sm:text-xl font-bold">
              Client Name
            </div>
            <div className="text-left w-full sm:text-xl font-bold">
              Start At
            </div>
            <div className="text-left w-full sm:text-xl font-bold">End At</div>
            <div className="text-left w-full sm:text-xl font-bold">
              Completion rate
            </div>
            <div className="text-left w-full sm:text-xl font-bold">
              Next task
            </div>
          </div>
        }
      >
        <tr>
          <td>
            <Link
              href={""}
              className=" grid grid-cols-6 w-full justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 "
            >
              <p className=" sm:text-xl text-left w-full font-medium">
                API Integration Module
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Client C
              </p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary ">
                2026/1/1
              </p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary ">
                2026/1/1
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                60% Complete
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Cart page
              </p>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link
              href={""}
              className=" grid grid-cols-6 w-full justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 "
            >
              <p className=" sm:text-xl text-left w-full font-medium">
                API Integration Module
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Client C
              </p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary ">
                2026/1/1
              </p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary ">
                2026/1/1
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                60% Complete
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Cart page
              </p>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <Link
              href={"/"}
              className=" grid grid-cols-6 w-full justify-around items-center md:items-center border-t-2 border-border p-5 hover:bg-input/30 transition-all duration-300 gap-3 "
            >
              <p className=" sm:text-xl text-left w-full font-medium">
                API Integration Module
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Client C
              </p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary ">
                2026/1/1
              </p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary ">
                2026/1/1
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                60% Complete
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Cart page
              </p>
            </Link>
          </td>
        </tr>
      </Table>
    </div>
  );
}
