import {Button} from "@/components/ui/button";
import Header from '@/components/Header';

const Home = () => {
    return (
        <main className="home-container">
            <Button>
              <Header className="sticky left-0 top-0">
                <div className="flex items-center gap-2 lg:gap-4">
                  Notifications
                </div>
              </Header>
            </Button>
        </main>
    );
}

export default Home;
