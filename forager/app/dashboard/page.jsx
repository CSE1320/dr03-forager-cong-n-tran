import UserGreeting from '@/components/UserGreeting';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import BackgroundScreen from '@/components/BackgroundScreen';
export default function DashboardPage() {
  return (
    <div className="page">
      <BackgroundScreen>
        <UserGreeting name={"Chantelle"}/>
      </BackgroundScreen>
      <NavBar />
    </div>
  );
}
