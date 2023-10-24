import ProfileCard from '@/components/ui/cards/ProfileCard'
import UserProfile from '@/components/ui/cards/UserProfile'
import WithProtectedRoute from "@/components/routes/WithProtectedRoute";
import FooterSmall from '@/components/ui/navigations/footers/FooterSmall';

function HomeLayout({ children }: IChildren) {
  return (
    <>
      <main>
        <section className="relative w-full h-full pt-12 xxs:pt-20 min-h-screen">
          {children}
        </section>
        <FooterSmall />
      </main>
    </>
  );
}

const Home = () => {
  return (
    <HomeLayout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <ProfileCard />

        <UserProfile />
      </main>
    </HomeLayout>
  );
}

export default Home;
