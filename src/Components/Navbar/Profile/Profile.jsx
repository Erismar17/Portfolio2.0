import picture from '../../../Assets/Img/profile-picture.jpg'
import Languaje from '../Languaje/Languaje';

const Profile = () => {
    return (
        <div className='flex'>
            <Languaje/>
            <img className='rounded-full h-16 mt-2' alt='profile-picture' src={picture}/>
        </div>
    )
}
export default Profile;