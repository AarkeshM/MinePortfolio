
import { Html } from '@react-three/drei';


const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-15 border-r-blue-500 rounded-full animate-spinn'></div>
    </div> 
    </Html>
    
  );
};

export default Loader;