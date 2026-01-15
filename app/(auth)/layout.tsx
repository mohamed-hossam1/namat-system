import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import SocialAuth from "@/components/form/SocialAuth";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-1 flex-col justify-center py-12 px-6  lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-full">
          <Link href={ROUTES.LABDING}>
            <Image
              alt="Logo"
              width={100}
              height={100}
              src={logo}
              className="mx-auto "
            />
          </Link>
        </div>
        
      </div>
      <div className="mt-10 bg-card/70 rounded-xl  sm:mx-auto sm:w-full sm:max-w-120">
        <div className="px-6 py-12 shadow-sm sm:rounded-xl sm:px-12">
          {children}
          <SocialAuth />
        </div>
      </div>

      
    </main>
  );
}
