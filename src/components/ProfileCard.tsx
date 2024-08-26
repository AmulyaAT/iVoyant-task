import '../styles/_profileCard.scss';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img className="profile-card__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtJ1GSMcrDjNkB6Y_IZQwK4watXeN1fvgAQ&s" alt="Profile" />
      <h1 className="profile-card__name">John Doe</h1>
      <p className="profile-card__bio">Web Developer & Designer. Loves to code and create beautiful websites.</p>
      <div className="profile-card__socials">
        <a href="https://twitter.com/login" className="profile-card__social">Twitter</a>
        <a href="https://www.linkedin.com/login" className="profile-card__social">LinkedIn</a>
      </div>
    </div>
  );
};

export default ProfileCard;