import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <div className="md:flex justify-between text-secondary py-8 bg-foreground text-lg">
        <div className="mx-auto flex md:mx-0 flex-col md:flex-row gap-7 lg:gap-10">
          <div>
            <Link href="">Privacy Policy</Link>
          </div>
          <div>
            {" "}
            <Link href="">Terms of Service</Link>
          </div>
          <div>
            <Link href="">Facebook</Link>
          </div>
          <div>
            <Link href="">Tiktok</Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <p>© 2026 NAMAT Software</p>
        </div>
      </div>
    </>
  );
}
