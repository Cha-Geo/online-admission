import FooterSmall from "@/components/ui/navigations/footers/FooterSmall";

export default function AuthLayout({ children }: IChildren) {
  return (
    <>
      <main>
        <section className="relative w-full h-full pt-12 xxs:pt-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/assets/img/register_bg_2.png')",
            }}/>
            {children}
        </section>
        <FooterSmall absolute/>
      </main>
    </>
  );
}
