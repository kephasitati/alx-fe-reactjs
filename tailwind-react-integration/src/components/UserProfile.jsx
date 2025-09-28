function UserProfile() {
  return (
    <div
      // Container card: hover shadow & smooth transition
      className="
        user-profile 
        bg-gray-100 
        p-4 sm:p-4 md:p-8 
        max-w-xs md:max-w-sm 
        mx-auto my-20 
        rounded-lg 
        shadow-lg 
        hover:shadow-xl 
        transition-shadow duration-300 ease-in-out
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        // Profile image: rounded, scale on hover, smooth transition
        className="
          rounded-full 
          w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 
          mx-auto 
          transform 
          transition-transform duration-300 ease-in-out 
          hover:scale-110
        "
      />
      <h1
        // Name heading: color change on hover
        className="
          text-lg md:text-xl 
          text-blue-800 my-4 
          transition-colors duration-300 ease-in-out 
          hover:text-blue-500
        "
      >
        John Doe
      </h1>
      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
