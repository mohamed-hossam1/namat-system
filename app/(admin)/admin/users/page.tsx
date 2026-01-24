import Table from "@/components/Table";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Table
        header={
          <div className="grid grid-cols-6 gap-3 w-full">
            <div className="text-left w-full sm:text-xl font-bold">
              User Name
            </div>
            <div className="text-left w-full sm:text-xl font-bold">
              Client Name
            </div>
            <div className="text-left w-full sm:text-xl font-bold">
              Phone Number
            </div>
            <div className="text-left w-full sm:text-xl font-bold">
              Projects
            </div>
            <div className="text-left w-full sm:text-xl font-bold">
              Last Activity
            </div>
            <div className="text-left w-full sm:text-xl font-bold">More</div>
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
                Mohamed12
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Mohamed Hossam
              </p>
              <p className=" sm:text-xl text-left w-full font-medium  ">
                01111111111
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">2</p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary">
                2 hours ago
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                <Eye />
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
                Mohamed12
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Mohamed Hossam
              </p>
              <p className=" sm:text-xl text-left w-full font-medium  ">
                01111111111
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">2</p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary">
                2 hours ago
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                <Eye />
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
                Mohamed12
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                Mohamed Hossam
              </p>
              <p className=" sm:text-xl text-left w-full font-medium  ">
                01111111111
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">2</p>
              <p className=" sm:text-xl text-left w-full font-medium text-text-secondary">
                2 hours ago
              </p>
              <p className=" sm:text-xl text-left w-full font-medium">
                <Eye />
              </p>
            </Link>
          </td>
        </tr>
      </Table>
    </div>
  );
}
