import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 shadow-2xl'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
