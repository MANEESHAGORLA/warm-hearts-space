const AnnouncementBar = () => {
  const message = "Crafted to Protect, Align, and Manifest | The WishCraft Collection is live";
  
  return (
    <div className="bg-forest text-primary-foreground py-2 overflow-hidden">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="mx-8 text-sm tracking-wide">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
