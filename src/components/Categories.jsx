const categories = [
  {
    name: 'Travel',
    image:
      'https://images.unsplash.com/photo-1628272938353-834bc1542aa6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Food',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Health & Fitness',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Education',
    image:
      'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Finance',
    image:
      'https://media.istockphoto.com/id/1172767797/photo/indian-five-hundred-rupee-notes-in-a-sack-cloth.jpg?s=2048x2048&w=is&k=20&c=wpmVAxttbyk8c0NHoZmPDAVmdxocv-tJV49FVe9qnqc=',
  },
  {
    name: 'Startups',
    image:
      'https://images.unsplash.com/photo-1711017158645-16c15cb445a9?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function Categories({ onImageChange }) {
  const handleContainerEnter = () => {
    onImageChange((prev) => ({ ...prev, visible: true }));
  };

  const handleContainerLeave = () => {
    onImageChange({ visible: false, url: '' });
  };

  const handleElemEnter = (imageUrl) => {
    onImageChange({ visible: true, url: imageUrl });
  };

  return (
    <div id="page3">
      <div
        id="elem-container"
        onMouseEnter={handleContainerEnter}
        onMouseLeave={handleContainerLeave}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="elem"
            onMouseEnter={() => handleElemEnter(cat.image)}
          >
            <div className="overlay"></div>
            <h2>{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
