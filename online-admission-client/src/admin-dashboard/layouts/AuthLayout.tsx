import FooterSmall from "@/components/ui/navigations/footers/FooterSmall";

export default function Auth({ children }: IChildren) {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/assets/img/register_bg_2.png')",
            }}/>
          {children}
        </section>
        <FooterSmall />
      </main>
    </>
  );
}
