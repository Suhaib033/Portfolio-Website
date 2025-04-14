
interface ProjectGalleryProps {
  images: string[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-video bg-gray-700 rounded-lg overflow-hidden"
          >
            <img 
              src={image} 
              alt={`Project visual ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;

